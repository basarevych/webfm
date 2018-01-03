'use strict';

const Form = require('../../lib/Form');

module.exports = {


  friendlyName: 'Form',


  description: 'Validate a form using a model.',


  inputs: {
    model: {
      type: 'ref',
      description: 'Model to use in validation.',
      required: true,
    },

    values: {
      type: 'ref',
      description: 'Object containing model values.',
      required: true,
    },

    validate: {
      type: 'string',
      description: 'Particular field name to validate (or all the fields if not provided).'
    }
  },


  fn: async function (inputs, exits) {
    let form = new Form(inputs.values);

    if (typeof inputs.model.preValidate === 'function')
      await inputs.model.preValidate({ form, validate: inputs.validate });

    for (let attr of Object.keys(inputs.model.attributes)) {
      if (inputs.validate && inputs.validate !== attr)
        continue;

      try {
        form.values[attr] = inputs.model.validate(attr, form.values[attr]);
      } catch (error) {
        let code = error.code || 'ERROR';
        let key = `${inputs.model.identity}.${attr}.${code}`;
        let translated = (code === 'ERROR' ? key : sails.__(key)); // New __(key) will create the key with the same content
        form.addError(attr, code, translated === key ? _.escape(error.message) : translated);
      }
    }

    if (typeof inputs.model.postValidate === 'function')
      await inputs.model.postValidate({ form, validate: inputs.validate });

    return exits.success(form);
  },

};
