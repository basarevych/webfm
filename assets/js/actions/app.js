'use strict';

import style from '../../styles/variables.scss';
import viewport from '../lib/viewport';
import { updateStatus } from './user';
import {setActivePane, showPane, hidePane, initPanes, paneCD} from './pane';
import {matchLocation} from '../lib/path';

export const startApp = () => {
  return {
    type: 'START_APP',
  };
};

export const connectApp = () => {
  return async (dispatch) => {
    await dispatch(getCSRFToken());
    await dispatch(updateStatus());
    return dispatch({
      type: 'CONNECT_APP',
    });
  };
};

export const disconnectApp = () => {
  return {
    type: 'DISCONNECT_APP',
  };
};

export const screenResize = () => {
  return async (dispatch, getState) => {
    let { app, rightPane } = getState();
    let newSize = viewport.current();
    if (newSize === 'unrecognized' || newSize === app.viewport)
      return;

    if (viewport.is('<=sm')) {
      await dispatch(hidePane('RIGHT'));
      if (rightPane.isActive)
        await dispatch(setActivePane('LEFT'));
    } else {
      await dispatch(showPane('RIGHT'));
    }

    return dispatch({
      type: 'SCREEN_RESIZE',
      viewport: newSize,
    });
  };
};

export const getCSRFToken = () => {
  return async dispatch => {
    return new Promise(resolve => {
      let retry = () => {
        $.ajax({
          url: '/auth/csrf',
          type: 'GET',
          success: async data => {
            await dispatch({
              type: 'SET_CSRF_TOKEN',
              token: data._csrf,
            });
            resolve();
          },
          error: () => setTimeout(retry, 1000),
        });
      };
      retry();
    });
  };
};

export const initApp = history => {
  return async (dispatch, getState) => {
    if (!window.isLoaded)
      return;

    let { app } = getState();
    if (app.isStarted)
      return;

    await dispatch(startApp());
    await dispatch(screenResize());
    await dispatch(setActivePane('LEFT'));
    await dispatch(io.socket.isConnected() ? connectApp() : disconnectApp());
    await dispatch(initPanes());

    history.listen(async location => {
      let { user, leftPane, rightPane } = getState();
      if (!user.isAuthorized)
        return;

      let pane, share, path;
      if (leftPane.isActive) {
        pane = 'LEFT';
        share = leftPane.share;
        path = leftPane.path;
      } else {
        pane = 'RIGHT';
        share = rightPane.share;
        path = rightPane.path;
      }

      let match = matchLocation(location.pathname);
      if (!match)
        dispatch(paneCD(pane, user.shares[0].name, '/'));
      else if (match.share !== share || match.path !== path)
        dispatch(paneCD(pane, match.share, match.path));
    });

    return new Promise(resolve => {
      $('body').removeClass('loading');
      $('#page-loader').fadeOut(style.fadeDuration);
      $('#app').fadeIn(style.fadeDuration, () => resolve());
    });
  };
};
