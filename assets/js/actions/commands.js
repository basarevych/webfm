'use strict';

import { closeNavbar } from './navbar';
import {
  hideMkdirDialog, lockMkdirDialog, submitMkdirDialog, unlockMkdirDialog, updateMkdirDialog
} from './mkdirDialog';
import {
  hideCopyDialog, lockCopyDialog, submitCopyDialog, unlockCopyDialog, updateCopyDialog,
  startCopyDialogFind, stopCopyDialogFind
} from './copyDialog';
import {
  hideMoveDialog, lockMoveDialog, submitMoveDialog, unlockMoveDialog, updateMoveDialog,
  startMoveDialogFind, stopMoveDialogFind
} from './moveDialog';

export const mkdir = (when, validate) => {
  return async (dispatch, getState) => {
    let { app, mkdirDialog } = getState();
    if (mkdirDialog.submittedAt >= when)
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

export const find = what => {
  return async (dispatch, getState) => {
    let { app, copyDialog, moveDialog } = getState();
    if (what === 'COPY' && copyDialog.locked)
      return;
    if (what === 'MOVE' && moveDialog.locked)
      return;

    let share;
    let directory;
    let name;
    switch (what) {
      case 'COPY':
        share = copyDialog.values.srcShare;
        directory = copyDialog.values.srcDirectory;
        name = copyDialog.values.srcName;
        await dispatch(lockCopyDialog());
        await dispatch(copy(Date.now(), 'srcName'));
        copyDialog = getState().copyDialog;
        if (copyDialog.errors.srcName && Object.keys(copyDialog.errors.srcName).length)
          return await dispatch(unlockCopyDialog());
        await dispatch(startCopyDialogFind());
        break;
      case 'MOVE':
        share = moveDialog.values.srcShare;
        directory = moveDialog.values.srcDirectory;
        name = moveDialog.values.srcName;
        await dispatch(lockMoveDialog());
        await dispatch(move(Date.now(), 'srcName'));
        moveDialog = getState().moveDialog;
        if (moveDialog.errors.srcName && Object.keys(moveDialog.errors.srcName).length)
          return await dispatch(unlockMoveDialog());
        await dispatch(startMoveDialogFind());
        break;
    }

    return new Promise(async resolve => {
      try {
        let response = await fetch(
          '/pane/find',
          {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify({
              share,
              directory,
              name,
              _csrf: app.csrf,
            })
          }
        );
        if (response.status === 200) {
          let data = await response.json();

          let directories = [];
          let files = [];
          for (let node of data.nodes) {
            if (node.isDirectory)
              directories.push(node);
            else
              files.push(node);
          }
          directories.sort((a, b) => a.name.localeCompare(b.name));
          files.sort((a, b) => a.name.localeCompare(b.name));
          let nodes = directories.concat(files);

          switch (what) {
            case 'COPY':
              await dispatch(stopCopyDialogFind(nodes));
              await dispatch(unlockCopyDialog());
              break;
            case 'MOVE':
              await dispatch(stopMoveDialogFind(nodes));
              await dispatch(unlockMoveDialog());
              break;
          }

          return resolve();
        }
      } catch (error) {
        console.error(error);
      }

      switch (what) {
        case 'COPY':
          await dispatch(stopCopyDialogFind(false));
          await dispatch(unlockCopyDialog());
          break;
        case 'MOVE':
          await dispatch(stopMoveDialogFind(false));
          await dispatch(unlockMoveDialog());
          break;
      }

      resolve();
    });
  };
};

export const copy = (when, validate) => {
  return async (dispatch, getState) => {
    let { app, copyDialog } = getState();
    if (copyDialog.submittedAt >= when)
      return;

    if (!validate)
      await dispatch(lockCopyDialog());

    await dispatch(submitCopyDialog(when));

    return new Promise(async resolve => {
      try {
        let response = await fetch(
          '/pane/copy',
          {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify({
              srcShare: copyDialog.values.srcShare,
              srcDirectory: copyDialog.values.srcDirectory,
              srcName: copyDialog.values.srcName,
              dstShare: copyDialog.values.dstShare,
              dstDirectory: copyDialog.values.dstDirectory,
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
            if (!data.errors.srcShare)
              data.errors.srcShare = {};
            if (!data.errors.srcDirectory)
              data.errors.srcDirectory = {};
            if (!data.errors.srcName)
              data.errors.srcName = {};
            if (!data.errors.dstShare)
              data.errors.dstShare = {};
            if (!data.errors.dstDirectory)
              data.errors.dstDirectory = {};
          }

          await dispatch(updateCopyDialog(
            {
              values: data.values,
              messages: data.messages,
              errors: data.errors,
            },
            when
          ));

          if (!validate) {
            await dispatch(unlockCopyDialog());

            if (data.success) {
              await dispatch(closeNavbar());
              await dispatch(hideCopyDialog());
            }
          }

          return resolve();
        }
      } catch (error) {
        console.error(error);
      }

      if (!validate)
        await dispatch(unlockCopyDialog());

      resolve();
    });
  };
};

export const move = (when, validate) => {
  return async (dispatch, getState) => {
    let { app, moveDialog } = getState();
    if (moveDialog.submittedAt >= when)
      return;

    if (!validate)
      await dispatch(lockMoveDialog());

    await dispatch(submitMoveDialog(when));

    return new Promise(async resolve => {
      try {
        let response = await fetch(
          '/pane/move',
          {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify({
              srcShare: moveDialog.values.srcShare,
              srcDirectory: moveDialog.values.srcDirectory,
              srcName: moveDialog.values.srcName,
              dstShare: moveDialog.values.dstShare,
              dstDirectory: moveDialog.values.dstDirectory,
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
            if (!data.errors.srcShare)
              data.errors.srcShare = {};
            if (!data.errors.srcDirectory)
              data.errors.srcDirectory = {};
            if (!data.errors.srcName)
              data.errors.srcName = {};
            if (!data.errors.dstShare)
              data.errors.dstShare = {};
            if (!data.errors.dstDirectory)
              data.errors.dstDirectory = {};
          }

          await dispatch(updateMoveDialog(
            {
              values: data.values,
              messages: data.messages,
              errors: data.errors,
            },
            when
          ));

          if (!validate) {
            await dispatch(unlockMoveDialog());

            if (data.success) {
              await dispatch(closeNavbar());
              await dispatch(hideMoveDialog());
            }
          }

          return resolve();
        }
      } catch (error) {
        console.error(error);
      }

      if (!validate)
        await dispatch(unlockMoveDialog());

      resolve();
    });
  };
};
