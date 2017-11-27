'use strict';

const path = require('path');

async function loadNodes(share, directory) {
  let nodes = await Node.find({ where: { share, directory }, select: ['id', 'name', 'size', 'isDirectory'] });
  if (directory !== '/' && nodes.length === 0)
    nodes = await loadNodes(share, path.dirname(directory));
  return nodes;
}

module.exports = async function cd(req, res) {
  let pane = req.param('pane');
  let share = req.param('share');
  let directory = req.param('path');
  let list = null;

  let shares = await Share.find({ user: req.session.userId });
  if (!shares.length)
    return res.json({ pane, share, path: directory, list: [] });

  for (let item of shares) {
    if (item.name === share) {
      list = await loadNodes(`${req.session.userId}:${share}`, directory);
      break;
    }
  }

  if (!list) {
    share = shares[0].name;
    directory = '/';
    list = await loadNodes(`${req.session.userId}:${share}`, directory);
  }

  res.json({ pane, share, path: directory, list });
};
