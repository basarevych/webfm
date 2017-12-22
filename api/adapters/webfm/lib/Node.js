const _path = require('path');
const fs = require('fs');
const Share = require('./Share');

class Node {
  async findByPath({ share, path }, select, done) {
    let info;
    try {
      info = await this.loadInfo(share, path);
    } catch (error) {
      return done(error);
    }

    fs.stat(info.fullPath, (error, stats) => {
      if (error)
        return done(error);

      done(null, [this.statsToObject(info.share.id, _path.dirname(info.relPath), _path.basename(info.relPath), stats, select)]);
    });
  }

  async findByParent({ parent }, select, done) {
    let info;
    try {
      let parts = parent.split(':');
      info = await this.loadInfo(`${parts[0]}:${parts[1]}`, parts[2]);

      let isDirectory = await new Promise((resolve, reject) => {
        this.findByPath(
          { share: info.share.id, path: info.relPath },
          ['isDirectory'],
          (error, nodes) => {
            if (error)
              return reject(error);

            if (nodes.length !== 1) {
              let error = new Error('Not found');
              error.code = 'NOTFOUND';
              return reject(error);
            }

            resolve(nodes[0].isDirectory);
          }
        );
      });

      if (!isDirectory)
        return done(null, []);
    } catch (error) {
      return done(error);
    }

    fs.readdir(info.fullPath, async (error, entries) => {
      if (error)
        return done(error);

      let nodes = [];
      let promises = [];
      for (let entry of entries) {
        promises.push(new Promise((resolve, reject) => {
          fs.stat(_path.join(info.fullPath, entry), (error, stats) => {
            if (error)
              return reject(error);

            nodes.push(this.statsToObject(info.share.id, info.relPath, entry, stats, select));
            resolve();
          });
        }));
      }

      try {
        await Promise.all(promises);
      } catch (error) {
        return done(error);
      }

      done(null, nodes);
    });
  }

  async loadInfo(share, path) {
    let info = {};

    if (!path)
      path = '/';
    if (path[0] !== '/')
      path = '/' + path;

    info.share = await new Promise((resolve, reject) => {
      new Share().find(share, ['path'], (error, shares) => {
        if (error)
          return reject(error);

        if (shares.length !== 1) {
          let error = new Error('Sandbox escape prevented');
          error.code = 'NOTSHARED';
          return reject(error);
        }

        resolve(shares[0]);
      });
    });

    info.fullPath = _path.resolve(_path.join(info.share.path, path));
    if (info.fullPath !== info.share.path && !(info.fullPath + '/').startsWith(info.share.path + '/')) {
      let error = new Error('Sandbox escape prevented');
      error.code = 'FORBIDDEN';
      throw error;
    }

    info.relPath = info.fullPath.slice(info.share.path.length) || '/';

    return info;
  }

  statsToObject(share, directory, name, stats, select) {
    let item = { id: `${share}:${_path.join(directory, name)}` };
    if (_.isArray(select) && select.includes('path'))
      item.path = _path.join(directory, name);
    if (_.isArray(select) && select.includes('directory'))
      item.directory = directory;
    if (_.isArray(select) && select.includes('name'))
      item.name = name;
    if (_.isArray(select) && select.includes('size'))
      item.size = stats.isDirectory() ? -1 : stats.size;
    if (_.isArray(select) && select.includes('isDirectory'))
      item.isDirectory = stats.isDirectory();
    return item;
  }
}

module.exports = Node;
