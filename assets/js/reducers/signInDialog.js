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
      return {
        ...state,
        locked: state.locked + 1,
      };
    case 'UNLOCK_SIGN_IN_DIALOG':
      if (state.locked === 0)
        return state;

      return {
        ...state,
        locked: state.locked - 1,
      };
    case 'SHOW_SIGN_IN_DIALOG':
      if (state.isOpen)
        return state;

      return {
        ...state,
        isOpen: true,
        values: {
          login: state.values.login,
          password: '',
        },
      };
    case 'HIDE_SIGN_IN_DIALOG':
      if (!state.isOpen)
        return state;

      return {
        ...state,
        isOpen: false,
        values: {
          login: state.values.login,
          password: '',
        },
      };
    case 'TOGGLE_SIGN_IN_DIALOG':
      return {
        ...state,
        isOpen: !state.isOpen,
        values: {
          login: state.values.login,
          password: '',
        },
      };
    case 'SUBMIT_SIGN_IN_DIALOG':
      if (action.submittedAt <= state.submittedAt)
        return state;

      return {
        ...state,
        submittedAt: action.submittedAt,
      };
    case 'UPDATE_SIGN_IN_DIALOG':
      if (action.submittedAt < state.submittedAt)
        return state;

      let newState = {
        ...state,
        submittedAt: action.submittedAt,
      };

      if (action.data.values) {
        newState.values = _.cloneDeep({
          ...state.values,
          ...action.data.values,
        });
      }
      if (action.data.errors) {
        newState.errors = _.cloneDeep({
          ...state.errors,
          ...action.data.errors,
        });
      }
      if (action.data.messages)
        newState.messages = _.cloneDeep(action.data.messages);

      return newState;
  }

  return state;
};

export default signInDialog;
