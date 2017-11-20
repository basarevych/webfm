'use strict';

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

export const initApp = () => {
  return async (dispatch, getState) => {
    let { appStarted } = getState();
    if (appStarted)
      return;

    await dispatch(screenResize());
    await dispatch(updateStatus());

    return new Promise(resolve => {
      $('#page-loader').fadeOut(() => {
        $('#app').show();
        dispatch(startApp());
        dispatch(setActivePane('LEFT'));
        resolve();
      });
    });
  };
};
