'use strict';

module.exports = async function signOut(req, res) {
  if (!req.isSocket)
    return res.badRequest('Not a socket');

  let socketId = sails.sockets.getId(req);
  await sails.hooks.watcher.unregister(socketId);
  await sails.hooks.broadcaster.unregister(socketId);

  delete req.session.userId;

  res.json({ success: true });
};
