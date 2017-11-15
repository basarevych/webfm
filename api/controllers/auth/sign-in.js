'use strict';

module.exports = async function signIn(req, res) {
  let login = _.isString(req.param('login')) && _.trim(req.param('login'));
  let password = _.isString(req.param('password')) && _.trim(req.param('password'));

  let form = await sails.helpers.form({
    model: User,
    values: {
      login,
      password,
    }
  });

  if (form.success && password !== '123') {
    form.addMessage('invalid_credentials');
    form.success = false;
  }

  if (!form.success)
    return res.json(form);

  req.session.userId = 'tester';
  req.session.userLogin = login;
  res.json({ success: true });
};
