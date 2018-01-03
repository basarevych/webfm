'use strict';

import { closeNavbar } from './navbar';
import { hideMkdirDialog, lockMkdirDialog, submitMkdirDialog, unlockMkdirDialog, updateMkdirDialog } from './mkdirDialog';

export const mkdir = (when, validate) => {
  return async (dispatch, getState) => {
    let { app, mkdirDialog } = getState();
    if (mkdirDialog.locked || mkdirDialog.submittedAt >= when)
      return;

    if (!validate)
      await dispatch(lockMkdirDialog());

    await dispatch(submitMkdirDialog(when));

    return new Promise(async resolve => {
      try {
        let response = await fetch(
          '/pane/mkdir',
          {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify({
              share: mkdirDialog.values.share,
              directory: mkdirDialog.values.directory,
              name: mkdirDialog.values.name,
              _validate: validate,
              _csrf: app.csrf,
            })
          }
        );
        if (response.status === 200) {
          let data = await response.json();

          if (validate) {                     // clear previous errors of the field on successful validation
            if (!data.errors[validate])
              data.errors[validate] = {};
          } else {                            // clear all successful fields previous errors on submit
            if (!data.errors.share)
              data.errors.share = {};
            if (!data.errors.directory)
              data.errors.directory = {};
            if (!data.errors.name)
              data.errors.name = {};
          }

          await dispatch(updateMkdirDialog(
            {
              values: data.values,
              messages: data.messages,
              errors: data.errors,
            },
            when
          ));

          if (!validate) {
            await dispatch(unlockMkdirDialog());

            if (data.success) {
              await dispatch(closeNavbar());
              await dispatch(hideMkdirDialog());
            }
          }

          return resolve();
        }
      } catch (error) {
        console.error(error);
      }

      if (!validate)
        await dispatch(unlockMkdirDialog());

      resolve();
    });
  };
};
