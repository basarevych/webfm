'use strict';

import { lockApp, unlockApp } from './app';
import { updateAuthStatus } from './authStatus';
import { hideSignInModal } from './signInModal';

export const startAuthRequest = requestedAt => {
  return dispatch => {
    dispatch(lockApp());
    return dispatch({
      type: 'AUTH_REQUEST_REQUEST',
      requestedAt,
    });
  };
};

export const endAuthRequest = (requestedAt, fetched, data) => {
  return dispatch => {
    dispatch(unlockApp());

    let action;
    if (fetched) {
      action = {
        type: 'AUTH_REQUEST_SUCCESS',
        requestedAt,
        success: data.success,
        messages: data.messages,
        errors: data.errors,
      };
    } else {
      action = {
        type: 'AUTH_REQUEST_FAILURE',
        requestedAt,
      };
    }

    return dispatch(action);
  };
};

export const resetAuthRequest = () => {
  return {
    type: 'AUTH_REQUEST_RESET',
  };
};

export const authRequest = () => {
  return async (dispatch, getState) => {
    let { authRequest, signInModal } = getState();
    if (authRequest.isFetching)
      return;

    let login = signInModal.login;
    let password = signInModal.password;

    dispatch(resetAuthRequest());
    let start = await dispatch(startAuthRequest(Date.now()));
    return new Promise(resolve => {
      let fail = () => resolve(dispatch(endAuthRequest(start.requestedAt, false)));

      $.ajax({
        url: '/auth/csrf',
        type: 'GET',
        success: data => {
          $.ajax({
            url: '/auth/sign-in',
            type: 'POST',
            data: {
              login,
              password,
              _csrf: data._csrf,
            },
            success: async data => {
              let end = await dispatch(endAuthRequest(start.requestedAt, true, data));
              if (end.success) {
                dispatch(hideSignInModal());
                dispatch(updateAuthStatus(true));
              }
              resolve();
            },
            error: fail,
          });
        },
        error: fail,
      });
    });
  };
};

export const authSignOut = () => {
  return async dispatch => {
    return new Promise(resolve => {
      $.ajax({
        url: '/auth/csrf',
        type: 'GET',
        success: data => {
          $.ajax({
            url: '/auth/sign-out',
            type: 'POST',
            data: {
              _csrf: data._csrf,
            },
            success: async data => {
              if (data.success)
                dispatch(updateAuthStatus(true));
              resolve();
            },
            error: resolve,
          });
        },
        error: resolve,
      });
    });
  };
};
