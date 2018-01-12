'use strict';

const fs = require('fs');
const _path = require('path');
const Form = require('../../../lib/Form');

module.exports = async function rename(req, res) {
  let validate = req.param('_validate');
  let share = _.isString(req.param('share')) ? _.trim(req.param('share')) : '';
  let directory = _.isString(req.param('directory')) ? _.trim(req.param('directory')) : '';
  let name = _.isString(req.param('name')) ? _.trim(req.param('name')) : '';
  let newName = _.isString(req.param('newName')) ? _.trim(req.param('newName')) : '';

  let form = new Form({ share, directory, name, newName });

  let shareFound = false;
  for (let item of await Share.find({ user: req.session.userId })) {
    if (item.name === share) {
      if (item.isReadOnly && (!validate || validate === 'share'))
        form.addError('share', 'E_READ_ONLY', __('rename.share.E_READ_ONLY'));
      shareFound = true;
      break;
    }
  }
  if (!shareFound && (!validate || validate === 'share'))
    form.addError('share', 'E_NOT_FOUND', __('rename.share.E_NOT_FOUND'));

  let parent;
  if (shareFound) {
    try {
      parent = await Node.findOne({share: `${req.session.userId}:${share}`, path: directory});
      if (!parent.isDirectory) {
        parent = null;
        if (!validate || validate === 'directory')
          form.addError('directory', 'E_NOT_DIR', __('rename.directory.E_NOT_DIR'));
      } else if (!parent.isValid) {
        parent = null;
        if (!validate || validate === 'directory')
          form.addError('directory', 'E_OUTSIDE', __('rename.directory.E_OUTSIDE'));
      }
    } catch (error) {
      let code = error.code || 'ERROR';
      let key = `rename.directory.${code}`;
      let translated = (code === 'ERROR' ? key : sails.__(key));
      if (!validate || validate === 'directory')
        form.addError('directory', code, translated === key ? _.escape(error.message) : translated);
    }
  }

  let source;
  if (name) {
    if (parent)
      source = _path.join(parent.realPath, name);
  } else if (!validate || validate === 'name') {
    form.addError('name', 'E_REQUIRED', __('rename.name.E_REQUIRED'));
  }

  let target;
  if (newName) {
    if (newName === name) {
      if (!validate || validate === 'newName')
        form.addError('newName', 'E_SAME', __('rename.newName.E_SAME'));
    } else if (newName.includes('/')) {
      if (!validate || validate === 'newName')
        form.addError('newName', 'E_INVALID', __('rename.newName.E_INVALID'));
    } else if (parent) {
      target = _path.join(parent.realPath, newName);
    }
  } else if (!validate || validate === 'newName') {
    form.addError('newName', 'E_REQUIRED', __('rename.newName.E_REQUIRED'));
  }

  if (source) {
    await new Promise(resolve => {
      fs.access(source, fs.constants.F_OK, error => {
        if (error && (!validate || validate === 'name'))
          form.addError('name', 'E_NOT_FOUND', __('rename.name.E_NOT_FOUND'));
        resolve();
      });
    });
  }

  if (target) {
    await new Promise(resolve => {
      fs.access(target, fs.constants.F_OK, error => {
        if (!error && (!validate || validate === 'newName'))
          form.addError('newName', 'E_EXISTS', __('rename.newName.E_EXISTS'));
        resolve();
      });
    });
  }

  if (validate)
    return res.json(form.toJSON());

  if (form.success) {
    try {
      await new Promise((resolve, reject) => {
        fs.rename(source, target, error => {
          if (error)
            return reject(error);

          resolve();
        });
      });
    } catch (error) {
      let code = error.code || 'ERROR';
      let key = `rename.result.${code}`;
      let translated = (code === 'ERROR' ? key : sails.__(key));
      form.addMessage(code, translated === key ? _.escape(error.message) : translated);
      form.success = false;
    }
  }

  return res.json(form.toJSON());
};
