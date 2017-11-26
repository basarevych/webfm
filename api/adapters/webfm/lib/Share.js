const path = require('path');
const fs = require('fs');

class Share {
  find(id, select, done) {
    let parts = id.split(':');
    let userPart = parts.shift();
    let sharePart = parts.join(':');

    let config = sails.helpers.ini({ filename: sails.config.custom.configPath }).execSync();
    for (let key of Object.keys(config)) {
      let parts = key.split(':');
      let type = parts.pop();
      if (type !== 'user')
        continue;

      let login = parts.join(':');
      if (userPart === login) {
        for (let share of config[key].read) {
          let [name, ...paths] = share.split(':');
          if (name !== sharePart || !paths.length)
            continue;

          let target = this._normalize(paths.join(':'));
          if (!target)
            continue;

          let item = { id: `${login}:${name}` };
          if (_.isArray(select) && select.includes('name'))
            item.name = name;
          if (_.isArray(select) && select.includes('path'))
            item.path = target;
          if (_.isArray(select) && select.includes('isReadOnly'))
            item.isReadOnly = true;

          return done(null, [item]);
        }
        for (let share of config[key].write) {
          let [name, ...paths] = share.split(':');
          if (name !== sharePart || !paths.length)
            continue;

          let target = this._normalize(paths.join(':'));
          if (!target)
            continue;

          let item = { id: `${login}:${name}` };
          if (_.isArray(select) && select.includes('name'))
            item.name = name;
          if (_.isArray(select) && select.includes('path'))
            item.path = target;
          if (_.isArray(select) && select.includes('isReadOnly'))
            item.isReadOnly = false;

          return done(null, [item]);
        }
      }
    }
    done(null, []);
  }

  findByUser(user, select, done) {
    let config = sails.helpers.ini({ filename: sails.config.custom.configPath }).execSync();
    for (let key of Object.keys(config)) {
      let parts = key.split(':');
      let type = parts.pop();
      if (type !== 'user')
        continue;

      let login = parts.join(':');
      if (user === login) {
        let result = [];
        let knownIds = [];
        for (let share of config[key].read) {
          let [name, ...paths] = share.split(':');
          let id = `${login}:${name}`;
          if (!name || !paths.length || knownIds.includes(id))
            continue;

          let target = this._normalize(paths.join(':'));
          if (!target)
            continue;

          let item = { id };
          if (_.isArray(select) && select.includes('name'))
            item.name = name;
          if (_.isArray(select) && select.includes('path'))
            item.path = target;
          if (_.isArray(select) && select.includes('isReadOnly'))
            item.isReadOnly = true;

          result.push(item);
          knownIds.push(id);
        }
        for (let share of config[key].write) {
          let [name, ...paths] = share.split(':');
          let id = `${login}:${name}`;
          if (!name || !paths.length || knownIds.includes(id))
            continue;

          let target = this._normalize(paths.join(':'));
          if (!target)
            continue;

          let item = { id };
          if (_.isArray(select) && select.includes('name'))
            item.name = name;
          if (_.isArray(select) && select.includes('path'))
            item.path = target;
          if (_.isArray(select) && select.includes('isReadOnly'))
            item.isReadOnly = false;

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
      if (fs.lstatSync(filename).isDirectory())
        return filename;
    } catch (error) {
      // do nothing
    }
    return null;
  }
}

module.exports = Share;
