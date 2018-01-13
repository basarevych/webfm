'use strict';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import createHistory from 'history/createMemoryHistory';
import { ConnectedRouter } from 'react-router-redux';
import { matchLocation } from './lib/path';
import storeFactory from './store/storeFactory';
import App from './containers/App';
import { setServerState } from './actions/app';

module.exports.matchLocation = matchLocation;
module.exports.render = async function (params) {
  const history = createHistory();
  const store = storeFactory(history);

  history.push(params.url);
  if (params.isAuthorized)
    await store.dispatch(setServerState(params));

  let html = renderToString(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App/>
      </ConnectedRouter>
    </Provider>
  );

  let state = store.getState();

  return { html, state };
};
