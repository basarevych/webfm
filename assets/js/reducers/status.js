'use strict';

const status = (
  state = {
    requestedAt: 0,
    promise: Promise.resolve(),
    isFetching: false,
    didFetch: false,
    isAuthorized: false,
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
          promise: action.promise,
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
          isAuthorized: action.authorized,
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
