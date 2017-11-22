'use strict';

import style from '../../styles/variables.scss';
import viewport from '../lib/viewport';
import { updateStatus } from './status';
import { setActivePane, showRightPane, hideRightPane } from './pane';

export const startApp = () => {
  return {
    type: 'START_APP',
  };
};

export const screenResize = () => {
  return async (dispatch, getState) => {
    let { app } = getState();
    let newSize = viewport.current();
    if (newSize === 'unrecognized' || newSize === app.viewport)
      return;

    if (viewport.is('<=sm'))
      await dispatch(hideRightPane());
    else
      await dispatch(showRightPane());

    return dispatch({
      type: 'SCREEN_RESIZE',
      viewport: newSize,
    });
  };
};

let loaded = 0;
export const initApp = store => {
  return async (dispatch, getState) => {
    if (++loaded < 2)
      return;

    let { app } = getState();
    if (app.isStarted)
      return;

    await dispatch(screenResize());
    await dispatch(updateStatus());

    return new Promise(resolve => {
      $('body').removeClass('loading');
      $('#page-loader').fadeOut(style.fadeDuration);
      $('#app').fadeIn(style.fadeDuration, async () => {
        await dispatch(setActivePane('LEFT'));
        await dispatch(startApp());
        resolve();
      });
    });
  };
};
