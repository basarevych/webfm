'use strict';

export const lockRenameDialog = () => {
  return {
    type: 'LOCK_RENAME_DIALOG',
  };
};

export const unlockRenameDialog = () => {
  return {
    type: 'UNLOCK_RENAME_DIALOG',
  };
};

export const resetRenameDialog = values => {
  let action = { type: 'RESET_RENAME_DIALOG' };
  if (values)
    action.values = values;
  return action;
};

export const showRenameDialog = () => {
  return async (dispatch, getState) => {
    let { renameDialog, leftPane, rightPane } = getState();
    if (renameDialog.locked)
      return;

    let values = {
      share: leftPane.isActive ? leftPane.share : rightPane.share,
      directory: leftPane.isActive ? leftPane.directory : rightPane.directory,
      name: leftPane.isActive ? leftPane.name : rightPane.name,
      newName: leftPane.isActive ? leftPane.name : rightPane.name,
    };
    if (!values.share || !values.directory || !values.name)
      return;

    await dispatch(resetRenameDialog(values));

    return dispatch({
      type: 'SHOW_RENAME_DIALOG',
    });
  };
};

export const hideRenameDialog = () => {
  return async (dispatch, getState) => {
    let { renameDialog } = getState();
    if (renameDialog.locked)
      return;

    await dispatch(resetRenameDialog());

    return dispatch({
      type: 'HIDE_RENAME_DIALOG',
    });
  };
};

export const toggleRenameDialog = () => {
  return async (dispatch, getState) => {
    let { renameDialog } = getState();
    if (renameDialog.locked)
      return;

    return dispatch(renameDialog.isOpen ? hideRenameDialog() : showRenameDialog());
  };
};

export const submitRenameDialog = submittedAt => {
  return {
    type: 'SUBMIT_RENAME_DIALOG',
    submittedAt: submittedAt || Date.now(),
  };
};

export const updateRenameDialog = (data, submittedAt) => {
  return {
    type: 'UPDATE_RENAME_DIALOG',
    submittedAt: submittedAt || Date.now(),
    data
  };
};
