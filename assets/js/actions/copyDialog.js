'use strict';

import * as actions from '../constants/actionTypes';

export const lockCopyDialog = () => {
  return {
    type: actions.LOCK_COPY_DIALOG,
  };
};

export const unlockCopyDialog = () => {
  return {
    type: actions.UNLOCK_COPY_DIALOG,
  };
};

export const resetCopyDialog = values => {
  let action = { type: actions.RESET_COPY_DIALOG };
  if (values)
    action.values = values;
  return action;
};

export const showCopyDialog = () => {
  return async (dispatch, getState) => {
    let { copyDialog, leftPane, rightPane } = getState();
    if (copyDialog.locked)
      return;

    let values = {
      srcShare: leftPane.isActive ? leftPane.share : rightPane.share,
      srcDirectory: leftPane.isActive ? leftPane.directory : rightPane.directory,
      srcName: leftPane.isActive ? leftPane.name : rightPane.name,
      dstShare: leftPane.isActive ? rightPane.share : leftPane.share,
      dstDirectory: leftPane.isActive ? rightPane.directory : leftPane.directory,
    };
    if (!values.srcShare || !values.srcDirectory || !values.dstShare || !values.dstDirectory)
      return;

    await dispatch(resetCopyDialog(values));

    return dispatch({
      type: actions.SHOW_COPY_DIALOG,
    });
  };
};

export const hideCopyDialog = () => {
  return async (dispatch, getState) => {
    let { copyDialog } = getState();
    if (copyDialog.locked)
      return;

    await dispatch(resetCopyDialog());

    return dispatch({
      type: actions.HIDE_COPY_DIALOG,
    });
  };
};

export const toggleCopyDialog = () => {
  return async (dispatch, getState) => {
    let { copyDialog } = getState();
    if (copyDialog.locked)
      return;

    return dispatch(copyDialog.isOpen ? hideCopyDialog() : showCopyDialog());
  };
};

export const submitCopyDialog = submittedAt => {
  return {
    type: actions.SUBMIT_COPY_DIALOG,
    submittedAt: submittedAt || Date.now(),
  };
};

export const updateCopyDialog = (data, submittedAt) => {
  return {
    type: actions.UPDATE_COPY_DIALOG,
    submittedAt: submittedAt || Date.now(),
    data
  };
};

export const startCopyDialogFind = () => {
  return {
    type: actions.START_COPY_DIALOG_FIND,
  };
};

export const stopCopyDialogFind = nodes => {
  return {
    type: actions.STOP_COPY_DIALOG_FIND,
    nodes,
  };
};
