'use strict';

module.exports = {


  friendlyName: 'User info',


  description: 'Get status object of current user',


  inputs: {
    req: {
      friendlyName: 'Request',
      type: 'ref',
      description: 'A reference to the request object (req).',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {

    let authorized = !!(inputs.req.session && inputs.req.session.userId);
    let shares = [];

    if (authorized) {
      shares = await Share.find({
        where: { user: inputs.req.session.userId },
        select: ['name', 'isReadOnly'],
      });
      if (!shares.length)
        authorized = false;
    }

    return exits.success({
      authorized,
      login: authorized ? inputs.req.session.userId : 'anonymous',
      locale: inputs.req.getLocale(),
      shares,
    });

  }


};

