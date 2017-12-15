'use strict';

import { push } from 'react-router-redux';
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

export const startLoadingPane = (timestamp, pane) => {
  return {
    type: `START_${pane}_PANE_LOADING`,
    timestamp,
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
    let share = match ? match.share : user.shares[0].share;
    let path = match ? match.path : '/';

    await dispatch(paneCD('BOTH', share, path));
  };
};

export const paneCD = (pane, share, path) => {
  return async (dispatch, getState) => {
    let { app, user, leftPane, rightPane } = getState();
    if (!user.isAuthorized)
      return;

    let start = Date.now();
    if (pane === 'LEFT' || pane === 'BOTH')
      await dispatch(startLoadingPane(start, 'LEFT'));
    if (pane === 'RIGHT' || pane === 'BOTH')
      await dispatch(startLoadingPane(start, 'RIGHT'));

    if (!share)
      share = pane !== 'RIGHT' ? leftPane.share : rightPane.share;
    if (!path)
      path = pane !== 'RIGHT' ? leftPane.path : rightPane.path;

    let params = {
      share,
      path,
      _csrf: app.csrf,
    };

    return new Promise(resolve => {
      io.socket.post('/pane/cd', params, async (data, response) => {
        let { leftPane, rightPane } = getState();
        if (pane === 'LEFT') {
          if (leftPane.timestamp !== start)
            return resolve();
        } else if (pane === 'RIGHT') {
          if (rightPane.timestamp !== start)
            return resolve();
        }

        if (response.statusCode === 403) {
          if (pane === 'LEFT' || pane === 'BOTH') {
            await dispatch(setPaneShare('LEFT', share));
            await dispatch(setPanePath('LEFT', path));
            await dispatch(setPaneList('LEFT', []));
            await dispatch(stopLoadingPane(start, 'LEFT', true));
          }
          if (pane === 'RIGHT' || pane === 'BOTH') {
            await dispatch(setPaneShare('RIGHT', share));
            await dispatch(setPanePath('RIGHT', path));
            await dispatch(setPaneList('RIGHT', []));
            await dispatch(stopLoadingPane(start, 'RIGHT', true));
          }
          if ((pane === 'LEFT' && leftPane.isActive) || (pane === 'RIGHT' && rightPane.isActive) || pane === 'BOTH')
            await dispatch(push(`/~${share}:${path}`));
        } else if (response.statusCode === 200) {
          if (pane === 'LEFT' || pane === 'BOTH') {
            await dispatch(setPaneShare('LEFT', data.share));
            await dispatch(setPanePath('LEFT', data.path));
            await dispatch(setPaneList('LEFT', data.list));
            await dispatch(stopLoadingPane(start, 'LEFT'));
          }
          if (pane === 'RIGHT' || pane === 'BOTH') {
            await dispatch(setPaneShare('RIGHT', data.share));
            await dispatch(setPanePath('RIGHT', data.path));
            await dispatch(setPaneList('RIGHT', data.list));
            await dispatch(stopLoadingPane(start, 'RIGHT'));
          }
          if ((pane === 'LEFT' && leftPane.isActive) || (pane === 'RIGHT' && rightPane.isActive) || pane === 'BOTH')
            await dispatch(push(`/~${data.share}:${data.path}`));
        } else {
          if (pane === 'LEFT' || pane === 'BOTH')
            await dispatch(stopLoadingPane(start, 'LEFT'));
          if (pane === 'RIGHT' || pane === 'BOTH')
            await dispatch(stopLoadingPane(start, 'RIGHT'));
          await dispatch(signOut());
        }

        resolve();
      });
    });
  };
};
