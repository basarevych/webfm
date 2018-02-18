'use strict';

import * as actions from '../constants/actionTypes';

export const lockMoveDialog = () => {
  return {
    type: actions.LOCK_MOVE_DIALOG,
  };
};

export const unlockMoveDialog = () => {
  return {
    type: actions.UNLOCK_MOVE_DIALOG,
  };
};

export const resetMoveDialog = values => {
  let action = { type: actions.RESET_MOVE_DIALOG };
  if (values)
    action.values = values;
  return action;
};

export const showMoveDialog = () => {
  return async (dispatch, getState) => {
    let { moveDialog, leftPane, rightPane } = getState();
    if (moveDialog.locked)
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

    await dispatch(resetMoveDialog(values));

    return dispatch({
      type: actions.SHOW_MOVE_DIALOG,
    });
  };
};

export const hideMoveDialog = () => {
  return async (dispatch, getState) => {
    let { moveDialog } = getState();
    if (moveDialog.locked)
      return;

    await dispatch(resetMoveDialog());

    return dispatch({
      type: actions.HIDE_MOVE_DIALOG,
    });
  };
};

export const toggleMoveDialog = () => {
  return async (dispatch, getState) => {
    let { moveDialog } = getState();
    if (moveDialog.locked)
      return;

    return dispatch(moveDialog.isOpen ? hideMoveDialog() : showMoveDialog());
  };
};

export const submitMoveDialog = submittedAt => {
  return {
    type: actions.SUBMIT_MOVE_DIALOG,
    submittedAt: submittedAt || Date.now(),
  };
};

export const updateMoveDialog = (data, submittedAt) => {
  return {
    type: actions.UPDATE_MOVE_DIALOG,
    submittedAt: submittedAt || Date.now(),
    data
  };
};

export const startMoveDialogFind = () => {
  return {
    type: actions.START_MOVE_DIALOG_FIND,
  };
};

export const stopMoveDialogFind = nodes => {
  return {
    type: actions.STOP_MOVE_DIALOG_FIND,
    nodes,
  };
};
