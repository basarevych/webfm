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
    let state = getState();
    let deleteDialog = state.get('deleteDialog');
    let leftPane = state.get('leftPane');
    let rightPane = state.get('rightPane');
    if (deleteDialog.get('locked'))
      return;

    let values = {
      share: leftPane.get('isActive') ? leftPane.get('share') : rightPane.get('share'),
      directory: leftPane.get('isActive') ? leftPane.get('directory') : rightPane.get('directory'),
      name: leftPane.get('isActive') ? leftPane.get('name') : rightPane.get('name'),
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
    let deleteDialog = getState().get('deleteDialog');
    if (deleteDialog.get('locked'))
      return;

    await dispatch(resetDeleteDialog());

    return dispatch({
      type: actions.HIDE_DELETE_DIALOG,
    });
  };
};

export const toggleDeleteDialog = () => {
  return async (dispatch, getState) => {
    let deleteDialog = getState().get('deleteDialog');
    if (deleteDialog.get('locked'))
      return;

    return dispatch(deleteDialog.get('isOpen') ? hideDeleteDialog() : showDeleteDialog());
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
