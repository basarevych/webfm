'use strict';

module.exports = async function cd(req, res) {

  if (!req.isSocket)
    return res.badRequest('Not a socket');

  if (!_.includes(['LEFT', 'RIGHT', 'BOTH'], req.param('pane')))
    return res.badRequest('Invalid pane');

  try {
    let share = req.param('share');
    let path = req.param('path');
    let listing = await sails.helpers.shareListing(req.session.userId, share, path);

    let socketId = sails.sockets.getId(req);
    await sails.hooks.watcher.register(socketId, req.session.userId, req.param('pane'), listing.share, listing.directory, listing.realParentPath);

    res.json({
      success: true,
      share: listing.share,
      path: listing.path,
      directory: listing.directory,
      name: listing.name,
      list: listing.list
    });
  } catch (unused) {
    return res.json({ success: false });
  }

};
