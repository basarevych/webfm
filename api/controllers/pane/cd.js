'use strict';

module.exports = async function cd(req, res) {

  try {
    res.json(await sails.helpers.shareListing({
      userId: req.session.userId,
      share: req.param('share'),
      directory: req.param('path'),
    }));
  } catch (error) {
    return res.forbidden(error);
  }

};
