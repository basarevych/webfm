'use strict';

import { signOut } from './user';
import {join} from '../lib/path';

export const setSize = (id, size) => {
  size.timestamp = Date.now();
  return {
    type: `SET_SIZE`,
    id,
    size,
  };
};

export const clearSizes = () => {
  return async (dispatch, getState) => {
    let { sizes } = getState();
    let keep = [];
    let now = Date.now();
    for (let id of Object.keys(sizes)) {
      if (now - sizes[id].timestamp < 15 * 60 * 1000)
        keep.push(id);
    }

    await dispatch({
      type: `CLEAR_SIZE`,
      keep,
    });
  };
};

export const loadSize = (share, path) => {
  return async (dispatch, getState) => {
    let { app, sizes } = getState();

    let id = `${share}:${path}`;
    if (sizes[id] && sizes[id].isLoading)
      return;

    let params = {
      share,
      path,
      _csrf: app.csrf,
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
