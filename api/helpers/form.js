'use strict';

class Form {
  constructor(values) {
    this.success = true;
    this.values = values;
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
    },

    validate: {
      type: 'string',
      description: 'Particular field name to validate.'
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
        let key = `${inputs.model.identity}.${attr}.${error.code}`;
        let translated = sails.__(key);
        form.addError(attr, error.code, translated === key ? _.escape(error.message) : translated);
      }
    }

    if (typeof inputs.model.postValidate === 'function')
      await inputs.model.postValidate({ form, validate: inputs.validate });

    if (form.success)
      form.success = !Object.keys(form.errors).length;

    return exits.success(form);
  },

};

