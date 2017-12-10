'use strict';

import './lib/i18n';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import storeFactory from './store/storeFactory';
import App from './containers/App';
import { initApp, connectApp, disconnectApp, screenResize } from './actions/app';

const store = storeFactory();

$(() => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
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
