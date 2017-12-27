'use strict';

import { signOut } from './user';

export const setContent = (id, content) => {
  return {
    type: `SET_CONTENT`,
    id,
    content,
  };
};

export const clearContent = () => {
  return async (dispatch, getState) => {
    let { contents, leftPane, rightPane } = getState();
    let leftId;
    if (leftPane.share && leftPane.directory && leftPane.name)
      leftId = `${leftPane.share}:${leftPane.directory}:${leftPane.name}`;
    let rightId;
    if (rightPane.share && rightPane.directory && rightPane.name)
      rightId= `${rightPane.share}:${rightPane.directory}:${rightPane.name}`;

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
      type: `CLEAR_CONTENT`,
      keep,
    });
  };
};

export const loadContent = pane => {
  return async (dispatch, getState) => {
    let { app, contents, leftPane, rightPane } = getState();

    let id;
    if (pane === 'LEFT' && leftPane.share && leftPane.directory && leftPane.name)
      id = `${leftPane.share}:${leftPane.directory}:${leftPane.name}`;
    else if (pane === 'RIGHT' && rightPane.share && rightPane.directory && rightPane.name)
      id = `${rightPane.share}:${rightPane.directory}:${rightPane.name}`;

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
        if (response.statusCode === 200) {
          if (data.success) {
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
          } else {
            await dispatch(
              setContent(
                id,
                {
                  isLoading: false,
                  isForbidden: true,
                }
              )
            );
          }
          await dispatch(clearContent());
        } else {
          await dispatch(signOut());
        }

        resolve();
      });
    });
  };
};
