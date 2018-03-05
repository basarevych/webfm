'use strict';

import { Map } from 'immutable';
import * as actions from '../../constants/actionTypes';
import app from '../app';

describe('app reducer', () => {

  it('SET_CSRF_TOKEN works', () => {
    let state = Map({});
    let action = {
      type: actions.SET_CSRF_TOKEN,
      token: 'abc',
    };

    let results = app(state, action).toJS();

    expect(results)
      .toEqual({
        csrf: 'abc',
      });
  });

  it('CONNECT_APP works', () => {
    let state = Map({});
    let action = {
      type: actions.CONNECT_APP,
      when: 123,
    };

    let results = app(state, action).toJS();

    expect(results.isConnected)
      .toBe(true);
    expect(results.ioTimestamp)
      .toBe(123);
  });

  it('DISCONNECT_APP works', () => {
    let state = Map({});
    let action = {
      type: actions.DISCONNECT_APP,
      when: 123,
    };

    let results = app(state, action).toJS();

    expect(results.isConnected)
      .toBe(false);
    expect(results.ioTimestamp)
      .toBe(123);
  });

  it('START_APP works', () => {
    let state = Map({});
    let action = {
      type: actions.START_APP,
    };

    let results = app(state, action).toJS();

    expect(results.isStarted)
      .toBe(true);
  });

  it('APP_VERSION works', () => {
    let state = Map({});
    let action = {
      type: actions.APP_VERSION,
      isSameVersion: true,
    };

    let results = app(state, action).toJS();

    expect(results.isSameVersion)
      .toBe(true);
  });

  it('TOUCH_DEVICE works', () => {
    let state = Map({});
    let action = {
      type: actions.TOUCH_DEVICE,
      isTouchDevice: true,
    };

    let results = app(state, action).toJS();

    expect(results.isTouchDevice)
      .toBe(true);
  });

  it('SCREEN_RESIZE works', () => {
    let state = Map({});
    let action = {
      type: actions.SCREEN_RESIZE,
      breakpoint: 'lg',
    };

    let results = app(state, action).toJS();

    expect(results.breakpoint)
      .toBe('lg');
  });

});
