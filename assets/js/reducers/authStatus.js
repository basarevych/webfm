'use strict';

const authStatus = (
  state = {
    isFetching: false,
    requestedAt: 0,
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
          isFetching: true,
          requestedAt: action.requestedAt,
        }
      );
    case 'AUTH_STATUS_SUCCESS':
      if (action.requestedAt < state.requestedAt)
        return state;

      return Object.assign(
        {},
        state,
        {
          isFetching: false,
          requestedAt: action.requestedAt,
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
          isFetching: false,
          requestedAt: action.requestedAt,
        }
      );
  }

  return state;
};

export default authStatus;
