'use strict';

module.exports = async function watch(req, res) {

  if (!req.isSocket)
    return res.badRequest('Not a socket');
  if (!req.session.userId)
    return res.badRequest('Not authorized');

  try {
    let id = sails.sockets.getId(req);
    sails.hooks.broadcaster.register(id, req.session.userId);

    let leftData = req.param('left');
    if (!_.isObject(leftData))
      return res.badRequest('No left pane info');

    let rightData = req.param('right');
    if (!_.isObject(rightData))
      return res.badRequest('No right pane info');

    let leftRoot = `${req.session.userId}:${leftData.share}:${leftData.directory}`;
    let rightRoot = `${req.session.userId}:${rightData.share}:${rightData.directory}`;

    await sails.hooks.watcher.register(id, 'LEFT', leftRoot);
    await sails.hooks.watcher.register(id, 'RIGHT', rightRoot);

    let promises = [sails.hooks.watcher.trigger(leftRoot)];
    if (rightRoot !== leftRoot)
      promises.push(sails.hooks.watcher.trigger(rightRoot));

    await Promise.all(promises);
    res.json({ success: true });
  } catch (error) {
    return res.json({ success: false });
  }

};
