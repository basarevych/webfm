const _ = require('lodash');

module.exports = {
  transformIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/assets/build.dev/",
    "<rootDir>/assets/build.prod/",
  ],
  moduleNameMapper: {
    ".*\\.scss$": "<rootDir>/package.json",
  },
  globals: {
    _
  },
};
