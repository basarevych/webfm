'use strict';

const path = require('path');

module.exports = async function cd(req, res) {
  let share = req.param('share');
  let directory = path.resolve(req.param('path'));

  if (!directory || directory[0] !== '/')
    directory = '/' + (directory || '');

  let shares = await Share.find({ user: req.session.userId });
  if (!shares.length)
    return res.forbidden('No shares defined for you');

  let list = null;
  try {
    for (let item of shares) {
      if (item.name === share) {
        let node = await Node.findOne(
          { share: item.id, path: directory }
        ).populate(
          'nodes',
          {
            select: ['id', 'directory', 'name', 'size', 'isDirectory']
          }
        );

        if (!node.isDirectory)
          return res.forbidden('Not a directory');

        list = node.nodes;
        if (node.path !== '/') {
          list.unshift({
            id: `${req.session.userId}:${share}:${node.path}`,
            directory: node.path,
            name: '..',
            size: -1,
            isDirectory: true,
          });
        }
        break;
      }
    }
  } catch (error) {
    return res.forbidden('Could not read path');
  }

  if (!list)
    return res.forbidden('Share not found');

  res.json({ share, path: directory, list });
};
