'use strict';

import { updateAuthStatus } from './authStatus';

export const lockSignInDialog = () => {
  return {
    type: 'LOCK_SIGN_IN_DIALOG',
  };
};

export const unlockSignInDialog = () => {
  return {
    type: 'UNLOCK_SIGN_IN_DIALOG',
  };
};


export const showSignInDialog = () => {
  return (dispatch, getState) => {
    let { signInDialog } = getState();
    if (signInDialog.locked)
      return;

    dispatch(setSignInDialog({ messages: {}, errors: {} }));

    return dispatch({
      type: 'OPEN_SIGN_IN_DIALOG',
    });
  };
};

export const hideSignInDialog = () => {
  return (dispatch, getState) => {
    let { signInDialog } = getState();
    if (signInDialog.locked)
      return;

    dispatch(setSignInDialog({ messages: {}, errors: {} }));

    return dispatch({
      type: 'HIDE_SIGN_IN_DIALOG',
    });
  };
};

export const toggleSignInDialog = () => {
  return (dispatch, getState) => {
    let { signInDialog } = getState();
    if (signInDialog.locked)
      return;

    dispatch(setSignInDialog({ messages: {}, errors: {} }));

    return dispatch({
      type: 'TOGGLE_SIGN_IN_DIALOG',
    });
  };
};

export const submitSignInDialog = submittedAt => {
  return {
    type: 'SEND_SIGN_IN_DIALOG',
    submittedAt: submittedAt || Date.now(),
  };
};

export const setSignInDialog = (data, submittedAt) => {
  return {
    type: 'SET_SIGN_IN_DIALOG',
    submittedAt: submittedAt || Date.now(),
    data
  };
};

export const signIn = (when, validate) => {
  return async (dispatch, getState) => {
    let { signInDialog } = getState();
    if (signInDialog.locked || signInDialog.submittedAt >= when)
      return;

    if (!validate)
      dispatch(lockSignInDialog());

    dispatch(submitSignInDialog(when));

    return new Promise(resolve => {
      let fail = () => {
        if (!validate)
          dispatch(unlockSignInDialog());

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
              login: signInDialog.values.login,
              password: signInDialog.values.password,
              _validate: validate,
              _csrf: data._csrf,
            },
            success: async data => {
              if (validate) {                     // clear previous errors of the field on successful validation
                if (!data.errors[validate])
                  data.errors[validate] = {};
              } else {                            // clear all successful fields previous errors on submit
                if (!data.errors.login)
                  data.errors.login = {};
                if (!data.errors.password)
                  data.errors.password = {};
              }

              dispatch(setSignInDialog(
                {
                  values: data.values,
                  messages: data.messages,
                  errors: data.errors,
                },
                when
              ));

              if (!validate) {
                dispatch(unlockSignInDialog());

                if (data.success) {
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

export const signOut = () => {
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
