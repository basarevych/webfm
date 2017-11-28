'use strict';

import i18n from '../lib/i18n';
import { setPaneMode } from './pane';

export const requestStatus = promise => {
  return {
    type: 'STATUS_REQUEST',
    requestedAt: Date.now(),
    promise,
  };
};

export const receiveStatus = (requestedAt, data) => {
  return async dispatch => {
    if (data.success) {
      i18n.setLocale(data.locale);

      if (!data.authorized) {
        await dispatch(setPaneMode('LEFT', 'DISABLED'));
        await dispatch(setPaneMode('RIGHT', 'DISABLED'));
      }

      return dispatch({
        type: 'STATUS_SUCCESS',
        requestedAt,
        authorized: data.authorized,
        login: data.login,
        locale: data.locale,
      });
    }

    return dispatch({
      type: 'STATUS_FAILURE',
      requestedAt,
    });
  };
};

export const updateStatus = (force = false) => {
  return async (dispatch, getState) => {
    if (!force) {
      let { status } = getState();
      if (status.isFetching)
        return status.promise;
    }

    let promise = new Promise(resolve => {
      $.ajax({
        url: '/status',
        type: 'GET',
        success: data => resolve(dispatch(receiveStatus(request.requestedAt, data))),
        error: async () => {
          let receive = await dispatch(receiveStatus(request.requestedAt, { success: false }));
          if (request.requestedAt !== receive.requestedAt)
            return resolve();

          setTimeout(() => resolve(dispatch(updateStatus())), 1000);
        }
      });
    });
    let request = await dispatch(requestStatus(promise));
    return promise;
  };
};
