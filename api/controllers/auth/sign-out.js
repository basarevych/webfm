'use strict';

module.exports = async function signOut(req, res) {
  delete req.session.userId;
  res.json({ success: true });
};
