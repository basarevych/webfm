'use strict';

import config from '../../../config/i18n';
import en from '../../../config/locales/en.json';

import * as i18n from 'i18n-for-browser';

i18n.configure({
  locales: {
    'en': en,
  },
  defaultLocale: config.i18n.defaultLocale,
  globalize: true
});

export { i18n as default };
