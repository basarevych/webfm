'use strict';

import './lib/i18n';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import webfm from './reducers';
import App from './components/App';
import { initApp, screenResize } from './actions/app';

$(window).on('load', () => {
  let store = createStore(
    webfm,
    applyMiddleware(thunk)
  );

  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  );

  store.dispatch(initApp());

  $(window).on('resize', () => store.dispatch(screenResize()));
  $(window).on('orientationchange', () => store.dispatch(screenResize()));
});
