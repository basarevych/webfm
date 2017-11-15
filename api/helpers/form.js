'use strict';

class Form {
  constructor() {
    this.success = true;
    this.messages = {};
    this.errors = {};
  }

  addMessage(key, message, type = 'error') {
    this.messages[key] = { type, message: message || sails.__(key) };
  }

  removeMessage(key) {
    delete this.messages[key];
  }

  addError(field, key, message) {
    if (!this.errors[field])
      this.errors[field] = {};

    this.errors[field][key] = { message: message || sails.__(key) };
  }

  removeError(field, key) {
    if (this.errors[field]) {
      delete this.errors[field][key];
      if (!Object.keys(this.errors[field]))
        delete this.errors[field];
    }
  }
}

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
    }
  },


  fn: async function (inputs, exits) {
    let result = new Form();

    if (typeof inputs.model.preValidate === 'function')
      result = await inputs.model.preValidate({ form: result, values: inputs.values });

    for (let attr of Object.keys(inputs.model.attributes)) {
      try {
        inputs.model.validate(attr, inputs.values[attr]);
      } catch (error) {
        let key = `${inputs.model.identity}.${attr}.${error.code}`;
        let translated = sails.__(key);
        result.addError(attr, error.code, translated === key ? _.escape(error.message) : translated);
      }
    }

    if (typeof inputs.model.postValidate === 'function')
      result = await inputs.model.postValidate({ form: result, values: inputs.values });

    if (result.success)
      result.success = !Object.keys(result.errors).length;

    return exits.success(result);
  },

};

