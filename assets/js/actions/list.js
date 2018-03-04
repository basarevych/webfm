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
    let state = getState();
    let lists = state.get('lists');
    let leftPane = state.get('leftPane');
    let rightPane = state.get('rightPane');

    let leftId;
    if (leftPane.get('share') && leftPane.get('directory'))
      leftId = `${leftPane.get('share')}:${leftPane.get('directory')}`;
    let rightId;
    if (rightPane.get('share') && rightPane.get('directory'))
      rightId= `${rightPane.get('share')}:${rightPane.get('directory')}`;

    if (lists.size === 0 || (leftId && rightId && (leftId === rightId ? lists.size === 1 : lists.size === 2)))
      return;

    let keep = [];
    if (leftId)
      keep.push(leftId);
    if (rightId && rightId !== leftId)
      keep.push(rightId);

    return dispatch({
      type: actions.CLEAR_LIST,
      keep,
    });
  };
};
