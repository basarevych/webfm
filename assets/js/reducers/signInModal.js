'use strict';

const signInModal = (
  state = {
    open: false,
    login: '',
    password: '',
  },
  action
) => {
  switch (action.type) {
    case 'SET_SIGN_IN_MODAL_OPEN':
      return Object.assign(
        {},
        state,
        {
          open: action.open,
          login: '',
          password: '',
        }
      );
    case 'TOGGLE_SIGN_IN_MODAL_OPEN':
      return Object.assign(
        {},
        state,
        {
          open: !state.open,
          login: '',
          password: '',
        }
      );
    case 'UPDATE_SIGN_IN_MODAL':
      let newValues = {};
      if (action.login)
        newValues.login = action.login;
      if (action.password)
        newValues.password = action.password;
      return Object.assign(
        {},
        state,
        newValues
      );
  }
  return state;
};

export default signInModal;
