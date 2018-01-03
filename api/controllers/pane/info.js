'use strict';

module.exports = async function info(req, res) {

  try {
    let node = await Node.findOne({ share: `${req.session.userId}:${req.param('share')}`, path: req.param('path') });
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
        atime: node.atime,
        mtime: node.mtime,
        ctime: node.ctime,
      });
    }
  } catch (error) {
    // do nothing
  }

  res.json({ success: false });

};
