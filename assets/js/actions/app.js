'use strict';

import { updateAuthStatus } from './authStatus';

export const startApp = () => {
  return {
    type: 'START_APP',
  };
};

export const lockApp = () => {
  return {
    type: 'LOCK_APP',
  };
};

export const unlockApp = () => {
  return {
    type: 'UNLOCK_APP',
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
    await dispatch(updateAuthStatus());

    return new Promise(resolve => {
      $('#page-loader').fadeOut(() => {
        $('#app').show();
        dispatch(startApp());
        resolve();
      });
    });
  };
};
