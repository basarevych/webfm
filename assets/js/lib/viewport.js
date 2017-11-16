'use strict';

import viewport from 'responsive-toolkit';

viewport.use('bs4', {
  'xs': $('<div class="device-xs d-block d-sm-none"></div>'),
  'sm': $('<div class="device-sm d-none d-sm-block d-md-none"></div>'),
  'md': $('<div class="device-md d-none d-sm-none d-md-block d-lg-none"></div>'),
  'lg': $('<div class="device-lg d-none d-sm-none d-md-none d-lg-block d-xl-none"></div>'),
  'xl': $('<div class="device-lg d-none d-sm-none d-md-none d-lg-none d-xl-block"></div>')
});

export default viewport;
