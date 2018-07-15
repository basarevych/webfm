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
    let state = getState();
    let copyDialog = state.get('copyDialog');
    let leftPane = state.get('leftPane');
    let rightPane = state.get('rightPane');
    if (copyDialog.get('locked'))
      return;

    let values = {
      srcShare: leftPane.get('isActive') ? leftPane.get('share') : rightPane.get('share'),
      srcDirectory: leftPane.get('isActive') ? leftPane.get('directory') : rightPane.get('directory'),
      srcName: leftPane.get('isActive') ? leftPane.get('name') : rightPane.get('name'),
      dstShare: leftPane.get('isActive') ? rightPane.get('share') : leftPane.get('share'),
      dstDirectory: leftPane.get('isActive') ? rightPane.get('directory') : leftPane.get('directory'),
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
    let copyDialog = getState().get('copyDialog');
    if (copyDialog.get('locked'))
      return;

    await dispatch(resetCopyDialog());

    return dispatch({
      type: actions.HIDE_COPY_DIALOG,
    });
  };
};

export const toggleCopyDialog = () => {
  return async (dispatch, getState) => {
    let copyDialog = getState().get('copyDialog');
    if (copyDialog.get('locked'))
      return;

    return dispatch(copyDialog.get('isOpen') ? hideCopyDialog() : showCopyDialog());
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
