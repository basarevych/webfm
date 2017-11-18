'use strict';

const signInDialogOpen = (state = false, action) => {
  switch (action.type) {
    case 'SET_SIGN_IN_DIALOG_OPEN':
      return action.open;
    case 'TOGGLE_SIGN_IN_DIALOG_OPEN':
      return !state;
  }
  return state;
};

export default signInDialogOpen;
