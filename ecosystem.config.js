module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
    {
      name      : 'webfm',
      script    : 'app.js',
      node_args : '--preserve-symlinks',
      env: {
      },
      env_production : {
        NODE_ENV: 'production'
      }
    },
  ],
};