'use strict';

module.exports = async function status(req, res) {
  let authorized = !!req.session.userId;
  let shares = [];

  if (authorized) {
    shares = await Share.find({
      where: { user: req.session.userId },
      select: ['name', 'isReadOnly'],
    });
  }

  res.json({
    success: true,
    authorized,
    login: authorized ? req.session.userId : 'anonymous',
    locale: req.getLocale(),
    shares,
  });
};
