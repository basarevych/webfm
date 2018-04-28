/**
 * tasks/pipeline.js
 *
 * The order in which your CSS, JavaScript, and client-side template files
 * injected as <script> or <link> tags.
 *
 * > If you are not relying on automatic asset linking, then you can safely ignore this file.
 *
 * For more information see:
 *   https://sailsjs.com/anatomy/tasks/pipeline.js
 */



//  ██████╗ ██╗      █████╗ ██╗███╗   ██╗        ██████╗███████╗███████╗
//  ██╔══██╗██║     ██╔══██╗██║████╗  ██║       ██╔════╝██╔════╝██╔════╝
//  ██████╔╝██║     ███████║██║██╔██╗ ██║       ██║     ███████╗███████╗
//  ██╔═══╝ ██║     ██╔══██║██║██║╚██╗██║       ██║     ╚════██║╚════██║
//  ██║     ███████╗██║  ██║██║██║ ╚████║    ██╗╚██████╗███████║███████║
//  ╚═╝     ╚══════╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝    ╚═╝ ╚═════╝╚══════╝╚══════╝
//
//  ███████╗██╗██╗     ███████╗███████╗
//  ██╔════╝██║██║     ██╔════╝██╔════╝
//  █████╗  ██║██║     █████╗  ███████╗
//  ██╔══╝  ██║██║     ██╔══╝  ╚════██║
//  ██║     ██║███████╗███████╗███████║
//  ╚═╝     ╚═╝╚══════╝╚══════╝╚══════╝
//
// CSS files to inject as <link> tags, in order.
//
// > Note: if you're using built-in LESS support with default settings,
// > you'll want to change `assets/styles/importer.less` instead.
//
var cssFilesToInject = [

  '**/*.css',

];


//   ██████╗██╗     ██╗███████╗███╗   ██╗████████╗   ███████╗██╗██████╗ ███████╗
//  ██╔════╝██║     ██║██╔════╝████╗  ██║╚══██╔══╝   ██╔════╝██║██╔══██╗██╔════╝
//  ██║     ██║     ██║█████╗  ██╔██╗ ██║   ██║█████╗███████╗██║██║  ██║█████╗
//  ██║     ██║     ██║██╔══╝  ██║╚██╗██║   ██║╚════╝╚════██║██║██║  ██║██╔══╝
//  ╚██████╗███████╗██║███████╗██║ ╚████║   ██║      ███████║██║██████╔╝███████╗
//   ╚═════╝╚══════╝╚═╝╚══════╝╚═╝  ╚═══╝   ╚═╝      ╚══════╝╚═╝╚═════╝ ╚══════╝
//
//          ██╗███████╗    ███████╗██╗██╗     ███████╗███████╗
//          ██║██╔════╝    ██╔════╝██║██║     ██╔════╝██╔════╝
//          ██║███████╗    █████╗  ██║██║     █████╗  ███████╗
//     ██   ██║╚════██║    ██╔══╝  ██║██║     ██╔══╝  ╚════██║
//  ██╗╚█████╔╝███████║    ██║     ██║███████╗███████╗███████║
//  ╚═╝ ╚════╝ ╚══════╝    ╚═╝     ╚═╝╚══════╝╚══════╝╚══════╝
//
// Client-side javascript files to inject as <script> tags, in order.
//
var jsFilesToInject = [

  '**/*.js',
  '!server.bundle.js',

];


//  ███╗   ███╗██╗███████╗ ██████╗       ███████╗███████╗████████╗██╗   ██╗██████╗
//  ████╗ ████║██║██╔════╝██╔════╝       ██╔════╝██╔════╝╚══██╔══╝██║   ██║██╔══██╗
//  ██╔████╔██║██║███████╗██║            ███████╗█████╗     ██║   ██║   ██║██████╔╝
//  ██║╚██╔╝██║██║╚════██║██║            ╚════██║██╔══╝     ██║   ██║   ██║██╔═══╝
//  ██║ ╚═╝ ██║██║███████║╚██████╗██╗    ███████║███████╗   ██║   ╚██████╔╝██║
//  ╚═╝     ╚═╝╚═╝╚══════╝ ╚═════╝╚═╝    ╚══════╝╚══════╝   ╚═╝    ╚═════╝ ╚═╝
//
// The following code exists to parse the arrays of glob expressions above, and
// then expose them via `module.exports`.  **You should not need to change any of
// the code below, unless you are modifying the default asset pipeline.**

// Default path for public folder (see documentation on sailsjs.com for more information)
var tmpPath = '.tmp/public/';

// Prefix relative paths to source files so they point to the proper locations
// (i.e. where the other Grunt tasks spit them out, or in some cases, where
// they reside in the first place)
module.exports.cssFilesToInject = _.map(cssFilesToInject, cssPath => {
  // If we're ignoring the file, make sure the ! is at the beginning of the path
  if (cssPath[0] === '!')
    return require('path').join('!' + tmpPath, cssPath.substr(1));

  return require('path').join(tmpPath, cssPath);
});
module.exports.jsFilesToInject = _.map(jsFilesToInject, jsPath => {
  // If we're ignoring the file, make sure the ! is at the beginning of the path
  if (jsPath[0] === '!')
    return require('path').join('!' + tmpPath, jsPath.substr(1));

  return require('path').join(tmpPath, jsPath);
});
