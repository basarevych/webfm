'use strict';

import * as actions from '../constants/actionTypes';

export const lockSignInDialog = () => {
  return {
    type: actions.LOCK_SIGN_IN_DIALOG,
  };
};

export const unlockSignInDialog = () => {
  return {
    type: actions.UNLOCK_SIGN_IN_DIALOG,
  };
};

export const resetSignInDialog = values => {
  let action = { type: actions.RESET_SIGN_IN_DIALOG };
  if (values)
    action.values = values;
  return action;
};

export const showSignInDialog = () => {
  return async (dispatch, getState) => {
    let signInDialog = getState().get('signInDialog');
    if (signInDialog.get('locked'))
      return;

    await dispatch(resetSignInDialog());

    return dispatch({
      type: actions.SHOW_SIGN_IN_DIALOG,
    });
  };
};

export const hideSignInDialog = () => {
  return async (dispatch, getState) => {
    let signInDialog = getState().get('signInDialog');
    if (signInDialog.get('locked'))
      return;

    await dispatch(resetSignInDialog());

    return dispatch({
      type: actions.HIDE_SIGN_IN_DIALOG,
    });
  };
};

export const toggleSignInDialog = () => {
  return async (dispatch, getState) => {
    let signInDialog = getState().get('signInDialog');
    if (signInDialog.get('locked'))
      return;

    return dispatch(signInDialog.get('isOpen') ? hideSignInDialog() : showSignInDialog());
  };
};

export const submitSignInDialog = submittedAt => {
  return {
    type: actions.SUBMIT_SIGN_IN_DIALOG,
    submittedAt: submittedAt || Date.now(),
  };
};

export const updateSignInDialog = (data, submittedAt) => {
  return {
    type: actions.UPDATE_SIGN_IN_DIALOG,
    submittedAt: submittedAt || Date.now(),
    data
  };
};
