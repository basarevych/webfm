'use strict';

const signInModalOpen = (state = false, action) => {
  switch (action.type) {
    case 'SET_SIGN_IN_MODAL_OPEN':
      return action.open;
    case 'TOGGLE_SIGN_IN_MODAL_OPEN':
      return !state;
    default:
      return state;
  }
};

export default signInModalOpen;
