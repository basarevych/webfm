'use strict';

import * as actions from '../constants/actionTypes';

const progress = (
  state = {
    isStarted: false,
    isFinished: false,
    message: '',
  },
  action
) => {
  switch (action.type) {
    case actions.START_PROGRESS:
      return {
        isStarted: true,
        isFinished: false,
        message: action.message,
      };
    case actions.UPDATE_PROGRESS:
      if (!action.message)
        return state;

      return {
        isStarted: true,
        isFinished: false,
        message: state.message + action.message,
      };
    case actions.FINISH_PROGRESS:
      return {
        isStarted: true,
        isFinished: true,
        message: state.message + action.message || '',
      };
    case actions.CLEAR_PROGRESS:
      if (!state.isStarted)
        return state;

      return {
        isStarted: false,
        isFinished: false,
        message: '',
      };
  }

  return state;
};

export default progress;
