'use strict';

export const lockCopyDialog = () => {
  return {
    type: 'LOCK_COPY_DIALOG',
  };
};

export const unlockCopyDialog = () => {
  return {
    type: 'UNLOCK_COPY_DIALOG',
  };
};

export const resetCopyDialog = values => {
  let action = { type: 'RESET_COPY_DIALOG' };
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
      type: 'SHOW_COPY_DIALOG',
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
      type: 'HIDE_COPY_DIALOG',
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
    type: 'SUBMIT_COPY_DIALOG',
    submittedAt: submittedAt || Date.now(),
  };
};

export const updateCopyDialog = (data, submittedAt) => {
  return {
    type: 'UPDATE_COPY_DIALOG',
    submittedAt: submittedAt || Date.now(),
    data
  };
};

export const startCopyDialogFind = () => {
  return {
    type: 'START_COPY_DIALOG_FIND',
  };
};

export const stopCopyDialogFind = nodes => {
  return {
    type: 'STOP_COPY_DIALOG_FIND',
    nodes,
  };
};
