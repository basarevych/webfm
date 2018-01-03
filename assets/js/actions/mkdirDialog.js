'use strict';

export const lockMkdirDialog = () => {
  return {
    type: 'LOCK_MKDIR_DIALOG',
  };
};

export const unlockMkdirDialog = () => {
  return {
    type: 'UNLOCK_MKDIR_DIALOG',
  };
};

export const resetMkdirDialog = values => {
  let action = { type: 'RESET_MKDIR_DIALOG' };
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
      type: 'SHOW_MKDIR_DIALOG',
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
      type: 'HIDE_MKDIR_DIALOG',
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
    type: 'SUBMIT_MKDIR_DIALOG',
    submittedAt: submittedAt || Date.now(),
  };
};

export const updateMkdirDialog = (data, submittedAt) => {
  return {
    type: 'UPDATE_MKDIR_DIALOG',
    submittedAt: submittedAt || Date.now(),
    data
  };
};
