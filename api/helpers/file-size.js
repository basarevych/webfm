'use strict';

const { execFile } = require('child_process');

module.exports = {


  friendlyName: 'File size',


  description: 'Get size of a file in KB',


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

    execFile('du', ['-sk', inputs.filename], (error, stdout) => {
      if (error)
        return exits.error(error);

      exits.success(parseInt(stdout.split(' ')[0].trim()));
    });

  }


};

