'use strict';

export const lockMoveDialog = () => {
  return {
    type: 'LOCK_MOVE_DIALOG',
  };
};

export const unlockMoveDialog = () => {
  return {
    type: 'UNLOCK_MOVE_DIALOG',
  };
};

export const resetMoveDialog = values => {
  let action = { type: 'RESET_MOVE_DIALOG' };
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
      type: 'SHOW_MOVE_DIALOG',
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
      type: 'HIDE_MOVE_DIALOG',
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
    type: 'SUBMIT_MOVE_DIALOG',
    submittedAt: submittedAt || Date.now(),
  };
};

export const updateMoveDialog = (data, submittedAt) => {
  return {
    type: 'UPDATE_MOVE_DIALOG',
    submittedAt: submittedAt || Date.now(),
    data
  };
};

export const startMoveDialogFind = () => {
  return {
    type: 'START_MOVE_DIALOG_FIND',
  };
};

export const stopMoveDialogFind = nodes => {
  return {
    type: 'STOP_MOVE_DIALOG_FIND',
    nodes,
  };
};
