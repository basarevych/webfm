'use strict';

import * as actions from '../constants/actionTypes';

const renameDialog = (
  state = {
    submittedAt: 0,
    isOpen: false,
    locked: 0,
    values: {
      share: '',
      directory: '',
      name: '',
      newName: '',
    },
    messages: {},
    errors: {},
  },
  action
) => {
  let newState;
  switch (action.type) {
    case actions.LOCK_RENAME_DIALOG:
      return _.cloneDeep({
        ...state,
        locked: state.locked + 1,
      });
    case actions.UNLOCK_RENAME_DIALOG:
      if (state.locked === 0)
        return state;

      return _.cloneDeep({
        ...state,
        locked: state.locked - 1,
      });
    case actions.SHOW_RENAME_DIALOG:
      if (state.isOpen)
        return state;

      return _.cloneDeep({
        ...state,
        isOpen: true,
      });
    case actions.HIDE_RENAME_DIALOG:
      if (!state.isOpen)
        return state;

      return _.cloneDeep({
        ...state,
        isOpen: false,
      });
    case actions.RESET_RENAME_DIALOG:
      newState = _.cloneDeep({
        ...state,
        errors: {},
        messages: {},
      });

      if (action.values)
        newState.values = _.cloneDeep(action.values);

      return newState;
    case actions.SUBMIT_RENAME_DIALOG:
      if (action.submittedAt <= state.submittedAt)
        return state;

      return _.cloneDeep({
        ...state,
        submittedAt: action.submittedAt,
      });
    case actions.UPDATE_RENAME_DIALOG:
      if (action.submittedAt < state.submittedAt)
        return state;

      newState = _.cloneDeep({
        ...state,
        submittedAt: action.submittedAt,
      });

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

export default renameDialog;
