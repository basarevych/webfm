import React from 'react';
import { renderToString } from 'react-dom/server';
import createHistory from 'history/createMemoryHistory';
import storeFactory from './store/storeFactory';
import Root from './containers/Root';
import { setServerState } from './actions/app';

export { matchLocation } from './lib/path';

export async function render(params) {
  const history = createHistory();
  history.push(params.url);

  const store = storeFactory(history);
  if (params.isAuthorized)
    await store.dispatch(setServerState(params));

  let html = renderToString(<Root store={store} history={history} />);
  let state = store.getState();

  return { html, state };
}
