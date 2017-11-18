'use strict';

const authStatus = (
  state = {
    requestedAt: 0,
    isFetching: false,
    didFetch: false,
    authorized: false,
    login: 'anonymous',
  },
  action
) => {
  switch (action.type) {
    case 'AUTH_STATUS_REQUEST':
      if (action.requestedAt <= state.requestedAt)
        return state;

      return Object.assign(
        {},
        state,
        {
          requestedAt: action.requestedAt,
          isFetching: true,
        }
      );
    case 'AUTH_STATUS_SUCCESS':
      if (action.requestedAt < state.requestedAt)
        return state;

      return Object.assign(
        {},
        state,
        {
          requestedAt: action.requestedAt,
          isFetching: false,
          didFetch: true,
          authorized: action.authorized,
          login: action.login,
        }
      );
    case 'AUTH_STATUS_FAILURE':
      if (action.requestedAt < state.requestedAt)
        return state;

      return Object.assign(
        {},
        state,
        {
          requestedAt: action.requestedAt,
          isFetching: false,
          didFetch: false,
        }
      );
  }

  return state;
};

export default authStatus;
