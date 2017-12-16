'use strict';

import _ from 'lodash';
import 'isomorphic-fetch';
import socketIOClient from 'socket.io-client';
import sailsIOClient from 'sails.io.js/sails.io';
import './lib/i18n';
import Breakpoints from 'breakpoints-js';
import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import storeFactory from './store/storeFactory';
import App from './containers/App';
import { initApp, connectApp, disconnectApp, screenResize } from './actions/app';

window._ = _;
window.io = sailsIOClient(socketIOClient);
Breakpoints();

const history = createHistory();
const store = storeFactory(history, JSON.parse(atob(window.__STATE__)));
delete window.__STATE__;

io.sails.reconnection = true;
io.socket
  .on('connect', () => store.dispatch(connectApp()))
  .on('disconnect', () => store.dispatch(disconnectApp()));

window.addEventListener('resize', () => store.dispatch(screenResize()));
window.addEventListener('orientationchange', () => store.dispatch(screenResize()));

document.addEventListener('DOMContentLoaded', () => {
  hydrate(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
  );
  document.body.className = 'loaded';
  store.dispatch(initApp(history));
});
