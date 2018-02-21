'use strict';

import { applyMiddleware, createStore } from 'redux';
import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import app from '../reducers/app';
import router from '../reducers/router';
import user from '../reducers/user';
import navbar from '../reducers/navbar';
import progress from '../reducers/progress';
import dialogFactory from '../reducers/dialogFactory';
import failureDialog from '../reducers/failureDialog';
import paneFactory from '../reducers/paneFactory';
import infoListFactory from '../reducers/infoListFactory';

const storeFactory = (history, initialState) =>
  applyMiddleware(thunk, routerMiddleware(history))(createStore)(
    combineReducers({
      app,
      router,
      user,
      navbar,
      progress,
      failureDialog,
      signInDialog: dialogFactory('SIGN_IN'),
      mkdirDialog: dialogFactory('MKDIR'),
      renameDialog: dialogFactory('RENAME'),
      copyDialog: dialogFactory('COPY'),
      moveDialog: dialogFactory('MOVE'),
      deleteDialog: dialogFactory('DELETE'),
      leftPane: paneFactory('LEFT'),
      rightPane: paneFactory('RIGHT'),
      lists: infoListFactory('LIST'),
      contents: infoListFactory('CONTENT'),
      infos: infoListFactory('INFO'),
      sizes: infoListFactory('SIZE'),
    }),
    initialState && fromJS(initialState),
  );

export default storeFactory;
