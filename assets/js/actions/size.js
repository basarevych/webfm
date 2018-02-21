'use strict';

import * as actions from '../constants/actionTypes';
import { signOut } from './user';

export const setSize = (id, size) => {
  size.timestamp = Date.now();
  return {
    type: actions.SET_SIZE,
    id,
    size,
  };
};

export const clearSizes = () => {
  return async (dispatch, getState) => {
    let sizes = getState().get('sizes');
    let keep = [];
    let now = Date.now();
    for (let id of sizes.keys()) {
      if (now - sizes.getIn([id, 'timestamp']) < 15 * 60 * 1000)
        keep.push(id);
    }

    await dispatch({
      type: actions.CLEAR_SIZE,
      keep,
    });
  };
};

export const loadSize = (share, path) => {
  return async (dispatch, getState) => {
    let state = getState();
    let app = state.get('app');
    let sizes = state.get('sizes');

    let id = `${share}:${path}`;
    if (sizes.has(id) && sizes.getIn([id, 'isLoading']))
      return;

    let params = {
      share,
      path,
      _csrf: app.get('csrf'),
    };

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
      io.socket.get('/pane/size', params, async (data, response) => {
        if (response.statusCode === 200) {
          if (data.success) {
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
              setSize(
                id,
                {
                  isLoading: false,
                  isForbidden: true,
                }
              )
            );
          }
          await dispatch(clearSizes());
        } else {
          await dispatch(signOut());
        }

        resolve();
      });
    });
  };
};
