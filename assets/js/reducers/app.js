'use strict';

const app = (
  state = {
    csrf: '',
    viewport: '',
    shares: [],
    isStarted: false,
    isConnected: false,
  },
  action
) => {
  switch (action.type) {
    case 'START_APP':
      if (state.isStarted)
        return state;

      return Object.assign(
        {},
        state,
        {
          isStarted: true,
        }
      );
    case 'SET_CSRF_TOKEN':
      if (state.csrf === action.token)
        return state;

      return Object.assign(
        {},
        state,
        {
          csrf: action.token,
        }
      );
    case 'SET_SHARES':
      if (_.isEqual(state.shares, action.shares))
        return state;

      return Object.assign(
        {},
        state,
        {
          shares: action.shares,
        }
      );
    case 'CONNECT_APP':
      if (state.isConnected)
        return state;

      return Object.assign(
        {},
        state,
        {
          isConnected: true,
        }
      );
    case 'DISCONNECT_APP':
      if (!state.isConnected)
        return state;

      return Object.assign(
        {},
        state,
        {
          isConnected: false,
        }
      );
    case 'SCREEN_RESIZE':
      if (state.viewport === action.viewport)
        return state;

      return Object.assign(
        {},
        state,
        {
          viewport: action.viewport,
        }
      );
  }

  return state;
};

export default app;
