module.exports = {
  // fontAwesomeCustomizations: "./_font-awesome.config.scss",

  extractStyles: process.env.NODE_ENV === 'production',

  styles: {
    'mixins': true,

    'path': true,
    'core': true,
    'larger': true,
    'fixed-width': true,
    'list': true,
    'bordered-pulled': true,
    'animated': true,
    'rotated-flipped': true,
    'stacked': true,
    'icons': true,
    'screen-reader': true,
  }
};
