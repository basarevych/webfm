'use strict';

const os = require('os');
const _path = require('path');
const Form = require('../../../lib/Form');
const { spawn } = require('child_process');

module.exports = async function move(req, res) {
  let fast = !!req.param('_fast');
  let validate = req.param('_validate');
  let srcShare = _.isString(req.param('srcShare')) ? _.trim(req.param('srcShare')) : '';
  let srcDirectory = _.isString(req.param('srcDirectory')) ? _.trim(req.param('srcDirectory')) : '';
  let srcName = _.isString(req.param('srcName')) ? _.trim(req.param('srcName')) : '';
  let dstShare = _.isString(req.param('dstShare')) ? _.trim(req.param('dstShare')) : '';
  let dstDirectory = _.isString(req.param('dstDirectory')) ? _.trim(req.param('dstDirectory')) : '';

  let form = new Form({ srcShare, srcDirectory, srcName, dstShare, dstDirectory });

  let srcShareFound = false;
  let dstShareFound = false;
  for (let item of await Share.find({ user: req.session.userId })) { // eslint-disable-line lodash/prefer-lodash-method
    if (item.name === srcShare) {
      if (item.isReadOnly &&  (!validate || validate === 'srcShare'))
        form.addError('srcShare', 'E_READ_ONLY', sails.__('move.srcShare.E_READ_ONLY'));
      srcShareFound = true;
    }
    if (item.name === dstShare) {
      if (item.isReadOnly &&  (!validate || validate === 'dstShare'))
        form.addError('dstShare', 'E_READ_ONLY', sails.__('move.dstShare.E_READ_ONLY'));
      dstShareFound = true;
    }
    if (srcShareFound && dstShareFound)
      break;
  }
  if (!srcShareFound && (!validate || validate === 'srcShare'))
    form.addError('srcShare', 'E_NOT_FOUND', sails.__('move.srcShare.E_NOT_FOUND'));
  if (!dstShareFound && (!validate || validate === 'dstShare'))
    form.addError('dstShare', 'E_NOT_FOUND', sails.__('move.dstShare.E_NOT_FOUND'));

  let srcParent;
  if (srcShareFound) {
    try {
      srcParent = await Node.findOne({share: `${req.session.userId}:${srcShare}`, path: srcDirectory});
      if (!srcParent.isDirectory) {
        srcParent = null;
        if (!validate || validate === 'srcDirectory')
          form.addError('srcDirectory', 'E_NOT_DIR', sails.__('move.srcDirectory.E_NOT_DIR'));
      } else if (!srcParent.isValid) {
        srcParent = null;
        if (!validate || validate === 'srcDirectory')
          form.addError('srcDirectory', 'E_OUTSIDE', sails.__('move.srcDirectory.E_OUTSIDE'));
      }
    } catch (error) {
      let code = (error.raw && error.raw.code) || error.code || 'ERROR';
      let key = `move.srcDirectory.${code}`;
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
          form.addError('dstDirectory', 'E_NOT_DIR', sails.__('move.dstDirectory.E_NOT_DIR'));
      } else if (!dstParent.isValid) {
        dstParent = null;
        if (!validate || validate === 'dstDirectory')
          form.addError('dstDirectory', 'E_OUTSIDE', sails.__('move.dstDirectory.E_OUTSIDE'));
      } else if (srcParent && dstParent.realPath === srcParent.realPath) {
        srcParent = null;
        dstParent = null;
        if (!validate || validate === 'dstDirectory')
          form.addError('dstDirectory', 'E_SAME', sails.__('move.dstDirectory.E_SAME'));
      }
    } catch (error) {
      let code = (error.raw && error.raw.code) || error.code || 'ERROR';
      let key = `move.dstDirectory.${code}`;
      let translated = (code === 'ERROR' ? key : sails.__(key));
      if (!validate || validate === 'dstDirectory')
        form.addError('dstDirectory', code, translated === key ? _.escape(error.message) : translated);
    }
  }

  if (srcName) {
    if (_.includes(srcName, '/')) {
      srcName = null;
      if (!validate || validate === 'srcName')
        form.addError('srcName', 'E_INVALID', sails.__('move.srcName.E_INVALID'));
    }
  } else if (!validate || validate === 'srcName') {
    form.addError('srcName', 'E_REQUIRED', sails.__('move.srcName.E_REQUIRED'));
  }

  if (validate)
    return res.json(form.toJSON());

  let nodes = [];
  if (srcParent && dstParent && srcName) {
    try {
      if (_.includes(srcName, '*') || _.includes(srcName, '?')) {
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
      let code = (error.raw && error.raw.code) || error.code || 'ERROR';
      let key = `move.result.${code}`;
      let translated = (code === 'ERROR' ? key : sails.__(key));
      form.addMessage(code, translated === key ? _.escape(error.message) : translated);
      form.success = false;
    }
  }

  if (dstParent) {
    for (let node of nodes) {
      if (_.startsWith(dstParent.realPath + '/', node.realPath + '/')) {
        if (!validate || validate === 'dstDirectory')
          form.addError('dstDirectory', 'E_RECURSIVE', sails.__('move.dstDirectory.E_RECURSIVE'));
        break;
      }
    }
  }

  if (!fast)
    res.json(form.toJSON());

  if (!nodes.length || !form.success) {
    if (fast)
      res.json(form.toJSON());
    return;
  }

  let lang = (os.platform() === 'freebsd' ? 'en_US.UTF-8' : 'C.UTF-8');
  let progressBuffer = '';
  async function doMove() {
    return new Promise(async (resolve, reject) => {
      let rejected = false;

      try {
        let node = nodes.shift();
        if (!node)
          return resolve();
        if (!node.isValid)
          return resolve(doMove());

        let task = spawn(
          'mv',
          ['-f', node.realPath, _path.join(dstParent.realPath, node.name)],
          {
            env: {
              PATH: '/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin',
              LANG: lang,
              LANGUAGE: lang,
              LC_ALL: lang,
            }
          }
        );
        task.stdout.resume();
        task.stderr.resume();
        task.on('error', error => {
          task.kill('SIGKILL');
          rejected = true;
          reject(error);
        });
        task.on('close', async rc => {
          if (rejected)
            return;

          let msg = sails.__(
            rc ? 'move_failure_message' : 'move_success_message',
            node.path,
            _path.join(dstParent.path, node.name)
          ) + '\n';

          if (!fast)
            await sails.hooks.broadcaster.moreProgress(req.session.userId, msg);
          else
            progressBuffer += msg;

          resolve(doMove());
        });
      } catch (error) {
        rejected = true;
        reject(error);
      }
    });
  }

  let fastTimer = null;
  if (!fast) {
    await sails.hooks.broadcaster.startProgress(req.session.userId, sails.__('move_start_message') + '\n');
  } else {
    fastTimer = setTimeout(async () => {
      fast = false;
      fastTimer = null;
      await sails.hooks.broadcaster.startProgress(req.session.userId, sails.__('move_start_message') + '\n' + progressBuffer);
    }, 2000);
  }

  try {
    await doMove();
  } catch (error) {
    if (!fast) {
      await sails.hooks.broadcaster.moreProgress(req.session.userId, error.stack || error.message);
    } else {
      let code = (error.raw && error.raw.code) || error.code || 'ERROR';
      let key = `move.result.${code}`;
      let translated = (code === 'ERROR' ? key : sails.__(key));
      form.addMessage(code, translated === key ? _.escape(error.message) : translated);
      form.success = false;
    }
  }

  if (fastTimer)
    clearTimeout(fastTimer);

  if (!fast) {
    await sails.hooks.broadcaster.finishProgress(req.session.userId);
    if (!res.headersSent)
      res.json({ success: true });
  } else {
    res.json(form.toJSON());
  }

  await sails.hooks.watcher.trigger(srcParent.realPath);
  await sails.hooks.watcher.trigger(dstParent.realPath);
};
