/**
 * `tasks/register/linkAssets.js`
 *
 * ---------------------------------------------------------------
 *
 * For more information see:
 *   https://sailsjs.com/anatomy/tasks/register/link-assets.js
 *
 */
module.exports = function(grunt) {
  grunt.registerTask('linkAssets', [
    'sails-linker:js',
    'sails-linker:styles',
  ]);
};
