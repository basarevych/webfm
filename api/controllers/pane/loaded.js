'use strict';

module.exports = async function watch(req, res) {

  if (!req.isSocket)
    return res.badRequest('Not a socket');
  if (!req.session.userId)
    return res.badRequest('Not authorized');
  let left = req.param('left');
  if (!_.isObject(left))
    return res.badRequest('Bad left pane');
  let right = req.param('right');
  if (!_.isObject(right))
    return res.badRequest('Bad right pane');


  try {
    let socketId = sails.sockets.getId(req);
    sails.hooks.broadcaster.register(socketId, req.session.userId);

    let leftNode = await Node.findOne({ share: `${req.session.userId}:${left.share}`, path: left.directory });
    if (leftNode.isValid && leftNode.isDirectory)
      await sails.hooks.watcher.register(socketId, req.session.userId, 'LEFT', left.share, left.directory, leftNode.realPath);

    let rightNode = await Node.findOne({ share: `${req.session.userId}:${right.share}`, path: right.directory });
    if (rightNode.isValid && rightNode.isDirectory)
      await sails.hooks.watcher.register(socketId, req.session.userId, 'RIGHT', right.share, right.directory, rightNode.realPath);

    res.json({ success: true });

    let created =  req.param('timestamp') || 0;
    if (created < Date.now() - 5 * 1000) {
      if (leftNode.isValid)
        await sails.hooks.watcher.trigger(leftNode.realPath);
      if (rightNode.isValid && (!leftNode.isValid || rightNode.realPath !== leftNode.realPath))
        await sails.hooks.watcher.trigger(rightNode.realPath);
    }
  } catch (error) {
    return res.json({ success: false });
  }

};
