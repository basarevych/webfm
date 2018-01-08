'use strict';

import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import app from '../reducers/app';
import user from '../reducers/user';
import navbar from '../reducers/navbar';
import progress from '../reducers/progress';
import signInDialog from '../reducers/signInDialog';
import mkdirDialog from '../reducers/mkdirDialog';
import renameDialog from '../reducers/renameDialog';
import copyDialog from '../reducers/copyDialog';
import moveDialog from '../reducers/moveDialog';
import deleteDialog from '../reducers/deleteDialog';
import paneFactory from '../reducers/paneFactory';
import infoListFactory from '../reducers/infoListFactory';

const storeFactory = (history, initialState) =>
  applyMiddleware(thunk, routerMiddleware(history))(createStore)(
    combineReducers({
      router: routerReducer,
      app,
      user,
      navbar,
      progress,
      signInDialog,
      mkdirDialog,
      renameDialog,
      copyDialog,
      moveDialog,
      deleteDialog,
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
