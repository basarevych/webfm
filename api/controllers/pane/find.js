'use strict';

const _path = require('path');

module.exports = async function mkdir(req, res) {
  let share = _.isString(req.param('share')) ? _.trim(req.param('share')) : '';
  let directory = _.isString(req.param('directory')) ? _.trim(req.param('directory')) : '';
  let name = _.isString(req.param('name')) ? _.trim(req.param('name')) : '';

  let shareFound = false;
  for (let item of await Share.find({ user: req.session.userId })) {
    if (item.name === share) {
      shareFound = true;
      break;
    }
  }
  if (!shareFound)
    return res.forbidden('Share not found');

  try {
    let parent = await Node.findOne({ share: `${req.session.userId}:${share}`, path: directory });
    if (!parent.isDirectory || !parent.isValid)
      return res.forbidden('Parent invalid');
  } catch (unused) {
    return res.forbidden('Parent not found');
  }

  if (!name || name.includes('/'))
    return res.forbidden('Name is invalid');

  try {
    let nodes = [];
    if (name.includes('*') || name.includes('?')) {
      let node = await Node.findOne({ share: `${req.session.userId}:${share}`, path: directory }).populate(
        'nodes',
        {
          select: ['id', 'path', 'directory', 'name', 'target', 'size', 'isDirectory', 'isSymLink']
        }
      );
      for (let item of await sails.helpers.fileFilter(node.nodes, name))
        nodes.push(item);
    } else {
      let node = await Node.findOne({
        where: { share: `${req.session.userId}:${share}`, path: _path.join(directory, name) },
        select: ['id', 'path', 'directory', 'name', 'target', 'size', 'isDirectory', 'isSymLink']
      });
      nodes.push(node);
    }
    return res.json({ nodes });
  } catch (unused) {
    return res.forbidden('Path not found');
  }

};
