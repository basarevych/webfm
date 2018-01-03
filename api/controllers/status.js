'use strict';

const packageJson = require('../../package.json');

module.exports = async function status(req, res) {
  let info = await sails.helpers.userInfo(req);
  info.success = true;
  info.version = packageJson.version;

  if (req.session && req.session.userId && !info.authorized)
    req.session.destroy();

  res.json(info);
};
