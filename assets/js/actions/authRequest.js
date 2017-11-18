'use strict';

import { lockApp, unlockApp } from './app';
import { updateAuthStatus } from './authStatus';
import { hideSignInDialog } from './signInDialog';

export const startAuthRequest = requestedAt => {
  return {
    type: 'AUTH_REQUEST_REQUEST',
    requestedAt,
  };
};

export const endAuthRequest = (requestedAt, fetched, data) => {
  if (fetched) {
    return {
      type: 'AUTH_REQUEST_SUCCESS',
      requestedAt,
      success: data.success,
      messages: data.messages,
      errors: data.errors,
    };
  }

  return {
    type: 'AUTH_REQUEST_FAILURE',
    requestedAt,
  };
};

export const resetAuthRequest = () => {
  return {
    type: 'AUTH_REQUEST_RESET',
  };
};

export const authRequest = (login, password) => {
  return async (dispatch, getState) => {
    let { app, authRequest } = getState();
    if (app.locked || authRequest.isFetching)
      return;

    dispatch(lockApp());
    dispatch(resetAuthRequest());
    let start = dispatch(startAuthRequest(Date.now()));
    return new Promise(resolve => {
      let fail = () => {
        dispatch(endAuthRequest(start.requestedAt, false));
        dispatch(unlockApp());
        resolve();
      };

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
              let end = dispatch(endAuthRequest(start.requestedAt, true, data));
              dispatch(unlockApp());
              if (end.success) {
                dispatch(hideSignInDialog());
                await dispatch(updateAuthStatus(true));
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
  return async (dispatch, getState) => {
    let { app } = getState();
    if (app.locked)
      return;

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
                await dispatch(updateAuthStatus(true));
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
