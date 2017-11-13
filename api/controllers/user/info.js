module.exports = {

  friendlyName: 'Get user info',

  description: 'Return info about requesting user',

  exits: {
    success: {
      responseType: 'json',
    },
  },

  fn: function (inputs, exits, env) {
    exits.success({
      success: true,
      authorized: !!env.req.session.userId,
      login: env.req.session.userId ? env.req.session.userLogin : 'anonymous',
    });
  }
};
