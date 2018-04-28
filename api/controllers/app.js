'use strict';

const utf8 = require('utf8');
const base64 = require('base64util');

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
    } catch (unused) {
      info.share = '';
      info.path = match.path;
      info.directory = '';
      info.name = '';
      info.list = null;
    }
  }

  let { html, state } = await bundle.render(info);
  state = base64.byteEncode(
    JSON.stringify(
      state,
      (key, value) => _.isString(value) ? utf8.encode(value) : value
    )
  );
  res.view('pages/app', { layout: 'layouts/app', html, state });
};
