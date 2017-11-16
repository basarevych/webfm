'use strict';

import 'bootstrap';
import { combineReducers } from 'redux';
import app from './app';
import authStatus from './authStatus';
import authRequest from './authRequest';
import mainNavbarOpen from './mainNavbarOpen';
import signInModal from './signInModal';

const webfm = combineReducers({
  app,
  authStatus,
  authRequest,
  mainNavbarOpen,
  signInModal,
});

export default webfm;
