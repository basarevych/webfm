'use strict';

import { signOut } from './user';

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

export const loadSize = id => {
  return async (dispatch, getState) => {
    let { app, sizes } = getState();

    if (sizes[id] && sizes[id].isLoading)
      return;

    let params = {
      id,
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
