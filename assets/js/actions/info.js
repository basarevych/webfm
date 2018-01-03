'use strict';

import { setSize, clearSizes } from './size';
import { signOut } from './user';

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
    if (leftPane.share && leftPane.path)
      leftId = `${leftPane.share}:${leftPane.path}`;
    let rightId;
    if (rightPane.share && rightPane.path)
      rightId= `${rightPane.share}:${rightPane.path}`;

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

    if (!id || infos[id])
      return;

    let params = {
      share,
      path,
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
    await dispatch(
      setSize(
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
                  atime: data.atime,
                  mtime: data.mtime,
                  ctime: data.ctime,
                }
              )
            );
            await dispatch(
              setSize(
                id,
                {
                  isLoading: false,
                  isForbidden: false,
                  du: data.du,
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
            await dispatch(
              setSize(
                id,
                {
                  isLoading: false,
                  isForbidden: true,
                }
              )
            );
          }
          await dispatch(clearInfos());
          await dispatch(clearSizes());
        } else {
          await dispatch(signOut());
        }

        resolve();
      });
    });
  };
};
