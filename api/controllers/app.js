'use strict';

module.exports = async function app(req, res) {
  let bundle = require('../../.tmp/public/server.bundle.js');
  let info = await sails.helpers.userInfo(req);
  let match = bundle.matchLocation(req.path);
  if (info.isAuthorized && !match)
    return res.redirect(`/~${info.shares[0].name}:/`);

  info.url = req.path;

  if (info.isAuthorized) {
    try {
      let listing = await sails.helpers.shareListing(req.session.userId, match.share, match.path);
      if (listing.path !== match.path)
        return res.redirect(`/~${listing.share}:${listing.path}`);

      info.share = listing.share;
      info.path = listing.path;
      info.directory = listing.directory;
      info.name = listing.name;
      info.list = listing.list;
    } catch (error) {
      info.share = '';
      info.path = match.path;
      info.directory = '';
      info.name = '';
      info.list = null;
    }
  }

  let { html, state } = await bundle.render(info);
  let buffer = Buffer.from(JSON.stringify(state));
  res.view('pages/app', { layout: 'layouts/app', html, state: buffer.toString('base64') });
};
