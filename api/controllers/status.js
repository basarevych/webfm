'use strict';

const packageJson = require('../../package.json');

module.exports = async function status(req, res) {
  if (!req.isSocket)
    return res.badRequest('Not a socket');

  let info = await sails.helpers.userInfo(req);
  info.success = true;
  info.version = packageJson.version;

  let socketId = sails.sockets.getId(req);
  if (info.isAuthorized)
    sails.hooks.broadcaster.register(socketId, req.session.userId);
  else
    sails.hooks.broadcaster.unregister(socketId);

  res.json(info);
};
