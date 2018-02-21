'use strict';

import * as actions from '../constants/actionTypes';
import { signOut } from './user';

export const setContent = (id, content) => {
  return {
    type: actions.SET_CONTENT,
    id,
    content,
  };
};

export const clearContents = () => {
  return async (dispatch, getState) => {
    let state = getState();
    let contents = state.get('contents');
    let leftPane = state.get('leftPane');
    let rightPane = state.get('rightPane');
    let leftId;
    if (leftPane.get('share') && leftPane.get('path'))
      leftId = `${leftPane.get('share')}:${leftPane.get('path')}`;
    let rightId;
    if (rightPane.get('share') && rightPane.get('path'))
      rightId= `${rightPane.get('share')}:${rightPane.get('path')}`;

    if (contents.size === 0 || (leftId && rightId && (leftId === rightId ? contents.size === 1 : contents.size === 2)))
      return;

    let keep = [];
    if (leftId)
      keep.push(leftId);
    if (rightId && rightId !== leftId)
      keep.push(rightId);

    await dispatch({
      type: actions.CLEAR_CONTENT,
      keep,
    });
  };
};

export const loadContent = pane => {
  return async (dispatch, getState) => {
    let state = getState();
    let app = state.get('app');
    let contents = state.get('contents');
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

    if (!id || contents.has(id))
      return;

    let params = {
      share,
      path,
      _csrf: app.get('csrf'),
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
