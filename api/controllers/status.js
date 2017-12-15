'use strict';

module.exports = async function status(req, res) {
  let info = await sails.helpers.userInfo({ req });
  info.success = true;
  res.json(info);
};
