'use strict';

import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import app from '../reducers/app';
import user from '../reducers/user';
import navbar from '../reducers/navbar';
import signInDialog from '../reducers/signInDialog';
import paneFactory from '../reducers/paneFactory';
import infoListFactory from '../reducers/infoListFactory';

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
      lists: infoListFactory('list'),
      contents: infoListFactory('content'),
      infos: infoListFactory('info'),
      sizes: infoListFactory('size'),
    }),
    initialState,
  );

export default storeFactory;
