'use strict';

module.exports = async function cd(req, res) {

  try {
    let listing = await sails.helpers.shareListing(req.session.userId, req.param('share'), req.param('path'));
    res.json({ success: true, ...listing });
  } catch (error) {
    return res.json({ success: false });
  }

};
