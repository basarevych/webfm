'use strict';

export const startProgress = message => {
  return {
    type: 'START_PROGRESS',
    message,
  };
};

export const updateProgress = message => {
  return {
    type: 'UPDATE_PROGRESS',
    message,
  };
};

export const finishProgress = message => {
  return {
    type: 'FINISH_PROGRESS',
    message,
  };
};

export const clearProgress = () => {
  return {
    type: 'CLEAR_PROGRESS',
  };
};
