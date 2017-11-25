class User {

  find(login, done) {
    let config = sails.helpers.ini({ filename: sails.config.custom.configPath }).execSync();
    for (let key of Object.keys(config)) {
      let parts = key.split(':');
      let type = parts.pop();
      if (type !== 'user')
        continue;

      let user = parts.join(':');
      if (user === login) {
        return done(
          null,
          [
            {
              id: login,
              login,
              password:
              config[key].password
            }
          ]
        );
      }
    }
    done(null, []);
  }
}

module.exports = User;
