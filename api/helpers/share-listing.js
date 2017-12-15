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

    directory: {
      type: 'string',
      description: 'Path inside share',
    },
  },


  exits: {

  },


  fn: async function (inputs, exits) {


    if (!inputs.directory || inputs.directory[0] !== '/')
      inputs.directory = '/' + (inputs.directory || '');

    let shares = await Share.find({ user: inputs.userId });
    if (!shares.length)
      return exits.error('No shares defined for you');

    let list = null;
    try {
      for (let item of shares) {
        if (item.name === inputs.share) {
          let node = await Node.findOne(
            { share: item.id, path: inputs.directory }
          ).populate(
            'nodes',
            {
              select: ['id', 'directory', 'name', 'size', 'isDirectory']
            }
          );

          if (!node.isDirectory)
            return exits.error('Not a directory');

          list = node.nodes;
          if (node.path !== '/') {
            list.unshift({
              id: `${inputs.userId}:${inputs.share}:${node.path}`,
              directory: node.path,
              name: '..',
              size: -1,
              isDirectory: true,
            });
          }
          break;
        }
      }
    } catch (error) {
      return exits.error('Could not read path');
    }

    if (!list)
      return exits.error('Share not found');

    return exits.success({ share: inputs.share, path: inputs.directory, list });

  }


};

