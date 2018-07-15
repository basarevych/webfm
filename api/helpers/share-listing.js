'use strict';

const _path = require('path');

module.exports = {


  friendlyName: 'Share listing',


  description: 'Get listing of a share',


  inputs: {
    userId: {
      type: 'string',
      required: true,
      description: 'ID of current user'
    },

    share: {
      type: 'string',
      required: true,
      description: 'Share name',
    },

    path: {
      type: 'string',
      description: 'Path inside share',
    },
  },


  exits: {

  },


  fn: async function (inputs, exits) {

    let getNode = (share, path) => {
      return Node.findOne({ share, path }).populate(
        'nodes',
        {
          select: ['id', 'path', 'directory', 'name', 'target', 'size', 'isDirectory', 'isSymLink']
        }
      );
    };

    let path = inputs.path;
    if (!path || path[0] !== '/')
      path = '/' + (path || '');

    let shares = await Share.find({ user: inputs.userId }); // eslint-disable-line lodash/prefer-lodash-method
    if (!shares.length)
      return exits.error(new Error('No shares defined for you'));

    let realParentPath;
    let directory;
    let name;
    let list = null;
    try {
      for (let item of shares) {
        if (item.name === inputs.share) {
          let node;
          try {
            node = await getNode(item.id, path);
          } catch (error) {
            if (_.endsWith(path, '/')) {
              throw error;
            } else {
              path = _path.dirname(_path.resolve(path));
              if (path !== '/')
                path += '/';
              node = await getNode(item.id, path);
            }
          }
          if (node.isDirectory && _.endsWith(path, '/')) {
            path = node.path;
            if (path !== '/')
              path += '/';
            directory = node.path;
            name = '';
          } else {
            path = node.path;
            directory = node.directory;
            name = node.name;
            node = await getNode(item.id, directory);
          }

          realParentPath = node.realPath;
          list = node.nodes;
          if (directory !== '/') {
            list.unshift({
              id: `${inputs.userId}:${inputs.share}:${_path.dirname(directory)}`,
              directory,
              name: '..',
              size: -1,
              isDirectory: true,
              isSymLink: false,
            });
          }
          break;
        }
      }
    } catch (unused) {
      return exits.error(new Error('Could not read path'));
    }

    if (!list)
      return exits.error(new Error('Share not found'));

    return exits.success({ realParentPath, share: inputs.share, path, directory, name, list });

  }


};

