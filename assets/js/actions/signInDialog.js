'use strict';

import { resetAuthRequest } from './authRequest';

export const showSignInDialog = () => {
  return (dispatch, getState) => {
    let { app } = getState();
    if (app.locked)
      return;

    dispatch(resetAuthRequest());

    return dispatch({
      type: 'SET_SIGN_IN_DIALOG_OPEN',
      open: true,
    });
  };
};

export const hideSignInDialog = () => {
  return (dispatch, getState) => {
    let { app } = getState();
    if (app.locked)
      return;

    dispatch(resetAuthRequest());

    return dispatch({
      type: 'SET_SIGN_IN_DIALOG_OPEN',
      open: false,
    });
  };
};

export const toggleSignInDialog = () => {
  return (dispatch, getState) => {
    let { app } = getState();
    if (app.locked)
      return;

    dispatch(resetAuthRequest());

    return dispatch({
      type: 'TOGGLE_SIGN_IN_DIALOG_OPEN',
    });
  };
};
