'use strict';

import * as actions from '../constants/actionTypes';

export const lockMkdirDialog = () => {
  return {
    type: actions.LOCK_MKDIR_DIALOG,
  };
};

export const unlockMkdirDialog = () => {
  return {
    type: actions.UNLOCK_MKDIR_DIALOG,
  };
};

export const resetMkdirDialog = values => {
  let action = { type: actions.RESET_MKDIR_DIALOG };
  if (values)
    action.values = values;
  return action;
};

export const showMkdirDialog = () => {
  return async (dispatch, getState) => {
    let state = getState();
    let mkdirDialog = state.get('mkdirDialog');
    let leftPane = state.get('leftPane');
    let rightPane = state.get('rightPane');
    if (mkdirDialog.get('locked'))
      return;

    let values = {
      share: leftPane.get('isActive') ? leftPane.get('share') : rightPane.get('share'),
      directory: leftPane.get('isActive') ? leftPane.get('directory') : rightPane.get('directory'),
      name: '',
    };
    if (!values.share || !values.directory)
      return;

    await dispatch(resetMkdirDialog(values));

    return dispatch({
      type: actions.SHOW_MKDIR_DIALOG,
    });
  };
};

export const hideMkdirDialog = () => {
  return async (dispatch, getState) => {
    let mkdirDialog = getState().get('mkdirDialog');
    if (mkdirDialog.get('locked'))
      return;

    await dispatch(resetMkdirDialog());

    return dispatch({
      type: actions.HIDE_MKDIR_DIALOG,
    });
  };
};

export const toggleMkdirDialog = () => {
  return async (dispatch, getState) => {
    let mkdirDialog = getState().get('mkdirDialog');
    if (mkdirDialog.get('locked'))
      return;

    return dispatch(mkdirDialog.get('isOpen') ? hideMkdirDialog() : showMkdirDialog());
  };
};

export const submitMkdirDialog = submittedAt => {
  return {
    type: actions.SUBMIT_MKDIR_DIALOG,
    submittedAt: submittedAt || Date.now(),
  };
};

export const updateMkdirDialog = (data, submittedAt) => {
  return {
    type: actions.UPDATE_MKDIR_DIALOG,
    submittedAt: submittedAt || Date.now(),
    data
  };
};
