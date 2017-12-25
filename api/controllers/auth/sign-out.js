'use strict';

module.exports = async function signOut(req, res) {
  req.session.regenerate(() => res.json({ success: true }));
};
