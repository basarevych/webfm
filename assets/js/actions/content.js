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
    if (leftPane.share && leftPane.path)
      leftId = `${leftPane.share}:${leftPane.path}`;
    let rightId;
    if (rightPane.share && rightPane.path)
      rightId= `${rightPane.share}:${rightPane.path}`;

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
    let share;
    let path;
    if (pane === 'LEFT' && leftPane.share && leftPane.name) {
      share = leftPane.share;
      path = leftPane.path;
      id = `${share}:${path}`;
    } else if (pane === 'RIGHT' && rightPane.share && rightPane.name) {
      share = rightPane.share;
      path = rightPane.path;
      id = `${share}:${path}`;
    }

    if (!id || contents[id])
      return;

    let params = {
      share,
      path,
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
          await dispatch(clearContents());
        } else {
          await dispatch(signOut());
        }

        resolve();
      });
    });
  };
};
