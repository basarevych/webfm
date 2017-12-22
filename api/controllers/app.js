'use strict';

module.exports = async function app(req, res) {
  const bundle = require('../../.tmp/public/server.bundle.js');

  let info = await sails.helpers.userInfo({ req });
  let match = bundle.matchLocation(req.path);
  if (info.authorized && !match)
    return res.redirect(`/~${info.shares[0].name}:/`);

  info.url = req.path;

  if (info.authorized) {
    try {
      let listing = await sails.helpers.shareListing({
        userId: req.session.userId,
        share: match.share,
        directory: match.path,
      });
      info.share = listing.share;
      info.path = listing.path;
      info.list = listing.list;
    } catch (error) {
      info.share = match.share;
      info.path = match.path;
      info.list = null;
    }
  }

  let { html, state } = await bundle.render(info);
  let buffer = Buffer.from(JSON.stringify(state));
  res.view('pages/app', { layout: 'layouts/app', html, state: buffer.toString('base64') });
};
