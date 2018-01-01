'use strict';

module.exports = async function watch(req, res) {

  if (!req.isSocket)
    return res.badRequest('Not a socket');

  try {
    let leftData = req.param('left');
    if (!_.isObject(leftData))
      return res.badRequest('No left pane info');
    let rightData = req.param('right');
    if (!_.isObject(rightData))
      return res.badRequest('No right pane info');

    let id = sails.sockets.getId(req);
    await sails.hooks.watcher.register(id, 'LEFT', `${req.session.userId}:${leftData.share}:${leftData.directory}`);
    await sails.hooks.watcher.register(id, 'RIGHT', `${req.session.userId}:${rightData.share}:${rightData.directory}`);

    res.json({ success: true });
  } catch (error) {
    return res.json({ success: false });
  }

};
