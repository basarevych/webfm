'use strict';

const fs = require('fs');
const ini = require('ini');

/**
 * Parse .ini file
 * @param {string} contents
 * @return {object}
 */
function parse(contents) {
  let prepared = [];
  for (let line of contents.split('\n')) {
    if (/^\s*\[.+\]\s*$/.test(line))
      line = line.replace(/#/g, '\\#').replace(/;/g, '\\;').replace(/\./g, '\\.');
    prepared.push(line);
  }

  return ini.parse(prepared.join('\n'));
}

/**
 * Convert object to .ini string
 * @param {object} obj
 * @return {string}
 */
function stringify(obj) {
  let prepared = [];
  for (let line of ini.stringify(obj).split('\n')) {
    if (/^\s*\[.+\]\s*$/.test(line))
      line = line.replace(/\\#/g, '#').replace(/\\;/g, ';').replace(/\\\./g, '.');
    prepared.push(line);
  }

  return prepared.join('\n') + '\n';
}

module.exports = {


  friendlyName: 'INI',


  description: 'Simplified .ini file parser (no escaping of special chars in section names).',


  sync: true,


  inputs: {
    filename: {
      type: 'string',
      description: 'If provided ini file will be read from or saved to (if contents also provided).',
    },

    contents: {
      type: 'ref',
      description: 'Object to be converted to ini format.',
    },
  },


  exits: {

  },


  fn: function (inputs, exits) {
    let result;

    try {
      if (inputs.contents) {
        result = stringify(inputs.contents);
        if (inputs.filename)
          fs.writeFileSync(inputs.filename, result);
      } else if (inputs.filename) {
        result = parse(fs.readFileSync(inputs.filename, 'utf-8'));
      }
    } catch (error) {
      return exits.error(error);
    }

    return result ? exits.success(result) : exits.error(new Error('No filename and/or no contents provided'));
  }


};

