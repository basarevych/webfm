'use strict';

import * as actions from '../constants/actionTypes';
import { setSize, clearSizes } from './size';
import { signOut } from './user';

export const setInfo = (id, info) => {
  return {
    type: actions.SET_INFO,
    id,
    info,
  };
};

export const clearInfos = () => {
  return async (dispatch, getState) => {
    let state = getState();
    let infos = state.get('infos');
    let leftPane = state.get('leftPane');
    let rightPane = state.get('rightPane');

    let leftId;
    if (leftPane.get('share') && leftPane.get('name'))
      leftId = `${leftPane.get('share')}:${leftPane.get('path')}`;
    let rightId;
    if (rightPane.get('share') && rightPane.get('name'))
      rightId= `${rightPane.get('share')}:${rightPane.get('path')}`;

    if (infos.size === 0 || (leftId && rightId && (leftId === rightId ? infos.size === 1 : infos.size === 2)))
      return;

    let keep = [];
    if (leftId)
      keep.push(leftId);
    if (rightId && rightId !== leftId)
      keep.push(rightId);

    return dispatch({
      type: actions.CLEAR_INFO,
      keep,
    });
  };
};

export const loadInfo = pane => {
  return async (dispatch, getState) => {
    let state = getState();
    let app = state.get('app');
    let infos = state.get('infos');
    let leftPane = state.get('leftPane');
    let rightPane = state.get('rightPane');

    let id;
    let share;
    let path;
    if (pane === 'LEFT' && leftPane.get('share') && leftPane.get('name')) {
      share = leftPane.get('share');
      path = leftPane.get('path');
      id = `${share}:${path}`;
    } else if (pane === 'RIGHT' && rightPane.get('share') && rightPane.get('name')) {
      share = rightPane.get('share');
      path = rightPane.get('path');
      id = `${share}:${path}`;
    }

    if (!id || infos.has(id))
      return;

    let params = {
      share,
      path,
      _csrf: app.get('csrf'),
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
