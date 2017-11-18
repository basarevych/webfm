'use strict';

import 'bootstrap';
import { combineReducers } from 'redux';
import app from './app';
import authStatus from './authStatus';
import authRequest from './authRequest';
import signInDialogOpen from './signInDialogOpen';

const webfm = combineReducers({
  app,
  authStatus,
  authRequest,
  signInDialogOpen,
});

export default webfm;
