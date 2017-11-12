'use strict';

import React from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import webfm from './reducers';
import App from './containers/App';

$(window).on('load', () => {
  let store = createStore(webfm);

  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  );

  $('#page-loader').fadeOut(() => $('#app').show());
});
