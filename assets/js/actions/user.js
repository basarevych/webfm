'use strict';

import i18n from '../lib/i18n';
import { paneCD } from './pane';
import {
  hideSignInDialog, lockSignInDialog, unlockSignInDialog,
  submitSignInDialog, updateSignInDialog
} from './signInDialog';
import { closeNavbar } from './navbar';

export const requestStatus = promise => {
  return {
    type: 'STATUS_REQUEST',
    requestedAt: Date.now(),
    promise,
  };
};

export const receiveStatus = (requestedAt, data) => {
  return async (dispatch, getState) => {
    if (!data.success) {
      return dispatch({
        type: 'STATUS_FAILURE',
        requestedAt,
      });
    }

    i18n.setLocale(data.locale);

    let result = dispatch({
      type: 'STATUS_SUCCESS',
      requestedAt,
      authorized: data.authorized,
      login: data.login,
      locale: data.locale,
      shares: data.shares,
    });

    if (data.authorized && !data.shares.length)
      await dispatch(signOut());

    let { user, leftPane, rightPane } = getState();
    if (!user.isAuthorized)
      return result;

    let leftFound = false;
    let rightFound = false;
    for (let share of data.shares) {
      if (share.name === leftPane.share)
        leftFound = true;
      if (share.name === rightPane.share)
        rightFound = true;
      if (leftFound && rightFound)
        break;
    }

    if (!leftFound)
      await dispatch(paneCD('LEFT', data.shares[0].name, '/'));

    if (!rightFound)
      await dispatch(paneCD('RIGHT', data.shares[0].name, '/'));

    return result;
  };
};

export const updateStatus = (force = false) => {
  return async (dispatch, getState) => {
    let { user } = getState();
    if (!force && user.isStatusFetching)
      return user.statusPromise;

    let request;
    let promise = new Promise(resolve => {
      $.ajax({
        url: '/status',
        type: 'GET',
        success: data => resolve(dispatch(receiveStatus(request.requestedAt, data))),
        error: async () => {
          let response = await dispatch(receiveStatus(request.requestedAt, { success: false }));
          if (request.requestedAt !== response.requestedAt)
            return resolve();

          setTimeout(() => resolve(dispatch(updateStatus())), 1000);
        }
      });
    });
    request = await dispatch(requestStatus(promise));
    return promise;
  };
};

export const signIn = (when, validate) => {
  return async (dispatch, getState) => {
    let { app, signInDialog } = getState();
    if (signInDialog.locked || signInDialog.submittedAt >= when)
      return;

    if (!validate)
      await dispatch(lockSignInDialog());

    await dispatch(submitSignInDialog(when));

    return new Promise(resolve => {
      $.ajax({
        url: '/auth/sign-in',
        type: 'POST',
        data: {
          login: signInDialog.values.login,
          password: signInDialog.values.password,
          _validate: validate,
          _csrf: app.csrf,
        },
        success: async data => {
          if (validate) {                     // clear previous errors of the field on successful validation
            if (!data.errors[validate])
              data.errors[validate] = {};
          } else {                            // clear all successful fields previous errors on submit
            if (!data.errors.login)
              data.errors.login = {};
            if (!data.errors.password)
              data.errors.password = {};
          }

          await dispatch(updateSignInDialog(
            {
              values: data.values,
              messages: data.messages,
              errors: data.errors,
            },
            when
          ));

          if (!validate) {
            await dispatch(unlockSignInDialog());

            if (data.success) {
              await dispatch(closeNavbar());
              await dispatch(hideSignInDialog());
              await dispatch(updateStatus(true));
            }
          }

          resolve();
        },
        error: async () => {
          if (!validate)
            await dispatch(unlockSignInDialog());

          resolve();
        },
      });
    });
  };
};

export const signOut = () => {
  return async (dispatch, getState) => {
    let { app } = getState();

    await new Promise(resolve => {
      $.ajax({
        url: '/auth/sign-out',
        type: 'POST',
        data: {
          _csrf: app.csrf,
        },
        success: () => resolve(),
        error: () => resolve(),
      });
    });
    return dispatch(updateStatus(true));
  };
};
