'use strict';

module.exports = async function signIn(req, res) {
  delete req.session.userId;
  res.json({ success: true });
};
