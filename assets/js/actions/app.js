'use strict';

import * as actions from '../constants/actionTypes';
import { setUser, updateStatus } from './user';
import {
  setActivePane, showPane, hidePane, paneCD, paneSort, paneSelect,
  setPaneShare, setPanePath, stopLoadingPane, paneUpdate
} from './pane';
import { setList } from './list';
import { startProgress, updateProgress, finishProgress } from './progressDialog';
import { matchLocation } from '../lib/path';

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
              type: actions.SET_CSRF_TOKEN,
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

export const connectApp = () => {
  let when = Date.now();
  return async (dispatch, getState) => {
    {
      let state = getState();
      let app = state.get('app');
      if (app.get('ioTimestamp') > when)
        return;

      dispatch({
        type: app.get('isConnected') ? actions.CONNECT_APP : actions.DISCONNECT_APP,
        when,
      });
    }
    {
      await dispatch(getCSRFToken());
      if (getState().getIn(['app', 'ioTimestamp']) !== when)
        return;
    }
    {
      await dispatch(updateStatus());
      if (getState().getIn(['app', 'ioTimestamp']) !== when)
        return;
    }
    {
      let state = getState();
      let app = state.get('app');
      let leftPane = state.get('leftPane');
      let rightPane = state.get('rightPane');
      let params = {
        timestamp: window.__TIMESTAMP__,
        left: {
          share: leftPane.get('share'),
          directory: leftPane.get('directory'),
        },
        right: {
          share: rightPane.get('share'),
          directory: rightPane.get('directory'),
        },
        _csrf: app.get('csrf'),
      };
      await new Promise(resolve => {
        io.socket.post('/pane/loaded', params, () => resolve());
      });
    }
    {
      if (getState().getIn(['app', 'ioTimestamp']) !== when)
        return;

      dispatch({
        type: actions.CONNECT_APP,
        when,
      });
    }
  };
};

export const disconnectApp = () => {
  let now = Date.now();
  window.__TIMESTAMP__ = now;
  return {
    type: actions.DISCONNECT_APP,
    when: now,
  };
};

export const startApp = () => {
  return dispatch => {
    dispatch({
      type: actions.START_APP,
    });

    io.socket.on('connect', () => dispatch(connectApp()));
    io.socket.on('disconnect', () => dispatch(disconnectApp()));
    io.socket.on('update', data => dispatch(paneUpdate(data)));
    io.socket.on('progress-start', data => dispatch(startProgress(data)));
    io.socket.on('progress-more', data => dispatch(updateProgress(data)));
    io.socket.on('progress-finish', data => dispatch(finishProgress(data)));

    if (io.socket.isConnected())
      dispatch(connectApp());
  };
};

let versionTimer = null;
export const setAppVersion = isSameVersion => {
  if (versionTimer) {
    clearTimeout(versionTimer);
    versionTimer = null;
  }

  if (!isSameVersion)
    versionTimer = setTimeout(() => window.location.reload(true), 60 * 1000);

  return {
    type: actions.APP_VERSION,
    isSameVersion,
  };
};

export const screenResize = () => {
  return async (dispatch, getState) => {
    let state = getState();
    let app = state.get('app');
    let rightPane = state.get('rightPane');
    let newSize = Breakpoints.current().name;
    if (!app.get('isStarted') || !newSize || newSize === app.get('breakpoint'))
      return;

    await dispatch({
      type: actions.SCREEN_RESIZE,
      breakpoint: newSize,
    });

    if (newSize === 'xs') {
      await dispatch(hidePane('RIGHT'));
      if (rightPane.get('isActive'))
        await dispatch(setActivePane('LEFT'));
    } else if (app.get('prevBreakpoint') === 'xs') {
      await dispatch(showPane('RIGHT'));
    }
  };
};

export const initApp = history => {
  return async (dispatch, getState) => {
    if (getState().getIn(['app', 'isStarted']))
      return;

    await dispatch(startApp());
    await dispatch(screenResize());
    await dispatch(setActivePane('LEFT'));

    history.listen(async location => {
      let state = getState();
      let user = state.get('user');
      let leftPane = state.get('leftPane');
      if (!user.get('isAuthorized'))
        return;

      let pane = leftPane.get('isActive') ? 'LEFT' : 'RIGHT';
      let match = matchLocation(location.pathname);
      dispatch(paneCD(pane, match ? match.share : user.getIn(['shares', 0, 'name']), match ? match.path : '/'));
    });
  };
};

export const setServerState = params => {
  return async dispatch => {
    await dispatch(setUser(true, params.login, params.locale, params.shares));
    await dispatch(setPaneShare('LEFT', params.share));
    await dispatch(setPanePath('LEFT', params.path, params.directory, params.name));
    await dispatch(setPaneShare('RIGHT', params.share));
    await dispatch(setPanePath('RIGHT', params.path, params.directory, params.name));

    if (params.list) {
      await dispatch(setList(`${params.share}:${params.directory}`, params.list));
      await dispatch(paneSort('LEFT'));
      await dispatch(paneSelect('LEFT'));
      await dispatch(paneSort('RIGHT'));
      await dispatch(paneSelect('RIGHT'));
    } else {
      await dispatch(stopLoadingPane('LEFT', 0, true));
      await dispatch(stopLoadingPane('RIGHT', 0, true));
    }
  };
};
