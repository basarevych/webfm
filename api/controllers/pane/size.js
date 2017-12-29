'use strict';

module.exports = async function size(req, res) {

  try {
    let parts = (req.param('id') || '').split(':');
    if (parts.length !== 2)
      throw new Error('Invalid ID');

    let [share, path] = parts;

    let node = await Node.findOne({ share: `${req.session.userId}:${share}`, path });
    if (node.isValid) {
      return res.json({
        success: true,
        du: await sails.helpers.fileSize(node.realPath) * 1024,
      });
    }
  } catch (error) {
    // do nothing
  }

  res.json({ success: false });

};
