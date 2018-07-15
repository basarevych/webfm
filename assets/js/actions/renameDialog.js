import * as actions from '../constants/actionTypes';

export const lockRenameDialog = () => {
  return {
    type: actions.LOCK_RENAME_DIALOG,
  };
};

export const unlockRenameDialog = () => {
  return {
    type: actions.UNLOCK_RENAME_DIALOG,
  };
};

export const resetRenameDialog = values => {
  let action = { type: actions.RESET_RENAME_DIALOG };
  if (values)
    action.values = values;
  return action;
};

export const showRenameDialog = () => {
  return async (dispatch, getState) => {
    let state = getState();
    let renameDialog = state.get('renameDialog');
    let leftPane = state.get('leftPane');
    let rightPane = state.get('rightPane');
    if (renameDialog.get('locked'))
      return;

    let values = {
      share: leftPane.get('isActive') ? leftPane.get('share') : rightPane.get('share'),
      directory: leftPane.get('isActive') ? leftPane.get('directory') : rightPane.get('directory'),
      name: leftPane.get('isActive') ? leftPane.get('name') : rightPane.get('name'),
      newName: leftPane.get('isActive') ? leftPane.get('name') : rightPane.get('name'),
    };
    if (!values.share || !values.directory || !values.name)
      return;

    await dispatch(resetRenameDialog(values));

    return dispatch({
      type: actions.SHOW_RENAME_DIALOG,
    });
  };
};

export const hideRenameDialog = () => {
  return async (dispatch, getState) => {
    let renameDialog = getState().get('renameDialog');
    if (renameDialog.get('locked'))
      return;

    await dispatch(resetRenameDialog());

    return dispatch({
      type: actions.HIDE_RENAME_DIALOG,
    });
  };
};

export const toggleRenameDialog = () => {
  return async (dispatch, getState) => {
    let renameDialog = getState().get('renameDialog');
    if (renameDialog.get('locked'))
      return;

    return dispatch(renameDialog.get('isOpen') ? hideRenameDialog() : showRenameDialog());
  };
};

export const submitRenameDialog = submittedAt => {
  return {
    type: actions.SUBMIT_RENAME_DIALOG,
    submittedAt: submittedAt || Date.now(),
  };
};

export const updateRenameDialog = (data, submittedAt) => {
  return {
    type: actions.UPDATE_RENAME_DIALOG,
    submittedAt: submittedAt || Date.now(),
    data
  };
};
