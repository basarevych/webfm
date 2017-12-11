'use strict';

import { push } from 'react-router-redux'
import { signOut } from './user';
import { matchLocation } from '../lib/path';

export const setActivePane = pane => {
  return async (dispatch, getState) => {
    await dispatch({
      type: `DEACTIVATE_${pane === 'LEFT' ? 'RIGHT' : 'LEFT'}_PANE`,
    });
    await dispatch({
      type: `ACTIVATE_${pane}_PANE`,
    });

    let { user, leftPane, rightPane } = getState();
    let share = (pane === 'LEFT' ? leftPane.share : rightPane.share);
    let path = (pane === 'LEFT' ? leftPane.path : rightPane.path);
    if (user.isAuthorized)
      await dispatch(push(`/~${share}:${path}`));
  };
};

export const showPane = pane => {
  return {
    type: `SHOW_${pane}_PANE`,
  };
};

export const hidePane = pane => {
  return {
    type: `HIDE_${pane}_PANE`,
  };
};

export const togglePane = pane => {
  return async (dispatch, getState) => {
    let { leftPane, rightPane } = getState();
    let isVisible = (pane === 'LEFT' ? leftPane.isVisible : rightPane.isVisible);
    dispatch(isVisible ? hidePane(pane) : showPane(pane));
    if (isVisible)
      dispatch(setActivePane(pane === 'LEFT' ? 'RIGHT' : 'LEFT'));
  };
};

export const startLoadingPane = pane => {
  return {
    type: `START_${pane}_PANE_LOADING`,
    timestamp: Date.now(),
  };
};

export const stopLoadingPane = (timestamp, pane, isForbidden = false) => {
  return {
    type: `STOP_${pane}_PANE_LOADING`,
    timestamp,
    isForbidden,
  };
};

export const setPaneMode = (pane, mode) => {
  return {
    type: `SET_${pane}_PANE_MODE`,
    mode,
  };
};

export const setPaneShare = (pane, share) => {
  return {
    type: `SET_${pane}_PANE_SHARE`,
    share,
  };
};

export const setPanePath = (pane, path) => {
  return {
    type: `SET_${pane}_PANE_PATH`,
    path,
  };
};

export const setPaneList = (pane, list) => {
  return {
    type: `SET_${pane}_PANE_LIST`,
    list,
  };
};

export const setPaneContents = (pane, contents) => {
  return {
    type: `SET_${pane}_PANE_CONTENTS`,
    contents,
  };
};

export const setPaneInfo = (pane, info) => {
  return {
    type: `SET_${pane}_PANE_INFO`,
    info,
  };
};

export const initPanes = () => {
  return async (dispatch, getState) => {
    let { user, router } = getState();
    if (!user.isAuthorized)
      return;

    let match = matchLocation(router.location.pathname);
    let share, path;
    if (match) {
      share = match.share;
      path = match.path;
    } else {
      share = user.shares[0].share;
      path = '/';
    }

    return new Promise((resolve, reject) => {
      let counter = 0;
      const done = () => {
        if (++counter >= 2)
          resolve();
      };
      dispatch(paneCD('LEFT', share, path))
        .then(() => done())
        .catch(error => reject(error));
      dispatch(paneCD('RIGHT', share, path))
        .then(() => done())
        .catch(error => reject(error));
    });
  };
};

export const paneCD = (pane, share, path) => {
  return async (dispatch, getState) => {
    let { app, user, leftPane, rightPane } = getState();
    if (!user.isAuthorized)
      return;

    let start = await dispatch(startLoadingPane(pane));

    if (!share)
      share = pane === 'LEFT' ? leftPane.share : rightPane.share;
    if (!path)
      path = pane === 'LEFT' ? leftPane.path : rightPane.path;

    let params = {
      share,
      path,
      _csrf: app.csrf,
    };

    return new Promise(resolve => {
      io.socket.post('/pane/cd', params, async (data, response) => {
        let { leftPane, rightPane } = getState();
        if (pane === 'LEFT') {
          if (leftPane.timestamp !== start.timestamp)
            return resolve();
        } else {
          if (rightPane.timestamp !== start.timestamp)
            return resolve();
        }

        if (response.statusCode === 403) {
          await dispatch(setPaneShare(pane, share));
          await dispatch(setPanePath(pane, path));
          await dispatch(setPaneList(pane, []));
          if ((pane === 'LEFT' && leftPane.isActive) || (pane === 'RIGHT' && rightPane.isActive))
            await dispatch(push(`/~${share}:${path}`));
          await dispatch(stopLoadingPane(start.timestamp, pane, true));
        } else if (response.statusCode === 200) {
          await dispatch(setPaneShare(pane, data.share));
          await dispatch(setPanePath(pane, data.path));
          await dispatch(setPaneList(pane, data.list));
          if ((pane === 'LEFT' && leftPane.isActive) || (pane === 'RIGHT' && rightPane.isActive))
            await dispatch(push(`/~${data.share}:${data.path}`));
          await dispatch(stopLoadingPane(start.timestamp, pane));
        } else {
          await dispatch(stopLoadingPane(start.timestamp, pane));
          await dispatch(signOut());
        }

        resolve();
      });
    });
  };
};
