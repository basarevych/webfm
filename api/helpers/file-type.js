'use strict';

const { execFile } = require('child_process');

module.exports = {


  friendlyName: 'File type',


  description: 'Get type of a file',


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

    execFile('file', ['--mime-type', '--brief', inputs.filename], (error, stdout) => {
      if (error)
        return exits.error(error);

      exits.success(_.trim(stdout));
    });

  }


};

