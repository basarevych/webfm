'use strict';

module.exports = async function content(req, res) {

  try {
    let node = await Node.findOne({ share: `${req.session.userId}:${req.param('share')}`, path: req.param('path') });
    if (node.isSymLink && !node.isValid) {
      return res.json({ success: true, type: 'SYMLINK' });
    } else if (node.isDirectory) {
      return res.json({ success: true, type: 'DIR' });
    } else if (node.isFile) {
      let mime = await sails.helpers.fileType(node.realPath);
      let content = await sails.helpers.fileContent(node.realPath);

      let type = mime.startsWith('text/') ? 'TEXT' : 'BINARY';
      return res.json({
        success: true,
        type,
        mime: mime,
        base64: (type === 'TEXT') && content,
      });
    }
  } catch (error) {
    // do nothing
  }

  res.json({ success: false });

};
