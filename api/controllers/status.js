'use strict';

module.exports = function status(req, res) {
  res.json({
    success: true,
    authorized: !!req.session.userId,
    login: req.session.userId || 'anonymous',
    locale: req.getLocale(),
  });
};
