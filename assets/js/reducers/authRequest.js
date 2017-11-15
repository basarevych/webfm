'use strict';

const authRequest = (
  state = {
    requestedAt: 0,
    isFetching: false,
    didFetch: false,
    success: false,
    messages: {},
    errors: {},
  },
  action
) => {
  switch (action.type) {
    case 'AUTH_REQUEST_REQUEST':
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
    case 'AUTH_REQUEST_SUCCESS':
      if (action.requestedAt < state.requestedAt)
        return state;

      return Object.assign(
        {},
        state,
        {
          requestedAt: action.requestedAt,
          isFetching: false,
          didFetch: true,
          success: action.success,
          messages: action.messages || {},
          errors: action.errors || {},
        }
      );
    case 'AUTH_REQUEST_FAILURE':
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
    case 'AUTH_REQUEST_RESET':
      return Object.assign(
        {},
        state,
        {
          messages: {},
          errors: {},
        }
      );
      break;
  }

  return state;
};

export default authRequest;
