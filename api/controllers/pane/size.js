'use strict';

module.exports = async function size(req, res) {

  try {
    let node = await Node.findOne({ share: `${req.session.userId}:${req.param('share')}`, path: req.param('path') });
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
