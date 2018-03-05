'use strict';

import createHistory from 'history/createMemoryHistory';
import storeFactory from '../../store/storeFactory';
import * as app from '../app';

describe('app actions', () => {

  let store;

  let fetchURL;
  let fetchOptions;
  let fetchStatus;
  let fetchJSON;

  beforeAll(() => {
    window.fetch = async (url, options) => {
      fetchURL = url;
      fetchOptions = options;
      return {
        status: fetchStatus,
        json: async () => {
          return fetchJSON;
        },
      };
    };
  });

  beforeEach(() => {
    store = storeFactory(createHistory());

    fetchURL = null;
    fetchOptions = null;
    fetchStatus = null;
    fetchJSON = null;
  });

  it('getCSRFToken() works', async () => {
    fetchStatus = 200;
    fetchJSON = { _csrf: 'abc' };

    await store.dispatch(app.getCSRFToken());
    let state = store.getState().toJS();

    expect(fetchURL)
      .toBe('/auth/csrf');

    expect(fetchOptions)
      .toEqual(expect.objectContaining({
        method: 'GET',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      }));

    expect(state.app.csrf)
      .toBe('abc');
  });

  it('getCSRFToken() retries on error', async () => {
    let called = false;
    window.setTimeout = jest.fn(func => {
      called = true;
      fetchStatus = 200;
      fetchJSON = { _csrf: 'abc' };
      func();
    });

    fetchStatus = 500;
    await store.dispatch(app.getCSRFToken());

    expect(called)
      .toBe(true);
  });

});
