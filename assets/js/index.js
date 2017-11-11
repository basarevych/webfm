'use strict';
import Bootstrap from 'bootstrap';
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

$(window).on('load', () => {
  $('#page-loader').fadeOut(() => {
    $('html').css('height', 'auto');
    $('body').css('height', 'auto');
    $('#app').show()
  });

  render(
    <App />,
    document.getElementById('app')
  )
});
