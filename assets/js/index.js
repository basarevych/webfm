'use strict';

import './lib/i18n';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux';
import storeFactory from './store/storeFactory';
import App from './containers/App';
import { initApp, connectApp, disconnectApp, screenResize } from './actions/app';

const history = createHistory();
const store = storeFactory(history);

$(() => {
  render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
  );

  store.dispatch(initApp(history));

  $(window)
    .on('load', () => store.dispatch(initApp(history)))
    .on('resize', () => store.dispatch(screenResize()))
    .on('orientationchange', () => store.dispatch(screenResize()));

  io.socket
    .on('connect', () => store.dispatch(connectApp()))
    .on('disconnect', () => store.dispatch(disconnectApp()));
});
