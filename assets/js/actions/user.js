import * as actions from '../constants/actionTypes';
import packageJson from '../../../package.json';
import i18n from '../lib/i18n';
import { setAppVersion } from './app';
import { initPanes } from './pane';
import {
  hideSignInDialog, lockSignInDialog, unlockSignInDialog,
  submitSignInDialog, updateSignInDialog
} from './signInDialog';
import { closeNavbar } from './navbar';

export const setUser = (isAuthorized, login, locale, shares) => {
  return {
    type: actions.SET_USER,
    isAuthorized,
    login,
    locale,
    shares,
  };
};

export const updateStatus = () => {
  return async (dispatch, getState) => {
    return new Promise(async resolve => {
      io.socket.get('/status', async (data, response) => {
        if (response.statusCode === 200) {
          await dispatch(setAppVersion(data.version === packageJson.version));
          await dispatch(setUser(data.isAuthorized, data.login, data.locale, data.shares));

          let user = getState().get('user');

          if (i18n.getLocale() !== user.get('locale'))
            i18n.setLocale(user.get('locale'));
        } else {
          window.location.reload(true);
        }

        resolve();
      });
    });
  };
};

export const signOut = () => {
  return async (dispatch, getState) => {
    let app = getState().get('app');
    await new Promise(resolve => {
      io.socket.post('/auth/sign-out',  { _csrf: app.get('csrf') }, () => resolve());
    });
    return dispatch(updateStatus());
  };
};

export const signIn = (when, validate) => {
  return async (dispatch, getState) => {
    let state = getState();
    let app = state.get('app');
    let signInDialog = state.get('signInDialog');
    if (signInDialog.get('submittedAt') >= when)
      return;

    if (!validate)
      await dispatch(lockSignInDialog());

    await dispatch(submitSignInDialog(when));

    return new Promise(async resolve => {
      try {
        let response = await fetch(
          '/auth/sign-in',
          {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify({
              login: signInDialog.getIn(['values', 'login']),
              password: signInDialog.getIn(['values', 'password']),
              _validate: validate,
              _csrf: app.get('csrf'),
            })
          }
        );
        if (response.status === 200) {
          let data = await response.json();

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
              values: data.values || {},
              messages: data.messages || {},
              errors: data.errors || {},
            },
            when
          ));

          if (!validate) {
            await dispatch(unlockSignInDialog());

            if (data.success) {
              await dispatch(closeNavbar());
              await dispatch(hideSignInDialog());
              await dispatch(updateStatus());
              dispatch(initPanes());
            }
          }

          return resolve();
        }
      } catch (error) {
        console.error(error);
      }

      if (!validate)
        await dispatch(unlockSignInDialog());

      resolve();
    });
  };
};
