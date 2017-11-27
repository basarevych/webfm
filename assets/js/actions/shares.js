'use strict';

import { signOut } from './signInDialog';
import { paneCD, setPaneMode } from './pane';

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

        if (app.shares.length) {
          let firstShare = app.shares[0];
          let leftShare = firstShare.name;
          let leftPath = '/';
          let rightShare = firstShare.name;
          let rightPath = '/';
          for (let share of app.shares) {
            if (share.name === leftPane.share) {
              leftShare = leftPane.share;
              leftPath = leftPane.path;
            }
            if (share.name === rightPane.share) {
              rightShare = rightPane.share;
              rightPath = rightPane.path;
            }
          }

          await dispatch(paneCD('LEFT', leftShare, leftPath));
          if (leftPane.mode === 'DISABLED')
            await dispatch(setPaneMode('LEFT', 'LIST'));

          await dispatch(paneCD('RIGHT', rightShare, rightPath));
          if (rightPane.mode === 'DISABLED')
            await dispatch(setPaneMode('RIGHT', 'LIST'));
        } else {
          await dispatch(setPaneMode('LEFT', 'DISABLED'));
          await dispatch(setPaneMode('RIGHT', 'DISABLED'));
        }

        resolve();
      });
    });
  };
};
