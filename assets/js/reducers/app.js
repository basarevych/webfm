'use strict';

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
    case 'START_APP':
      if (state.isStarted)
        return state;

      return {
        ...state,
        isStarted: true,
      };
    case 'CONNECT_APP':
      return {
        ...state,
        isConnected: true,
        ioTimestamp: action.when,
      };
    case 'DISCONNECT_APP':
      return {
        ...state,
        isConnected: false,
        ioTimestamp: action.when,
      };
    case 'APP_VERSION':
      return {
        ...state,
        isSameVersion: action.isSameVersion,
      };
    case 'SCREEN_RESIZE':
      if (state.breakpoint === action.breakpoint)
        return state;

      let prevBreakpoint = state.breakpoint || action.breakpoint;

      return {
        ...state,
        breakpoint: action.breakpoint,
        prevBreakpoint,
      };
    case 'SET_CSRF_TOKEN':
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
