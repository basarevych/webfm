'use strict';

const path = require('path');

async function loadNodes(share, directory) {
  let nodes = await Node.find({ where: { share, directory }, select: ['id', 'name', 'isDirectory'] });
  if (directory !== '/' && nodes.length === 0)
    nodes = await loadNodes(share, path.dirname(directory));
  return nodes;
}

module.exports = async function cd(req, res) {
  let panes = req.param('panes');
  if (!panes || !_.isArray(panes) || panes.length !== 2)
    return res.badRequest('No or invalid parameter "panes" provided');

  panes[0].list = null;
  panes[1].list = null;

  let shares = await Share.find({ user: req.session.userId });
  for (let share of shares) {
    if (share.name === panes[0].share)
      panes[0].list = await loadNodes(`${req.session.userId}:${panes[0].share}`, panes[0].path);
    if (share.name === panes[1].share)
      panes[1].list = await loadNodes(`${req.session.userId}:${panes[1].share}`, panes[1].path);
    if (panes[0].list && panes[1].list)
      break;
  }

  if (!panes[0].list) {
    panes[0].share = shares[0].name;
    panes[0].path = '/';
    panes[0].list = await loadNodes(`${req.session.userId}:${panes[0].share}`, panes[0].path);
  }
  if (!panes[1].list) {
    panes[1].share = shares[0].name;
    panes[1].path = '/';
    panes[1].list = await loadNodes(`${req.session.userId}:${panes[1].share}`, panes[1].path);
  }

  res.json({
    panes,
  });
};
