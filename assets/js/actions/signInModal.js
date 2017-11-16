'use strict';

import { resetAuthRequest } from './authRequest';

export const showSignInModal = () => {
  return dispatch => {
    dispatch(resetAuthRequest());
    return dispatch({
      type: 'SET_SIGN_IN_MODAL_OPEN',
      open: true,
    });
  };
};

export const hideSignInModal = () => {
  return dispatch => {
    dispatch(resetAuthRequest());
    return dispatch({
      type: 'SET_SIGN_IN_MODAL_OPEN',
      open: false,
    });
  };
};

export const toggleSignInModal = () => {
  return dispatch => {
    dispatch(resetAuthRequest());
    return dispatch({
      type: 'TOGGLE_SIGN_IN_MODAL_OPEN',
    });
  };
};

export const updateSignInModal = (login, password) => {
  return dispatch => {
    dispatch(resetAuthRequest());
    return dispatch({
      type: 'UPDATE_SIGN_IN_MODAL',
      login,
      password,
    });
  };
};

