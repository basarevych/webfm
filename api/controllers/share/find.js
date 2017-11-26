'use strict';

module.exports = async function find(req, res) {
  return res.json(await Share.find({
    where: { user: req.session.userId },
    select: ['name', 'isReadOnly'],
  }));
};
