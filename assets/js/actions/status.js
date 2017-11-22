'use strict';

import i18n from '../lib/i18n';

export const requestStatus = () => {
  return {
    type: 'STATUS_REQUEST',
    requestedAt: Date.now(),
  };
};

export const receiveStatus = (requestedAt, data) => {
  if (data.success) {
    i18n.setLocale(data.locale);
    return {
      type: 'STATUS_SUCCESS',
      requestedAt,
      authorized: data.authorized,
      login: data.login,
      locale: data.locale,
    };
  }

  return {
    type: 'STATUS_FAILURE',
    requestedAt,
  };
};

export const updateStatus = (force = false) => {
  return async (dispatch, getState) => {
    if (!force) {
      let { status } = getState();
      if (status.isFetching)
        return;
    }

    let request = await dispatch(requestStatus());
    return new Promise(resolve => {
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
  };
};
