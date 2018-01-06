/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also do this by creating a hook.
 *
 * For more information on bootstrapping your app, check out:
 * https://sailsjs.com/config/bootstrap
 */
'use strict';

const path = require('path');
const fs = require('fs');

module.exports.bootstrap = async function(done) {

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  // if (await User.count() > 0) {
  //   return done();
  // }
  //
  // await User.createEach([
  //   { emailAddress: 'ry@example.com', fullName: 'Ryan Dahl', },
  //   { emailAddress: 'rachael@example.com', fullName: 'Rachael Shaw', },
  //   // etc.
  // ]);
  // ```

  // Don't forget to trigger `done()` when this bootstrap function's logic is finished.
  // (otherwise your server will never lift, since it's waiting on the bootstrap)

  const serverBundle = path.join(__dirname, `../.tmp/public/server.bundle.js`);
  const clientBundle = path.join(__dirname, `../.tmp/public/site.bundle.js`);

  (function load()
  {
    try {
      let stats = fs.statSync(serverBundle);
      if (stats.mtimeMs > Date.now() - 2000)
        throw new Error('Server bundle is not ready');
      if (process.env.NODE_ENV === 'production') {
        stats = fs.statSync(clientBundle);
        if (stats.mtimeMs > Date.now() - 2000)
          throw new Error('Client bundle is not ready');
      }
      sails.hooks.broadcaster.started = true;
      return done();
    } catch (error) {
      setTimeout(load, 1000);
    }
  })();

};
