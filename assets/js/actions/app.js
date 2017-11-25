'use strict';

import style from '../../styles/variables.scss';
import viewport from '../lib/viewport';
import { updateStatus } from './status';
import { setActivePane, showPane, hidePane } from './pane';

export const startApp = () => {
  return {
    type: 'START_APP',
  };
};

export const connectApp = () => {
  return async dispatch => {
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
    let { app } = getState();
    let newSize = viewport.current();
    if (newSize === 'unrecognized' || newSize === app.viewport)
      return;

    if (viewport.is('<=sm')) {
      await dispatch(hidePane('RIGHT'));
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

export const initApp = () => {
  return async (dispatch, getState) => {
    if (!window.isLoaded)
      return;

    let { app } = getState();
    if (app.isStarted)
      return;

    await dispatch(startApp());
    await dispatch(screenResize());
    await dispatch(io.socket.isConnected() ? connectApp() : disconnectApp());

    return new Promise(resolve => {
      $('body').removeClass('loading');
      $('#page-loader').fadeOut(style.fadeDuration);
      $('#app').fadeIn(style.fadeDuration, async () => {
        await dispatch(setActivePane('LEFT'));
        resolve();
      });
    });
  };
};
