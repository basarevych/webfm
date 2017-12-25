'use strict';

module.exports = async function cd(req, res) {

  try {
    let listing = await sails.helpers.shareListing({
      userId: req.session.userId,
      share: req.param('share'),
      path: req.param('path'),
    });
    res.json({ success: true, ...listing });
  } catch (error) {
    return res.json({ success: false });
  }

};
