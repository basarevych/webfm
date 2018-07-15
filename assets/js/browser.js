import './polyfills';
import utf8 from 'utf8';
import { byteDecode } from 'base64util';
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
import { locals as styles } from '!!css-loader!sass-loader!../styles/export.scss';

window.io = sailsIOClient(socketIOClient);
window.io.sails.autoConnect = true;
window.io.sails.reconnection = true;
window.io.sails.environment = process.env.NODE_ENV;

Breakpoints({
  xs: {
    min: 0,
    max: parseInt(styles.sm) - 1,
  },
  sm: {
    min: parseInt(styles.sm),
    max: parseInt(styles.md) - 1,
  },
  md: {
    min: parseInt(styles.md),
    max: parseInt(styles.lg) - 1,
  },
  lg: {
    min: parseInt(styles.lg),
    max: parseInt(styles.xl) - 1,
  },
  xl: {
    min: parseInt(styles.xl),
    max: Infinity,
  },
});

const history = createHistory();
const store = storeFactory(
  history,
  JSON.parse(
    byteDecode(window.__STATE__),
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
