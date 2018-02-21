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
    let state = getState();
    let app = state.get('app');
    let mkdirDialog = state.get('mkdirDialog');
    if (mkdirDialog.get('submittedAt') >= when)
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
              share: mkdirDialog.getIn(['values', 'share']),
              directory: mkdirDialog.getIn(['values', 'directory']),
              name: mkdirDialog.getIn(['values', 'name']),
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
            if (!data.errors.share)
              data.errors.share = {};
            if (!data.errors.directory)
              data.errors.directory = {};
            if (!data.errors.name)
              data.errors.name = {};
          }

          await dispatch(updateMkdirDialog(
            {
              values: data.values || {},
              messages: data.messages || {},
              errors: data.errors || {},
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
    let state = getState();
    let app = state.get('app');
    let renameDialog = state.get('renameDialog');
    if (renameDialog.get('submittedAt') >= when)
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
              share: renameDialog.getIn(['values', 'share']),
              directory: renameDialog.getIn(['values', 'directory']),
              name: renameDialog.getIn(['values', 'name']),
              newName: renameDialog.getIn(['values', 'newName']),
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
              values: data.values || {},
              messages: data.messages || {},
              errors: data.errors || {},
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

export const copy = (when, validate) => {
  return async (dispatch, getState) => {
    let state = getState();
    let app = state.get('app');
    let copyDialog = state.get('copyDialog');
    if (copyDialog.get('submittedAt') >= when)
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
              srcShare: copyDialog.getIn(['values', 'srcShare']),
              srcDirectory: copyDialog.getIn(['values', 'srcDirectory']),
              srcName: copyDialog.getIn(['values', 'srcName']),
              dstShare: copyDialog.getIn(['values', 'dstShare']),
              dstDirectory: copyDialog.getIn(['values', 'dstDirectory']),
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
              values: data.values || {},
              messages: data.messages || {},
              errors: data.errors || {},
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
    let state = getState();
    let app = state.get('app');
    let leftPane = state.get('leftPane');
    let rightPane = state.get('rightPane');

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
              srcShare: pane === 'LEFT' ? leftPane.get('share') : rightPane.get('share'),
              srcDirectory: pane === 'LEFT' ? leftPane.get('directory') : rightPane.get('directory'),
              srcName: name,
              dstShare: pane === 'LEFT' ? rightPane.get('share') : leftPane.get('share'),
              dstDirectory: pane === 'LEFT' ? rightPane.get('directory') : leftPane.get('directory'),
              _fast: true,
              _csrf: app.get('csrf'),
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
    let state = getState();
    let app = state.get('app');
    let moveDialog = state.get('moveDialog');
    if (moveDialog.get('submittedAt') >= when)
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
              srcShare: moveDialog.getIn(['values', 'srcShare']),
              srcDirectory: moveDialog.getIn(['values', 'srcDirectory']),
              srcName: moveDialog.getIn(['values', 'srcName']),
              dstShare: moveDialog.getIn(['values', 'dstShare']),
              dstDirectory: moveDialog.getIn(['values', 'dstDirectory']),
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
              values: data.values || {},
              messages: data.messages || {},
              errors: data.errors || {},
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
    let state = getState();
    let app = state.get('app');
    let leftPane = state.get('leftPane');
    let rightPane = state.get('rightPane');

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
              srcShare: pane === 'LEFT' ? leftPane.get('share') : rightPane.get('share'),
              srcDirectory: pane === 'LEFT' ? leftPane.get('directory') : rightPane.get('directory'),
              srcName: name,
              dstShare: pane === 'LEFT' ? rightPane.get('share') : leftPane.get('share'),
              dstDirectory: pane === 'LEFT' ? rightPane.get('directory') : leftPane.get('directory'),
              _fast: true,
              _csrf: app.get('csrf'),
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
    let state = getState();
    let app = state.get('app');
    let deleteDialog = state.get('deleteDialog');
    if (deleteDialog.get('submittedAt') >= when)
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
              share: deleteDialog.getIn(['values', 'share']),
              directory: deleteDialog.getIn(['values', 'directory']),
              name: deleteDialog.getIn(['values', 'name']),
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
            if (!data.errors.share)
              data.errors.share = {};
            if (!data.errors.directory)
              data.errors.directory = {};
            if (!data.errors.name)
              data.errors.name = {};
          }

          await dispatch(updateDeleteDialog(
            {
              values: data.values || {},
              messages: data.messages || {},
              errors: data.errors || {},
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
    let state = getState();
    let app = state.get('app');
    let leftPane = state.get('leftPane');
    let rightPane = state.get('rightPane');

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
              share: pane === 'LEFT' ? leftPane.get('share') : rightPane.get('share'),
              directory: pane === 'LEFT' ? leftPane.get('directory') : rightPane.get('directory'),
              name: name,
              _fast: true,
              _csrf: app.get('csrf'),
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

export const find = what => {
  return async (dispatch, getState) => {
    let state = getState();
    let app = state.get('app');
    let copyDialog = state.get('copyDialog');
    let moveDialog = state.get('moveDialog');
    let deleteDialog = state.get('deleteDialog');
    if (what === 'COPY' && copyDialog.get('locked'))
      return;
    if (what === 'MOVE' && moveDialog.get('locked'))
      return;
    if (what === 'DELETE' && deleteDialog.get('locked'))
      return;

    let share;
    let directory;
    let name;
    switch (what) {
      case 'COPY':
        share = copyDialog.getIn(['values', 'srcShare']);
        directory = copyDialog.getIn(['values', 'srcDirectory']);
        name = copyDialog.getIn(['values', 'srcName']);
        await dispatch(lockCopyDialog());
        await dispatch(copy(Date.now(), 'srcName'));
        copyDialog = getState().get('copyDialog');
        if (copyDialog.hasIn(['errors', 'srcName']))
          return await dispatch(unlockCopyDialog());
        await dispatch(startCopyDialogFind());
        break;
      case 'MOVE':
        share = moveDialog.getIn(['values', 'srcShare']);
        directory = moveDialog.getIn(['values', 'srcDirectory']);
        name = moveDialog.getIn(['values', 'srcName']);
        await dispatch(lockMoveDialog());
        await dispatch(move(Date.now(), 'srcName'));
        moveDialog = getState().get('moveDialog');
        if (moveDialog.hasIn(['errors', 'srcName']))
          return await dispatch(unlockMoveDialog());
        await dispatch(startMoveDialogFind());
        break;
      case 'DELETE':
        share = deleteDialog.getIn(['values', 'share']);
        directory = deleteDialog.getIn(['values', 'directory']);
        name = deleteDialog.getIn(['values', 'name']);
        await dispatch(lockDeleteDialog());
        await dispatch(copy(Date.now(), 'name'));
        deleteDialog = getState().get('deleteDialog');
        if (deleteDialog.hasIn(['errors', 'name']))
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
              _csrf: app.get('csrf'),
            })
          }
        );

        let nodes = [];
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
          nodes = directories.concat(files);
        }

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
