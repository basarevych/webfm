'use strict';

export const showFailureDialog = (messages, errors) => {
  return {
    type: 'SHOW_FAILURE_DIALOG',
    messages,
    errors,
  };
};

export const hideFailureDialog = () => {
  return {
    type: 'HIDE_FAILURE_DIALOG',
  };
};
