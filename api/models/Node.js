/**
 * Node.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    id: {
      type: 'string',
      required: true,
      unique: true,
    },

    fullPath: {
      type: 'string',
    },

    realPath: {
      type: 'string',
    },

    root: {
      type: 'string',
    },

    path: {
      type: 'string',
      required: true,
    },

    directory: {
      type: 'string',
    },

    name: {
      type: 'string',
    },

    target: {
      type: 'string',
    },

    size: {
      type: 'number',
    },

    modeNumber: {
      type: 'number',
    },

    modeString: {
      type: 'string',
    },

    userId: {
      type: 'number',
    },

    userName: {
      type: 'string',
    },

    groupId: {
      type: 'number',
    },

    groupName: {
      type: 'string',
    },

    atime: {
      type: 'number',
    },

    mtime: {
      type: 'number',
    },

    ctime: {
      type: 'number',
    },

    isDirectory: {
      type: 'boolean',
    },

    isFile: {
      type: 'boolean',
    },

    isSymLink: {
      type: 'boolean',
    },

    isValid: {
      type: 'boolean',
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    share: {
      model: 'share',
    },

    parent: {
      model: 'node',
    },

    nodes: {
      collection: 'node',
      via: 'parent',
    }

  },

};

