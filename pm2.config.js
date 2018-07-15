const path = require('path');

module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    {
      name: 'webfm',
      script: path.join(__dirname, 'app.js'),
      env: {
        NODE_ENV: 'production'
      }
    },
  ],
};
