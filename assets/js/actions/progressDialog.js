import * as actions from '../constants/actionTypes';

export const startProgress = message => {
  return {
    type: actions.START_PROGRESS,
    message,
  };
};

export const updateProgress = message => {
  return {
    type: actions.UPDATE_PROGRESS,
    message,
  };
};

export const finishProgress = message => {
  return {
    type: actions.FINISH_PROGRESS,
    message,
  };
};

export const clearProgress = () => {
  return {
    type: actions.CLEAR_PROGRESS,
  };
};
