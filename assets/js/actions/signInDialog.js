'use strict';

import { updateStatus } from './status';
import { hideNavbar } from './navbar';

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
  return async (dispatch, getState) => {
    let { signInDialog } = getState();
    if (signInDialog.locked)
      return;

    await dispatch(setSignInDialog({ messages: {}, errors: {} }));

    return dispatch({
      type: 'OPEN_SIGN_IN_DIALOG',
    });
  };
};

export const hideSignInDialog = () => {
  return async (dispatch, getState) => {
    let { signInDialog } = getState();
    if (signInDialog.locked)
      return;

    await dispatch(setSignInDialog({ messages: {}, errors: {} }));

    return dispatch({
      type: 'HIDE_SIGN_IN_DIALOG',
    });
  };
};

export const toggleSignInDialog = () => {
  return async (dispatch, getState) => {
    let { signInDialog } = getState();
    if (signInDialog.locked)
      return;

    await dispatch(setSignInDialog({ messages: {}, errors: {} }));

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
      await dispatch(lockSignInDialog());

    await dispatch(submitSignInDialog(when));

    return new Promise(resolve => {
      let fail = async () => {
        if (!validate)
          await dispatch(unlockSignInDialog());

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

              await dispatch(setSignInDialog(
                {
                  values: data.values,
                  messages: data.messages,
                  errors: data.errors,
                },
                when
              ));

              if (!validate) {
                await dispatch(unlockSignInDialog());

                if (data.success) {
                  await dispatch(hideNavbar());
                  await dispatch(hideSignInDialog());
                  await dispatch(updateStatus(true));
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
                await dispatch(updateStatus(true));
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
