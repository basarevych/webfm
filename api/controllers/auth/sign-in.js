'use strict';

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

  if (form.success && password !== '123') {
    form.addMessage('invalid_credentials');
    form.success = false;
  }

  if (form.success) {
    form.values.password = '';
    req.session.userId = login;
  }

  return res.json(form);
};
