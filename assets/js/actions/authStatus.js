'use strict';

export const requestAuthStatus = () => {
  return {
    type: 'AUTH_STATUS_REQUEST',
    requestedAt: Date.now(),
  };
};

export const receiveAuthStatus = (requestedAt, data) => {
  if (data.success) {
    return {
      type: 'AUTH_STATUS_SUCCESS',
      requestedAt,
      authorized: data.authorized,
      login: data.login,
    };
  }

  return {
    type: 'AUTH_STATUS_FAILURE',
    requestedAt,
  };
};

export const updateAuthStatus = () => {
  return async (dispatch, getState) => {
    let { authStatus } = getState();
    if (authStatus.isFetching)
      return;

    let request = dispatch(requestAuthStatus());
    return new Promise(resolve => {
      $.ajax({
        url: '/user/info',
        type: 'GET',
        success: data => resolve(dispatch(receiveAuthStatus(request.requestedAt, data))),
        error: () => {
          let receive = dispatch(receiveAuthStatus(request.requestedAt, { success: false }));
          if (request.requestedAt !== receive.requestedAt)
            return resolve();

          setTimeout(() => resolve(dispatch(updateAuthStatus())), 1000);
        }
      });
    });
  };
};
