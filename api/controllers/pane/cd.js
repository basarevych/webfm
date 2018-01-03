'use strict';

module.exports = async function cd(req, res) {

  if (!req.isSocket)
    return res.badRequest('Not a socket');

  if (!['LEFT', 'RIGHT', 'BOTH'].includes(req.param('pane')))
    return res.badRequest('Invalid pane');

  try {
    let listing = await sails.helpers.shareListing(req.session.userId, req.param('share'), req.param('path'));

    await sails.hooks.watcher.register(sails.sockets.getId(req), req.param('pane'), listing.root);
    delete listing.root;

    res.json({ success: true, ...listing });
  } catch (error) {
    return res.json({ success: false });
  }

};
