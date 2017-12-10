'use strict';

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

    await dispatch(updateSignInDialog({ messages: {}, errors: {} }));

    return dispatch({
      type: 'SHOW_SIGN_IN_DIALOG',
    });
  };
};

export const hideSignInDialog = () => {
  return async (dispatch, getState) => {
    let { signInDialog } = getState();
    if (signInDialog.locked)
      return;

    await dispatch(updateSignInDialog({ messages: {}, errors: {} }));

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

    await dispatch(updateSignInDialog({ messages: {}, errors: {} }));

    return dispatch({
      type: 'TOGGLE_SIGN_IN_DIALOG',
    });
  };
};

export const submitSignInDialog = submittedAt => {
  return {
    type: 'SUBMIT_SIGN_IN_DIALOG',
    submittedAt: submittedAt || Date.now(),
  };
};

export const updateSignInDialog = (data, submittedAt) => {
  return {
    type: 'UPDATE_SIGN_IN_DIALOG',
    submittedAt: submittedAt || Date.now(),
    data
  };
};
