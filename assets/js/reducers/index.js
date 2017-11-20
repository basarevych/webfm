'use strict';

import 'bootstrap';
import { combineReducers } from 'redux';
import app from './app';
import status from './status';
import signInDialog from './signInDialog';
import pane from './pane';

const webfm = combineReducers({
  app,
  status,
  signInDialog,
  leftPane: pane('LEFT'),
  rightPane: pane('RIGHT'),
});

export default webfm;
