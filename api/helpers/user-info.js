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

    let isAuthorized = !!(inputs.req.session && inputs.req.session.userId);
    let shares = [];

    if (isAuthorized) {
      shares = await Share.find({
        where: { user: inputs.req.session.userId },
        select: ['name', 'isReadOnly'],
      });
      if (!shares.length)
        isAuthorized = false;
    }

    return exits.success({
      isAuthorized,
      login: isAuthorized ? inputs.req.session.userId : 'anonymous',
      locale: inputs.req.getLocale(),
      shares,
    });

  }


};

