const _path = require('path');
const fs = require('fs');
const userid = require('userid');
const Mode = require('stat-mode');
const Share = require('./Share');

class Node {
  static statsToObject(info, directory, name, stats, select) {
    let item = { id: `${info.share}:${_path.join(directory, name)}` };
    if (_.isArray(select) && _.includes(select, 'fullPath'))
      item.fullPath = info.fullPath;
    if (_.isArray(select) && _.includes(select, 'realPath'))
      item.realPath = info.realPath;
    if (_.isArray(select) && _.includes(select, 'root'))
      item.root = info.root;
    if (_.isArray(select) && _.includes(select, 'path'))
      item.path = name ? _path.join(directory, name) : directory;
    if (_.isArray(select) && _.includes(select, 'directory'))
      item.directory = directory;
    if (_.isArray(select) && _.includes(select, 'name'))
      item.name = name;
    if (_.isArray(select) && _.includes(select, 'target'))
      item.target = '';
    if (_.isArray(select) && _.includes(select, 'size'))
      item.size = stats.size;
    if (_.isArray(select) && _.includes(select, 'modeNumber'))
      item.modeNumber = stats.mode;
    if (_.isArray(select) && _.includes(select, 'modeString')) {
      let mode = new Mode(stats);
      item.modeString = mode.toString();
    }
    if (_.isArray(select) && _.includes(select, 'userId'))
      item.userId = stats.uid;
    if (_.isArray(select) && _.includes(select, 'userName'))
      item.userName = userid.username(stats.uid);
    if (_.isArray(select) && _.includes(select, 'groupId'))
      item.groupId = stats.gid;
    if (_.isArray(select) && _.includes(select, 'groupName'))
      item.groupName = userid.groupname(stats.gid);
    if (_.isArray(select) && _.includes(select, 'atime'))
      item.atime = stats.atimeMs;
    if (_.isArray(select) && _.includes(select, 'mtime'))
      item.mtime = stats.mtimeMs;
    if (_.isArray(select) && _.includes(select, 'ctime'))
      item.ctime = stats.ctimeMs;
    if (_.isArray(select) && _.includes(select, 'isDirectory'))
      item.isDirectory = stats.isDirectory();
    if (_.isArray(select) && _.includes(select, 'isFile'))
      item.isFile = stats.isFile();
    if (_.isArray(select) && _.includes(select, 'isSymLink'))
      item.isSymLink = stats.isSymbolicLink();
    if (_.isArray(select) && _.includes(select, 'isValid'))
      item.isValid = info.isValid;
    return item;
  }

  async findByPath({ share, path }, select, done) {
    try {
      share = await new Promise((resolve, reject) => {
        new Share().find(share, ['path'], (error, shares) => { // eslint-disable-line lodash/prefer-lodash-method
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
      return done(null, [await this.loadInfo(share.id, share.path, path, select)]);
    } catch (error) {
      return done(error);
    }
  }

  async findByParent({ parent }, select, done) {
    let parts = _.split(parent, ':');
    let share = `${parts[0]}:${parts[1]}`;

    try {
      parent = await new Promise((resolve, reject) => {
        this.findByPath(
          { share, path: parts[2] },
          ['realPath', 'root', 'path', 'isDirectory', 'isValid'],
          (error, nodes) => {
            if (error)
              return reject(error);

            if (nodes.length !== 1) {
              let error = new Error('Not found');
              error.code = 'NOTFOUND';
              return reject(error);
            }

            resolve(nodes[0]);
          }
        );
      });
      if (!parent.isDirectory)
        return done(null, []);
      if (!parent.isValid)
        return done(new Error('Parent is invalid'));
    } catch (error) {
      return done(error);
    }

    fs.readdir(parent.realPath, async (error, entries) => {
      if (error)
        return done(error);

      try {
        let nodes = [];
        for (let entry of entries)
          nodes.push(await this.loadInfo(share, parent.root, _path.join(parent.path, entry), select));
        return done(null, nodes);
      } catch (error) {
        return done(error);
      }
    });
  }

  async loadInfo(share, root, path, select) {
    let info = { share, root };

    if (!path)
      path = '/';
    if (path[0] !== '/')
      path = '/' + path;

    info.fullPath = _path.resolve(_path.join(root, path));
    info.relPath = info.fullPath.slice(root.length) || '/';

    if (!_.startsWith(info.fullPath + '/', root + '/')) {
      let error = new Error('Sandbox escape prevented');
      error.code = 'FORBIDDEN';
      throw error;
    }

    await new Promise((resolve, reject) => {
      fs.realpath(info.fullPath, (error, target) => {
        if (error)
          return reject(error);

        info.realPath = target;
        info.isValid = _.startsWith(target + '/', root + '/');
        resolve();
      });
    });

    return new Promise((resolve, reject) => {
      fs.lstat(info.fullPath, (error, stats) => {
        if (error)
          return reject(error);

        if (!stats.isSymbolicLink())
          return resolve(this.constructor.statsToObject(info, _path.dirname(info.relPath), _path.basename(info.relPath), stats, select));

        fs.readlink(info.fullPath, (error, target) => {
          if (error)
            return reject(error);

          fs.stat(info.realPath, (error, stats) => {
            if (error)
              return reject(error);

            let result = this.constructor.statsToObject(info, _path.dirname(info.relPath), _path.basename(info.relPath), stats, select);
            if (_.isArray(select) && _.includes(select, 'target'))
              result.target = target;
            if (_.isArray(select) && _.includes(select, 'isSymLink'))
              result.isSymLink = true;
            resolve(result);
          });
        });
      });
    });
  }
}

module.exports = Node;
