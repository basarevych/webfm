const path = require('path');
const fs = require('fs');

class Node {
  find({ share, directory }, select, done) {
    let fullPath = path.resolve(path.join(share.path, directory));
    if (fullPath !== share.path && !(fullPath + '/').startsWith(share.path + '/'))
      return done(null, []);

    fs.readdir(fullPath, async (error, entries) => {
      if (error)
        return done(error);

      let dirs = [];
      let files = [];
      let promises = [];
      for (let entry of entries) {
        promises.push(new Promise((resolve, reject) => {
          fs.stat(path.join(fullPath, entry), (error, stats) => {
            if (error)
              return reject(error);

            let item = { id: `${share.id}:${path.join(directory, entry)}` };
            if (_.isArray(select) && select.includes('name'))
              item.name = entry;
            if (_.isArray(select) && select.includes('size'))
              item.size = stats.isDirectory() ? -1 : stats.size;
            if (_.isArray(select) && select.includes('directory'))
              item.directory = directory;
            if (_.isArray(select) && select.includes('isDirectory'))
              item.isDirectory = stats.isDirectory();

            if (stats.isDirectory())
              dirs.push(item);
            else
              files.push(item);

            resolve();
          });
        }));
      }

      try {
        await Promise.all(promises);
      } catch (error) {
        return done(error);
      }

      dirs.sort((a, b) => a.id.localeCompare(b.id));
      files.sort((a, b) => a.id.localeCompare(b.id));

      done(null, dirs.concat(files));
    });
  }
}

module.exports = Node;
