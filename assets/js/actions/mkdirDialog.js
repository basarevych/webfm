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
    let { mkdirDialog, leftPane, rightPane } = getState();
    if (mkdirDialog.locked)
      return;

    let values = {
      share: leftPane.isActive ? leftPane.share : rightPane.share,
      directory: leftPane.isActive ? leftPane.directory : rightPane.directory,
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
    let { mkdirDialog } = getState();
    if (mkdirDialog.locked)
      return;

    await dispatch(resetMkdirDialog());

    return dispatch({
      type: actions.HIDE_MKDIR_DIALOG,
    });
  };
};

export const toggleMkdirDialog = () => {
  return async (dispatch, getState) => {
    let { mkdirDialog } = getState();
    if (mkdirDialog.locked)
      return;

    return dispatch(mkdirDialog.isOpen ? hideMkdirDialog() : showMkdirDialog());
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
