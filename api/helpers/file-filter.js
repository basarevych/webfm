'use strict';

module.exports = {


  friendlyName: 'File filter',


  description: 'Filter nodes by a glob',


  inputs: {
    nodes: {
      type: 'ref',
      required: true,
      description: 'Nodes to filter'
    },

    name: {
      type: 'string',
      required: true,
      description: 'Name with wildcards',
    },
  },


  exits: {

  },


  fn: async function (inputs, exits) {

    let reString = '';
    for (let chr of inputs.name) {
      if (chr === '*')
        reString += '.*';
      else if (chr === '?')
        reString += '.?';
      else
        reString += chr.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
    }

    let re = new RegExp(`^${reString}$`);
    let result = [];
    for (let item of inputs.nodes) {
      if (re.test(item.name))
        result.push(item);
    }

    return exits.success(result);

  }


};

