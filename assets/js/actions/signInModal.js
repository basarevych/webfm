'use strict';

export const showSignInModal = () => {
  return {
    type: 'SET_SIGN_IN_MODAL_OPEN',
    open: true,
  };
};

export const hideSignInModal = () => {
  return {
    type: 'SET_SIGN_IN_MODAL_OPEN',
    open: false,
  };
};

export const toggleSignInModal = () => {
  return {
    type: 'TOGGLE_SIGN_IN_MODAL_OPEN',
  };
};

