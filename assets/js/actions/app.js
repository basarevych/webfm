'use strict';

import { setUser, updateStatus } from './user';
import {
  setActivePane, showPane, hidePane, paneCD, setPaneShare, setPanePath, setPaneList,
  stopLoadingPane
} from './pane';
import { matchLocation } from '../lib/path';

export const startApp = () => {
  return {
    type: 'START_APP',
  };
};

let ioConnected = false;
let startTimer = null;
export const connectApp = () => {
  ioConnected = true;

  if (startTimer) {
    clearTimeout(startTimer);
    startTimer = null;
  }

  let when = Date.now();
  return async (dispatch, getState) => {
    {
      let { app } = getState();
      if (!app.isStarted)
        return;
    }
    {
      await dispatch(getCSRFToken());
      let { app } = getState();
      if (app.ioTimestamp > when)
        return;
    }
    {
      await dispatch(updateStatus());
      let { app } = getState();
      if (app.ioTimestamp > when)
        return;
    }

    return dispatch({
      type: 'CONNECT_APP',
      when,
    });
  };
};

export const disconnectApp = () => {
  ioConnected = false;

  return async (dispatch, getState) => {
    let { app } = getState();
    if (!app.isStarted)
      return;

    return dispatch({
      type: 'DISCONNECT_APP',
      when: Date.now(),
    });
  };
};

export const screenResize = () => {
  return async (dispatch, getState) => {
    let { app, rightPane } = getState();
    let newSize = Breakpoints.current().name;
    if (!app.isStarted || !newSize || newSize === app.breakpoint)
      return;

    if (newSize === 'xs') {
      await dispatch(hidePane('RIGHT'));
      if (rightPane.isActive)
        await dispatch(setActivePane('LEFT'));
    } else if (app.prevBreakpoint === 'xs') {
      await dispatch(showPane('RIGHT'));
    }

    return dispatch({
      type: 'SCREEN_RESIZE',
      breakpoint: newSize,
    });
  };
};

export const getCSRFToken = () => {
  return async dispatch => {
    return new Promise(async resolve => {
      let retry = async () => {
        try {
          let response = await fetch(
            '/auth/csrf',
            {
              method: 'GET',
              credentials: 'same-origin',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
              }
            }
          );
          if (response.status === 200) {
            await dispatch({
              type: 'SET_CSRF_TOKEN',
              token: (await response.json())._csrf,
            });
            return resolve();
          }
        } catch (error) {
          console.error(error);
        }
        setTimeout(retry, 1000);
      };
      await retry();
    });
  };
};

export const initApp = history => {
  return async (dispatch, getState) => {
    let { app, leftPane, rightPane } = getState();
    if (app.isStarted)
      return;

    await dispatch(startApp());
    await dispatch(screenResize());
    await dispatch(setActivePane('LEFT'));

    let now = Date.now();
    if (!leftPane.timestamp)
      await dispatch(stopLoadingPane(now, 'LEFT'));
    if (!rightPane.timestamp)
      await dispatch(stopLoadingPane(now, 'RIGHT'));

    history.listen(async location => {
      let { user, leftPane, rightPane } = getState();
      if (!user.isAuthorized)
        return;

      let pane = leftPane.isActive ? 'LEFT' : 'RIGHT';
      let share = leftPane.isActive ? leftPane.share : rightPane.share;
      let path = leftPane.isActive ? leftPane.path : rightPane.path;

      let match = matchLocation(location.pathname);
      if (!match)
        dispatch(paneCD(pane, user.shares[0].name, '/'));
      else if (match.share !== share || match.path !== path)
        dispatch(paneCD(pane, match.share, match.path));
    });

    if (ioConnected) {
      await dispatch(connectApp());
    } else {
      startTimer = setTimeout(
        () => {
          startTimer = null;
          dispatch(disconnectApp());
        },
        3000
      );
    }
  };
};

export const setServerState = params => {
  return dispatch => {
    dispatch(setUser(params.login, params.locale, params.shares));
    dispatch(setPaneShare('LEFT', params.share));
    dispatch(setPanePath('LEFT', params.path));
    dispatch(setPaneShare('RIGHT', params.share));
    dispatch(setPanePath('RIGHT', params.path));

    if (params.list) {
      dispatch(setPaneList('LEFT', params.list));
      dispatch(setPaneList('RIGHT', params.list));
    } else {
      let now = Date.now();
      dispatch(stopLoadingPane(now, 'LEFT', true));
      dispatch(stopLoadingPane(now, 'RIGHT', true));
    }
  };
};
