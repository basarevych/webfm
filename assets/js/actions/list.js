'use strict';

import * as actions from '../constants/actionTypes';

export const setList = (id, list) => {
  return {
    type: actions.SET_LIST,
    id,
    list,
  };
};

export const clearLists = () => {
  return async (dispatch, getState) => {
    let { lists, leftPane, rightPane } = getState();
    let leftId;
    if (leftPane.share && leftPane.directory)
      leftId = `${leftPane.share}:${leftPane.directory}`;
    let rightId;
    if (rightPane.share && rightPane.directory)
      rightId= `${rightPane.share}:${rightPane.directory}`;

    if (Object.keys(lists).length === 0 ||
      (leftId && rightId && (leftId === rightId
        ? Object.keys(lists).length === 1
        : Object.keys(lists).length === 2)))
      return;

    let keep = [];
    if (leftId)
      keep.push(leftId);
    if (rightId && rightId !== leftId)
      keep.push(rightId);

    await dispatch({
      type: actions.CLEAR_LIST,
      keep,
    });
  };
};
