'use strict';

import './polyfills';
import utf8 from 'utf8';
import base64 from 'base64util';
import socketIOClient from 'socket.io-client';
import sailsIOClient from 'sails.io.js/sails.io';
import './lib/i18n';
import Breakpoints from 'breakpoints-js';
import React from 'react';
import { hydrate } from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import storeFactory from './store/storeFactory';
import Root from './containers/Root';
import { initApp, screenResize } from './actions/app';
import { sm, md, lg, xl } from '../styles/index.scss';

window.io = sailsIOClient(socketIOClient);
window.io.sails.autoConnect = true;
window.io.sails.reconnection = true;
window.io.sails.environment = process.env.NODE_ENV;

Breakpoints({
  xs: {
    min: 0,
    max: parseInt(sm) - 1,
  },
  sm: {
    min: parseInt(sm),
    max: parseInt(md) - 1,
  },
  md: {
    min: parseInt(md),
    max: parseInt(lg) - 1,
  },
  lg: {
    min: parseInt(lg),
    max: parseInt(xl) - 1,
  },
  xl: {
    min: parseInt(xl),
    max: Infinity,
  },
});

const history = createHistory();
const store = storeFactory(
  history,
  JSON.parse(
    base64.byteDecode(window.__STATE__),
    (key, value) => _.isString(value) ? utf8.decode(value) : value
  )
);
delete window.__STATE__;

window.addEventListener('resize', () => store.dispatch(screenResize()));
window.addEventListener('orientationchange', () => store.dispatch(screenResize()));

document.addEventListener('DOMContentLoaded', () => {
  hydrate(
    <Root store={store} history={history} />,
    document.getElementById('app')
  );
  document.body.classList.add('loaded');
  setTimeout(() => store.dispatch(initApp(history)));
});
