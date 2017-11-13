'use strict';

import 'bootstrap';
import { combineReducers } from 'redux';
import app from './app';
import authStatus from './authStatus';
import mainNavbarOpen from './mainNavbarOpen';
import signInModalOpen from './signInModalOpen';

const webfm = combineReducers({
  app,
  authStatus,
  mainNavbarOpen,
  signInModalOpen,
});

export default webfm;
