'use strict';

import { updateAuthStatus } from './authStatus';

export const startApp = () => {
  return {
    type: 'START_APP',
  };
};

export const initApp = () => {
  return async (dispatch, getState) => {
    let { appStarted } = getState();
    if (appStarted)
      return;

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
