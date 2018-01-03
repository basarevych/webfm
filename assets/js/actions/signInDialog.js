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

export const resetSignInDialog = values => {
  let action = { type: 'RESET_SIGN_IN_DIALOG' };
  if (values)
    action.values = values;
  return action;
};

export const showSignInDialog = () => {
  return async (dispatch, getState) => {
    let { signInDialog } = getState();
    if (signInDialog.locked)
      return;

    await dispatch(resetSignInDialog());

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

    await dispatch(resetSignInDialog());

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

    return dispatch(signInDialog.isOpen ? hideSignInDialog() : showSignInDialog());
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
