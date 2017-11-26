class User {
  find(id, select, done) {
    let config = sails.helpers.ini({ filename: sails.config.custom.configPath }).execSync();
    for (let key of Object.keys(config)) {
      let parts = key.split(':');
      let type = parts.pop();
      if (type !== 'user')
        continue;

      let user = parts.join(':');
      if (user === id) {
        let item = { id };
        if (_.isArray(select) && select.includes('login'))
          item.login = user;
        if (_.isArray(select) && select.includes('password'))
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
