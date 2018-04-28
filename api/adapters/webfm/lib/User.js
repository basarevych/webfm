class User {
  find(id, select, done) {
    let config = sails.helpers.ini(sails.config.custom.configPath);
    for (let key of _.keys(config)) {
      let parts = _.split(key, ':');
      let type = parts.pop();
      if (type !== 'user')
        continue;

      let user = parts.join(':');
      if (user === id) {
        let item = { id };
        if (_.isArray(select) && _.includes(select, 'login'))
          item.login = user;
        if (_.isArray(select) && _.includes(select, 'password'))
          item.password = config[key].password;

        return done(
          null,
          [
            item
          ]
        );
      }
    }
    done(null, []);
  }
}

module.exports = User;
