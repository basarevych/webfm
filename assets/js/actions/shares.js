'use strict';

import { signOut } from './signInDialog';
import { setPaneShare, setPanePath, setPaneList } from './pane';

export const setShares = shares => {
  return {
    type: `SET_SHARES`,
    shares,
  };
};

export const loadShares = () => {
  return async (dispatch, getState) => {
    let { status } = getState();
    if (!status.isAuthorized)
      return;

    return new Promise(resolve => {
      io.socket.get('/share', async (data, response) => {
        if (response.statusCode !== 200) {
          await dispatch(signOut());
          return resolve();
        }

        await dispatch(setShares(data));

        let { app, leftPane, rightPane } = getState();

        let leftValid = false;
        let rightValid = false;
        for (let share of app.shares) {
          if (share.name === leftPane.share)
            leftValid = true;
          if (share.name === rightPane.share)
            rightValid = true;
        }

        if (!leftValid) {
          await dispatch(setPaneShare('LEFT', app.shares.length ? app.shares[0].name : ''));
          await dispatch(setPanePath('LEFT', '/'));
        }

        if (!rightValid) {
          await dispatch(setPaneShare('RIGHT', app.shares.length ? app.shares[0].name : ''));
          await dispatch(setPanePath('RIGHT', '/'));
        }

        resolve();
      });
    });
  };
};

export const sendPaths = () => {
  return async (dispatch, getState) => {
    let { app, status, leftPane, rightPane } = getState();
    if (!status.isAuthorized)
      return;

    let params = {
      panes: [
        {
          share: leftPane.share,
          path: leftPane.path,
        },
        {
          share: rightPane.share,
          path: rightPane.path,
        },
      ],
      _csrf: app.csrf,
    };

    return new Promise(resolve => {
      io.socket.post('/pane/cd', params, async (data, response) => {
        if (response.statusCode !== 200) {
          await dispatch(signOut());
          return resolve();
        }

        if (_.isArray(data.panes) && data.panes.length === 2) {
          let left = data.panes[0];
          await dispatch(setPaneShare('LEFT', left.share));
          await dispatch(setPanePath('LEFT', left.path));
          if (left.list)
            await dispatch(setPaneList('LEFT', left.list));

          let right = data.panes[1];
          await dispatch(setPaneShare('RIGHT', right.share));
          await dispatch(setPanePath('RIGHT', right.path));
          if (right.list)
            await dispatch(setPaneList('RIGHT', right.list));
        }

        resolve();
      });
    });
  };
};
