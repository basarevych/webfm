'use strict';

const os = require('os');
const _path = require('path');
const Form = require('../../../lib/Form');
const { spawn } = require('child_process');

module.exports = async function copy(req, res) {
  let validate = req.param('_validate');
  let srcShare = _.isString(req.param('srcShare')) ? _.trim(req.param('srcShare')) : '';
  let srcDirectory = _.isString(req.param('srcDirectory')) ? _.trim(req.param('srcDirectory')) : '';
  let srcName = _.isString(req.param('srcName')) ? _.trim(req.param('srcName')) : '';
  let dstShare = _.isString(req.param('dstShare')) ? _.trim(req.param('dstShare')) : '';
  let dstDirectory = _.isString(req.param('dstDirectory')) ? _.trim(req.param('dstDirectory')) : '';

  let form = new Form({ srcShare, srcDirectory, srcName, dstShare, dstDirectory });

  let srcShareFound = false;
  let dstShareFound = false;
  for (let item of await Share.find({ user: req.session.userId })) {
    if (item.name === srcShare)
      srcShareFound = true;
    if (item.name === dstShare) {
      if (item.isReadOnly &&  (!validate || validate === 'dstShare'))
        form.addError('dstShare', 'E_READ_ONLY', __('copy.dstShare.E_READ_ONLY'));
      dstShareFound = true;
    }
    if (srcShareFound && dstShareFound)
      break;
  }
  if (!srcShareFound && (!validate || validate === 'srcShare'))
    form.addError('srcShare', 'E_NOT_FOUND', __('copy.srcShare.E_NOT_FOUND'));
  if (!dstShareFound && (!validate || validate === 'dstShare'))
    form.addError('dstShare', 'E_NOT_FOUND', __('copy.dstShare.E_NOT_FOUND'));

  let srcParent;
  if (srcShareFound) {
    try {
      srcParent = await Node.findOne({share: `${req.session.userId}:${srcShare}`, path: srcDirectory});
      if (!srcParent.isDirectory) {
        srcParent = null;
        if (!validate || validate === 'srcDirectory')
          form.addError('srcDirectory', 'E_NOT_DIR', __('copy.srcDirectory.E_NOT_DIR'));
      } else if (!srcParent.isValid) {
        srcParent = null;
        if (!validate || validate === 'srcDirectory')
          form.addError('srcDirectory', 'E_OUTSIDE', __('copy.srcDirectory.E_OUTSIDE'));
      }
    } catch (error) {
      let code = error.code || 'ERROR';
      let key = `copy.srcDirectory.${code}`;
      let translated = (code === 'ERROR' ? key : sails.__(key));
      if (!validate || validate === 'srcDirectory')
        form.addError('srcDirectory', code, translated === key ? _.escape(error.message) : translated);
    }
  }

  let dstParent;
  if (dstShareFound) {
    try {
      dstParent = await Node.findOne({share: `${req.session.userId}:${dstShare}`, path: dstDirectory});
      if (!dstParent.isDirectory) {
        dstParent = null;
        if (!validate || validate === 'dstDirectory')
          form.addError('dstDirectory', 'E_NOT_DIR', __('copy.dstDirectory.E_NOT_DIR'));
      } else if (!dstParent.isValid) {
        dstParent = null;
        if (!validate || validate === 'dstDirectory')
          form.addError('dstDirectory', 'E_OUTSIDE', __('copy.dstDirectory.E_OUTSIDE'));
      } else if (srcParent && dstParent.realPath === srcParent.realPath) {
        srcParent = null;
        dstParent = null;
        if (!validate || validate === 'dstDirectory')
          form.addError('dstDirectory', 'E_SAME', __('copy.dstDirectory.E_SAME'));
      }
    } catch (error) {
      let code = error.code || 'ERROR';
      let key = `copy.dstDirectory.${code}`;
      let translated = (code === 'ERROR' ? key : sails.__(key));
      if (!validate || validate === 'dstDirectory')
        form.addError('dstDirectory', code, translated === key ? _.escape(error.message) : translated);
    }
  }

  if (srcName) {
    if (srcName.includes('/')) {
      srcName = null;
      if (!validate || validate === 'srcName')
        form.addError('srcName', 'E_INVALID', __('copy.srcName.E_INVALID'));
    }
  } else if (!validate || validate === 'srcName') {
    form.addError('srcName', 'E_REQUIRED', __('copy.srcName.E_REQUIRED'));
  }

  if (validate)
    return res.json(form.toJSON());

  let nodes = [];
  if (srcParent && dstParent && srcName) {
    try {
      if (srcName.includes('*') || srcName.includes('?')) {
        let node = await Node.findOne({ share: `${req.session.userId}:${srcShare}`, path: srcParent.path }).populate(
          'nodes',
          {
            select: ['id', 'realPath', 'path', 'name', 'isValid']
          }
        );
        for (let item of await sails.helpers.fileFilter(node.nodes, srcName))
          nodes.push(item);
      } else {
        let node = await Node.findOne({
          where: { share: `${req.session.userId}:${srcShare}`, path: _path.join(srcParent.path, srcName) },
          select: ['id', 'realPath', 'path', 'name', 'isValid']
        });
        nodes.push(node);
      }
    } catch (error) {
      nodes = [];
      let code = error.code || 'ERROR';
      let key = `copy.result.${code}`;
      let translated = (code === 'ERROR' ? key : sails.__(key));
      form.addMessage(code, translated === key ? _.escape(error.message) : translated);
      form.success = false;
    }
  }

  res.json(form.toJSON());

  if (!nodes.length)
    return;

  let lang = (os.platform() === 'freebsd' ? 'en_US.UTF-8' : 'C.UTF-8');
  async function doCopy() {
    return new Promise(async (resolve, reject) => {
      let rejected = false;

      try {
        let node = nodes.shift();
        if (!node)
          return resolve();
        if (!node.isValid)
          return resolve(doCopy());

        let task = spawn(
          'cp',
          ['-Ppr', node.realPath, _path.join(dstParent.realPath, node.name)],
          {
            env: {
              PATH: '/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin',
              LANG: lang,
              LANGUAGE: lang,
              LC_ALL: lang,
            }
          }
        );
        task.on('error', error => {
          rejected = true;
          reject(error);
        });
        task.on('close', async () => {
          if (rejected)
            return;

          await sails.hooks.broadcaster.moreProgress(req.session.userId, `${node.path} -> ${_path.join(dstParent.path, node.name)}\n`);
          resolve(doCopy());
        });
      } catch (error) {
        rejected = true;
        reject(error);
      }
    });
  }

  await sails.hooks.broadcaster.startProgress(req.session.userId, __('copy_start_message') + '\n');
  try {
    await doCopy();
  } catch (error) {
    await sails.hooks.broadcaster.moreProgress(req.session.userId, error.stack || error.message);
  }
  await sails.hooks.broadcaster.finishProgress(req.session.userId);
};
