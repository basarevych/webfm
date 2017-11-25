'use strict';

const crypto = require('crypto');

module.exports = async function signIn(req, res) {
  let validate = req.param('_validate');
  let login = _.isString(req.param('login')) ? _.trim(req.param('login')) : '';
  let password = _.isString(req.param('password')) ? _.trim(req.param('password')) : '';

  let form = await sails.helpers.form({
    model: User,
    values: {
      login,
      password,
    },
    validate,
  });

  if (validate)
    return res.json(form);

  if (form.success) {
    let model = await User.findOne({ login });
    if (model) {
      let hash = crypto.createHash('sha256');
      hash.update(password);
      if (hash.digest('hex') === model.password) {
        form.values.password = '';
        req.session.userId = login;
      }
    }
  }

  if (!req.session.userId) {
    form.addMessage('invalid_credentials_message');
    form.success = false;
  }

  return res.json(form);
};
