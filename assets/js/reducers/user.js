'use strict';

const user = (
  state = {
    statusRequestedAt: 0,
    isStatusFetching: false,
    isAuthorized: false,
    login: 'anonymous',
    locale: 'en',
    shares: [],
  },
  action
) => {
  switch (action.type) {
    case 'STATUS_REQUEST':
      if (action.requestedAt <= state.statusRequestedAt)
        return state;

      return {
        ...state,
        statusRequestedAt: action.requestedAt,
        isStatusFetching: true,
      };
    case 'STATUS_SUCCESS':
      if (action.requestedAt < state.statusRequestedAt)
        return state;

      return {
        ...state,
        statusRequestedAt: action.requestedAt,
        isStatusFetching: false,
        isAuthorized: action.authorized,
        login: action.login,
        locale: action.locale,
        shares: action.shares.slice(),
      };
    case 'STATUS_FAILURE':
      if (action.requestedAt < state.statusRequestedAt)
        return state;

      return {
        ...state,
        statusRequestedAt: action.requestedAt,
        isStatusFetching: false,
        isAuthorized: false,
        login: 'anonymous',
        shares: [],
      };
    case 'SET_USER':
      return {
        ...state,
        isAuthorized: true,
        login: action.login,
        locale: action.locale,
        shares: action.shares.slice(),
      };
  }

  return state;
};

export default user;
