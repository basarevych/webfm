'use strict';

export const setList = (id, list) => {
  return {
    type: `SET_LIST`,
    id,
    list,
  };
};

export const clearLists = () => {
  return async (dispatch, getState) => {
    let { lists, leftPane, rightPane } = getState();
    let leftId = `${leftPane.share}:${leftPane.path}`;
    let rightId = `${rightPane.share}:${rightPane.path}`;

    if (Object.keys(lists).length === 0 ||
      (leftId === rightId ? Object.keys(lists).length === 1 : Object.keys(lists).length === 2))
      return;

    let keep = [leftId];
    if (rightId !== leftId)
      keep.push(rightId);

    await dispatch({
      type: `CLEAR_LISTS`,
      keep,
    });
  };
};
