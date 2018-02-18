'use strict';

import * as actions from '../constants/actionTypes';

export const lockDeleteDialog = () => {
  return {
    type: actions.LOCK_DELETE_DIALOG,
  };
};

export const unlockDeleteDialog = () => {
  return {
    type: actions.UNLOCK_DELETE_DIALOG,
  };
};

export const resetDeleteDialog = values => {
  let action = { type: actions.RESET_DELETE_DIALOG };
  if (values)
    action.values = values;
  return action;
};

export const showDeleteDialog = () => {
  return async (dispatch, getState) => {
    let { deleteDialog, leftPane, rightPane } = getState();
    if (deleteDialog.locked)
      return;

    let values = {
      share: leftPane.isActive ? leftPane.share : rightPane.share,
      directory: leftPane.isActive ? leftPane.directory : rightPane.directory,
      name: leftPane.isActive ? leftPane.name : rightPane.name,
    };
    if (!values.share || !values.directory)
      return;

    await dispatch(resetDeleteDialog(values));

    return dispatch({
      type: actions.SHOW_DELETE_DIALOG,
    });
  };
};

export const hideDeleteDialog = () => {
  return async (dispatch, getState) => {
    let { deleteDialog } = getState();
    if (deleteDialog.locked)
      return;

    await dispatch(resetDeleteDialog());

    return dispatch({
      type: actions.HIDE_DELETE_DIALOG,
    });
  };
};

export const toggleDeleteDialog = () => {
  return async (dispatch, getState) => {
    let { deleteDialog } = getState();
    if (deleteDialog.locked)
      return;

    return dispatch(deleteDialog.isOpen ? hideDeleteDialog() : showDeleteDialog());
  };
};

export const submitDeleteDialog = submittedAt => {
  return {
    type: actions.SUBMIT_DELETE_DIALOG,
    submittedAt: submittedAt || Date.now(),
  };
};

export const updateDeleteDialog = (data, submittedAt) => {
  return {
    type: actions.UPDATE_DELETE_DIALOG,
    submittedAt: submittedAt || Date.now(),
    data
  };
};

export const startDeleteDialogFind = () => {
  return {
    type: actions.START_DELETE_DIALOG_FIND,
  };
};

export const stopDeleteDialogFind = nodes => {
  return {
    type: actions.STOP_DELETE_DIALOG_FIND,
    nodes,
  };
};
