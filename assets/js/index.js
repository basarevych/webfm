'use strict';

import './lib/i18n';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import webfm from './reducers';
import App from './containers/app';
import { initApp, connectApp, disconnectApp, screenResize } from './actions/app';

let store = createStore(
  webfm,
  applyMiddleware(thunk)
);

$(() => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  );

  store.dispatch(initApp());

  $(window)
    .on('load', () => store.dispatch(initApp()))
    .on('resize', () => store.dispatch(screenResize()))
    .on('orientationchange', () => store.dispatch(screenResize()));

  io.socket
    .on('connect', () => store.dispatch(connectApp()))
    .on('disconnect', () => store.dispatch(disconnectApp()));
});
