'use strict';

import style from '../../styles/variables.scss';
import { updateStatus } from './status';
import { setActivePane } from './pane';

export const startApp = () => {
  return {
    type: 'START_APP',
  };
};

export const screenResize = () => {
  return {
    type: 'SCREEN_RESIZE',
  };
};

export const initApp = store => {
  return async (dispatch, getState) => {
    let { appStarted } = getState();
    if (appStarted)
      return;

    await dispatch(screenResize());
    await dispatch(updateStatus());

    return new Promise(resolve => {
      $(window)
        .on('resize', () => store.dispatch(screenResize()))
        .on('orientationchange', () => store.dispatch(screenResize()));

      $('body').removeClass('loading');

      $('#page-loader').fadeOut(style.fadeDuration, async () => {
        $('#app').show();
        await dispatch(setActivePane('LEFT'));
        await dispatch(startApp());
        resolve();
      });
    });
  };
};
