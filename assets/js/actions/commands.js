'use strict';

import { closeNavbar } from './navbar';
import {
  hideMkdirDialog, lockMkdirDialog, submitMkdirDialog, unlockMkdirDialog, updateMkdirDialog
} from './mkdirDialog';
import {
  hideRenameDialog, lockRenameDialog, submitRenameDialog, unlockRenameDialog, updateRenameDialog
} from './renameDialog';
import {
  hideCopyDialog, lockCopyDialog, submitCopyDialog, unlockCopyDialog, updateCopyDialog,
  startCopyDialogFind, stopCopyDialogFind
} from './copyDialog';
import {
  hideMoveDialog, lockMoveDialog, submitMoveDialog, unlockMoveDialog, updateMoveDialog,
  startMoveDialogFind, stopMoveDialogFind
} from './moveDialog';
import {
  hideDeleteDialog, lockDeleteDialog, submitDeleteDialog, unlockDeleteDialog, updateDeleteDialog,
  startDeleteDialogFind, stopDeleteDialogFind
} from './deleteDialog';
import { showFailureDialog } from './failureDialog';

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

export const rename = (when, validate) => {
  return async (dispatch, getState) => {
    let { app, renameDialog } = getState();
    if (renameDialog.submittedAt >= when)
      return;

    if (!validate)
      await dispatch(lockRenameDialog());

    await dispatch(submitRenameDialog(when));

    return new Promise(async resolve => {
      try {
        let response = await fetch(
          '/pane/rename',
          {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify({
              share: renameDialog.values.share,
              directory: renameDialog.values.directory,
              name: renameDialog.values.name,
              newName: renameDialog.values.newName,
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
            if (!data.errors.newName)
              data.errors.newName = {};
          }

          await dispatch(updateRenameDialog(
            {
              values: data.values,
              messages: data.messages,
              errors: data.errors,
            },
            when
          ));

          if (!validate) {
            await dispatch(unlockRenameDialog());

            if (data.success) {
              await dispatch(closeNavbar());
              await dispatch(hideRenameDialog());
            }
          }

          return resolve();
        }
      } catch (error) {
        console.error(error);
      }

      if (!validate)
        await dispatch(unlockRenameDialog());

      resolve();
    });
  };
};

export const find = what => {
  return async (dispatch, getState) => {
    let { app, copyDialog, moveDialog, deleteDialog } = getState();
    if (what === 'COPY' && copyDialog.locked)
      return;
    if (what === 'MOVE' && moveDialog.locked)
      return;
    if (what === 'DELETE' && deleteDialog.locked)
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
      case 'DELETE':
        share = deleteDialog.values.share;
        directory = deleteDialog.values.directory;
        name = deleteDialog.values.name;
        await dispatch(lockDeleteDialog());
        await dispatch(copy(Date.now(), 'name'));
        deleteDialog = getState().deleteDialog;
        if (deleteDialog.errors.name && Object.keys(deleteDialog.errors.name).length)
          return await dispatch(unlockDeleteDialog());
        await dispatch(startDeleteDialogFind());
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
            case 'DELETE':
              await dispatch(stopDeleteDialogFind(nodes));
              await dispatch(unlockDeleteDialog());
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
        case 'DELETE':
          await dispatch(stopDeleteDialogFind(false));
          await dispatch(unlockDeleteDialog());
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

export const fastCopy = (pane, name) => {
  return async (dispatch, getState) => {
    let { app, leftPane, rightPane } = getState();

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
              srcShare: pane === 'LEFT' ? leftPane.share : rightPane.share,
              srcDirectory: pane === 'LEFT' ? leftPane.directory : rightPane.directory,
              srcName: name,
              dstShare: pane === 'LEFT' ? rightPane.share : leftPane.share,
              dstDirectory: pane === 'LEFT' ? rightPane.directory : leftPane.directory,
              _fast: true,
              _csrf: app.csrf,
            })
          }
        );
        if (response.status === 200) {
          let data = await response.json();

          if (!data.success)
            await dispatch(showFailureDialog(data.messages || {}, data.errors || {}));

          return resolve();
        }
      } catch (error) {
        console.error(error);
      }

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

export const fastMove = (pane, name) => {
  return async (dispatch, getState) => {
    let { app, leftPane, rightPane } = getState();

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
              srcShare: pane === 'LEFT' ? leftPane.share : rightPane.share,
              srcDirectory: pane === 'LEFT' ? leftPane.directory : rightPane.directory,
              srcName: name,
              dstShare: pane === 'LEFT' ? rightPane.share : leftPane.share,
              dstDirectory: pane === 'LEFT' ? rightPane.directory : leftPane.directory,
              _fast: true,
              _csrf: app.csrf,
            })
          }
        );
        if (response.status === 200) {
          let data = await response.json();

          if (!data.success)
            await dispatch(showFailureDialog(data.messages || {}, data.errors || {}));

          return resolve();
        }
      } catch (error) {
        console.error(error);
      }

      resolve();
    });
  };
};

export const del = (when, validate) => {
  return async (dispatch, getState) => {
    let { app, deleteDialog } = getState();
    if (deleteDialog.submittedAt >= when)
      return;

    if (!validate)
      await dispatch(lockDeleteDialog());

    await dispatch(submitDeleteDialog(when));

    return new Promise(async resolve => {
      try {
        let response = await fetch(
          '/pane/del',
          {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify({
              share: deleteDialog.values.share,
              directory: deleteDialog.values.directory,
              name: deleteDialog.values.name,
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

          await dispatch(updateDeleteDialog(
            {
              values: data.values,
              messages: data.messages,
              errors: data.errors,
            },
            when
          ));

          if (!validate) {
            await dispatch(unlockDeleteDialog());

            if (data.success) {
              await dispatch(closeNavbar());
              await dispatch(hideDeleteDialog());
            }
          }

          return resolve();
        }
      } catch (error) {
        console.error(error);
      }

      if (!validate)
        await dispatch(unlockDeleteDialog());

      resolve();
    });
  };
};

export const fastDel = (pane, name) => {
  return async (dispatch, getState) => {
    let { app, leftPane, rightPane } = getState();

    return new Promise(async resolve => {
      try {
        let response = await fetch(
          '/pane/del',
          {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify({
              share: pane === 'LEFT' ? leftPane.share : rightPane.share,
              directory: pane === 'LEFT' ? leftPane.directory : rightPane.directory,
              name: name,
              _fast: true,
              _csrf: app.csrf,
            })
          }
        );
        if (response.status === 200) {
          let data = await response.json();

          if (!data.success)
            await dispatch(showFailureDialog(data.messages || {}, data.errors || {}));

          return resolve();
        }
      } catch (error) {
        console.error(error);
      }

      resolve();
    });
  };
};
