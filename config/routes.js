/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝

  'GET /': '/~',

  'GET /~*': 'app',

  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝

  'GET /status': 'status',

  'GET /auth/csrf': 'security/grant-csrf-token',
  'POST /auth/sign-in': 'auth/sign-in',
  'POST /auth/sign-out': 'auth/sign-out',

  'POST /pane/cd': 'pane/cd',
  'POST /pane/loaded': 'pane/loaded',
  'POST /pane/mkdir': 'pane/mkdir',
  'POST /pane/rename': 'pane/rename',
  'POST /pane/find': 'pane/find',
  'POST /pane/copy': 'pane/copy',
  'POST /pane/move': 'pane/move',
  'POST /pane/del': 'pane/del',
  'GET /pane/content': 'pane/content',
  'GET /pane/info': 'pane/info',
  'GET /pane/size': 'pane/size',

  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝



  //  ╔╦╗╦╔═╗╔═╗
  //  ║║║║╚═╗║
  //  ╩ ╩╩╚═╝╚═╝


};
