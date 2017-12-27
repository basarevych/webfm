'use strict';

const path = require('path');

module.exports = async function info(req, res) {

  try {
    let parts = (req.param('id') || '').split(':');
    if (parts.length !== 3)
      throw new Error('Invalid ID');

    let [share, directory, name] = parts;

    let node = await Node.findOne({ share: `${req.session.userId}:${share}`, path: path.join(directory, name) });
    if (node.isValid) {
      return res.json({
        success: true,
        name: node.name,
        parent: node.directory,
        size: node.size,
        du: await sails.helpers.fileSize(node.realPath) * 1024,
        modeNumber: node.modeNumber,
        modeString: node.modeString,
        userId: node.userId,
        userName: node.userName,
        groupId: node.groupId,
        groupName: node.groupName,
      });
    }
  } catch (error) {
    // do nothing
  }

  res.json({ success: false });

};
