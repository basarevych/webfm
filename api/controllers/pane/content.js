'use strict';

const path = require('path');

module.exports = async function content(req, res) {

  try {
    let parts = (req.param('id') || '').split(':');
    if (parts.length !== 3)
      throw new Error('Invalid ID');

    let [share, directory, name] = parts;

    let node = await Node.findOne({ share: `${req.session.userId}:${share}`, path: path.join(directory, name) });
    if (node.isSymLink && !node.isValid) {
      return res.json({ success: true, type: 'SYMLINK' });
    } else if (node.isDirectory) {
      return res.json({ success: true, type: 'DIR' });
    } else if (node.isFile) {
      let mime = await sails.helpers.fileType(node.realPath);
      let content = await sails.helpers.fileContent(node.realPath);

      let type = 'BINARY';
      if (mime.startsWith('text/'))
        type = 'TEXT';

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
