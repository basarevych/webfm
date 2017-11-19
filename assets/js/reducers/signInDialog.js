'use strict';

const signInDialog = (
  state = {
    submittedAt: 0,
    isOpen: false,
    locked: 0,
    values: {
      login: '',
      password: '',
    },
    messages: {},
    errors: {},
  },
  action
) => {
  switch (action.type) {
    case 'LOCK_SIGN_IN_DIALOG':
      return Object.assign(
        {},
        state,
        {
          locked: state.locked + 1,
        }
      );
    case 'UNLOCK_SIGN_IN_DIALOG':
      return Object.assign(
        {},
        state,
        {
          locked: state.locked ? state.locked - 1 : 0,
        }
      );
    case 'SHOW_SIGN_IN_DIALOG':
      return Object.assign(
        {},
        state,
        {
          isOpen: true,
          values: {
            login: state.values.login,
            password: '',
          },
        }
      );
    case 'HIDE_SIGN_IN_DIALOG':
      return Object.assign(
        {},
        state,
        {
          isOpen: false,
          values: {
            login: state.values.login,
            password: '',
          },
        }
      );
    case 'TOGGLE_SIGN_IN_DIALOG':
      return Object.assign(
        {},
        state,
        {
          isOpen: !state.isOpen,
          values: {
            login: state.values.login,
            password: '',
          },
        }
      );
    case 'SEND_SIGN_IN_DIALOG':
      if (action.submittedAt <= state.submittedAt)
        return state;

      return Object.assign(
        {},
        state,
        {
          submittedAt: action.submittedAt,
        }
      );
    case 'SET_SIGN_IN_DIALOG':
      if (action.submittedAt < state.submittedAt)
        return state;

      if (action.data.values) {
        action.data.values = Object.assign(
          {},
          state.values,
          action.data.values,
        );
      }
      if (action.data.errors) {
        action.data.errors = Object.assign(
          {},
          state.errors,
          action.data.errors,
        );
      }

      return Object.assign(
        {},
        state,
        {
          submittedAt: action.submittedAt,
          ...action.data
        }
      );
  }

  return state;
};

export default signInDialog;
