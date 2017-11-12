'use strict';

import 'bootstrap';
import { combineReducers } from 'redux';
import mainNavbarOpen from './mainNavbarOpen';
import signInModalOpen from './signInModalOpen';

const webfm = combineReducers({
  mainNavbarOpen,
  signInModalOpen,
});

export default webfm;
