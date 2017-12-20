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
  let newState;
  switch (action.type) {
    case 'LOCK_SIGN_IN_DIALOG':
      return _.cloneDeep({
        ...state,
        locked: state.locked + 1,
      });
    case 'UNLOCK_SIGN_IN_DIALOG':
      if (state.locked === 0)
        return state;

      return _.cloneDeep({
        ...state,
        locked: state.locked - 1,
      });
    case 'SHOW_SIGN_IN_DIALOG':
      if (state.isOpen)
        return state;

      newState = _.cloneDeep({
        ...state,
        isOpen: true,
      });
      newState.values.password = '';
      return newState;
    case 'HIDE_SIGN_IN_DIALOG':
      if (!state.isOpen)
        return state;

      newState = _.cloneDeep({
        ...state,
        isOpen: false,
      });
      newState.values.password = '';
      return newState;
    case 'TOGGLE_SIGN_IN_DIALOG':
      newState = _.cloneDeep({
        ...state,
        isOpen: !state.isOpen,
      });
      newState.values.password = '';
      return newState;
    case 'SUBMIT_SIGN_IN_DIALOG':
      if (action.submittedAt <= state.submittedAt)
        return state;

      return _.cloneDeep({
        ...state,
        submittedAt: action.submittedAt,
      });
    case 'UPDATE_SIGN_IN_DIALOG':
      if (action.submittedAt < state.submittedAt)
        return state;

      let newState = {
        ...state,
        submittedAt: action.submittedAt,
      };

      if (action.data.values) {
        newState.values = {
          ...state.values,
          ...action.data.values,
        };
      }
      if (action.data.errors) {
        newState.errors = {
          ...state.errors,
          ...action.data.errors,
        };
      }
      if (action.data.messages)
        newState.messages = action.data.messages;

      return _.cloneDeep(newState);
  }

  return state;
};

export default signInDialog;
