'use strict';

const _ = require('lodash');
const path = require('path');
const fs = require('fs');

let browsers;
try {
  const babelConfig = JSON.parse(fs.readFileSync(path.join(__dirname, 'assets', 'js', '.babelrc'), 'utf8'));
  for (let preset of babelConfig.presets) {
    if (_.isArray(preset) && preset.length > 1 && preset[0] === 'env') {
      browsers = preset[1].targets.browsers;
      break;
    }
  }
  if (!browsers)
    throw new Error('Could not load browsers list from .babelrc');
} catch (error) {
  console.error(error.message);
  process.exit(1);
}

const plugins = {
  'postcss-import': {},
  'precss': {},
  'css-mqpacker': {},
  'postcss-preset-env': {
    browsers,
  },
}

if (process.env.NODE_ENV === 'production')
  plugins['postcss-clean'] = { keepSpecialComments: 0 };

module.exports = () => ({ plugins });
