'use strict';

const mkdirDialog = (
  state = {
    submittedAt: 0,
    isOpen: false,
    locked: 0,
    values: {
      share: '',
      directory: '',
      name: '',
    },
    messages: {},
    errors: {},
  },
  action
) => {
  let newState;
  switch (action.type) {
    case 'LOCK_MKDIR_DIALOG':
      return _.cloneDeep({
        ...state,
        locked: state.locked + 1,
      });
    case 'UNLOCK_MKDIR_DIALOG':
      if (state.locked === 0)
        return state;

      return _.cloneDeep({
        ...state,
        locked: state.locked - 1,
      });
    case 'SHOW_MKDIR_DIALOG':
      if (state.isOpen)
        return state;

      return _.cloneDeep({
        ...state,
        isOpen: true,
      });
    case 'HIDE_MKDIR_DIALOG':
      if (!state.isOpen)
        return state;

      return _.cloneDeep({
        ...state,
        isOpen: false,
      });
    case 'RESET_MKDIR_DIALOG':
      newState = {
        ...state,
        errors: {},
        messages: {},
      };

      if (action.values)
        newState.values = action.values;

      return _.cloneDeep(newState);
    case 'SUBMIT_MKDIR_DIALOG':
      if (action.submittedAt <= state.submittedAt)
        return state;

      return _.cloneDeep({
        ...state,
        submittedAt: action.submittedAt,
      });
    case 'UPDATE_MKDIR_DIALOG':
      if (action.submittedAt < state.submittedAt)
        return state;

      newState = {
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

export default mkdirDialog;
