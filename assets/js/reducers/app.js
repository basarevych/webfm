'use strict';

import * as actions from '../constants/actionTypes';
import { Map } from 'immutable';

const app = (
  state = Map({
    ioTimestamp: 0,
    csrf: '',
    breakpoint: '',
    prevBreakpoint: '',
    isStarted: false,
    isConnected: false,
    isSameVersion: true,
  }),
  action
) => {
  switch (action.type) {
    case actions.START_APP:
      if (state.get('isStarted'))
        return state;

      return state.set('isStarted', true);
    case actions.CONNECT_APP:
      return state.withMutations(map => {
        map.set('isConnected', true).set('ioTimestamp', action.when);
      });
    case actions.DISCONNECT_APP:
      return state.withMutations(map => {
        map.set('isConnected', false).set('ioTimestamp', action.when);
      });
    case actions.APP_VERSION:
      return state.set('isSameVersion', action.isSameVersion);
    case actions.SCREEN_RESIZE:
      if (state.get('breakpoint') === action.breakpoint)
        return state;

      return state.withMutations(map => {
        map.set('prevBreakpoint', state.get('breakpoint') || action.breakpoint).set('breakpoint', action.breakpoint);
      });
    case actions.SET_CSRF_TOKEN:
      if (state.get('csrf') === action.token)
        return state;

      return state.set('csrf', action.token);
  }

  return state;
};

export default app;
