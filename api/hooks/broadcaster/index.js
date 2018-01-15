'use strict';

module.exports = function defineBroadcasterHook(sails) {

  let userMap = new Map();
  let socketMap = new Map();

  class Entry {
    constructor(userId) {
      this.userId = userId;
      this.sockets = new Set();
      this.message = '';
      this.sent = 0;
    }
  }

  function tick() {
    for (let entry of userMap.values()) {
      if (entry.sent >= entry.message.length)
        continue;

      let msg = entry.message.slice(entry.sent);
      for (let id of Array.from(entry.sockets))
        sails.sockets.broadcast(id, 'progress-more', msg);
      entry.sent = entry.message.length;
    }

    setTimeout(tick, 1000);
  }

  async function register(socketId, userId) {
    await unregister(socketId);

    let entry = userMap.get(userId);
    if (!entry) {
      entry = new Entry(userId);
      userMap.set(userId, entry);
    }

    if (!socketMap.has(socketId))
      socketMap.set(socketId, entry);

    entry.sockets.add(socketId);
    sails.log.debug(`Broadcaster registered socket ${socketId}`);

    if (entry.message && entry.sent)
      sails.sockets.broadcast(socketId, 'progress-start', entry.message.slice(0, entry.sent));
  }

  async function unregister(socketId) {
    let entry = socketMap.get(socketId);
    if (!entry)
      return;

    entry.sockets.delete(socketId);
    socketMap.delete(socketId);

    if (!entry.sockets.size)
      userMap.delete(entry.userId);

    sails.log.debug(`Broadcaster unregistered socket ${socketId}`);
  }

  async function startProgress(userId, message) {
    let entry = userMap.get(userId);
    if (!entry)
      return;

    for (let id of Array.from(entry.sockets))
      sails.sockets.broadcast(id, 'progress-start', message);

    entry.message = message;
    entry.sent = message.length;
  }

  async function moreProgress(userId, message) {
    let entry = userMap.get(userId);
    if (!entry)
      return;

    entry.message += message;
  }

  async function finishProgress(userId) {
    let entry = userMap.get(userId);
    if (!entry)
      return;

    if (entry.message && entry.sent < entry.message.length) {
      let msg = entry.message.slice(entry.sent);
      for (let id of Array.from(entry.sockets))
        sails.sockets.broadcast(id, 'progress-finish', msg);
    }

    entry.message = '';
    entry.sent = 0;
  }

  return {

    started: false,

    initialize: function (done) {
      tick();
      return done();
    },

    register,
    unregister,
    startProgress,
    moreProgress,
    finishProgress,

  };

};
