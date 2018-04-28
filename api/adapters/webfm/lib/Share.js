const fs = require('fs');

class Share {
  find(id, select, done) {
    let parts = _.split(id, ':');
    let userPart = parts.shift();
    let sharePart = parts.join(':');

    let config = sails.helpers.ini(sails.config.custom.configPath);
    for (let key of _.keys(config)) {
      let parts = _.split(key, ':');
      let type = parts.pop();
      if (type !== 'user')
        continue;

      let login = parts.join(':');
      if (userPart === login) {
        for (let share of config[key].write || []) {
          let [name, ...paths] = _.split(share, ':');
          if (name !== sharePart || !paths.length)
            continue;

          let target = this._normalize(paths.join(':'));
          if (!target)
            continue;

          let item = { id: `${login}:${name}` };
          if (_.isArray(select) && _.includes(select, 'name'))
            item.name = name;
          if (_.isArray(select) && _.includes(select, 'path'))
            item.path = target;
          if (_.isArray(select) && _.includes(select, 'isReadOnly'))
            item.isReadOnly = false;

          return done(null, [item]);
        }
        for (let share of config[key].read || []) {
          let [name, ...paths] = _.split(share, ':');
          if (name !== sharePart || !paths.length)
            continue;

          let target = this._normalize(paths.join(':'));
          if (!target)
            continue;

          let item = { id: `${login}:${name}` };
          if (_.isArray(select) && _.includes(select, 'name'))
            item.name = name;
          if (_.isArray(select) && _.includes(select, 'path'))
            item.path = target;
          if (_.isArray(select) && _.includes(select, 'isReadOnly'))
            item.isReadOnly = true;

          return done(null, [item]);
        }
      }
    }
    done(null, []);
  }

  findByUser(user, select, done) {
    let config = sails.helpers.ini(sails.config.custom.configPath);
    for (let key of _.keys(config)) {
      let parts = _.split(key, ':');
      let type = parts.pop();
      if (type !== 'user')
        continue;

      let login = parts.join(':');
      if (user === login) {
        let result = [];
        let knownIds = [];
        for (let share of config[key].write || []) {
          let [name, ...paths] = _.split(share, ':');
          let id = `${login}:${name}`;
          if (!name || !paths.length || _.includes(knownIds, id))
            continue;

          let target = this._normalize(paths.join(':'));
          if (!target)
            continue;

          let item = { id };
          if (_.isArray(select) && _.includes(select, 'name'))
            item.name = name;
          if (_.isArray(select) && _.includes(select, 'path'))
            item.path = target;
          if (_.isArray(select) && _.includes(select, 'isReadOnly'))
            item.isReadOnly = false;

          result.push(item);
          knownIds.push(id);
        }
        for (let share of config[key].read || []) {
          let [name, ...paths] = _.split(share, ':');
          let id = `${login}:${name}`;
          if (!name || !paths.length || _.includes(knownIds, id))
            continue;

          let target = this._normalize(paths.join(':'));
          if (!target)
            continue;

          let item = { id };
          if (_.isArray(select) && _.includes(select, 'name'))
            item.name = name;
          if (_.isArray(select) && _.includes(select, 'path'))
            item.path = target;
          if (_.isArray(select) && _.includes(select, 'isReadOnly'))
            item.isReadOnly = true;

          result.push(item);
          knownIds.push(id);
        }

        result.sort((a, b) => a.name.localeCompare(b.name));
        return done(null, result);
      }
    }
    done(null, []);
  }

  _normalize(filename) {
    try {
      filename = fs.realpathSync(filename);
      if (fs.statSync(filename).isDirectory())
        return filename;
    } catch (unused) {
      // do nothing
    }
    return null;
  }
}

module.exports = Share;
