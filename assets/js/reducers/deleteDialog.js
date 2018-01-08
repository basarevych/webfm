'use strict';

const deleteDialog = (
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
    found: {
      isLoading: false,
      isLoaded: false,
      nodes: [],
    },
  },
  action
) => {
  let newState;
  switch (action.type) {
    case 'LOCK_DELETE_DIALOG':
      return _.cloneDeep({
        ...state,
        locked: state.locked + 1,
      });
    case 'UNLOCK_DELETE_DIALOG':
      if (state.locked === 0)
        return state;

      return _.cloneDeep({
        ...state,
        locked: state.locked - 1,
      });
    case 'SHOW_DELETE_DIALOG':
      if (state.isOpen)
        return state;

      return _.cloneDeep({
        ...state,
        isOpen: true,
      });
    case 'HIDE_DELETE_DIALOG':
      if (!state.isOpen)
        return state;

      return _.cloneDeep({
        ...state,
        isOpen: false,
      });
    case 'RESET_DELETE_DIALOG':
      newState = _.cloneDeep({
        ...state,
        errors: {},
        messages: {},
        found: {
          isLoading: false,
          isLoaded: false,
          nodes: [],
        },
      });

      if (action.values)
        newState.values = _.cloneDeep(action.values);

      return newState;
    case 'SUBMIT_DELETE_DIALOG':
      if (action.submittedAt <= state.submittedAt)
        return state;

      return _.cloneDeep({
        ...state,
        submittedAt: action.submittedAt,
      });
    case 'UPDATE_DELETE_DIALOG':
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
    case 'START_DELETE_DIALOG_FIND':
      newState = _.cloneDeep(state);
      newState.found.isLoading = true;
      newState.found.isLoaded = false;
      newState.found.nodes = [];
      return newState;
    case 'STOP_DELETE_DIALOG_FIND':
      newState = _.cloneDeep(state);
      if (action.nodes) {
        newState.found.isLoading = false;
        newState.found.isLoaded = true;
        newState.found.nodes = _.cloneDeep(action.nodes);
      } else {
        newState.found.isLoading = false;
        newState.found.isLoaded = false;
        newState.found.nodes = [];
      }
      return newState;
  }

  return state;
};

export default deleteDialog;
