'use strict';

import * as actions from '../constants/actionTypes';

const failureDialog = (
  state = {
    isOpen: false,
    messages: {},
    errors: {},
  },
  action
) => {
  switch (action.type) {
    case actions.SHOW_FAILURE_DIALOG:
      return _.cloneDeep({
        isOpen: true,
        messages: action.messages,
        errors: action.errors,
      });
    case actions.HIDE_FAILURE_DIALOG:
      return _.cloneDeep({
        ...state,
        isOpen: false,
      });
  }

  return state;
};

export default failureDialog;
