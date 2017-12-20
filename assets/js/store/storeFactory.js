'use strict';

import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import app from '../reducers/app';
import user from '../reducers/user';
import navbar from '../reducers/navbar';
import signInDialog from '../reducers/signInDialog';
import paneFactory from '../reducers/paneFactory';
import lists from '../reducers/lists';
import contents from '../reducers/contents';
import infos from '../reducers/infos';

const storeFactory = (history, initialState) =>
  applyMiddleware(thunk, routerMiddleware(history))(createStore)(
    combineReducers({
      router: routerReducer,
      app,
      user,
      navbar,
      signInDialog,
      leftPane: paneFactory('LEFT'),
      rightPane: paneFactory('RIGHT'),
      lists,
      contents,
      infos,
    }),
    initialState,
  );

export default storeFactory;
