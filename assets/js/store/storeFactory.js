'use strict';

import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import app from '../reducers/app';
import user from '../reducers/user';
import navbar from '../reducers/navbar';
import signInDialog from '../reducers/signInDialog';
import paneFactory from '../reducers/paneFactory';
import paneListFactory from '../reducers/paneListFactory';
import paneContentsFactory from '../reducers/paneContentsFactory';
import paneInfoFactory from '../reducers/paneInfoFactory';

const storeFactory = initialState =>
  applyMiddleware(thunk)(createStore)(
    combineReducers({
      app,
      user,
      navbar,
      signInDialog,
      leftPane: paneFactory('LEFT'),
      leftPaneList: paneListFactory('LEFT'),
      leftPaneContents: paneContentsFactory('LEFT'),
      leftPaneInfo: paneInfoFactory('LEFT'),
      rightPane: paneFactory('RIGHT'),
      rightPaneList: paneListFactory('RIGHT'),
      rightPaneContents: paneContentsFactory('RIGHT'),
      rightPaneInfo: paneInfoFactory('RIGHT'),
    }),
    initialState,
  );

export default storeFactory;
