'use strict';

import createHistory from 'history/createMemoryHistory';
import storeFactory from '../../store/storeFactory';
import * as app from '../app';
import * as actions from '../../constants/actionTypes';

describe('app actions', () => {

  let store;
  let fetchParams;
  let fetchResults;
  let ioParams;
  let ioResults;
  let ioEvents;
  let breakpoint;

  beforeAll(() => {
    window.fetch = async (url, options) => {
      fetchParams.push({ url, options });
      let results = fetchResults.shift();
      return {
        status: results && results.status,
        json: async () => {
          return results && results.json;
        },
      };
    };

    let ioFunc = type => (...args) => {
      let url = args.shift();
      let data;
      let cb;
      if (args.length >= 2) {
        data = args.shift();
        cb = args.shift();
      } else {
        data = {};
        cb = args.shift();
      }

      ioParams.push({ type, url, data });
      let results = ioResults.shift();
      cb(results && results.data, results && results.response);
    };

    window.io = {
      socket: {
        get: ioFunc('get'),
        post: ioFunc('post'),
        on: event => ioEvents.push(event),
        isConnected: () => false,
      }
    };

    window.i18n = {
      getLocale: () => {},
      setLocale: () => {},
    };

    window.Breakpoints = {
      current: () => ({ name: breakpoint }),
    }
  });

  beforeEach(() => {
    store = storeFactory(createHistory());
    fetchParams = [];
    fetchResults = [];
    ioParams = [];
    ioResults = [];
    ioEvents = [];
    breakpoint = null;
  });

  it('getCSRFToken() works', async () => {
    fetchResults.push({
      status: 200,
      json: { _csrf: 'abc' },
    });

    await store.dispatch(app.getCSRFToken());
    let state = store.getState().toJS();
    let params = fetchParams.shift();

    expect(params.url)
      .toBe('/auth/csrf');

    expect(params.options)
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
    let isRetried = false;
    window.setTimeout = jest.fn(func => {
      isRetried = true;
      fetchResults.push({
        status: 200,
        json: { _csrf: 'abc' },
      });
      func();
    });

    fetchResults.push({
      status: 500,
    });
    await store.dispatch(app.getCSRFToken());

    expect(isRetried)
      .toBe(true);
  });

  it('connectApp() works', async () => {
    fetchResults.push({
      status: 200,
      json: { _csrf: 'abc' },
    });
    ioResults.push({
      response: {
        statusCode: 200,
      },
      data: {
        version: require('../../../../package').version,
      },
    });

    await store.dispatch(app.connectApp());

    let state = store.getState().toJS();
    expect(state.app.isConnected)
      .toBe(true);
  });

  it('disconnectApp() works', async () => {
    await store.dispatch(app.disconnectApp());

    let state = store.getState().toJS();
    expect(state.app.isConnected)
      .toBe(false);
  });

  it('startApp() works', async () => {
    await store.dispatch(app.startApp());

    expect(ioEvents.includes('connect'))
      .toBe(true);
    expect(ioEvents.includes('disconnect'))
      .toBe(true);
    expect(ioEvents.includes('update'))
      .toBe(true);
    expect(ioEvents.includes('progress-start'))
      .toBe(true);
    expect(ioEvents.includes('progress-more'))
      .toBe(true);
    expect(ioEvents.includes('progress-finish'))
      .toBe(true);
  });

  it('setAppVersion() works', async () => {
    await store.dispatch(app.setAppVersion(true));

    let state = store.getState().toJS();
    expect(state.app.isSameVersion)
      .toBe(true);
  });

  it('setTouchDevice() works', async () => {
    await store.dispatch(app.setTouchDevice(true));

    let state = store.getState().toJS();
    expect(state.app.isTouchDevice)
      .toBe(true);
  });

  it('screenResize() works', async () => {
    await store.dispatch({ type: actions.START_APP });

    breakpoint = 'lg';
    await store.dispatch(app.screenResize());

    let state = store.getState().toJS();
    expect(state.app.breakpoint)
      .toBe('lg');
  });

  it('screenResize() toggles other pane', async () => {
    await store.dispatch({ type: actions.START_APP });

    breakpoint = 'xs';
    await store.dispatch(app.screenResize());

    let state = store.getState().toJS();
    expect(state.rightPane.isVisible)
      .toBe(false);

    breakpoint = 'lg';
    await store.dispatch(app.screenResize());

    state = store.getState().toJS();
    expect(state.rightPane.isVisible)
      .toBe(true);
  });

  it('initApp() works', async () => {
    let history = {
      listen: jest.fn(),
    };
    await store.dispatch(app.initApp(history));

    let state = store.getState().toJS();
    expect(state.app.isStarted)
      .toBe(true);
    expect(history.listen)
      .toHaveBeenCalled();
  });

  it('setServerState() works', async () => {
    await store.dispatch(app.setServerState({
      login: 'login',
      locale: 'locale',
      shares: ['one', 'two'],
      share: 'share',
      path: 'path',
      directory: 'directory',
      name: 'name',
    }));

    let state = store.getState().toJS();
    expect(state.user)
      .toEqual(expect.objectContaining({
        isAuthorized: true,
        login: 'login',
        locale: 'locale',
        shares: ['one', 'two'],
      }));
    expect(state.leftPane)
      .toEqual(expect.objectContaining({
        share: 'share',
        path: 'path',
        directory: 'directory',
        name: 'name',
      }));
    expect(state.rightPane)
      .toEqual(expect.objectContaining({
        share: 'share',
        path: 'path',
        directory: 'directory',
        name: 'name',
      }));
  });

});
