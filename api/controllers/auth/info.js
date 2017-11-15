'use strict';

module.exports = function info(req, res) {
  res.json({
    success: true,
    authorized: !!req.session.userId,
    login: req.session.userId ? req.session.userLogin : 'anonymous',
  });
};
