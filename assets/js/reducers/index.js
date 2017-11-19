'use strict';

import 'bootstrap';
import { combineReducers } from 'redux';
import app from './app';
import authStatus from './authStatus';
import signInDialog from './signInDialog';

const webfm = combineReducers({
  app,
  authStatus,
  signInDialog,
});

export default webfm;
