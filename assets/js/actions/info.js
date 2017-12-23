'use strict';

export const setInfo = (id, info) => {
  return {
    type: `SET_INFO`,
    id,
    info,
  };
};

export const clearInfos = () => {
  return async (dispatch, getState) => {
    let { infos, leftPane, rightPane } = getState();
    let leftId;
    if (leftPane.selectedIndexes.length)
      leftId = `${leftPane.share}:${leftPane.path}:${leftPane.list[leftPane.selectedIndexes[0]].name}`;
    let rightId;
    if (rightPane.selectedIndexes.length)
      rightId= `${rightPane.share}:${rightPane.path}:${rightPane.list[rightPane.selectedIndexes[0]].name}`;

    if (Object.keys(infos).length === 0 ||
      (leftId && rightId && (leftId === rightId
        ? Object.keys(infos).length === 1
        : Object.keys(infos).length === 2)))
      return;

    let keep = [];
    if (leftId)
      keep.push(leftId);
    if (rightId && rightId !== leftId)
      keep.push(rightId);

    await dispatch({
      type: `CLEAR_INFOS`,
      keep,
    });
  };
};

export const loadInfo = id => {
  return (dispatch, getState) => {

  };
};
