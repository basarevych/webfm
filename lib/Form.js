'use strict';

class Form {
  constructor(values) {
    this._success = true;
    this.values = values;
    this.messages = {};
    this.errors = {};
  }

  set success(success) {
    this._success = success;
  }

  get success() {
    return Object.keys(this.errors).length === 0 && this._success;
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

  toJSON() {
    return {
      success: this.success,
      values: this.values,
      errors: this.errors,
      messages: this.messages,
    };
  }
}

module.exports = Form;
