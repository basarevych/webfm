/**
 * /etc configuration reader
 */
'use strict';

const _ = require('lodash');
const os = require('os');
const ini = require('../api/helpers/ini');

let config = {
  bootstrapTimeout: 15 * 60 * 1000,
  http: {},
  security: {
    cors: {
      allRoutes: true,
      allowOrigins: [],
    }
  },
  session: {},
  sockets: {},
  custom: {
    configPath: os.platform() === 'freebsd' ? '/usr/local/etc/webfm/webfm.conf' : '/etc/webfm/webfm.conf',
  }
};

try {
  ini.fn(
    {
      filename: config.custom.configPath,
    },
    {
      success: result => {
        if (!_.isObject(result.server))
          throw new Error('No [server] section in the config');
        if (!result.server.host)
          throw new Error('No server.host parameter in the config');
        if (!result.server.port)
          throw new Error('No server.port parameter in the config');

        config.explicitHost = result.server.host;
        config.port = parseInt(result.server.port);
        config.security.cors.allowOrigins = result.server.url;

        if (['yes', 'on', 'true'].includes(result.server.trust_proxy))
          config.http.trustProxy = true;

        if (!_.isObject(result.redis))
          throw new Error('No [redis] section in the config');
        if (!result.redis.url)
          throw new Error('No redis.url parameter in the config');

        config.session.url = result.redis.url;
        config.sockets.url = result.redis.url;
      },
      error: error => { throw error; },
    },
  );
} catch (error) {
  console.error('Could not start WebFM');
  console.error(`Error: ${error.message}`);
  process.exit(1);
}

module.exports = config;
