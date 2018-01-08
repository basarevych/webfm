/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

  '*': false,

  'app': true,
  'status': true,
  'security/grant-csrf-token': true,

  'auth/sign-in': 'isNotLoggedIn',
  'auth/sign-out': 'isLoggedIn',

  'pane/cd': 'isLoggedIn',
  'pane/watch': 'isLoggedIn',
  'pane/mkdir': 'isLoggedIn',
  'pane/rename': 'isLoggedIn',
  'pane/find': 'isLoggedIn',
  'pane/copy': 'isLoggedIn',
  'pane/move': 'isLoggedIn',
  'pane/del': 'isLoggedIn',
  'pane/content': 'isLoggedIn',
  'pane/info': 'isLoggedIn',
  'pane/size': 'isLoggedIn',

};
