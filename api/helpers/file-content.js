'use strict';

const fs = require('fs');

module.exports = {


  friendlyName: 'File content',


  description: 'Load content of a file',


  inputs: {
    filename: {
      type: 'string',
      required: true,
      description: 'Path to the file',
    },
  },


  exits: {

  },


  fn: async function (inputs, exits) {

    fs.readFile(inputs.filename, (error, buffer) => {
      if (error)
        return exits.error(error);

      exits.success(buffer.toString('base64'));
    });

  }


};

