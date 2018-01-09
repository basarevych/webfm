'use strict';

const os = require('os');
const _path = require('path');
const Form = require('../../../lib/Form');
const { spawn } = require('child_process');

module.exports = async function del(req, res) {
  let fast = !!req.param('_fast');
  let validate = req.param('_validate');
  let share = _.isString(req.param('share')) ? _.trim(req.param('share')) : '';
  let directory = _.isString(req.param('directory')) ? _.trim(req.param('directory')) : '';
  let name = _.isString(req.param('name')) ? _.trim(req.param('name')) : '';

  let form = new Form({ share, directory, name });

  let shareFound = false;
  for (let item of await Share.find({ user: req.session.userId })) {
    if (item.name === share) {
      if (item.isReadOnly &&  (!validate || validate === 'share'))
        form.addError('share', 'E_READ_ONLY', __('delete.share.E_READ_ONLY'));
      shareFound = true;
      break;
    }
  }
  if (!shareFound && (!validate || validate === 'share'))
    form.addError('share', 'E_NOT_FOUND', __('delete.share.E_NOT_FOUND'));

  let parent;
  if (shareFound) {
    try {
      parent = await Node.findOne({share: `${req.session.userId}:${share}`, path: directory});
      if (!parent.isDirectory) {
        parent = null;
        if (!validate || validate === 'directory')
          form.addError('directory', 'E_NOT_DIR', __('delete.directory.E_NOT_DIR'));
      } else if (!parent.isValid) {
        parent = null;
        if (!validate || validate === 'directory')
          form.addError('directory', 'E_OUTSIDE', __('delete.directory.E_OUTSIDE'));
      }
    } catch (error) {
      let code = error.code || 'ERROR';
      let key = `delete.directory.${code}`;
      let translated = (code === 'ERROR' ? key : sails.__(key));
      if (!validate || validate === 'directory')
        form.addError('directory', code, translated === key ? _.escape(error.message) : translated);
    }
  }

  if (name) {
    if (name.includes('/')) {
      name = null;
      if (!validate || validate === 'name')
        form.addError('name', 'E_INVALID', __('delete.name.E_INVALID'));
    }
  } else if (!validate || validate === 'name') {
    form.addError('name', 'E_REQUIRED', __('delete.name.E_REQUIRED'));
  }

  if (validate)
    return res.json(form.toJSON());

  let nodes = [];
  if (parent && name) {
    try {
      if (name.includes('*') || name.includes('?')) {
        let node = await Node.findOne({ share: `${req.session.userId}:${share}`, path: parent.path }).populate(
          'nodes',
          {
            select: ['id', 'realPath', 'path', 'name', 'isValid']
          }
        );
        for (let item of await sails.helpers.fileFilter(node.nodes, name))
          nodes.push(item);
      } else {
        let node = await Node.findOne({
          where: { share: `${req.session.userId}:${share}`, path: _path.join(parent.path, name) },
          select: ['id', 'realPath', 'path', 'name', 'isValid']
        });
        nodes.push(node);
      }
    } catch (error) {
      nodes = [];
      let code = error.code || 'ERROR';
      let key = `delete.result.${code}`;
      let translated = (code === 'ERROR' ? key : sails.__(key));
      form.addMessage(code, translated === key ? _.escape(error.message) : translated);
      form.success = false;
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
  async function doDelete() {
    return new Promise(async (resolve, reject) => {
      let rejected = false;

      try {
        let node = nodes.shift();
        if (!node)
          return resolve();
        if (!node.isValid)
          return resolve(doDelete());

        let task = spawn(
          'rm',
          ['-rf', _path.join(parent.realPath, node.name)],
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

          if (!fast) {
            await sails.hooks.broadcaster.moreProgress(
              req.session.userId,
              __(
                rc ? 'delete_failure_message' : 'delete_success_message',
                node.path
              ) + '\n'
            );
          }
          resolve(doDelete());
        });
      } catch (error) {
        rejected = true;
        reject(error);
      }
    });
  }

  if (!fast)
    await sails.hooks.broadcaster.startProgress(req.session.userId, __('delete_start_message') + '\n');

  try {
    await doDelete();
  } catch (error) {
    if (!fast) {
      await sails.hooks.broadcaster.moreProgress(req.session.userId, error.stack || error.message);
    } else {
      let code = error.code || 'ERROR';
      let key = `delete.result.${code}`;
      let translated = (code === 'ERROR' ? key : sails.__(key));
      form.addMessage(code, translated === key ? _.escape(error.message) : translated);
      form.success = false;
    }
  }

  if (!fast)
    await sails.hooks.broadcaster.finishProgress(req.session.userId);
  else
    res.json(form.toJSON());
};
