'use strict';

import { signOut } from './user';

export const setContent = (id, content) => {
  return {
    type: `SET_CONTENT`,
    id,
    content,
  };
};

export const clearContents = () => {
  return async (dispatch, getState) => {
    let { contents, leftPane, rightPane } = getState();
    let leftId;
    if (leftPane.share && leftPane.path && leftPane.selectedIndexes.length)
      leftId = `${leftPane.share}:${leftPane.path}:${leftPane.list[leftPane.selectedIndexes[0]].name}`;
    let rightId;
    if (rightPane.share && rightPane.path && rightPane.selectedIndexes.length)
      rightId= `${rightPane.share}:${rightPane.path}:${rightPane.list[rightPane.selectedIndexes[0]].name}`;

    if (Object.keys(contents).length === 0 ||
        (leftId && rightId && (leftId === rightId
          ? Object.keys(contents).length === 1
         : Object.keys(contents).length === 2)))
      return;

    let keep = [];
    if (leftId)
      keep.push(leftId);
    if (rightId && rightId !== leftId)
      keep.push(rightId);

    await dispatch({
      type: `CLEAR_CONTENTS`,
      keep,
    });
  };
};

export const loadContent = pane => {
  return async (dispatch, getState) => {
    let { app, contents, leftPane, rightPane } = getState();

    let id;
    if (pane === 'LEFT' && leftPane.share && leftPane.path && leftPane.selectedIndexes.length)
      id = `${leftPane.share}:${leftPane.path}:${leftPane.list[leftPane.selectedIndexes[0]].name}`;
    else if (pane === 'RIGHT' && rightPane.share && rightPane.path && rightPane.selectedIndexes.length)
      id = `${rightPane.share}:${rightPane.path}:${rightPane.list[rightPane.selectedIndexes[0]].name}`;

    if (!id || contents[id])
      return;

    let params = {
      id,
      _csrf: app.csrf,
    };

    await dispatch(
      setContent(
        id,
        {
          isLoading: true,
          isForbidden: false,
        }
      )
    );
    return new Promise(resolve => {
      io.socket.get('/pane/content', params, async (data, response) => {
        if (response.statusCode === 403) {
          await dispatch(
            setContent(
              id,
              {
                isLoading: false,
                isForbidden: true,
              }
            )
          );
          await dispatch(clearContents());
        } else if (response.statusCode === 200) {
          await dispatch(
            setContent(
              id,
              {
                isLoading: false,
                isForbidden: false,
                type: data.type,
                mime: data.mime,
                base64: data.base64,
              }
            )
          );
          await dispatch(clearContents());
        } else {
          await dispatch(signOut());
        }

        resolve();
      });
    });
  };
};
