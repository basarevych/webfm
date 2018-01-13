'use strict';

module.exports = function defineWatcherHook(sails) {

  const sockets = new Map();

  async function broadcast(socketId, userId, share, directory) {
    try {
      let listing = await sails.helpers.shareListing(userId, share, directory === '/' ? directory : directory + '/');
      sails.sockets.broadcast(socketId, 'update', {
        share: listing.share,
        directory: listing.directory,
        list: listing.list,
      });
    } catch (error) {
      sails.sockets.broadcast(socketId, 'update', {
        share: share,
        directory: directory,
        list: null,
      });
    }
  }

  async function trigger(realPath) {
    try {
      sails.log.debug(`Watch trigger: ${realPath}`);

      for (let [socketId, info] of sockets) {
        if ((info.left.realPath + '/').startsWith(realPath + '/'))
          await broadcast(socketId, info.userId, info.left.share, info.left.directory);
        if ((info.right.realPath + '/').startsWith(realPath + '/') && info.right.realPath !== info.left.realPath)
          await broadcast(socketId, info.userId, info.right.share, info.right.directory);
      }
    } catch (error) {
      sails.log.debug(`Error during FS trigger: ${error.message}`);
    }
  }

  async function register(socketId, userId, pane, share, directory, realPath) {
    try {
      let info = sockets.get(socketId);
      if (!info) {
        info = {
          userId,
          left: {
            realPath: null,
            share: null,
            directory: null,
          },
          right: {
            realPath: null,
            share: null,
            directory: null,
          },
        };
        sockets.set(socketId, info);
      }

      if (pane === 'LEFT' || pane === 'BOTH') {
        info.left.realPath = realPath;
        info.left.share = share;
        info.left.directory = directory;
      }

      if (pane === 'RIGHT' || pane === 'BOTH') {
        info.right.realPath = realPath;
        info.right.share = share;
        info.right.directory = directory;
      }
    } catch (error) {
      sails.log.debug(`Could not install watcher: ${error.message}`);
    }
  }

  async function unregister(socketId) {
    sockets.delete(socketId);
  }

  return {

    initialize: function (done) {
      return done();
    },

    broadcast,
    trigger,
    register,
    unregister,

  };

};
