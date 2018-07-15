import * as actions from '../constants/actionTypes';

export const showFailureDialog = (messages, errors) => {
  return {
    type: actions.SHOW_FAILURE_DIALOG,
    messages,
    errors,
  };
};

export const hideFailureDialog = () => {
  return {
    type: actions.HIDE_FAILURE_DIALOG,
  };
};
