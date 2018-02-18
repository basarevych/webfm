'use strict';

import * as actions from '../constants/actionTypes';

const app = (
  state = {
    ioTimestamp: 0,
    csrf: '',
    breakpoint: '',
    prevBreakpoint: '',
    isStarted: false,
    isConnected: false,
    isSameVersion: true,
  },
  action
) => {
  switch (action.type) {
    case actions.START_APP:
      if (state.isStarted)
        return state;

      return {
        ...state,
        isStarted: true,
      };
    case actions.CONNECT_APP:
      return {
        ...state,
        isConnected: true,
        ioTimestamp: action.when,
      };
    case actions.DISCONNECT_APP:
      return {
        ...state,
        isConnected: false,
        ioTimestamp: action.when,
      };
    case actions.APP_VERSION:
      return {
        ...state,
        isSameVersion: action.isSameVersion,
      };
    case actions.SCREEN_RESIZE:
      if (state.breakpoint === action.breakpoint)
        return state;

      let prevBreakpoint = state.breakpoint || action.breakpoint;

      return {
        ...state,
        breakpoint: action.breakpoint,
        prevBreakpoint,
      };
    case actions.SET_CSRF_TOKEN:
      if (state.csrf === action.token)
        return state;

      return {
        ...state,
        csrf: action.token,
      };
  }

  return state;
};

export default app;
