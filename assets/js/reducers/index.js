'use strict';

import 'bootstrap';
import { combineReducers } from 'redux';
import app from './app';
import status from './status';
import signInDialog from './signInDialog';

const webfm = combineReducers({
  app,
  status,
  signInDialog,
});

export default webfm;
