'use strict';

const packageJson = require('../../package.json');

module.exports = async function status(req, res) {
  let info = await sails.helpers.userInfo({ req });
  info.success = true;
  info.version = packageJson.version;
  res.json(info);
};
