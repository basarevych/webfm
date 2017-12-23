'use strict';

const path = require('path');

module.exports = async function content(req, res) {

  try {
    let parts = (req.param('id') || '').split(':');
    if (parts.length !== 3)
      throw new Error('Invalid ID');

    let [share, directory, name] = parts;

    let shares = await Share.find({ user: req.session.userId });
    if (!shares.length)
      return res.forbidden('No shares defined for you');

    for (let item of shares) {
      if (item.name === share) {
        let node = await Node.findOne({ share: `${req.session.userId}:${share}`, path: path.join(directory, name) });
        if (node.isSymLink) {
          return res.json({ success: true, type: 'SYMLINK' });
        } else if (node.isDirectory) {
          return res.json({ success: true, type: 'DIR' });
        } else if (node.isFile) {
          let filename = path.join(item.path, node.path);
          let mime = await sails.helpers.fileType({ filename });
          let content = await sails.helpers.fileContent({ filename });

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
      }
    }

    res.forbidden('Not found');
  } catch (error) {
    console.log(error.message);
    return res.forbidden(error);
  }

};
