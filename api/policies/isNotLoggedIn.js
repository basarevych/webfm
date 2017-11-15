'use strict';

module.exports = function isNotLoggedIn(req, res, next) {

  if (!req.session.userId)
    return next();

  return res.forbidden();

};
