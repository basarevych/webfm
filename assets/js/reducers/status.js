'use strict';

const status = (
  state = {
    requestedAt: 0,
    isFetching: false,
    didFetch: false,
    authorized: false,
    login: 'anonymous',
    locale: 'en',
  },
  action
) => {
  switch (action.type) {
    case 'STATUS_REQUEST':
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
    case 'STATUS_SUCCESS':
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
          locale: action.locale,
        }
      );
    case 'STATUS_FAILURE':
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

export default status;
