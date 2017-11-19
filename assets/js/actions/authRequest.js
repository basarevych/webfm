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

export const authRequest = (values, validate, startedAt) => {
  if (!startedAt)
    startedAt = Date.now();

  return async (dispatch, getState) => {
    let { app, authRequest } = getState();
    if (app.locked || authRequest.isFetching || authRequest.requestedAt >= startedAt)
      return;

    if (!validate)
      dispatch(lockApp());

    dispatch(resetAuthRequest());

    let start = dispatch(startAuthRequest(startedAt));
    return new Promise(resolve => {
      let fail = () => {
        dispatch(endAuthRequest(start.requestedAt, false));

        if (!validate)
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
              login: values.login,
              password: values.password,
              _validate: validate,
              _csrf: data._csrf,
            },
            success: async data => {
              let end = dispatch(endAuthRequest(start.requestedAt, true, data));
              if (!validate) {
                dispatch(unlockApp());

                if (end.success) {
                  dispatch(hideSignInDialog());
                  await dispatch(updateAuthStatus(true));
                }
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
