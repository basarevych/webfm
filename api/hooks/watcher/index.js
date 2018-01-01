'use strict';

const fs = require('fs');

module.exports = function defineWatcherHook(sails) {

  const sockets = new Map();
  const watchers = new Map();
  const timers = new Map();

  async function trigger(root, eventType, filename) {
    try {
      sails.log.debug(`FS Event: ${root}, ${eventType}, ${filename}`);

      let now = Date.now();
      timers.set(root, now);

      let [userId, share, path] = root.split(':');
      let listing = await sails.helpers.shareListing(userId, share, path + '/');

      if (timers.get(root) === now)
        sails.sockets.broadcast(root, 'watch', { share: listing.share, directory: listing.directory, list: listing.list });
    } catch (error) {
      sails.log.debug(`Error during FS event: ${error.message}`);
    }
  }

  async function watch(root, realPath) {
    if (!root || !realPath)
      return;

    let watcher = watchers.get(root);
    if (!watcher) {
      watcher = {
        numListeners: 0,
        fsWatcher: fs.watch(realPath, (eventType, filename) => trigger(root, eventType, filename)),
      };
      watchers.set(root, watcher);
    }

    watcher.numListeners++;
    sails.log.debug(`Added FS watcher on ${root} (watching: ${watcher.numListeners})`);
  }

  async function unwatch(root) {
    if (!root || !watchers.has(root))
      return;

    let watcher = watchers.get(root);
    if (--watcher.numListeners <= 0) {
      watcher.fsWatcher.close();
      watchers.delete(root);
      sails.log.debug(`FS ${root} is not watched anymore`);
    } else {
      sails.log.debug(`Removed FS watcher on ${root} (watching: ${watcher.numListeners})`);
    }
  }

  return {

    initialize: function (done) {
      return done();
    },

    register: async function (socketId, pane, root) {

      try {
        let parts = root.split(':');
        let path = parts.pop();
        let share = parts.join(':');
        let node = await Node.findOne({ share, path });
        if (!node.isValid || !node.isDirectory)
          throw new Error('Node is invalid');

        let info = sockets.get(socketId);
        if (!info) {
          info = {
            left: null,
            right: null,
          };
          sockets.set(socketId, info);
        }

        if ((pane === 'LEFT' || pane === 'BOTH') && info.left !== root) {
          if (info.left)
            sails.sockets.leave(socketId, info.left);
          await unwatch(info.left);
          info.left = root;
          await watch(info.left, node.realPath);
          if (info.left)
            sails.sockets.join(socketId, info.left);
        }

        if ((pane === 'RIGHT' || pane === 'BOTH') && info.right !== root) {
          if (info.right && info.right !== info.left)
            sails.sockets.leave(socketId, info.right);
          await unwatch(info.right);
          info.right = root;
          await watch(info.right, node.realPath);
          if (info.right && info.right !== info.left)
            sails.sockets.join(socketId, info.right);
        }
      } catch (error) {
        sails.log.debug(`Could not install watcher: ${error.message}`);
      }

    },

    unregister: async function (socketId) {

      let info = sockets.get(socketId);
      if (info) {
        if (info.left)
          sails.sockets.leave(socketId, info.left);
        if (info.right && info.right !== info.left)
          sails.sockets.leave(socketId, info.right);
        await unwatch(info.left);
        await unwatch(info.right);
        sockets.delete(socketId);
      }

    },

  };

};
