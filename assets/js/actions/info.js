'use strict';

import { signOut } from './user';

export const setInfo = (id, info) => {
  return {
    type: `SET_INFO`,
    id,
    info,
  };
};

export const clearInfo = () => {
  return async (dispatch, getState) => {
    let { infos, leftPane, rightPane } = getState();
    let leftId;
    if (leftPane.share && leftPane.directory && leftPane.name)
      leftId = `${leftPane.share}:${leftPane.directory}:${leftPane.name}`;
    let rightId;
    if (rightPane.share && rightPane.directory && rightPane.name)
      rightId= `${rightPane.share}:${rightPane.directory}:${rightPane.name}`;

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
      type: `CLEAR_INFO`,
      keep,
    });
  };
};

export const loadInfo = pane => {
  return async (dispatch, getState) => {
    let { app, infos, leftPane, rightPane } = getState();

    let id;
    if (pane === 'LEFT' && leftPane.share && leftPane.directory && leftPane.name)
      id = `${leftPane.share}:${leftPane.directory}:${leftPane.name}`;
    else if (pane === 'RIGHT' && rightPane.share && rightPane.directory && rightPane.name)
      id = `${rightPane.share}:${rightPane.directory}:${rightPane.name}`;

    if (!id || infos[id])
      return;

    let params = {
      id,
      _csrf: app.csrf,
    };

    await dispatch(
      setInfo(
        id,
        {
          isLoading: true,
          isForbidden: false,
        }
      )
    );
    return new Promise(resolve => {
      io.socket.get('/pane/info', params, async (data, response) => {
        if (response.statusCode === 200) {
          if (data.success) {
            await dispatch(
              setInfo(
                id,
                {
                  isLoading: false,
                  isForbidden: false,
                  name: data.name,
                  parent: data.parent,
                  size: data.size,
                  du: data.du,
                  modeNumber: data.modeNumber,
                  modeString: data.modeString,
                  userId: data.userId,
                  userName: data.userName,
                  groupId: data.groupId,
                  groupName: data.groupName,
                }
              )
            );
          } else {
            await dispatch(
              setInfo(
                id,
                {
                  isLoading: false,
                  isForbidden: true,
                }
              )
            );
          }
          await dispatch(clearInfo());
        } else {
          await dispatch(signOut());
        }

        resolve();
      });
    });
  };
};
