'use strict';

const fs = require('fs');
const _path = require('path');
const Form = require('../../../lib/Form');

module.exports = async function mkdir(req, res) {
  let validate = req.param('_validate');
  let share = _.isString(req.param('share')) ? _.trim(req.param('share')) : '';
  let directory = _.isString(req.param('directory')) ? _.trim(req.param('directory')) : '';
  let name = _.isString(req.param('name')) ? _.trim(req.param('name')) : '';

  let form = new Form({ share, directory, name });

  let shareFound = false;
  for (let item of await Share.find({ user: req.session.userId })) {
    if (item.name === share) {
      if (item.isReadOnly && (!validate || validate === 'share'))
        form.addError('share', 'E_READ_ONLY', sails.__('mkdir.share.E_READ_ONLY'));
      shareFound = true;
      break;
    }
  }
  if (!shareFound && (!validate || validate === 'share'))
    form.addError('share', 'E_NOT_FOUND', sails.__('mkdir.share.E_NOT_FOUND'));

  let parent;
  if (shareFound) {
    try {
      parent = await Node.findOne({share: `${req.session.userId}:${share}`, path: directory});
      if (!parent.isDirectory) {
        parent = null;
        if (!validate || validate === 'directory')
          form.addError('directory', 'E_NOT_DIR', sails.__('mkdir.directory.E_NOT_DIR'));
      } else if (!parent.isValid) {
        parent = null;
        if (!validate || validate === 'directory')
          form.addError('directory', 'E_OUTSIDE', sails.__('mkdir.directory.E_OUTSIDE'));
      }
    } catch (error) {
      let code = (error.raw && error.raw.code) || error.code || 'ERROR';
      let key = `mkdir.directory.${code}`;
      let translated = (code === 'ERROR' ? key : sails.__(key));
      if (!validate || validate === 'directory')
        form.addError('directory', code, translated === key ? _.escape(error.message) : translated);
    }
  }

  let target;
  if (name) {
    if (name.includes('/')) {
      if (!validate || validate === 'name')
        form.addError('name', 'E_INVALID', sails.__('mkdir.name.E_INVALID'));
    } else if (parent) {
      target = _path.join(parent.realPath, name);
    }
  } else if (!validate || validate === 'name') {
    form.addError('name', 'E_REQUIRED', sails.__('mkdir.name.E_REQUIRED'));
  }

  if (target) {
    await new Promise(resolve => {
      fs.access(target, fs.constants.F_OK, error => {
        if (!error && (!validate || validate === 'name'))
          form.addError('name', 'E_EXISTS', sails.__('mkdir.name.E_EXISTS'));
        resolve();
      });
    });
  }

  if (validate)
    return res.json(form.toJSON());

  if (form.success) {
    try {
      await new Promise((resolve, reject) => {
        fs.mkdir(target, 0o755, error => {
          if (error)
            return reject(error);

          if (process.getuid())
            return resolve();

          fs.chown(target, parent.uid, parent.gid, error => {
            if (error)
              return reject(error);

            resolve();
          });
        });
      });
    } catch (error) {
      let code = (error.raw && error.raw.code) || error.code || 'ERROR';
      let key = `mkdir.result.${code}`;
      let translated = (code === 'ERROR' ? key : sails.__(key));
      form.addMessage(code, translated === key ? _.escape(error.message) : translated);
      form.success = false;
    }
  }

  res.json(form.toJSON());

  if (form.success)
    await sails.hooks.watcher.trigger(parent.realPath);
};
