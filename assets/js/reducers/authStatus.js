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
      if (state.requestedAt > action.requestedAt)
        return state;

      return {
        isFetching: true,
        requestedAt: action.requestedAt,
        authorized: state.authorized,
        login: state.login,
      };
    case 'AUTH_STATUS_SUCCESS':
      if (state.requestedAt !== action.requestedAt)
        return state;

      return {
        isFetching: false,
        requestedAt: state.requestedAt,
        authorized: action.authorized,
        login: action.login,
      };
    case 'AUTH_STATUS_FAILURE':
      if (state.requestedAt !== action.requestedAt)
        return state;

      return {
        isFetching: false,
        requestedAt: state.requestedAt,
        authorized: state.authorized,
        login: state.login,
      };
  }
  return state;
};

export default authStatus;
