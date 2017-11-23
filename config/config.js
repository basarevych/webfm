/**
 * /etc configuration reader
 */
'use strict';

const _ = require('lodash');
const os = require('os');
const ini = require('../api/helpers/ini');

let config = {
  session: {},
  sockets: {},
};

try {
  ini.fn(
    {
      filename: os.platform() === 'freebsd' ? '/usr/local/etc/webfm/webfm.conf' : '/etc/webfm/webfm.conf',
    },
    {
      success: result => {
        if (!_.isObject(result.redis))
          throw new Error('No [redis] section in the config. Is it in the old format?');
        config.session.url = result.redis.sessions;
        config.sockets.url = result.redis.sockets;
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
