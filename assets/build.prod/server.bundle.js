module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// App

Object.defineProperty(exports, "__esModule", {
  value: true
});
const SET_CSRF_TOKEN = exports.SET_CSRF_TOKEN = 'SET_CSRF_TOKEN';
const CONNECT_APP = exports.CONNECT_APP = 'CONNECT_APP';
const DISCONNECT_APP = exports.DISCONNECT_APP = 'DISCONNECT_APP';
const START_APP = exports.START_APP = 'START_APP';
const APP_VERSION = exports.APP_VERSION = 'APP_VERSION';
const SCREEN_RESIZE = exports.SCREEN_RESIZE = 'SCREEN_RESIZE';

// Drag
const UPDATE_DRAG_STATE = exports.UPDATE_DRAG_STATE = 'UPDATE_DRAG_STATE';
const UPDATE_DRAG_MODE = exports.UPDATE_DRAG_MODE = 'UPDATE_DRAG_MODE';

// Lists
const SET_LIST = exports.SET_LIST = 'SET_LIST';
const CLEAR_LIST = exports.CLEAR_LIST = 'CLEAR_LIST';
const SET_CONTENT = exports.SET_CONTENT = 'SET_CONTENT';
const CLEAR_CONTENT = exports.CLEAR_CONTENT = 'CLEAR_CONTENT';
const SET_INFO = exports.SET_INFO = 'SET_INFO';
const CLEAR_INFO = exports.CLEAR_INFO = 'CLEAR_INFO';
const SET_SIZE = exports.SET_SIZE = 'SET_SIZE';
const CLEAR_SIZE = exports.CLEAR_SIZE = 'CLEAR_SIZE';

// User
const SET_USER = exports.SET_USER = 'SET_USER';

// Navbar
const OPEN_NAVBAR = exports.OPEN_NAVBAR = 'OPEN_NAVBAR';
const CLOSE_NAVBAR = exports.CLOSE_NAVBAR = 'CLOSE_NAVBAR';
const TOGGLE_NAVBAR = exports.TOGGLE_NAVBAR = 'TOGGLE_NAVBAR';

// Progress
const START_PROGRESS = exports.START_PROGRESS = 'START_PROGRESS';
const UPDATE_PROGRESS = exports.UPDATE_PROGRESS = 'UPDATE_PROGRESS';
const FINISH_PROGRESS = exports.FINISH_PROGRESS = 'FINISH_PROGRESS';
const CLEAR_PROGRESS = exports.CLEAR_PROGRESS = 'CLEAR_PROGRESS';

// Panes
const DEACTIVATE_RIGHT_PANE = exports.DEACTIVATE_RIGHT_PANE = 'DEACTIVATE_RIGHT_PANE';
const DEACTIVATE_LEFT_PANE = exports.DEACTIVATE_LEFT_PANE = 'DEACTIVATE_LEFT_PANE';
const ACTIVATE_LEFT_PANE = exports.ACTIVATE_LEFT_PANE = 'ACTIVATE_LEFT_PANE';
const ACTIVATE_RIGHT_PANE = exports.ACTIVATE_RIGHT_PANE = 'ACTIVATE_RIGHT_PANE';
const SHOW_LEFT_PANE = exports.SHOW_LEFT_PANE = 'SHOW_LEFT_PANE';
const SHOW_RIGHT_PANE = exports.SHOW_RIGHT_PANE = 'SHOW_RIGHT_PANE';
const HIDE_LEFT_PANE = exports.HIDE_LEFT_PANE = 'HIDE_LEFT_PANE';
const HIDE_RIGHT_PANE = exports.HIDE_RIGHT_PANE = 'HIDE_RIGHT_PANE';
const START_LEFT_PANE_LOADING = exports.START_LEFT_PANE_LOADING = 'START_LEFT_PANE_LOADING';
const START_RIGHT_PANE_LOADING = exports.START_RIGHT_PANE_LOADING = 'START_RIGHT_PANE_LOADING';
const STOP_LEFT_PANE_LOADING = exports.STOP_LEFT_PANE_LOADING = 'STOP_LEFT_PANE_LOADING';
const STOP_RIGHT_PANE_LOADING = exports.STOP_RIGHT_PANE_LOADING = 'STOP_RIGHT_PANE_LOADING';
const SET_LEFT_PANE_MODE = exports.SET_LEFT_PANE_MODE = 'SET_LEFT_PANE_MODE';
const SET_RIGHT_PANE_MODE = exports.SET_RIGHT_PANE_MODE = 'SET_RIGHT_PANE_MODE';
const SET_LEFT_PANE_SHARE = exports.SET_LEFT_PANE_SHARE = 'SET_LEFT_PANE_SHARE';
const SET_RIGHT_PANE_SHARE = exports.SET_RIGHT_PANE_SHARE = 'SET_RIGHT_PANE_SHARE';
const SET_LEFT_PANE_PATH = exports.SET_LEFT_PANE_PATH = 'SET_LEFT_PANE_PATH';
const SET_RIGHT_PANE_PATH = exports.SET_RIGHT_PANE_PATH = 'SET_RIGHT_PANE_PATH';
const SET_LEFT_PANE_SORT = exports.SET_LEFT_PANE_SORT = 'SET_LEFT_PANE_SORT';
const SET_RIGHT_PANE_SORT = exports.SET_RIGHT_PANE_SORT = 'SET_RIGHT_PANE_SORT';
const SET_LEFT_PANE_LIST = exports.SET_LEFT_PANE_LIST = 'SET_LEFT_PANE_LIST';
const SET_RIGHT_PANE_LIST = exports.SET_RIGHT_PANE_LIST = 'SET_RIGHT_PANE_LIST';
const SET_LEFT_PANE_SELECTION = exports.SET_LEFT_PANE_SELECTION = 'SET_LEFT_PANE_SELECTION';
const SET_RIGHT_PANE_SELECTION = exports.SET_RIGHT_PANE_SELECTION = 'SET_RIGHT_PANE_SELECTION';

// Failure dialog
const SHOW_FAILURE_DIALOG = exports.SHOW_FAILURE_DIALOG = 'SHOW_FAILURE_DIALOG';
const HIDE_FAILURE_DIALOG = exports.HIDE_FAILURE_DIALOG = 'HIDE_FAILURE_DIALOG';

// Copy dialog
const LOCK_COPY_DIALOG = exports.LOCK_COPY_DIALOG = 'LOCK_COPY_DIALOG';
const UNLOCK_COPY_DIALOG = exports.UNLOCK_COPY_DIALOG = 'UNLOCK_COPY_DIALOG';
const RESET_COPY_DIALOG = exports.RESET_COPY_DIALOG = 'RESET_COPY_DIALOG';
const SHOW_COPY_DIALOG = exports.SHOW_COPY_DIALOG = 'SHOW_COPY_DIALOG';
const HIDE_COPY_DIALOG = exports.HIDE_COPY_DIALOG = 'HIDE_COPY_DIALOG';
const SUBMIT_COPY_DIALOG = exports.SUBMIT_COPY_DIALOG = 'SUBMIT_COPY_DIALOG';
const UPDATE_COPY_DIALOG = exports.UPDATE_COPY_DIALOG = 'UPDATE_COPY_DIALOG';
const START_COPY_DIALOG_FIND = exports.START_COPY_DIALOG_FIND = 'START_COPY_DIALOG_FIND';
const STOP_COPY_DIALOG_FIND = exports.STOP_COPY_DIALOG_FIND = 'STOP_COPY_DIALOG_FIND';

// Delete dialog
const LOCK_DELETE_DIALOG = exports.LOCK_DELETE_DIALOG = 'LOCK_DELETE_DIALOG';
const UNLOCK_DELETE_DIALOG = exports.UNLOCK_DELETE_DIALOG = 'UNLOCK_DELETE_DIALOG';
const RESET_DELETE_DIALOG = exports.RESET_DELETE_DIALOG = 'RESET_DELETE_DIALOG';
const SHOW_DELETE_DIALOG = exports.SHOW_DELETE_DIALOG = 'SHOW_DELETE_DIALOG';
const HIDE_DELETE_DIALOG = exports.HIDE_DELETE_DIALOG = 'HIDE_DELETE_DIALOG';
const SUBMIT_DELETE_DIALOG = exports.SUBMIT_DELETE_DIALOG = 'SUBMIT_DELETE_DIALOG';
const UPDATE_DELETE_DIALOG = exports.UPDATE_DELETE_DIALOG = 'UPDATE_DELETE_DIALOG';
const START_DELETE_DIALOG_FIND = exports.START_DELETE_DIALOG_FIND = 'START_DELETE_DIALOG_FIND';
const STOP_DELETE_DIALOG_FIND = exports.STOP_DELETE_DIALOG_FIND = 'STOP_DELETE_DIALOG_FIND';

// MkDir dialog
const LOCK_MKDIR_DIALOG = exports.LOCK_MKDIR_DIALOG = 'LOCK_MKDIR_DIALOG';
const UNLOCK_MKDIR_DIALOG = exports.UNLOCK_MKDIR_DIALOG = 'UNLOCK_MKDIR_DIALOG';
const RESET_MKDIR_DIALOG = exports.RESET_MKDIR_DIALOG = 'RESET_MKDIR_DIALOG';
const SHOW_MKDIR_DIALOG = exports.SHOW_MKDIR_DIALOG = 'SHOW_MKDIR_DIALOG';
const HIDE_MKDIR_DIALOG = exports.HIDE_MKDIR_DIALOG = 'HIDE_MKDIR_DIALOG';
const SUBMIT_MKDIR_DIALOG = exports.SUBMIT_MKDIR_DIALOG = 'SUBMIT_MKDIR_DIALOG';
const UPDATE_MKDIR_DIALOG = exports.UPDATE_MKDIR_DIALOG = 'UPDATE_MKDIR_DIALOG';

// Move dialog
const LOCK_MOVE_DIALOG = exports.LOCK_MOVE_DIALOG = 'LOCK_MOVE_DIALOG';
const UNLOCK_MOVE_DIALOG = exports.UNLOCK_MOVE_DIALOG = 'UNLOCK_MOVE_DIALOG';
const RESET_MOVE_DIALOG = exports.RESET_MOVE_DIALOG = 'RESET_MOVE_DIALOG';
const SHOW_MOVE_DIALOG = exports.SHOW_MOVE_DIALOG = 'SHOW_MOVE_DIALOG';
const HIDE_MOVE_DIALOG = exports.HIDE_MOVE_DIALOG = 'HIDE_MOVE_DIALOG';
const SUBMIT_MOVE_DIALOG = exports.SUBMIT_MOVE_DIALOG = 'SUBMIT_MOVE_DIALOG';
const UPDATE_MOVE_DIALOG = exports.UPDATE_MOVE_DIALOG = 'UPDATE_MOVE_DIALOG';
const START_MOVE_DIALOG_FIND = exports.START_MOVE_DIALOG_FIND = 'START_MOVE_DIALOG_FIND';
const STOP_MOVE_DIALOG_FIND = exports.STOP_MOVE_DIALOG_FIND = 'STOP_MOVE_DIALOG_FIND';

// Rename dialog
const LOCK_RENAME_DIALOG = exports.LOCK_RENAME_DIALOG = 'LOCK_RENAME_DIALOG';
const UNLOCK_RENAME_DIALOG = exports.UNLOCK_RENAME_DIALOG = 'UNLOCK_RENAME_DIALOG';
const RESET_RENAME_DIALOG = exports.RESET_RENAME_DIALOG = 'RESET_RENAME_DIALOG';
const SHOW_RENAME_DIALOG = exports.SHOW_RENAME_DIALOG = 'SHOW_RENAME_DIALOG';
const HIDE_RENAME_DIALOG = exports.HIDE_RENAME_DIALOG = 'HIDE_RENAME_DIALOG';
const SUBMIT_RENAME_DIALOG = exports.SUBMIT_RENAME_DIALOG = 'SUBMIT_RENAME_DIALOG';
const UPDATE_RENAME_DIALOG = exports.UPDATE_RENAME_DIALOG = 'UPDATE_RENAME_DIALOG';

// Sign in dialog
const LOCK_SIGN_IN_DIALOG = exports.LOCK_SIGN_IN_DIALOG = 'LOCK_SIGN_IN_DIALOG';
const UNLOCK_SIGN_IN_DIALOG = exports.UNLOCK_SIGN_IN_DIALOG = 'UNLOCK_SIGN_IN_DIALOG';
const RESET_SIGN_IN_DIALOG = exports.RESET_SIGN_IN_DIALOG = 'RESET_SIGN_IN_DIALOG';
const SHOW_SIGN_IN_DIALOG = exports.SHOW_SIGN_IN_DIALOG = 'SHOW_SIGN_IN_DIALOG';
const HIDE_SIGN_IN_DIALOG = exports.HIDE_SIGN_IN_DIALOG = 'HIDE_SIGN_IN_DIALOG';
const SUBMIT_SIGN_IN_DIALOG = exports.SUBMIT_SIGN_IN_DIALOG = 'SUBMIT_SIGN_IN_DIALOG';
const UPDATE_SIGN_IN_DIALOG = exports.UPDATE_SIGN_IN_DIALOG = 'UPDATE_SIGN_IN_DIALOG';

// This will never be fired
const UNUSED = exports.UNUSED = 'UNUSED';

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/fa");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.find = exports.fastDel = exports.del = exports.fastMove = exports.move = exports.fastCopy = exports.copy = exports.rename = exports.mkdir = undefined;

var _navbar = __webpack_require__(19);

var _mkdirDialog = __webpack_require__(20);

var _renameDialog = __webpack_require__(21);

var _copyDialog = __webpack_require__(22);

var _moveDialog = __webpack_require__(23);

var _deleteDialog = __webpack_require__(24);

var _failureDialog = __webpack_require__(30);

const mkdir = exports.mkdir = (when, validate) => {
  return async (dispatch, getState) => {
    let state = getState();
    let app = state.get('app');
    let mkdirDialog = state.get('mkdirDialog');
    if (mkdirDialog.get('submittedAt') >= when) return;

    if (!validate) await dispatch((0, _mkdirDialog.lockMkdirDialog)());

    await dispatch((0, _mkdirDialog.submitMkdirDialog)(when));

    return new Promise(async resolve => {
      try {
        let response = await fetch('/pane/mkdir', {
          method: 'POST',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            share: mkdirDialog.getIn(['values', 'share']),
            directory: mkdirDialog.getIn(['values', 'directory']),
            name: mkdirDialog.getIn(['values', 'name']),
            _validate: validate,
            _csrf: app.get('csrf')
          })
        });
        if (response.status === 200) {
          let data = await response.json();

          if (validate) {
            // clear previous errors of the field on successful validation
            if (!data.errors[validate]) data.errors[validate] = {};
          } else {
            // clear all successful fields previous errors on submit
            if (!data.errors.share) data.errors.share = {};
            if (!data.errors.directory) data.errors.directory = {};
            if (!data.errors.name) data.errors.name = {};
          }

          await dispatch((0, _mkdirDialog.updateMkdirDialog)({
            values: data.values || {},
            messages: data.messages || {},
            errors: data.errors || {}
          }, when));

          if (!validate) {
            await dispatch((0, _mkdirDialog.unlockMkdirDialog)());

            if (data.success) {
              await dispatch((0, _navbar.closeNavbar)());
              await dispatch((0, _mkdirDialog.hideMkdirDialog)());
            }
          }

          return resolve();
        }
      } catch (error) {
        console.error(error);
      }

      if (!validate) await dispatch((0, _mkdirDialog.unlockMkdirDialog)());

      resolve();
    });
  };
};

const rename = exports.rename = (when, validate) => {
  return async (dispatch, getState) => {
    let state = getState();
    let app = state.get('app');
    let renameDialog = state.get('renameDialog');
    if (renameDialog.get('submittedAt') >= when) return;

    if (!validate) await dispatch((0, _renameDialog.lockRenameDialog)());

    await dispatch((0, _renameDialog.submitRenameDialog)(when));

    return new Promise(async resolve => {
      try {
        let response = await fetch('/pane/rename', {
          method: 'POST',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            share: renameDialog.getIn(['values', 'share']),
            directory: renameDialog.getIn(['values', 'directory']),
            name: renameDialog.getIn(['values', 'name']),
            newName: renameDialog.getIn(['values', 'newName']),
            _validate: validate,
            _csrf: app.get('csrf')
          })
        });
        if (response.status === 200) {
          let data = await response.json();

          if (validate) {
            // clear previous errors of the field on successful validation
            if (!data.errors[validate]) data.errors[validate] = {};
          } else {
            // clear all successful fields previous errors on submit
            if (!data.errors.share) data.errors.share = {};
            if (!data.errors.directory) data.errors.directory = {};
            if (!data.errors.name) data.errors.name = {};
            if (!data.errors.newName) data.errors.newName = {};
          }

          await dispatch((0, _renameDialog.updateRenameDialog)({
            values: data.values || {},
            messages: data.messages || {},
            errors: data.errors || {}
          }, when));

          if (!validate) {
            await dispatch((0, _renameDialog.unlockRenameDialog)());

            if (data.success) {
              await dispatch((0, _navbar.closeNavbar)());
              await dispatch((0, _renameDialog.hideRenameDialog)());
            }
          }

          return resolve();
        }
      } catch (error) {
        console.error(error);
      }

      if (!validate) await dispatch((0, _renameDialog.unlockRenameDialog)());

      resolve();
    });
  };
};

const copy = exports.copy = (when, validate) => {
  return async (dispatch, getState) => {
    let state = getState();
    let app = state.get('app');
    let copyDialog = state.get('copyDialog');
    if (copyDialog.get('submittedAt') >= when) return;

    if (!validate) await dispatch((0, _copyDialog.lockCopyDialog)());

    await dispatch((0, _copyDialog.submitCopyDialog)(when));

    return new Promise(async resolve => {
      try {
        let response = await fetch('/pane/copy', {
          method: 'POST',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            srcShare: copyDialog.getIn(['values', 'srcShare']),
            srcDirectory: copyDialog.getIn(['values', 'srcDirectory']),
            srcName: copyDialog.getIn(['values', 'srcName']),
            dstShare: copyDialog.getIn(['values', 'dstShare']),
            dstDirectory: copyDialog.getIn(['values', 'dstDirectory']),
            _validate: validate,
            _csrf: app.get('csrf')
          })
        });
        if (response.status === 200) {
          let data = await response.json();

          if (validate) {
            // clear previous errors of the field on successful validation
            if (!data.errors[validate]) data.errors[validate] = {};
          } else {
            // clear all successful fields previous errors on submit
            if (!data.errors.srcShare) data.errors.srcShare = {};
            if (!data.errors.srcDirectory) data.errors.srcDirectory = {};
            if (!data.errors.srcName) data.errors.srcName = {};
            if (!data.errors.dstShare) data.errors.dstShare = {};
            if (!data.errors.dstDirectory) data.errors.dstDirectory = {};
          }

          await dispatch((0, _copyDialog.updateCopyDialog)({
            values: data.values || {},
            messages: data.messages || {},
            errors: data.errors || {}
          }, when));

          if (!validate) {
            await dispatch((0, _copyDialog.unlockCopyDialog)());

            if (data.success) {
              await dispatch((0, _navbar.closeNavbar)());
              await dispatch((0, _copyDialog.hideCopyDialog)());
            }
          }

          return resolve();
        }
      } catch (error) {
        console.error(error);
      }

      if (!validate) await dispatch((0, _copyDialog.unlockCopyDialog)());

      resolve();
    });
  };
};

const fastCopy = exports.fastCopy = (pane, name) => {
  return async (dispatch, getState) => {
    let state = getState();
    let app = state.get('app');
    let leftPane = state.get('leftPane');
    let rightPane = state.get('rightPane');

    return new Promise(async resolve => {
      try {
        let response = await fetch('/pane/copy', {
          method: 'POST',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            srcShare: pane === 'LEFT' ? leftPane.get('share') : rightPane.get('share'),
            srcDirectory: pane === 'LEFT' ? leftPane.get('directory') : rightPane.get('directory'),
            srcName: name,
            dstShare: pane === 'LEFT' ? rightPane.get('share') : leftPane.get('share'),
            dstDirectory: pane === 'LEFT' ? rightPane.get('directory') : leftPane.get('directory'),
            _fast: true,
            _csrf: app.get('csrf')
          })
        });
        if (response.status === 200) {
          let data = await response.json();

          if (!data.success) await dispatch((0, _failureDialog.showFailureDialog)(data.messages || {}, data.errors || {}));

          return resolve();
        }
      } catch (error) {
        console.error(error);
      }

      resolve();
    });
  };
};

const move = exports.move = (when, validate) => {
  return async (dispatch, getState) => {
    let state = getState();
    let app = state.get('app');
    let moveDialog = state.get('moveDialog');
    if (moveDialog.get('submittedAt') >= when) return;

    if (!validate) await dispatch((0, _moveDialog.lockMoveDialog)());

    await dispatch((0, _moveDialog.submitMoveDialog)(when));

    return new Promise(async resolve => {
      try {
        let response = await fetch('/pane/move', {
          method: 'POST',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            srcShare: moveDialog.getIn(['values', 'srcShare']),
            srcDirectory: moveDialog.getIn(['values', 'srcDirectory']),
            srcName: moveDialog.getIn(['values', 'srcName']),
            dstShare: moveDialog.getIn(['values', 'dstShare']),
            dstDirectory: moveDialog.getIn(['values', 'dstDirectory']),
            _validate: validate,
            _csrf: app.get('csrf')
          })
        });
        if (response.status === 200) {
          let data = await response.json();

          if (validate) {
            // clear previous errors of the field on successful validation
            if (!data.errors[validate]) data.errors[validate] = {};
          } else {
            // clear all successful fields previous errors on submit
            if (!data.errors.srcShare) data.errors.srcShare = {};
            if (!data.errors.srcDirectory) data.errors.srcDirectory = {};
            if (!data.errors.srcName) data.errors.srcName = {};
            if (!data.errors.dstShare) data.errors.dstShare = {};
            if (!data.errors.dstDirectory) data.errors.dstDirectory = {};
          }

          await dispatch((0, _moveDialog.updateMoveDialog)({
            values: data.values || {},
            messages: data.messages || {},
            errors: data.errors || {}
          }, when));

          if (!validate) {
            await dispatch((0, _moveDialog.unlockMoveDialog)());

            if (data.success) {
              await dispatch((0, _navbar.closeNavbar)());
              await dispatch((0, _moveDialog.hideMoveDialog)());
            }
          }

          return resolve();
        }
      } catch (error) {
        console.error(error);
      }

      if (!validate) await dispatch((0, _moveDialog.unlockMoveDialog)());

      resolve();
    });
  };
};

const fastMove = exports.fastMove = (pane, name) => {
  return async (dispatch, getState) => {
    let state = getState();
    let app = state.get('app');
    let leftPane = state.get('leftPane');
    let rightPane = state.get('rightPane');

    return new Promise(async resolve => {
      try {
        let response = await fetch('/pane/move', {
          method: 'POST',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            srcShare: pane === 'LEFT' ? leftPane.get('share') : rightPane.get('share'),
            srcDirectory: pane === 'LEFT' ? leftPane.get('directory') : rightPane.get('directory'),
            srcName: name,
            dstShare: pane === 'LEFT' ? rightPane.get('share') : leftPane.get('share'),
            dstDirectory: pane === 'LEFT' ? rightPane.get('directory') : leftPane.get('directory'),
            _fast: true,
            _csrf: app.get('csrf')
          })
        });
        if (response.status === 200) {
          let data = await response.json();

          if (!data.success) await dispatch((0, _failureDialog.showFailureDialog)(data.messages || {}, data.errors || {}));

          return resolve();
        }
      } catch (error) {
        console.error(error);
      }

      resolve();
    });
  };
};

const del = exports.del = (when, validate) => {
  return async (dispatch, getState) => {
    let state = getState();
    let app = state.get('app');
    let deleteDialog = state.get('deleteDialog');
    if (deleteDialog.get('submittedAt') >= when) return;

    if (!validate) await dispatch((0, _deleteDialog.lockDeleteDialog)());

    await dispatch((0, _deleteDialog.submitDeleteDialog)(when));

    return new Promise(async resolve => {
      try {
        let response = await fetch('/pane/del', {
          method: 'POST',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            share: deleteDialog.getIn(['values', 'share']),
            directory: deleteDialog.getIn(['values', 'directory']),
            name: deleteDialog.getIn(['values', 'name']),
            _validate: validate,
            _csrf: app.get('csrf')
          })
        });
        if (response.status === 200) {
          let data = await response.json();

          if (validate) {
            // clear previous errors of the field on successful validation
            if (!data.errors[validate]) data.errors[validate] = {};
          } else {
            // clear all successful fields previous errors on submit
            if (!data.errors.share) data.errors.share = {};
            if (!data.errors.directory) data.errors.directory = {};
            if (!data.errors.name) data.errors.name = {};
          }

          await dispatch((0, _deleteDialog.updateDeleteDialog)({
            values: data.values || {},
            messages: data.messages || {},
            errors: data.errors || {}
          }, when));

          if (!validate) {
            await dispatch((0, _deleteDialog.unlockDeleteDialog)());

            if (data.success) {
              await dispatch((0, _navbar.closeNavbar)());
              await dispatch((0, _deleteDialog.hideDeleteDialog)());
            }
          }

          return resolve();
        }
      } catch (error) {
        console.error(error);
      }

      if (!validate) await dispatch((0, _deleteDialog.unlockDeleteDialog)());

      resolve();
    });
  };
};

const fastDel = exports.fastDel = (pane, name) => {
  return async (dispatch, getState) => {
    let state = getState();
    let app = state.get('app');
    let leftPane = state.get('leftPane');
    let rightPane = state.get('rightPane');

    return new Promise(async resolve => {
      try {
        let response = await fetch('/pane/del', {
          method: 'POST',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            share: pane === 'LEFT' ? leftPane.get('share') : rightPane.get('share'),
            directory: pane === 'LEFT' ? leftPane.get('directory') : rightPane.get('directory'),
            name: name,
            _fast: true,
            _csrf: app.get('csrf')
          })
        });
        if (response.status === 200) {
          let data = await response.json();

          if (!data.success) await dispatch((0, _failureDialog.showFailureDialog)(data.messages || {}, data.errors || {}));

          return resolve();
        }
      } catch (error) {
        console.error(error);
      }

      resolve();
    });
  };
};

const find = exports.find = what => {
  return async (dispatch, getState) => {
    let state = getState();
    let app = state.get('app');
    let copyDialog = state.get('copyDialog');
    let moveDialog = state.get('moveDialog');
    let deleteDialog = state.get('deleteDialog');
    if (what === 'COPY' && copyDialog.get('locked')) return;
    if (what === 'MOVE' && moveDialog.get('locked')) return;
    if (what === 'DELETE' && deleteDialog.get('locked')) return;

    let share;
    let directory;
    let name;
    switch (what) {
      case 'COPY':
        share = copyDialog.getIn(['values', 'srcShare']);
        directory = copyDialog.getIn(['values', 'srcDirectory']);
        name = copyDialog.getIn(['values', 'srcName']);
        await dispatch((0, _copyDialog.lockCopyDialog)());
        await dispatch(copy(Date.now(), 'srcName'));
        copyDialog = getState().get('copyDialog');
        if (copyDialog.hasIn(['errors', 'srcName'])) return await dispatch((0, _copyDialog.unlockCopyDialog)());
        await dispatch((0, _copyDialog.startCopyDialogFind)());
        break;
      case 'MOVE':
        share = moveDialog.getIn(['values', 'srcShare']);
        directory = moveDialog.getIn(['values', 'srcDirectory']);
        name = moveDialog.getIn(['values', 'srcName']);
        await dispatch((0, _moveDialog.lockMoveDialog)());
        await dispatch(move(Date.now(), 'srcName'));
        moveDialog = getState().get('moveDialog');
        if (moveDialog.hasIn(['errors', 'srcName'])) return await dispatch((0, _moveDialog.unlockMoveDialog)());
        await dispatch((0, _moveDialog.startMoveDialogFind)());
        break;
      case 'DELETE':
        share = deleteDialog.getIn(['values', 'share']);
        directory = deleteDialog.getIn(['values', 'directory']);
        name = deleteDialog.getIn(['values', 'name']);
        await dispatch((0, _deleteDialog.lockDeleteDialog)());
        await dispatch(copy(Date.now(), 'name'));
        deleteDialog = getState().get('deleteDialog');
        if (deleteDialog.hasIn(['errors', 'name'])) return await dispatch((0, _deleteDialog.unlockDeleteDialog)());
        await dispatch((0, _deleteDialog.startDeleteDialogFind)());
        break;
    }

    return new Promise(async resolve => {
      try {
        let response = await fetch('/pane/find', {
          method: 'POST',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            share,
            directory,
            name,
            _csrf: app.get('csrf')
          })
        });

        let nodes = [];
        if (response.status === 200) {
          let data = await response.json();

          let directories = [];
          let files = [];
          for (let node of data.nodes) {
            if (node.isDirectory) directories.push(node);else files.push(node);
          }
          directories.sort((a, b) => a.name.localeCompare(b.name));
          files.sort((a, b) => a.name.localeCompare(b.name));
          nodes = directories.concat(files);
        }

        switch (what) {
          case 'COPY':
            await dispatch((0, _copyDialog.stopCopyDialogFind)(nodes));
            await dispatch((0, _copyDialog.unlockCopyDialog)());
            break;
          case 'MOVE':
            await dispatch((0, _moveDialog.stopMoveDialogFind)(nodes));
            await dispatch((0, _moveDialog.unlockMoveDialog)());
            break;
          case 'DELETE':
            await dispatch((0, _deleteDialog.stopDeleteDialogFind)(nodes));
            await dispatch((0, _deleteDialog.unlockDeleteDialog)());
            break;
        }

        return resolve();
      } catch (error) {
        console.error(error);
      }

      switch (what) {
        case 'COPY':
          await dispatch((0, _copyDialog.stopCopyDialogFind)(false));
          await dispatch((0, _copyDialog.unlockCopyDialog)());
          break;
        case 'MOVE':
          await dispatch((0, _moveDialog.stopMoveDialogFind)(false));
          await dispatch((0, _moveDialog.unlockMoveDialog)());
          break;
        case 'DELETE':
          await dispatch((0, _deleteDialog.stopDeleteDialogFind)(false));
          await dispatch((0, _deleteDialog.unlockDeleteDialog)());
          break;
      }

      resolve();
    });
  };
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signIn = exports.signOut = exports.updateStatus = exports.setUser = undefined;

var _actionTypes = __webpack_require__(2);

var actions = _interopRequireWildcard(_actionTypes);

var _package = __webpack_require__(62);

var _package2 = _interopRequireDefault(_package);

var _i18n = __webpack_require__(63);

var _i18n2 = _interopRequireDefault(_i18n);

var _app = __webpack_require__(31);

var _pane = __webpack_require__(17);

var _signInDialog = __webpack_require__(27);

var _navbar = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const setUser = exports.setUser = (isAuthorized, login, locale, shares) => {
  return {
    type: actions.SET_USER,
    isAuthorized,
    login,
    locale,
    shares
  };
};

const updateStatus = exports.updateStatus = () => {
  return async (dispatch, getState) => {
    return new Promise(async resolve => {
      io.socket.get('/status', async (data, response) => {
        if (response.statusCode === 200) {
          await dispatch((0, _app.setAppVersion)(data.version === _package2.default.version));
          await dispatch(setUser(data.isAuthorized, data.login, data.locale, data.shares));

          let user = getState().get('user');

          if (_i18n2.default.getLocale() !== user.get('locale')) _i18n2.default.setLocale(user.get('locale'));
        } else {
          window.location.reload(true);
        }

        resolve();
      });
    });
  };
};

const signOut = exports.signOut = () => {
  return async (dispatch, getState) => {
    let app = getState().get('app');
    await new Promise(resolve => {
      io.socket.post('/auth/sign-out', { _csrf: app.get('csrf') }, () => resolve());
    });
    return dispatch(updateStatus());
  };
};

const signIn = exports.signIn = (when, validate) => {
  return async (dispatch, getState) => {
    let state = getState();
    let app = state.get('app');
    let signInDialog = state.get('signInDialog');
    if (signInDialog.get('submittedAt') >= when) return;

    if (!validate) await dispatch((0, _signInDialog.lockSignInDialog)());

    await dispatch((0, _signInDialog.submitSignInDialog)(when));

    return new Promise(async resolve => {
      try {
        let response = await fetch('/auth/sign-in', {
          method: 'POST',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            login: signInDialog.getIn(['values', 'login']),
            password: signInDialog.getIn(['values', 'password']),
            _validate: validate,
            _csrf: app.get('csrf')
          })
        });
        if (response.status === 200) {
          let data = await response.json();

          if (validate) {
            // clear previous errors of the field on successful validation
            if (!data.errors[validate]) data.errors[validate] = {};
          } else {
            // clear all successful fields previous errors on submit
            if (!data.errors.login) data.errors.login = {};
            if (!data.errors.password) data.errors.password = {};
          }

          await dispatch((0, _signInDialog.updateSignInDialog)({
            values: data.values || {},
            messages: data.messages || {},
            errors: data.errors || {}
          }, when));

          if (!validate) {
            await dispatch((0, _signInDialog.unlockSignInDialog)());

            if (data.success) {
              await dispatch((0, _navbar.closeNavbar)());
              await dispatch((0, _signInDialog.hideSignInDialog)());
              await dispatch(updateStatus());
              dispatch((0, _pane.initPanes)());
            }
          }

          return resolve();
        }
      } catch (error) {
        console.error(error);
      }

      if (!validate) await dispatch((0, _signInDialog.unlockSignInDialog)());

      resolve();
    });
  };
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _immutable = __webpack_require__(1);

var _reactTransitionGroup = __webpack_require__(16);

var _Fade = __webpack_require__(26);

var _Fade2 = _interopRequireDefault(_Fade);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mapTypeToClass = type => {
  switch (type) {
    case 'success':
      return 'alert alert-success text-center';
    case 'error':
      return 'alert alert-danger text-center';
    case 'info':
      return 'alert alert-info text-center';
    case 'warning':
      return 'alert alert-warning text-center';
  }
  return 'alert alert-primary text-center';
};

let FormMessages = class FormMessages extends _react2.default.PureComponent {

  render() {
    return _react2.default.createElement(
      _reactTransitionGroup.TransitionGroup,
      null,
      Array.from(this.props.messages.keys()).map(code => _react2.default.createElement(
        _Fade2.default,
        { key: code },
        _react2.default.createElement('div', {
          className: mapTypeToClass(this.props.messages.getIn([code, 'type'])),
          role: 'alert',
          dangerouslySetInnerHTML: { __html: this.props.messages.getIn([code, 'message']) }
        })
      ))
    );
  }
};
FormMessages.propTypes = {
  messages: _propTypes2.default.instanceOf(_immutable.Map)
};
FormMessages.defaultProps = {
  messages: (0, _immutable.Map)({})
};
exports.default = FormMessages;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-scroll-box");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactDom = __webpack_require__(29);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Viewport = class Viewport extends _react2.default.Component {

  scrollDown() {
    if (!this.touching) this.viewport.scrollTop = this.viewport.scrollHeight;
  }

  componentDidMount() {
    this.viewport = _reactDom2.default.findDOMNode(this);
    this.touching = false;

    try {
      document.createEvent('TouchEvent');
    } catch (error) {
      return;
    }

    let scrollStartTop = 0;
    let scrollStartLeft = 0;
    let scrollTop = 0;
    let scrollLeft = 0;
    let frameId = null;
    let frame = () => {
      frameId = null;
      this.viewport.scrollTop = scrollTop;
      this.viewport.scrollLeft = scrollLeft;
    };
    this.touchStartHandler = function (event) {
      this.touching = true;
      scrollStartTop = this.scrollTop + event.touches[0].pageY;
      scrollStartLeft = this.scrollLeft + event.touches[0].pageX;
    };
    this.touchMoveHandler = function (event) {
      event.preventDefault();
      scrollTop = scrollStartTop - event.touches[0].pageY;
      scrollLeft = scrollStartLeft - event.touches[0].pageX;
      if (!frameId) frameId = requestAnimationFrame(frame);
    };
    this.touchEndHandler = function () {
      this.touching = false;
    };

    this.viewport.addEventListener('touchstart', this.touchStartHandler, false);
    this.viewport.addEventListener('touchmove', this.touchMoveHandler, false);
    this.viewport.addEventListener('touchend', this.touchEndHandler, false);
  }

  componentWillUnmount() {
    if (this.touchStartHandler) {
      this.viewport.removeEventListener('touchstart', this.touchStartHandler);
      this.touchStartHandler = null;
    }

    if (this.touchMoveHandler) {
      this.viewport.removeEventListener('touchmove', this.touchMoveHandler);
      this.touchMoveHandler = null;
    }

    if (this.touchEndHandler) {
      this.viewport.removeEventListener('touchend', this.touchEndHandler);
      this.touchEndHandler = null;
    }
  }

  render() {
    let target;
    if (this.props.reactList) target = _react2.default.cloneElement(this.props.children, { scrollParentGetter: () => _reactDom2.default.findDOMNode(this) });else target = this.props.children;

    return _react2.default.createElement(
      'div',
      { className: 'scroll-box__viewport' + (this.props.classes ? ` ${this.props.classes}` : '') },
      target
    );
  }
};
Viewport.propTypes = {
  classes: _propTypes2.default.string,
  reactList: _propTypes2.default.bool
};
Viewport.defaultProps = {
  classes: '',
  reactList: false
};
exports.default = Viewport;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let InputRequiredLabel = class InputRequiredLabel extends _react2.default.PureComponent {
  render() {
    return _react2.default.createElement(
      'div',
      { className: 'control-required' },
      __('required_field')
    );
  }
};
exports.default = InputRequiredLabel;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _immutable = __webpack_require__(1);

var _reactstrap = __webpack_require__(4);

var _reactTransitionGroup = __webpack_require__(16);

var _Fade = __webpack_require__(26);

var _Fade2 = _interopRequireDefault(_Fade);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let FieldErrors = class FieldErrors extends _react2.default.PureComponent {

  render() {
    return _react2.default.createElement(
      _reactstrap.FormFeedback,
      null,
      _react2.default.createElement(
        _reactTransitionGroup.TransitionGroup,
        null,
        Array.from(this.props.errors.keys()).map(code => _react2.default.createElement(
          _Fade2.default,
          { key: code },
          _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: this.props.errors.getIn([code, 'message']) } })
        ))
      )
    );
  }
};
FieldErrors.propTypes = {
  errors: _propTypes2.default.instanceOf(_immutable.Map)
};
FieldErrors.defaultProps = {
  errors: (0, _immutable.Map)({})
};
exports.default = FieldErrors;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-router-redux");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.join = join;
exports.matchLocation = matchLocation;
exports.splitPath = splitPath;
function join(...args) {
  return args.reduce((prev, cur) => {
    if (prev.length && prev[prev.length - 1] !== '/' && (!cur.length || cur[0] !== '/')) prev += '/';
    return prev + cur;
  }, '');
}

function matchLocation(location) {
  let match = /^\/~([^:]+):(.+)$/.exec(location);
  if (!match) return null;

  return {
    share: match[1],
    path: match[2]
  };
}

function splitPath(path) {
  let parts = path.split('/').filter(i => i.length);
  if (path.endsWith('/')) return { directory: '/' + parts.join('/'), name: '' };

  let name = parts.pop() || '';
  return { directory: '/' + parts.join('/'), name };
}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initPanes = exports.paneCD = exports.paneUpdate = exports.paneToggleSelect = exports.paneSelectRange = exports.paneSelect = exports.paneDeselect = exports.paneSort = exports.setPaneIndex = exports.setPanePath = exports.setPaneShare = exports.setPaneMode = exports.stopLoadingPane = exports.startLoadingPane = exports.togglePane = exports.hidePane = exports.showPane = exports.setActivePane = undefined;

var _actionTypes = __webpack_require__(2);

var actions = _interopRequireWildcard(_actionTypes);

var _reactRouterRedux = __webpack_require__(14);

var _list = __webpack_require__(32);

var _content = __webpack_require__(67);

var _info = __webpack_require__(68);

var _user = __webpack_require__(8);

var _path = __webpack_require__(15);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const setActivePane = exports.setActivePane = pane => {
  return async (dispatch, getState) => {
    let state = getState();
    let user = state.get('user');
    let leftPane = state.get('leftPane');
    let rightPane = state.get('rightPane');
    if (pane === 'LEFT' && leftPane.get('isActive')) return;
    if (pane === 'RIGHT' && rightPane.get('isActive')) return;

    await dispatch({
      type: pane === 'LEFT' ? actions.DEACTIVATE_RIGHT_PANE : actions.DEACTIVATE_LEFT_PANE
    });
    await dispatch({
      type: pane === 'LEFT' ? actions.ACTIVATE_LEFT_PANE : actions.ACTIVATE_RIGHT_PANE
    });

    let share = pane === 'LEFT' ? leftPane.get('share') : rightPane.get('share');
    let path = pane === 'LEFT' ? leftPane.get('path') : rightPane.get('path');
    if (user.get('isAuthorized')) await dispatch((0, _reactRouterRedux.push)(`/~${share}:${path}`));
  };
};

const showPane = exports.showPane = pane => {
  return {
    type: pane === 'LEFT' ? actions.SHOW_LEFT_PANE : actions.SHOW_RIGHT_PANE
  };
};

const hidePane = exports.hidePane = pane => {
  return {
    type: pane === 'LEFT' ? actions.HIDE_LEFT_PANE : actions.HIDE_RIGHT_PANE
  };
};

const togglePane = exports.togglePane = pane => {
  return async (dispatch, getState) => {
    let state = getState();
    let leftPane = state.get('leftPane');
    let rightPane = state.get('rightPane');
    let isVisible = pane === 'LEFT' ? leftPane.get('isVisible') : rightPane.get('isVisible');
    dispatch(isVisible ? hidePane(pane) : showPane(pane));
    if (isVisible) dispatch(setActivePane(pane === 'LEFT' ? 'RIGHT' : 'LEFT'));
  };
};

const startLoadingPane = exports.startLoadingPane = (pane, timestamp) => {
  return {
    type: pane === 'LEFT' ? actions.START_LEFT_PANE_LOADING : actions.START_RIGHT_PANE_LOADING,
    timestamp
  };
};

const stopLoadingPane = exports.stopLoadingPane = (pane, timestamp, isForbidden = false) => {
  return {
    type: pane === 'LEFT' ? actions.STOP_LEFT_PANE_LOADING : actions.STOP_RIGHT_PANE_LOADING,
    timestamp,
    isForbidden
  };
};

const setPaneMode = exports.setPaneMode = (pane, mode) => {
  return async dispatch => {
    if (mode === 'CONTENTS') dispatch((0, _content.loadContent)(pane === 'LEFT' ? 'RIGHT' : 'LEFT'));else if (mode === 'INFO') dispatch((0, _info.loadInfo)(pane === 'LEFT' ? 'RIGHT' : 'LEFT'));

    return dispatch({
      type: pane === 'LEFT' ? actions.SET_LEFT_PANE_MODE : actions.SET_RIGHT_PANE_MODE,
      mode
    });
  };
};

const setPaneShare = exports.setPaneShare = (pane, share) => {
  return {
    type: pane === 'LEFT' ? actions.SET_LEFT_PANE_SHARE : actions.SET_RIGHT_PANE_SHARE,
    share
  };
};

const setPanePath = exports.setPanePath = (pane, path, directory = '', name = '') => {
  return {
    type: pane === 'LEFT' ? actions.SET_LEFT_PANE_PATH : actions.SET_RIGHT_PANE_PATH,
    path,
    directory,
    name
  };
};

const setPaneIndex = exports.setPaneIndex = (pane, index) => {
  return async (dispatch, getState) => {
    let state = getState();
    let leftPane = state.get('leftPane');
    let rightPane = state.get('rightPane');

    let share;
    let path;
    let directory;
    let name;

    if (pane === 'LEFT') {
      if (leftPane.get('isActive')) share = leftPane.get('share');

      if (index === -1) {
        if (leftPane.get('name')) {
          let dir = leftPane.get('directory');
          path = dir === '/' ? '/' : dir + '/';
          directory = dir;
          name = '';
        }
      } else {
        let item = leftPane.getIn(['list', index]);
        if (item) {
          path = (0, _path.join)(leftPane.get('directory'), item.get('name'));
          directory = leftPane.get('directory');
          name = item.get('name');
        }
      }
    } else {
      if (rightPane.get('isActive')) share = rightPane.get('share');

      if (index === -1) {
        if (rightPane.get('name')) {
          let dir = rightPane.get('directory');
          path = dir === '/' ? '/' : dir + '/';
          directory = dir;
          name = '';
        }
      } else {
        let item = rightPane.getIn(['list', index]);
        if (item) {
          path = (0, _path.join)(rightPane.get('directory'), item.get('name'));
          directory = rightPane.get('directory');
          name = item.get('name');
        }
      }
    }

    if (path && directory && name) {
      await dispatch(setPanePath(pane, path, directory, name));
      if (share) await dispatch((0, _reactRouterRedux.push)(`/~${share}:${path}`));
    }
  };
};

const paneSort = exports.paneSort = (pane, field, dir) => {
  return (dispatch, getState) => {
    let state = getState();
    let leftPane = state.get('leftPane');
    let rightPane = state.get('rightPane');
    let lists = state.get('lists');

    let id;
    if (pane === 'LEFT' && leftPane.get('share') && leftPane.get('directory')) id = `${leftPane.get('share')}:${leftPane.get('directory')}`;else if (pane === 'RIGHT' && rightPane.get('share') && rightPane.get('directory')) id = `${rightPane.get('share')}:${rightPane.get('directory')}`;

    if (field && dir) {
      dispatch({
        type: pane === 'LEFT' ? actions.SET_LEFT_PANE_SORT : actions.SET_RIGHT_PANE_SORT,
        field,
        dir
      });
    } else {
      field = pane === 'LEFT' ? leftPane.get('sortField') : rightPane.get('sortField');
      dir = pane === 'LEFT' ? leftPane.get('sortDir') : rightPane.get('sortDir');
    }

    if (!id) {
      return dispatch({
        type: pane === 'LEFT' ? actions.SET_LEFT_PANE_LIST : actions.SET_RIGHT_PANE_LIST,
        list: [],
        selectedIndexes: []
      });
    }

    let selectedIds = [];
    let sorted = pane === 'LEFT' ? leftPane.get('list') : rightPane.get('list');
    let selected = pane === 'LEFT' ? leftPane.get('selectedIndexes') : rightPane.get('selectedIndexes');
    for (let i = 0; i < sorted.size; i++) {
      if (selected.includes(i)) selectedIds.push(sorted.getIn([i, 'id']));
    }

    let parent = null;
    let directories = [];
    let files = [];
    let i = 0;
    for (let item of lists.get(id) || []) {
      if (item.get('isDirectory')) {
        if (item.get('name') === '..') parent = item.toJS();else directories.push(item.toJS());
      } else {
        files.push(item.toJS());
      }
    }

    let sort;
    if (field === 'NAME') sort = (a, b) => dir === 'ASC' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);else sort = (a, b) => dir === 'ASC' ? a.size - b.size : b.size - a.size;

    directories.sort(sort);
    files.sort(sort);

    if (parent) directories.unshift(parent);

    let list = directories.concat(files);

    let selectedIndexes = [];
    if (selectedIds.length) {
      for (let i = 0; i < list.length; i++) {
        if (selectedIds.includes(list[i].id)) selectedIndexes.push(i);
      }
    }

    dispatch({
      type: pane === 'LEFT' ? actions.SET_LEFT_PANE_LIST : actions.SET_RIGHT_PANE_LIST,
      list,
      selectedIndexes
    });
  };
};

const paneDeselect = exports.paneDeselect = pane => {
  return {
    type: pane === 'LEFT' ? actions.SET_LEFT_PANE_SELECTION : actions.SET_RIGHT_PANE_SELECTION,
    selectedIndexes: []
  };
};

const paneSelect = exports.paneSelect = (pane, index) => {
  return async (dispatch, getState) => {
    let state = getState();
    let leftPane = state.get('leftPane');
    let rightPane = state.get('rightPane');

    if (_.isUndefined(index)) {
      let list = pane === 'LEFT' ? leftPane.get('list') : rightPane.get('list');
      index = -1;
      for (let i = 0; i < list.size; i++) {
        if (list.getIn([i, 'name']) === (pane === 'LEFT' ? leftPane.get('name') : rightPane.get('name'))) {
          index = i;
          break;
        }
      }
    } else {
      await dispatch(setPaneIndex(pane, index));
    }

    dispatch({
      type: pane === 'LEFT' ? actions.SET_LEFT_PANE_SELECTION : actions.SET_RIGHT_PANE_SELECTION,
      selectedIndexes: index === -1 ? [] : [index]
    });

    if (index === -1) return;

    if (pane === 'LEFT' && rightPane.get('mode') === 'CONTENTS' || pane === 'RIGHT' && leftPane.get('mode') === 'CONTENTS') dispatch((0, _content.loadContent)(pane));
    if (pane === 'LEFT' && rightPane.get('mode') === 'INFO' || pane === 'RIGHT' && leftPane.get('mode') === 'INFO') dispatch((0, _info.loadInfo)(pane));
  };
};

const paneSelectRange = exports.paneSelectRange = (pane, index) => {
  return async (dispatch, getState) => {
    let state = getState();
    let leftPane = state.get('leftPane');
    let rightPane = state.get('rightPane');
    let selectedIndexes = (pane === 'LEFT' ? leftPane.get('selectedIndexes') : rightPane.get('selectedIndexes')).toArray();
    let length = pane === 'LEFT' ? leftPane.get('list').size : rightPane.get('list').size;

    let min = -1;
    let max = -1;
    let prev = -1;
    for (let i = index - 1; i >= 0; i--) {
      if (selectedIndexes.includes(i)) {
        prev = i;
        break;
      }
    }
    if (prev === -1) {
      let next = -1;
      for (let i = index + 1; i < length; i++) {
        if (selectedIndexes.includes(i)) {
          next = i;
          break;
        }
      }
      if (next !== -1) {
        min = index;
        max = next - 1;
      }
    } else {
      min = prev + 1;
      max = index;
    }

    if (min !== -1 && max !== -1) {
      for (let i = min; i <= max; i++) selectedIndexes.push(i);

      dispatch({
        type: pane === 'LEFT' ? actions.SET_LEFT_PANE_SELECTION : actions.SET_RIGHT_PANE_SELECTION,
        selectedIndexes: selectedIndexes
      });

      await dispatch(setPaneIndex(pane, index));

      if (pane === 'LEFT' && rightPane.get('mode') === 'CONTENTS' || pane === 'RIGHT' && leftPane.get('mode') === 'CONTENTS') dispatch((0, _content.loadContent)(pane));
      if (pane === 'LEFT' && rightPane.get('mode') === 'INFO' || pane === 'RIGHT' && leftPane.get('mode') === 'INFO') dispatch((0, _info.loadInfo)(pane));
    }
  };
};

const paneToggleSelect = exports.paneToggleSelect = (pane, index) => {
  return async (dispatch, getState) => {
    let state = getState();
    let leftPane = state.get('leftPane');
    let rightPane = state.get('rightPane');
    let selectedIndexes = (pane === 'LEFT' ? leftPane.get('selectedIndexes') : rightPane.get('selectedIndexes')).toArray();

    let indexOfIndex = selectedIndexes.indexOf(index);
    if (indexOfIndex === -1) {
      selectedIndexes.push(index);
      await dispatch(setPaneIndex(pane, index));
    } else {
      selectedIndexes.splice(indexOfIndex, 1);
      await dispatch(setPaneIndex(pane, -1));
    }

    dispatch({
      type: pane === 'LEFT' ? actions.SET_LEFT_PANE_SELECTION : actions.SET_RIGHT_PANE_SELECTION,
      selectedIndexes: selectedIndexes
    });

    if (pane === 'LEFT' && rightPane.get('mode') === 'CONTENTS' || pane === 'RIGHT' && leftPane.get('mode') === 'CONTENTS') dispatch((0, _content.loadContent)(pane));
    if (pane === 'LEFT' && rightPane.get('mode') === 'INFO' || pane === 'RIGHT' && leftPane.get('mode') === 'INFO') dispatch((0, _info.loadInfo)(pane));
  };
};

const paneUpdate = exports.paneUpdate = data => {
  return async (dispatch, getState) => {
    let state = getState();
    let leftPane = state.get('leftPane');
    let rightPane = state.get('rightPane');

    let now = Date.now();
    await dispatch((0, _list.setList)(`${data.share}:${data.directory}`, data.list || []));

    let left = new Promise(async (resolve, reject) => {
      try {
        if (leftPane.get('share') === data.share && leftPane.get('directory') === data.directory) {
          await dispatch(paneDeselect('LEFT'));
          await dispatch(paneSort('LEFT'));

          if (leftPane.get('name')) {
            let found = false;
            for (let item of data.list || []) {
              if (item.name === leftPane.get('name')) {
                found = true;
                break;
              }
            }
            if (found) {
              await dispatch(paneSelect('LEFT'));
            } else {
              let newPath = data.directory === '/' ? '/' : data.directory + '/';
              await dispatch(setPanePath('LEFT', newPath, data.directory, ''));
              if (leftPane.get('isActive')) await dispatch((0, _reactRouterRedux.push)(`/~${data.share}:${newPath}`));
            }
          }

          await dispatch(stopLoadingPane('LEFT', now, !data.list));
        }
        resolve();
      } catch (error) {
        reject(error);
      }
    });

    let right = new Promise(async (resolve, reject) => {
      try {
        if (rightPane.get('share') === data.share && rightPane.get('directory') === data.directory) {
          await dispatch(paneDeselect('RIGHT'));
          await dispatch(paneSort('RIGHT'));

          if (rightPane.get('name')) {
            let found = false;
            for (let item of data.list || []) {
              if (item.name === rightPane.get('name')) {
                found = true;
                break;
              }
            }
            if (found) {
              await dispatch(paneSelect('RIGHT'));
            } else {
              let newPath = data.directory === '/' ? '/' : data.directory + '/';
              await dispatch(setPanePath('RIGHT', newPath, data.directory, ''));
              if (rightPane.get('isActive')) await dispatch((0, _reactRouterRedux.push)(`/~${data.share}:${newPath}`));
            }
          }

          await dispatch(stopLoadingPane('RIGHT', now, !data.list));
        }
        resolve();
      } catch (error) {
        reject(error);
      }
    });

    await Promise.all([left, right]);
    await dispatch((0, _list.clearLists)());
  };
};

const paneCD = exports.paneCD = (pane, share, path) => {
  return async (dispatch, getState) => {
    let state = getState();
    let app = state.get('app');
    let user = state.get('user');
    let leftPane = state.get('leftPane');
    let rightPane = state.get('rightPane');
    if (!user.get('isAuthorized')) return;

    if (!share) share = pane !== 'RIGHT' ? leftPane.get('share') : rightPane.get('share');
    if (!path) path = pane !== 'RIGHT' ? leftPane.get('path') : rightPane.get('path');

    if (pane === 'LEFT' && leftPane.get('share') === share && leftPane.get('path') === path) return;
    if (pane === 'RIGHT' && rightPane.get('share') === share && rightPane.get('path') === path) return;
    if (pane === 'BOTH' && leftPane.get('share') === rightPane.get('share') === share && leftPane.get('path') === rightPane.get('path') === path) return;

    let params = {
      pane,
      share,
      path,
      _csrf: app.get('csrf')
    };

    let start = Date.now();
    if ((pane === 'LEFT' || pane === 'BOTH') && leftPane.get('timestamp') < start) await dispatch(startLoadingPane('LEFT', start));
    if ((pane === 'RIGHT' || pane === 'BOTH') && rightPane.get('timestamp') < start) await dispatch(startLoadingPane('RIGHT', start));

    return new Promise((resolve, reject) => {
      io.socket.post('/pane/cd', params, async (data, response) => {
        try {
          let finish = Date.now();
          if (response.statusCode !== 200) {
            await dispatch(stopLoadingPane('LEFT'), finish);
            await dispatch(stopLoadingPane('RIGHT'), finish);
            await dispatch((0, _user.signOut)());
            return resolve();
          }

          let state = getState();
          let leftPane = state.get('leftPane');
          let rightPane = state.get('rightPane');

          if (data.success) {
            if ((pane === 'LEFT' || pane === 'BOTH') && leftPane.get('timestamp') === start) {
              await dispatch(setPaneShare('LEFT', data.share));
              await dispatch(setPanePath('LEFT', data.path, data.directory, data.name));
              if (leftPane.get('isActive')) await dispatch((0, _reactRouterRedux.push)(`/~${data.share}:${data.path}`));
            }

            if ((pane === 'RIGHT' || pane === 'BOTH') && rightPane.get('timestamp') === start) {
              await dispatch(setPaneShare('RIGHT', data.share));
              await dispatch(setPanePath('RIGHT', data.path, data.directory, data.name));
              if (rightPane.get('isActive')) await dispatch((0, _reactRouterRedux.push)(`/~${data.share}:${data.path}`));
            }

            await dispatch(paneUpdate(data));
          } else {
            if ((pane === 'LEFT' || pane === 'BOTH') && leftPane.get('timestamp') === start) {
              await dispatch(setPaneShare('LEFT', ''));
              await dispatch(setPanePath('LEFT', path));
              await dispatch(paneDeselect('LEFT'));
              await dispatch(paneSort('LEFT'));
              await dispatch(stopLoadingPane('LEFT', finish, true));
              if (leftPane.get('isActive')) await dispatch((0, _reactRouterRedux.push)(`/~${share}:${path}`));
            }

            if ((pane === 'RIGHT' || pane === 'BOTH') && rightPane.get('timestamp') === start) {
              await dispatch(setPaneShare('RIGHT', ''));
              await dispatch(setPanePath('RIGHT', path));
              await dispatch(paneDeselect('RIGHT'));
              await dispatch(paneSort('RIGHT'));
              await dispatch(stopLoadingPane('RIGHT', finish, true));
              if (rightPane.get('isActive')) await dispatch((0, _reactRouterRedux.push)(`/~${share}:${path}`));
            }
          }

          resolve();
        } catch (error) {
          reject(error);
        }
      });
    });
  };
};

const initPanes = exports.initPanes = () => {
  return async (dispatch, getState) => {
    let state = getState();
    let user = state.get('user');
    let router = state.get('router');
    if (!user.get('isAuthorized')) return;

    let match = (0, _path.matchLocation)(router.getIn(['location', 'pathname']));
    let share = match ? match.share : user.getIn(['shares', 0, 'name']);
    let path = match ? match.path : '/';

    await dispatch(paneCD('BOTH', share, path));
  };
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleDrop = exports.handleDrag = exports.updateDragMode = undefined;

var _actionTypes = __webpack_require__(2);

var actions = _interopRequireWildcard(_actionTypes);

var _commands = __webpack_require__(7);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const updateDragMode = exports.updateDragMode = mode => {
  return {
    type: actions.UPDATE_DRAG_MODE,
    mode
  };
};

const handleDrag = exports.handleDrag = (fromPane, isDragging, isSelected) => {
  return {
    type: actions.UPDATE_DRAG_STATE,
    pane: fromPane,
    isDragging,
    isSelected
  };
};

const handleDrop = exports.handleDrop = (fromPane, name, isSelected) => {
  return async (dispatch, getState) => {
    let state = getState();
    let mode = state.getIn(['drag', fromPane.toLowerCase(), 'dragMode']);

    let names = [];
    if (isSelected) {
      let pane = state.get(fromPane.toLowerCase() + 'Pane');
      let list = pane.get('list');
      for (let index of pane.get('selectedIndexes').toArray()) names.push(list.getIn([index, 'name']));
    } else {
      names.push(name);
    }

    let promises = [];
    for (let name of names) promises.push(dispatch(mode === 'COPY' ? (0, _commands.fastCopy)(fromPane, name) : (0, _commands.fastMove)(fromPane, name)));
    return await Promise.all(promises);
  };
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleNavbar = exports.closeNavbar = exports.openNavbar = undefined;

var _actionTypes = __webpack_require__(2);

var actions = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const openNavbar = exports.openNavbar = () => {
  return {
    type: actions.OPEN_NAVBAR
  };
};

const closeNavbar = exports.closeNavbar = () => {
  return {
    type: actions.CLOSE_NAVBAR
  };
};

const toggleNavbar = exports.toggleNavbar = () => {
  return {
    type: actions.TOGGLE_NAVBAR
  };
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateMkdirDialog = exports.submitMkdirDialog = exports.toggleMkdirDialog = exports.hideMkdirDialog = exports.showMkdirDialog = exports.resetMkdirDialog = exports.unlockMkdirDialog = exports.lockMkdirDialog = undefined;

var _actionTypes = __webpack_require__(2);

var actions = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const lockMkdirDialog = exports.lockMkdirDialog = () => {
  return {
    type: actions.LOCK_MKDIR_DIALOG
  };
};

const unlockMkdirDialog = exports.unlockMkdirDialog = () => {
  return {
    type: actions.UNLOCK_MKDIR_DIALOG
  };
};

const resetMkdirDialog = exports.resetMkdirDialog = values => {
  let action = { type: actions.RESET_MKDIR_DIALOG };
  if (values) action.values = values;
  return action;
};

const showMkdirDialog = exports.showMkdirDialog = () => {
  return async (dispatch, getState) => {
    let state = getState();
    let mkdirDialog = state.get('mkdirDialog');
    let leftPane = state.get('leftPane');
    let rightPane = state.get('rightPane');
    if (mkdirDialog.get('locked')) return;

    let values = {
      share: leftPane.get('isActive') ? leftPane.get('share') : rightPane.get('share'),
      directory: leftPane.get('isActive') ? leftPane.get('directory') : rightPane.get('directory'),
      name: ''
    };
    if (!values.share || !values.directory) return;

    await dispatch(resetMkdirDialog(values));

    return dispatch({
      type: actions.SHOW_MKDIR_DIALOG
    });
  };
};

const hideMkdirDialog = exports.hideMkdirDialog = () => {
  return async (dispatch, getState) => {
    let mkdirDialog = getState().get('mkdirDialog');
    if (mkdirDialog.get('locked')) return;

    await dispatch(resetMkdirDialog());

    return dispatch({
      type: actions.HIDE_MKDIR_DIALOG
    });
  };
};

const toggleMkdirDialog = exports.toggleMkdirDialog = () => {
  return async (dispatch, getState) => {
    let mkdirDialog = getState().get('mkdirDialog');
    if (mkdirDialog.get('locked')) return;

    return dispatch(mkdirDialog.get('isOpen') ? hideMkdirDialog() : showMkdirDialog());
  };
};

const submitMkdirDialog = exports.submitMkdirDialog = submittedAt => {
  return {
    type: actions.SUBMIT_MKDIR_DIALOG,
    submittedAt: submittedAt || Date.now()
  };
};

const updateMkdirDialog = exports.updateMkdirDialog = (data, submittedAt) => {
  return {
    type: actions.UPDATE_MKDIR_DIALOG,
    submittedAt: submittedAt || Date.now(),
    data
  };
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateRenameDialog = exports.submitRenameDialog = exports.toggleRenameDialog = exports.hideRenameDialog = exports.showRenameDialog = exports.resetRenameDialog = exports.unlockRenameDialog = exports.lockRenameDialog = undefined;

var _actionTypes = __webpack_require__(2);

var actions = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const lockRenameDialog = exports.lockRenameDialog = () => {
  return {
    type: actions.LOCK_RENAME_DIALOG
  };
};

const unlockRenameDialog = exports.unlockRenameDialog = () => {
  return {
    type: actions.UNLOCK_RENAME_DIALOG
  };
};

const resetRenameDialog = exports.resetRenameDialog = values => {
  let action = { type: actions.RESET_RENAME_DIALOG };
  if (values) action.values = values;
  return action;
};

const showRenameDialog = exports.showRenameDialog = () => {
  return async (dispatch, getState) => {
    let state = getState();
    let renameDialog = state.get('renameDialog');
    let leftPane = state.get('leftPane');
    let rightPane = state.get('rightPane');
    if (renameDialog.get('locked')) return;

    let values = {
      share: leftPane.get('isActive') ? leftPane.get('share') : rightPane.get('share'),
      directory: leftPane.get('isActive') ? leftPane.get('directory') : rightPane.get('directory'),
      name: leftPane.get('isActive') ? leftPane.get('name') : rightPane.get('name'),
      newName: leftPane.get('isActive') ? leftPane.get('name') : rightPane.get('name')
    };
    if (!values.share || !values.directory || !values.name) return;

    await dispatch(resetRenameDialog(values));

    return dispatch({
      type: actions.SHOW_RENAME_DIALOG
    });
  };
};

const hideRenameDialog = exports.hideRenameDialog = () => {
  return async (dispatch, getState) => {
    let renameDialog = getState().get('renameDialog');
    if (renameDialog.get('locked')) return;

    await dispatch(resetRenameDialog());

    return dispatch({
      type: actions.HIDE_RENAME_DIALOG
    });
  };
};

const toggleRenameDialog = exports.toggleRenameDialog = () => {
  return async (dispatch, getState) => {
    let renameDialog = getState().get('renameDialog');
    if (renameDialog.get('locked')) return;

    return dispatch(renameDialog.get('isOpen') ? hideRenameDialog() : showRenameDialog());
  };
};

const submitRenameDialog = exports.submitRenameDialog = submittedAt => {
  return {
    type: actions.SUBMIT_RENAME_DIALOG,
    submittedAt: submittedAt || Date.now()
  };
};

const updateRenameDialog = exports.updateRenameDialog = (data, submittedAt) => {
  return {
    type: actions.UPDATE_RENAME_DIALOG,
    submittedAt: submittedAt || Date.now(),
    data
  };
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stopCopyDialogFind = exports.startCopyDialogFind = exports.updateCopyDialog = exports.submitCopyDialog = exports.toggleCopyDialog = exports.hideCopyDialog = exports.showCopyDialog = exports.resetCopyDialog = exports.unlockCopyDialog = exports.lockCopyDialog = undefined;

var _actionTypes = __webpack_require__(2);

var actions = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const lockCopyDialog = exports.lockCopyDialog = () => {
  return {
    type: actions.LOCK_COPY_DIALOG
  };
};

const unlockCopyDialog = exports.unlockCopyDialog = () => {
  return {
    type: actions.UNLOCK_COPY_DIALOG
  };
};

const resetCopyDialog = exports.resetCopyDialog = values => {
  let action = { type: actions.RESET_COPY_DIALOG };
  if (values) action.values = values;
  return action;
};

const showCopyDialog = exports.showCopyDialog = () => {
  return async (dispatch, getState) => {
    let state = getState();
    let copyDialog = state.get('copyDialog');
    let leftPane = state.get('leftPane');
    let rightPane = state.get('rightPane');
    if (copyDialog.get('locked')) return;

    let values = {
      srcShare: leftPane.get('isActive') ? leftPane.get('share') : rightPane.get('share'),
      srcDirectory: leftPane.get('isActive') ? leftPane.get('directory') : rightPane.get('directory'),
      srcName: leftPane.get('isActive') ? leftPane.get('name') : rightPane.get('name'),
      dstShare: leftPane.get('isActive') ? rightPane.get('share') : leftPane.get('share'),
      dstDirectory: leftPane.get('isActive') ? rightPane.get('directory') : leftPane.get('directory')
    };
    if (!values.srcShare || !values.srcDirectory || !values.dstShare || !values.dstDirectory) return;

    await dispatch(resetCopyDialog(values));

    return dispatch({
      type: actions.SHOW_COPY_DIALOG
    });
  };
};

const hideCopyDialog = exports.hideCopyDialog = () => {
  return async (dispatch, getState) => {
    let copyDialog = getState().get('copyDialog');
    if (copyDialog.get('locked')) return;

    await dispatch(resetCopyDialog());

    return dispatch({
      type: actions.HIDE_COPY_DIALOG
    });
  };
};

const toggleCopyDialog = exports.toggleCopyDialog = () => {
  return async (dispatch, getState) => {
    let copyDialog = getState().get('copyDialog');
    if (copyDialog.get('locked')) return;

    return dispatch(copyDialog.get('isOpen') ? hideCopyDialog() : showCopyDialog());
  };
};

const submitCopyDialog = exports.submitCopyDialog = submittedAt => {
  return {
    type: actions.SUBMIT_COPY_DIALOG,
    submittedAt: submittedAt || Date.now()
  };
};

const updateCopyDialog = exports.updateCopyDialog = (data, submittedAt) => {
  return {
    type: actions.UPDATE_COPY_DIALOG,
    submittedAt: submittedAt || Date.now(),
    data
  };
};

const startCopyDialogFind = exports.startCopyDialogFind = () => {
  return {
    type: actions.START_COPY_DIALOG_FIND
  };
};

const stopCopyDialogFind = exports.stopCopyDialogFind = nodes => {
  return {
    type: actions.STOP_COPY_DIALOG_FIND,
    nodes
  };
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stopMoveDialogFind = exports.startMoveDialogFind = exports.updateMoveDialog = exports.submitMoveDialog = exports.toggleMoveDialog = exports.hideMoveDialog = exports.showMoveDialog = exports.resetMoveDialog = exports.unlockMoveDialog = exports.lockMoveDialog = undefined;

var _actionTypes = __webpack_require__(2);

var actions = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const lockMoveDialog = exports.lockMoveDialog = () => {
  return {
    type: actions.LOCK_MOVE_DIALOG
  };
};

const unlockMoveDialog = exports.unlockMoveDialog = () => {
  return {
    type: actions.UNLOCK_MOVE_DIALOG
  };
};

const resetMoveDialog = exports.resetMoveDialog = values => {
  let action = { type: actions.RESET_MOVE_DIALOG };
  if (values) action.values = values;
  return action;
};

const showMoveDialog = exports.showMoveDialog = () => {
  return async (dispatch, getState) => {
    let state = getState();
    let moveDialog = state.get('moveDialog');
    let leftPane = state.get('leftPane');
    let rightPane = state.get('rightPane');
    if (moveDialog.get('locked')) return;

    let values = {
      srcShare: leftPane.get('isActive') ? leftPane.get('share') : rightPane.get('share'),
      srcDirectory: leftPane.get('isActive') ? leftPane.get('directory') : rightPane.get('directory'),
      srcName: leftPane.get('isActive') ? leftPane.get('name') : rightPane.get('name'),
      dstShare: leftPane.get('isActive') ? rightPane.get('share') : leftPane.get('share'),
      dstDirectory: leftPane.get('isActive') ? rightPane.get('directory') : leftPane.get('directory')
    };
    if (!values.srcShare || !values.srcDirectory || !values.dstShare || !values.dstDirectory) return;

    await dispatch(resetMoveDialog(values));

    return dispatch({
      type: actions.SHOW_MOVE_DIALOG
    });
  };
};

const hideMoveDialog = exports.hideMoveDialog = () => {
  return async (dispatch, getState) => {
    let moveDialog = getState().get('moveDialog');
    if (moveDialog.get('locked')) return;

    await dispatch(resetMoveDialog());

    return dispatch({
      type: actions.HIDE_MOVE_DIALOG
    });
  };
};

const toggleMoveDialog = exports.toggleMoveDialog = () => {
  return async (dispatch, getState) => {
    let moveDialog = getState().get('moveDialog');
    if (moveDialog.get('locked')) return;

    return dispatch(moveDialog.get('isOpen') ? hideMoveDialog() : showMoveDialog());
  };
};

const submitMoveDialog = exports.submitMoveDialog = submittedAt => {
  return {
    type: actions.SUBMIT_MOVE_DIALOG,
    submittedAt: submittedAt || Date.now()
  };
};

const updateMoveDialog = exports.updateMoveDialog = (data, submittedAt) => {
  return {
    type: actions.UPDATE_MOVE_DIALOG,
    submittedAt: submittedAt || Date.now(),
    data
  };
};

const startMoveDialogFind = exports.startMoveDialogFind = () => {
  return {
    type: actions.START_MOVE_DIALOG_FIND
  };
};

const stopMoveDialogFind = exports.stopMoveDialogFind = nodes => {
  return {
    type: actions.STOP_MOVE_DIALOG_FIND,
    nodes
  };
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stopDeleteDialogFind = exports.startDeleteDialogFind = exports.updateDeleteDialog = exports.submitDeleteDialog = exports.toggleDeleteDialog = exports.hideDeleteDialog = exports.showDeleteDialog = exports.resetDeleteDialog = exports.unlockDeleteDialog = exports.lockDeleteDialog = undefined;

var _actionTypes = __webpack_require__(2);

var actions = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const lockDeleteDialog = exports.lockDeleteDialog = () => {
  return {
    type: actions.LOCK_DELETE_DIALOG
  };
};

const unlockDeleteDialog = exports.unlockDeleteDialog = () => {
  return {
    type: actions.UNLOCK_DELETE_DIALOG
  };
};

const resetDeleteDialog = exports.resetDeleteDialog = values => {
  let action = { type: actions.RESET_DELETE_DIALOG };
  if (values) action.values = values;
  return action;
};

const showDeleteDialog = exports.showDeleteDialog = () => {
  return async (dispatch, getState) => {
    let state = getState();
    let deleteDialog = state.get('deleteDialog');
    let leftPane = state.get('leftPane');
    let rightPane = state.get('rightPane');
    if (deleteDialog.get('locked')) return;

    let values = {
      share: leftPane.get('isActive') ? leftPane.get('share') : rightPane.get('share'),
      directory: leftPane.get('isActive') ? leftPane.get('directory') : rightPane.get('directory'),
      name: leftPane.get('isActive') ? leftPane.get('name') : rightPane.get('name')
    };
    if (!values.share || !values.directory) return;

    await dispatch(resetDeleteDialog(values));

    return dispatch({
      type: actions.SHOW_DELETE_DIALOG
    });
  };
};

const hideDeleteDialog = exports.hideDeleteDialog = () => {
  return async (dispatch, getState) => {
    let deleteDialog = getState().get('deleteDialog');
    if (deleteDialog.get('locked')) return;

    await dispatch(resetDeleteDialog());

    return dispatch({
      type: actions.HIDE_DELETE_DIALOG
    });
  };
};

const toggleDeleteDialog = exports.toggleDeleteDialog = () => {
  return async (dispatch, getState) => {
    let deleteDialog = getState().get('deleteDialog');
    if (deleteDialog.get('locked')) return;

    return dispatch(deleteDialog.get('isOpen') ? hideDeleteDialog() : showDeleteDialog());
  };
};

const submitDeleteDialog = exports.submitDeleteDialog = submittedAt => {
  return {
    type: actions.SUBMIT_DELETE_DIALOG,
    submittedAt: submittedAt || Date.now()
  };
};

const updateDeleteDialog = exports.updateDeleteDialog = (data, submittedAt) => {
  return {
    type: actions.UPDATE_DELETE_DIALOG,
    submittedAt: submittedAt || Date.now(),
    data
  };
};

const startDeleteDialogFind = exports.startDeleteDialogFind = () => {
  return {
    type: actions.START_DELETE_DIALOG_FIND
  };
};

const stopDeleteDialogFind = exports.stopDeleteDialogFind = nodes => {
  return {
    type: actions.STOP_DELETE_DIALOG_FIND,
    nodes
  };
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("react-dnd");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _variables = __webpack_require__(60);

var _variables2 = _interopRequireDefault(_variables);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactTransitionGroup = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

const Fade = (_ref) => {
  let { children } = _ref,
      props = _objectWithoutProperties(_ref, ['children']);

  return _react2.default.createElement(
    _reactTransitionGroup.CSSTransition,
    _extends({}, props, {
      timeout: parseInt(_variables2.default.fadeDuration),
      classNames: 'fade'
    }),
    children
  );
};

exports.default = Fade;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateSignInDialog = exports.submitSignInDialog = exports.toggleSignInDialog = exports.hideSignInDialog = exports.showSignInDialog = exports.resetSignInDialog = exports.unlockSignInDialog = exports.lockSignInDialog = undefined;

var _actionTypes = __webpack_require__(2);

var actions = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const lockSignInDialog = exports.lockSignInDialog = () => {
  return {
    type: actions.LOCK_SIGN_IN_DIALOG
  };
};

const unlockSignInDialog = exports.unlockSignInDialog = () => {
  return {
    type: actions.UNLOCK_SIGN_IN_DIALOG
  };
};

const resetSignInDialog = exports.resetSignInDialog = values => {
  let action = { type: actions.RESET_SIGN_IN_DIALOG };
  if (values) action.values = values;
  return action;
};

const showSignInDialog = exports.showSignInDialog = () => {
  return async (dispatch, getState) => {
    let signInDialog = getState().get('signInDialog');
    if (signInDialog.get('locked')) return;

    await dispatch(resetSignInDialog());

    return dispatch({
      type: actions.SHOW_SIGN_IN_DIALOG
    });
  };
};

const hideSignInDialog = exports.hideSignInDialog = () => {
  return async (dispatch, getState) => {
    let signInDialog = getState().get('signInDialog');
    if (signInDialog.get('locked')) return;

    await dispatch(resetSignInDialog());

    return dispatch({
      type: actions.HIDE_SIGN_IN_DIALOG
    });
  };
};

const toggleSignInDialog = exports.toggleSignInDialog = () => {
  return async (dispatch, getState) => {
    let signInDialog = getState().get('signInDialog');
    if (signInDialog.get('locked')) return;

    return dispatch(signInDialog.get('isOpen') ? hideSignInDialog() : showSignInDialog());
  };
};

const submitSignInDialog = exports.submitSignInDialog = submittedAt => {
  return {
    type: actions.SUBMIT_SIGN_IN_DIALOG,
    submittedAt: submittedAt || Date.now()
  };
};

const updateSignInDialog = exports.updateSignInDialog = (data, submittedAt) => {
  return {
    type: actions.UPDATE_SIGN_IN_DIALOG,
    submittedAt: submittedAt || Date.now(),
    data
  };
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadSize = exports.clearSizes = exports.setSize = undefined;

var _actionTypes = __webpack_require__(2);

var actions = _interopRequireWildcard(_actionTypes);

var _user = __webpack_require__(8);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const setSize = exports.setSize = (id, size) => {
  size.timestamp = Date.now();
  return {
    type: actions.SET_SIZE,
    id,
    size
  };
};

const clearSizes = exports.clearSizes = () => {
  return async (dispatch, getState) => {
    let sizes = getState().get('sizes');
    let keep = [];
    let now = Date.now();
    for (let id of sizes.keys()) {
      if (now - sizes.getIn([id, 'timestamp']) < 15 * 60 * 1000) keep.push(id);
    }

    await dispatch({
      type: actions.CLEAR_SIZE,
      keep
    });
  };
};

const loadSize = exports.loadSize = (share, path) => {
  return async (dispatch, getState) => {
    let state = getState();
    let app = state.get('app');
    let sizes = state.get('sizes');

    let id = `${share}:${path}`;
    if (sizes.has(id) && sizes.getIn([id, 'isLoading'])) return;

    let params = {
      share,
      path,
      _csrf: app.get('csrf')
    };

    await dispatch(setSize(id, {
      isLoading: true,
      isForbidden: false
    }));

    return new Promise(resolve => {
      io.socket.get('/pane/size', params, async (data, response) => {
        if (response.statusCode === 200) {
          if (data.success) {
            await dispatch(setSize(id, {
              isLoading: false,
              isForbidden: false,
              du: data.du
            }));
          } else {
            await dispatch(setSize(id, {
              isLoading: false,
              isForbidden: true
            }));
          }
          await dispatch(clearSizes());
        } else {
          await dispatch((0, _user.signOut)());
        }

        resolve();
      });
    });
  };
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hideFailureDialog = exports.showFailureDialog = undefined;

var _actionTypes = __webpack_require__(2);

var actions = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const showFailureDialog = exports.showFailureDialog = (messages, errors) => {
  return {
    type: actions.SHOW_FAILURE_DIALOG,
    messages,
    errors
  };
};

const hideFailureDialog = exports.hideFailureDialog = () => {
  return {
    type: actions.HIDE_FAILURE_DIALOG
  };
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setServerState = exports.initApp = exports.screenResize = exports.setAppVersion = exports.startApp = exports.disconnectApp = exports.connectApp = exports.getCSRFToken = undefined;

var _actionTypes = __webpack_require__(2);

var actions = _interopRequireWildcard(_actionTypes);

var _user = __webpack_require__(8);

var _pane = __webpack_require__(17);

var _list = __webpack_require__(32);

var _progressDialog = __webpack_require__(33);

var _path = __webpack_require__(15);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const getCSRFToken = exports.getCSRFToken = () => {
  return async dispatch => {
    return new Promise(async resolve => {
      let retry = async () => {
        try {
          let response = await fetch('/auth/csrf', {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          });
          if (response.status === 200) {
            await dispatch({
              type: actions.SET_CSRF_TOKEN,
              token: (await response.json())._csrf
            });
            return resolve();
          }
        } catch (error) {
          console.error(error);
        }
        setTimeout(retry, 1000);
      };
      await retry();
    });
  };
};

const connectApp = exports.connectApp = () => {
  let when = Date.now();
  return async (dispatch, getState) => {
    {
      let state = getState();
      let app = state.get('app');
      if (app.get('ioTimestamp') > when) return;

      dispatch({
        type: app.get('isConnected') ? actions.CONNECT_APP : actions.DISCONNECT_APP,
        when
      });
    }
    {
      await dispatch(getCSRFToken());
      if (getState().getIn(['app', 'ioTimestamp']) !== when) return;
    }
    {
      await dispatch((0, _user.updateStatus)());
      if (getState().getIn(['app', 'ioTimestamp']) !== when) return;
    }
    {
      let state = getState();
      let app = state.get('app');
      let leftPane = state.get('leftPane');
      let rightPane = state.get('rightPane');
      let params = {
        timestamp: window.__TIMESTAMP__,
        left: {
          share: leftPane.get('share'),
          directory: leftPane.get('directory')
        },
        right: {
          share: rightPane.get('share'),
          directory: rightPane.get('directory')
        },
        _csrf: app.get('csrf')
      };
      await new Promise(resolve => {
        io.socket.post('/pane/loaded', params, () => resolve());
      });
    }
    {
      if (getState().getIn(['app', 'ioTimestamp']) !== when) return;

      dispatch({
        type: actions.CONNECT_APP,
        when
      });
    }
  };
};

const disconnectApp = exports.disconnectApp = () => {
  let now = Date.now();
  window.__TIMESTAMP__ = now;
  return {
    type: actions.DISCONNECT_APP,
    when: now
  };
};

const startApp = exports.startApp = () => {
  return dispatch => {
    dispatch({
      type: actions.START_APP
    });

    io.socket.on('connect', () => dispatch(connectApp()));
    io.socket.on('disconnect', () => dispatch(disconnectApp()));
    io.socket.on('update', data => dispatch((0, _pane.paneUpdate)(data)));
    io.socket.on('progress-start', data => dispatch((0, _progressDialog.startProgress)(data)));
    io.socket.on('progress-more', data => dispatch((0, _progressDialog.updateProgress)(data)));
    io.socket.on('progress-finish', data => dispatch((0, _progressDialog.finishProgress)(data)));

    if (io.socket.isConnected()) dispatch(connectApp());
  };
};

let versionTimer = null;
const setAppVersion = exports.setAppVersion = isSameVersion => {
  if (versionTimer) {
    clearTimeout(versionTimer);
    versionTimer = null;
  }

  if (!isSameVersion) versionTimer = setTimeout(() => window.location.reload(true), 60 * 1000);

  return {
    type: actions.APP_VERSION,
    isSameVersion
  };
};

const screenResize = exports.screenResize = () => {
  return async (dispatch, getState) => {
    let state = getState();
    let app = state.get('app');
    let rightPane = state.get('rightPane');
    let newSize = Breakpoints.current().name;
    if (!app.get('isStarted') || !newSize || newSize === app.get('breakpoint')) return;

    if (newSize === 'xs') {
      await dispatch((0, _pane.hidePane)('RIGHT'));
      if (rightPane.get('isActive')) await dispatch((0, _pane.setActivePane)('LEFT'));
    } else if (app.get('prevBreakpoint') === 'xs') {
      await dispatch((0, _pane.showPane)('RIGHT'));
    }

    return dispatch({
      type: actions.SCREEN_RESIZE,
      breakpoint: newSize
    });
  };
};

const initApp = exports.initApp = history => {
  return async (dispatch, getState) => {
    if (getState().getIn(['app', 'isStarted'])) return;

    await dispatch(startApp());
    await dispatch(screenResize());
    await dispatch((0, _pane.setActivePane)('LEFT'));

    history.listen(async location => {
      let state = getState();
      let user = state.get('user');
      let leftPane = state.get('leftPane');
      if (!user.get('isAuthorized')) return;

      let pane = leftPane.get('isActive') ? 'LEFT' : 'RIGHT';
      let match = (0, _path.matchLocation)(location.pathname);
      dispatch((0, _pane.paneCD)(pane, match ? match.share : user.getIn(['shares', 0, 'name']), match ? match.path : '/'));
    });
  };
};

const setServerState = exports.setServerState = params => {
  return async dispatch => {
    await dispatch((0, _user.setUser)(true, params.login, params.locale, params.shares));
    await dispatch((0, _pane.setPaneShare)('LEFT', params.share));
    await dispatch((0, _pane.setPanePath)('LEFT', params.path, params.directory, params.name));
    await dispatch((0, _pane.setPaneShare)('RIGHT', params.share));
    await dispatch((0, _pane.setPanePath)('RIGHT', params.path, params.directory, params.name));

    if (params.list) {
      await dispatch((0, _list.setList)(`${params.share}:${params.directory}`, params.list));
      await dispatch((0, _pane.paneSort)('LEFT'));
      await dispatch((0, _pane.paneSelect)('LEFT'));
      await dispatch((0, _pane.paneSort)('RIGHT'));
      await dispatch((0, _pane.paneSelect)('RIGHT'));
    } else {
      await dispatch((0, _pane.stopLoadingPane)('LEFT', 0, true));
      await dispatch((0, _pane.stopLoadingPane)('RIGHT', 0, true));
    }
  };
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearLists = exports.setList = undefined;

var _actionTypes = __webpack_require__(2);

var actions = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const setList = exports.setList = (id, list) => {
  return {
    type: actions.SET_LIST,
    id,
    list
  };
};

const clearLists = exports.clearLists = () => {
  return async (dispatch, getState) => {
    let state = getState();
    let lists = state.get('lists');
    let leftPane = state.get('leftPane');
    let rightPane = state.get('rightPane');

    let leftId;
    if (leftPane.get('share') && leftPane.get('directory')) leftId = `${leftPane.get('share')}:${leftPane.get('directory')}`;
    let rightId;
    if (rightPane.get('share') && rightPane.get('directory')) rightId = `${rightPane.get('share')}:${rightPane.get('directory')}`;

    if (lists.size === 0 || leftId && rightId && (leftId === rightId ? lists.size === 1 : lists.size === 2)) return;

    let keep = [];
    if (leftId) keep.push(leftId);
    if (rightId && rightId !== leftId) keep.push(rightId);

    await dispatch({
      type: actions.CLEAR_LIST,
      keep
    });
  };
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearProgress = exports.finishProgress = exports.updateProgress = exports.startProgress = undefined;

var _actionTypes = __webpack_require__(2);

var actions = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const startProgress = exports.startProgress = message => {
  return {
    type: actions.START_PROGRESS,
    message
  };
};

const updateProgress = exports.updateProgress = message => {
  return {
    type: actions.UPDATE_PROGRESS,
    message
  };
};

const finishProgress = exports.finishProgress = message => {
  return {
    type: actions.FINISH_PROGRESS,
    message
  };
};

const clearProgress = exports.clearProgress = () => {
  return {
    type: actions.CLEAR_PROGRESS
  };
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(29);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactstrap = __webpack_require__(4);

var _reactDnd = __webpack_require__(25);

var _immutable = __webpack_require__(1);

var _DisabledView = __webpack_require__(87);

var _DisabledView2 = _interopRequireDefault(_DisabledView);

var _LoadingView = __webpack_require__(88);

var _LoadingView2 = _interopRequireDefault(_LoadingView);

var _Header = __webpack_require__(89);

var _Header2 = _interopRequireDefault(_Header);

var _ListView = __webpack_require__(91);

var _ListView2 = _interopRequireDefault(_ListView);

var _ContentView = __webpack_require__(95);

var _ContentView2 = _interopRequireDefault(_ContentView);

var _InfoView = __webpack_require__(96);

var _InfoView2 = _interopRequireDefault(_InfoView);

var _dragTypes = __webpack_require__(37);

var dragTypes = _interopRequireWildcard(_dragTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const paneTarget = {
  drop(props, monitor) {
    let item = monitor.getItem();
    props.onDrop(item.pane, item.name, item.isSelected);
  },
  canDrop(props, monitor) {
    return monitor.getItem().pane !== props.which && props.mode === 'LIST';
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isDraggingNode: monitor.canDrop(),
    isDraggedOver: monitor.canDrop() && monitor.isOver()
  };
}

let Pane = (_dec = (0, _reactDnd.DropTarget)(dragTypes.NODE, paneTarget, collect), _dec(_class = class Pane extends _react2.default.PureComponent {

  render() {
    let view = null;
    if (this.props.isDisabled) {
      view = _react2.default.createElement(_DisabledView2.default, { isActive: this.props.isActive });
    } else if (this.props.isLoading) {
      view = _react2.default.createElement(_LoadingView2.default, { isActive: this.props.isActive });
    } else {
      if (this.props.mode === 'CONTENTS') {
        view = _react2.default.createElement(_ContentView2.default, { content: this.props.content });
      } else if (this.props.mode === 'INFO') {
        view = _react2.default.createElement(_InfoView2.default, { info: this.props.info });
      } else {
        view = _react2.default.createElement(_ListView2.default, {
          which: this.props.which,
          share: this.props.share,
          directory: this.props.directory,
          list: this.props.list,
          sizes: this.props.sizes,
          selectedIndexes: this.props.selectedIndexes,
          isForbidden: this.props.isForbidden,
          onChangeDirectory: this.props.onChangeDirectory,
          onNodeClick: this.props.onNodeClick,
          onNodeShiftClick: this.props.onNodeShiftClick,
          onNodeControlClick: this.props.onNodeControlClick,
          onSizeClick: this.props.onSizeClick,
          onCopyClick: this.props.onCopyClick,
          onMoveClick: this.props.onMoveClick,
          onDeleteClick: this.props.onDeleteClick,
          onDrag: this.props.onDrag
        });
      }
      view = _react2.default.createElement(
        'div',
        {
          id: this.props.which + '-view',
          className: 'view rounded' + (this.props.isDraggedOver ? ' drop-ready' : this.props.isDraggingNode ? ' drop-alert' : this.props.isActive ? ' active' : '')
        },
        _react2.default.createElement(_Header2.default, {
          breakpoint: this.props.breakpoint,
          shares: this.props.shares,
          share: this.props.share,
          directory: this.props.directory,
          mode: this.props.mode,
          otherPath: this.props.otherPath,
          sortField: this.props.sortField,
          sortDir: this.props.sortDir,
          isOtherVisible: this.props.isOtherVisible,
          onSetShare: this.props.onSetShare,
          onSetSort: this.props.onSetSort,
          onSetMode: this.props.onSetMode,
          onToggleOther: this.props.onToggleOther
        }),
        view,
        _react2.default.createElement(_reactstrap.Tooltip, {
          placement: this.props.breakpoint === 'xs' ? 'top' : this.props.which === 'LEFT' ? 'right' : 'left',
          target: this.props.which + '-view',
          isOpen: this.props.mode === 'LIST' && this.props.isOtherDragging && !this.props.isOtherDraggingSelected && this.props.isOtherDraggingCopy,
          dangerouslySetInnerHTML: { __html: __('copy_drop_hint') }
        }),
        _react2.default.createElement(_reactstrap.Tooltip, {
          placement: this.props.breakpoint === 'xs' ? 'top' : this.props.which === 'LEFT' ? 'right' : 'left',
          target: this.props.which + '-view',
          isOpen: this.props.mode === 'LIST' && this.props.isOtherDragging && this.props.isOtherDraggingSelected && this.props.isOtherDraggingCopy,
          dangerouslySetInnerHTML: { __html: __('copy_drop_selected_hint') }
        }),
        _react2.default.createElement(_reactstrap.Tooltip, {
          placement: this.props.breakpoint === 'xs' ? 'top' : this.props.which === 'LEFT' ? 'right' : 'left',
          target: this.props.which + '-view',
          isOpen: this.props.mode === 'LIST' && this.props.isOtherDragging && !this.props.isOtherDraggingSelected && !this.props.isOtherDraggingCopy,
          dangerouslySetInnerHTML: { __html: __('move_drop_hint') }
        }),
        _react2.default.createElement(_reactstrap.Tooltip, {
          placement: this.props.breakpoint === 'xs' ? 'top' : this.props.which === 'LEFT' ? 'right' : 'left',
          target: this.props.which + '-view',
          isOpen: this.props.mode === 'LIST' && this.props.isOtherDragging && this.props.isOtherDraggingSelected && !this.props.isOtherDraggingCopy,
          dangerouslySetInnerHTML: { __html: __('move_drop_selected_hint') }
        }),
        _react2.default.createElement(_reactstrap.Tooltip, {
          placement: this.props.breakpoint === 'xs' ? 'top' : this.props.which === 'LEFT' ? 'right' : 'left',
          target: this.props.which + '-view',
          isOpen: this.props.mode !== 'LIST' && this.props.isOtherDragging,
          dangerouslySetInnerHTML: { __html: __('switch_to_list_hint') }
        })
      );
    }

    return this.props.connectDropTarget(_react2.default.createElement(
      'div',
      { className: 'pane', onClick: this.props.onPaneClick },
      view
    ));
  }
}) || _class);
Pane.propTypes = {
  which: _propTypes2.default.string.isRequired,
  breakpoint: _propTypes2.default.string.isRequired,
  mode: _propTypes2.default.string.isRequired,
  otherPath: _propTypes2.default.string.isRequired,
  shares: _propTypes2.default.instanceOf(_immutable.List).isRequired,
  share: _propTypes2.default.string.isRequired,
  directory: _propTypes2.default.string.isRequired,
  list: _propTypes2.default.instanceOf(_immutable.List).isRequired,
  sizes: _propTypes2.default.instanceOf(_immutable.Map).isRequired,
  selectedIndexes: _propTypes2.default.instanceOf(_immutable.List).isRequired,
  sortField: _propTypes2.default.string.isRequired,
  sortDir: _propTypes2.default.string.isRequired,
  content: _propTypes2.default.instanceOf(_immutable.Map),
  info: _propTypes2.default.instanceOf(_immutable.Map),
  connectDropTarget: _propTypes2.default.func,
  isActive: _propTypes2.default.bool.isRequired,
  isDisabled: _propTypes2.default.bool.isRequired,
  isLoading: _propTypes2.default.bool.isRequired,
  isForbidden: _propTypes2.default.bool.isRequired,
  isOtherVisible: _propTypes2.default.bool.isRequired,
  isDraggingNode: _propTypes2.default.bool,
  isDraggedOver: _propTypes2.default.bool,
  isOtherDragging: _propTypes2.default.bool.isRequired,
  isOtherDraggingSelected: _propTypes2.default.bool.isRequired,
  isOtherDraggingCopy: _propTypes2.default.bool.isRequired,
  onPaneClick: _propTypes2.default.func.isRequired,
  onSetShare: _propTypes2.default.func.isRequired,
  onSetSort: _propTypes2.default.func.isRequired,
  onChangeDirectory: _propTypes2.default.func.isRequired,
  onNodeClick: _propTypes2.default.func.isRequired,
  onNodeShiftClick: _propTypes2.default.func.isRequired,
  onNodeControlClick: _propTypes2.default.func.isRequired,
  onSizeClick: _propTypes2.default.func.isRequired,
  onToggleOther: _propTypes2.default.func.isRequired,
  onSetMode: _propTypes2.default.func.isRequired,
  onCopyClick: _propTypes2.default.func.isRequired,
  onMoveClick: _propTypes2.default.func.isRequired,
  onDeleteClick: _propTypes2.default.func.isRequired,
  onDrag: _propTypes2.default.func.isRequired,
  onDrop: _propTypes2.default.func.isRequired
};
Pane.defaultProps = {
  content: (0, _immutable.Map)({}),
  info: (0, _immutable.Map)({}),
  connectDropTarget: arg => arg,
  isDraggingNode: false,
  isDraggedOver: false
};
exports.default = Pane;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(29);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactstrap = __webpack_require__(4);

var _SafeTooltip = __webpack_require__(90);

var _SafeTooltip2 = _interopRequireDefault(_SafeTooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let HintedButton = class HintedButton extends _react2.default.PureComponent {
  constructor(props) {
    super(props);

    this.state = { button: null };
  }

  componentDidMount() {
    this.setState({ button: _reactDom2.default.findDOMNode(this) });
  }

  componentWillUnmount() {
    this.setState({ button: null });
  }

  render() {
    return _react2.default.createElement(
      _reactstrap.Button,
      {
        size: this.props.size,
        color: this.props.color,
        onClick: this.props.onClick
      },
      this.props.children,
      this.state.button && _react2.default.createElement(_SafeTooltip2.default, {
        target: () => this.state.button,
        placement: this.props.tooltipPlacement,
        isOpen: this.props.tooltipIsOpen,
        toggle: this.props.tooltipToggle,
        dangerouslySetInnerHTML: { __html: this.props.tooltipHTML }
      })
    );
  }
};
exports.default = HintedButton;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.human = human;
function human(bytes) {
  let size = bytes;
  let suffix = 'B';
  let units = ['KB', 'MB', 'GB', 'TB'];
  let min = 1;
  for (let i = 0; i < units.length; i++) {
    min *= 1024;
    if (bytes >= min) {
      size = bytes / min;
      suffix = units[i];
    } else {
      break;
    }
  }

  return `${Math.round(100 * size) / 100} ${suffix}`;
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Pane node

Object.defineProperty(exports, "__esModule", {
  value: true
});
const NODE = exports.NODE = 'NODE';

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(39);
module.exports = __webpack_require__(40);


/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(41);

var _reactRedux = __webpack_require__(5);

var _createMemoryHistory = __webpack_require__(42);

var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

var _reactRouterRedux = __webpack_require__(14);

var _path = __webpack_require__(15);

var _storeFactory = __webpack_require__(43);

var _storeFactory2 = _interopRequireDefault(_storeFactory);

var _App = __webpack_require__(57);

var _App2 = _interopRequireDefault(_App);

var _app = __webpack_require__(31);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports.matchLocation = _path.matchLocation;
module.exports.render = async function (params) {
  const history = (0, _createMemoryHistory2.default)();
  const store = (0, _storeFactory2.default)(history);

  history.push(params.url);
  if (params.isAuthorized) await store.dispatch((0, _app.setServerState)(params));

  let html = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterRedux.ConnectedRouter,
      { history: history },
      _react2.default.createElement(_App2.default, null)
    )
  ));

  let state = store.getState();

  return { html, state };
};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("history/createMemoryHistory");

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(44);

var _immutable = __webpack_require__(1);

var _reduxImmutable = __webpack_require__(45);

var _reduxThunk = __webpack_require__(46);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reactRouterRedux = __webpack_require__(14);

var _app = __webpack_require__(47);

var _app2 = _interopRequireDefault(_app);

var _router = __webpack_require__(48);

var _router2 = _interopRequireDefault(_router);

var _user = __webpack_require__(49);

var _user2 = _interopRequireDefault(_user);

var _navbar = __webpack_require__(50);

var _navbar2 = _interopRequireDefault(_navbar);

var _progress = __webpack_require__(51);

var _progress2 = _interopRequireDefault(_progress);

var _drag = __webpack_require__(52);

var _drag2 = _interopRequireDefault(_drag);

var _dialogFactory = __webpack_require__(53);

var _dialogFactory2 = _interopRequireDefault(_dialogFactory);

var _failureDialog = __webpack_require__(54);

var _failureDialog2 = _interopRequireDefault(_failureDialog);

var _paneFactory = __webpack_require__(55);

var _paneFactory2 = _interopRequireDefault(_paneFactory);

var _infoListFactory = __webpack_require__(56);

var _infoListFactory2 = _interopRequireDefault(_infoListFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const storeFactory = (history, initialState) => (0, _redux.applyMiddleware)(_reduxThunk2.default, (0, _reactRouterRedux.routerMiddleware)(history))(_redux.createStore)((0, _reduxImmutable.combineReducers)({
  app: _app2.default,
  router: _router2.default,
  user: _user2.default,
  navbar: _navbar2.default,
  progress: _progress2.default,
  failureDialog: _failureDialog2.default,
  drag: _drag2.default,
  signInDialog: (0, _dialogFactory2.default)('SIGN_IN'),
  mkdirDialog: (0, _dialogFactory2.default)('MKDIR'),
  renameDialog: (0, _dialogFactory2.default)('RENAME'),
  copyDialog: (0, _dialogFactory2.default)('COPY'),
  moveDialog: (0, _dialogFactory2.default)('MOVE'),
  deleteDialog: (0, _dialogFactory2.default)('DELETE'),
  leftPane: (0, _paneFactory2.default)('LEFT'),
  rightPane: (0, _paneFactory2.default)('RIGHT'),
  lists: (0, _infoListFactory2.default)('LIST'),
  contents: (0, _infoListFactory2.default)('CONTENT'),
  infos: (0, _infoListFactory2.default)('INFO'),
  sizes: (0, _infoListFactory2.default)('SIZE')
}), initialState && (0, _immutable.fromJS)(initialState));

exports.default = storeFactory;

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("redux-immutable");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = __webpack_require__(2);

var actions = _interopRequireWildcard(_actionTypes);

var _immutable = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const app = (state = (0, _immutable.Map)({
  ioTimestamp: 0,
  csrf: '',
  breakpoint: '',
  prevBreakpoint: '',
  isStarted: false,
  isConnected: false,
  isSameVersion: true
}), action) => {
  switch (action.type) {
    case actions.START_APP:
      if (state.get('isStarted')) return state;

      return state.set('isStarted', true);
    case actions.CONNECT_APP:
      return state.withMutations(map => {
        map.set('isConnected', true).set('ioTimestamp', action.when);
      });
    case actions.DISCONNECT_APP:
      return state.withMutations(map => {
        map.set('isConnected', false).set('ioTimestamp', action.when);
      });
    case actions.APP_VERSION:
      return state.set('isSameVersion', action.isSameVersion);
    case actions.SCREEN_RESIZE:
      if (state.get('breakpoint') === action.breakpoint) return state;

      return state.withMutations(map => {
        map.set('prevBreakpoint', state.get('breakpoint') || action.breakpoint).set('breakpoint', action.breakpoint);
      });
    case actions.SET_CSRF_TOKEN:
      if (state.get('csrf') === action.token) return state;

      return state.set('csrf', action.token);
  }

  return state;
};

exports.default = app;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = __webpack_require__(1);

var _reactRouterRedux = __webpack_require__(14);

const router = (...args) => (0, _immutable.fromJS)((0, _reactRouterRedux.routerReducer)(...args));

exports.default = router;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = __webpack_require__(2);

var actions = _interopRequireWildcard(_actionTypes);

var _immutable = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const user = (state = (0, _immutable.fromJS)({
  isAuthorized: false,
  login: 'anonymous',
  locale: 'en',
  shares: []
}), action) => {
  switch (action.type) {
    case actions.SET_USER:
      return state.withMutations(map => {
        map.set('isAuthorized', action.isAuthorized || false).set('login', action.login || 'anonymous').set('locale', action.locale || state.get('locale')).set('shares', (0, _immutable.fromJS)(action.shares || []));
      });
  }

  return state;
};

exports.default = user;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = __webpack_require__(2);

var actions = _interopRequireWildcard(_actionTypes);

var _immutable = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const navbar = (state = (0, _immutable.Map)({
  isOpen: false
}), action) => {
  switch (action.type) {
    case actions.OPEN_NAVBAR:
      if (state.get('isOpen')) return state;

      return state.set('isOpen', true);
    case actions.CLOSE_NAVBAR:
      if (!state.get('isOpen')) return state;

      return state.set('isOpen', false);
    case actions.TOGGLE_NAVBAR:
      return state.set('isOpen', !state.get('isOpen'));
  }

  return state;
};

exports.default = navbar;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = __webpack_require__(2);

var actions = _interopRequireWildcard(_actionTypes);

var _immutable = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const progress = (state = (0, _immutable.fromJS)({
  isStarted: false,
  isFinished: false,
  message: ''
}), action) => {
  switch (action.type) {
    case actions.START_PROGRESS:
      return state.withMutations(map => {
        map.set('isStarted', true).set('isFinished', false).set('message', action.message);
      });
    case actions.UPDATE_PROGRESS:
      if (!action.get('message')) return state;

      return state.withMutations(map => {
        map.set('isStarted', true).set('isFinished', false).set('message', state.get('message') + action.message);
      });
    case actions.FINISH_PROGRESS:
      return state.withMutations(map => {
        map.set('isStarted', true).set('isFinished', true).set('message', state.get('message') + action.message || '');
      });
    case actions.CLEAR_PROGRESS:
      if (!state.get('isStarted')) return state;

      return state.withMutations(map => {
        map.set('isStarted', false).set('isFinished', false).set('message', '');
      });
  }

  return state;
};

exports.default = progress;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = __webpack_require__(2);

var actions = _interopRequireWildcard(_actionTypes);

var _immutable = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const drag = (state = (0, _immutable.fromJS)({
  left: {
    isDragging: false,
    isSelected: false,
    dragMode: 'COPY'
  },
  right: {
    isDragging: false,
    isSelected: false,
    dragMode: 'COPY'
  }
}), action) => {
  switch (action.type) {
    case actions.UPDATE_DRAG_STATE:
      if (state.getIn([action.pane.toLowerCase(), 'isDragging']) === action.isDragging) return state;

      return state.withMutations(map => {
        map.setIn([action.pane.toLowerCase(), 'isDragging'], action.isDragging).setIn([action.pane.toLowerCase(), 'isSelected'], action.isSelected);
      });
    case actions.UPDATE_DRAG_MODE:
      if (state.getIn(['left', 'isDragging']) && ['left', 'dragMode'] !== action.mode) return state.setIn(['left', 'dragMode'], action.mode);
      if (state.getIn(['right', 'isDragging']) && ['right', 'dragMode'] !== action.mode) return state.setIn(['right', 'dragMode'], action.mode);
      break;
  }

  return state;
};

exports.default = drag;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = __webpack_require__(2);

var actions = _interopRequireWildcard(_actionTypes);

var _immutable = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const dialogFactory = type => {
  let initialValues;
  let lockAction;
  let unlockAction;
  let showAction;
  let hideAction;
  let resetAction;
  let submitAction;
  let updateAction;
  let startFindAction;
  let stopFindAction;

  switch (type) {
    case 'COPY':
      initialValues = {
        srcShare: '',
        srcDirectory: '',
        srcName: '',
        dstShare: '',
        dstDirectory: ''
      };
      lockAction = actions.LOCK_COPY_DIALOG;
      unlockAction = actions.UNLOCK_COPY_DIALOG;
      showAction = actions.SHOW_COPY_DIALOG;
      hideAction = actions.HIDE_COPY_DIALOG;
      resetAction = actions.RESET_COPY_DIALOG;
      submitAction = actions.SUBMIT_COPY_DIALOG;
      updateAction = actions.UPDATE_COPY_DIALOG;
      startFindAction = actions.START_COPY_DIALOG_FIND;
      stopFindAction = actions.STOP_COPY_DIALOG_FIND;
      break;
    case 'MOVE':
      initialValues = {
        srcShare: '',
        srcDirectory: '',
        srcName: '',
        dstShare: '',
        dstDirectory: ''
      };
      lockAction = actions.LOCK_MOVE_DIALOG;
      unlockAction = actions.UNLOCK_MOVE_DIALOG;
      showAction = actions.SHOW_MOVE_DIALOG;
      hideAction = actions.HIDE_MOVE_DIALOG;
      resetAction = actions.RESET_MOVE_DIALOG;
      submitAction = actions.SUBMIT_MOVE_DIALOG;
      updateAction = actions.UPDATE_MOVE_DIALOG;
      startFindAction = actions.START_MOVE_DIALOG_FIND;
      stopFindAction = actions.STOP_MOVE_DIALOG_FIND;
      break;
    case 'DELETE':
      initialValues = {
        share: '',
        directory: '',
        name: ''
      };
      lockAction = actions.LOCK_DELETE_DIALOG;
      unlockAction = actions.UNLOCK_DELETE_DIALOG;
      showAction = actions.SHOW_DELETE_DIALOG;
      hideAction = actions.HIDE_DELETE_DIALOG;
      resetAction = actions.RESET_DELETE_DIALOG;
      submitAction = actions.SUBMIT_DELETE_DIALOG;
      updateAction = actions.UPDATE_DELETE_DIALOG;
      startFindAction = actions.START_DELETE_DIALOG_FIND;
      stopFindAction = actions.STOP_DELETE_DIALOG_FIND;
      break;
    case 'MKDIR':
      initialValues = {
        share: '',
        directory: '',
        name: ''
      };
      lockAction = actions.LOCK_MKDIR_DIALOG;
      unlockAction = actions.UNLOCK_MKDIR_DIALOG;
      showAction = actions.SHOW_MKDIR_DIALOG;
      hideAction = actions.HIDE_MKDIR_DIALOG;
      resetAction = actions.RESET_MKDIR_DIALOG;
      submitAction = actions.SUBMIT_MKDIR_DIALOG;
      updateAction = actions.UPDATE_MKDIR_DIALOG;
      startFindAction = actions.UNUSED;
      stopFindAction = actions.UNUSED;
      break;
    case 'RENAME':
      initialValues = {
        share: '',
        directory: '',
        name: '',
        newName: ''
      };
      lockAction = actions.LOCK_RENAME_DIALOG;
      unlockAction = actions.UNLOCK_RENAME_DIALOG;
      showAction = actions.SHOW_RENAME_DIALOG;
      hideAction = actions.HIDE_RENAME_DIALOG;
      resetAction = actions.RESET_RENAME_DIALOG;
      submitAction = actions.SUBMIT_RENAME_DIALOG;
      updateAction = actions.UPDATE_RENAME_DIALOG;
      startFindAction = actions.UNUSED;
      stopFindAction = actions.UNUSED;
      break;
    case 'SIGN_IN':
      initialValues = {
        login: '',
        password: ''
      };
      lockAction = actions.LOCK_SIGN_IN_DIALOG;
      unlockAction = actions.UNLOCK_SIGN_IN_DIALOG;
      showAction = actions.SHOW_SIGN_IN_DIALOG;
      hideAction = actions.HIDE_SIGN_IN_DIALOG;
      resetAction = actions.RESET_SIGN_IN_DIALOG;
      submitAction = actions.SUBMIT_SIGN_IN_DIALOG;
      updateAction = actions.UPDATE_SIGN_IN_DIALOG;
      startFindAction = actions.UNUSED;
      stopFindAction = actions.UNUSED;
      break;
    default:
      throw new Error('Unknown dialog type');
  }

  return (state = (0, _immutable.fromJS)({
    submittedAt: 0,
    isOpen: false,
    locked: 0,
    values: initialValues,
    messages: {},
    errors: {},
    found: {
      isLoading: false,
      isLoaded: false,
      nodes: []
    }
  }), action) => {
    switch (action.type) {
      case lockAction:
        return state.set('locked', state.get('locked') + 1);
      case unlockAction:
        if (state.get('locked') === 0) return state;

        return state.set('locked', state.get('locked') - 1);
      case showAction:
        if (state.get('isOpen')) return state;

        return state.set('isOpen', true);
      case hideAction:
        if (!state.get('isOpen')) return state;

        return state.set('isOpen', false);
      case resetAction:
        return state.withMutations(map => {
          map.set('errors', (0, _immutable.Map)({})).set('messages', (0, _immutable.Map)({})).setIn(['found', 'isLoading'], false).setIn(['found', 'isLoaded'], false).setIn(['found', 'nodes'], (0, _immutable.List)([]));

          if (action.values) map.set('values', (0, _immutable.fromJS)(action.values));
        });
      case submitAction:
        if (action.submittedAt <= state.get('submittedAt')) return state;

        return state.set('submittedAt', action.submittedAt);
      case updateAction:
        if (action.submittedAt < state.get('submittedAt')) return state;

        return state.withMutations(map => {
          map.set('submittedAt', action.submittedAt);
          if (action.data.values) {
            map.set('values', map.get('values').merge((0, _immutable.fromJS)(action.data.values)));
          }
          if (action.data.errors) {
            map.set('errors', map.get('errors').merge((0, _immutable.fromJS)(action.data.errors)).filter(value => value.size));
          }
          if (action.data.messages) {
            map.set('messages', (0, _immutable.fromJS)(action.data.messages).filter(value => value.size));
          }
        });
      case startFindAction:
        return state.withMutations(map => {
          map.setIn(['found', 'isLoading'], true).setIn(['found', 'isLoaded'], false).setIn(['found', 'nodes'], (0, _immutable.List)([]));
        });
      case stopFindAction:
        return state.withMutations(map => {
          map.setIn(['found', 'isLoading'], !action.nodes).setIn(['found', 'isLoaded'], !!action.nodes).setIn(['found', 'nodes'], (0, _immutable.fromJS)(action.nodes || []));
        });
    }

    return state;
  };
};

exports.default = dialogFactory;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = __webpack_require__(2);

var actions = _interopRequireWildcard(_actionTypes);

var _immutable = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const failureDialog = (state = (0, _immutable.fromJS)({
  isOpen: false,
  messages: {},
  errors: {}
}), action) => {
  switch (action.type) {
    case actions.SHOW_FAILURE_DIALOG:
      return state.withMutations(map => {
        map.set('isOpen', true).set('messages', (0, _immutable.fromJS)(action.messages || {})).set('errors', (0, _immutable.fromJS)(action.errors || {}));
      });
    case actions.HIDE_FAILURE_DIALOG:
      return state.set('isOpen', false);
  }

  return state;
};

exports.default = failureDialog;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = __webpack_require__(2);

var actions = _interopRequireWildcard(_actionTypes);

var _immutable = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const paneFactory = which => {
  let activateAction;
  let deactivateAction;
  let showAction;
  let hideAction;
  let startLoadingAction;
  let stopLoadingAction;
  let modeAction;
  let shareAction;
  let pathAction;
  let listAction;
  let sortAction;
  let selectionAction;
  switch (which) {
    case 'LEFT':
      activateAction = actions.ACTIVATE_LEFT_PANE;
      deactivateAction = actions.DEACTIVATE_LEFT_PANE;
      showAction = actions.SHOW_LEFT_PANE;
      hideAction = actions.HIDE_LEFT_PANE;
      startLoadingAction = actions.START_LEFT_PANE_LOADING;
      stopLoadingAction = actions.STOP_LEFT_PANE_LOADING;
      modeAction = actions.SET_LEFT_PANE_MODE;
      shareAction = actions.SET_LEFT_PANE_SHARE;
      pathAction = actions.SET_LEFT_PANE_PATH;
      listAction = actions.SET_LEFT_PANE_LIST;
      sortAction = actions.SET_LEFT_PANE_SORT;
      selectionAction = actions.SET_LEFT_PANE_SELECTION;
      break;
    case 'RIGHT':
      activateAction = actions.ACTIVATE_RIGHT_PANE;
      deactivateAction = actions.DEACTIVATE_RIGHT_PANE;
      showAction = actions.SHOW_RIGHT_PANE;
      hideAction = actions.HIDE_RIGHT_PANE;
      startLoadingAction = actions.START_RIGHT_PANE_LOADING;
      stopLoadingAction = actions.STOP_RIGHT_PANE_LOADING;
      modeAction = actions.SET_RIGHT_PANE_MODE;
      shareAction = actions.SET_RIGHT_PANE_SHARE;
      pathAction = actions.SET_RIGHT_PANE_PATH;
      listAction = actions.SET_RIGHT_PANE_LIST;
      sortAction = actions.SET_RIGHT_PANE_SORT;
      selectionAction = actions.SET_RIGHT_PANE_SELECTION;
      break;
    default:
      throw new Error('No such pane');
  }

  return (state = (0, _immutable.fromJS)({
    timestamp: 0,
    mode: 'LIST',
    sortField: 'NAME',
    sortDir: 'ASC',
    share: '',
    path: '',
    directory: '',
    name: '',
    list: [],
    selectedIndexes: [],
    isActive: false,
    isVisible: true,
    isLoading: false,
    isForbidden: false
  }), action) => {
    switch (action.type) {
      case activateAction:
        if (state.get('isActive')) return state;

        return state.set('isActive', true);
      case deactivateAction:
        if (!state.get('isActive')) return state;

        return state.set('isActive', false);
      case showAction:
        if (state.get('isVisible')) return state;

        return state.set('isVisible', true);
      case hideAction:
        if (!state.get('isVisible')) return state;

        return state.set('isVisible', false);
      case startLoadingAction:
        return state.withMutations(map => {
          map.set('timestamp', action.timestamp).set('isLoading', true).set('isForbidden', false);
        });
      case stopLoadingAction:
        return state.withMutations(map => {
          map.set('timestamp', action.timestamp).set('isLoading', false).set('isForbidden', action.isForbidden || false);
        });
      case modeAction:
        if (state.get('mode') === action.mode) return state;

        return state.set('mode', action.mode);
      case shareAction:
        if (state.get('share') === action.share) return state;

        return state.set('share', action.share);
      case pathAction:
        if (state.get('path') === action.path && state.get('directory') === action.directory && state.get('name') === action.name) return state;

        return state.withMutations(map => {
          map.set('path', action.path).set('directory', action.directory).set('name', action.name);
        });
      case listAction:
        if (state.get('list').equals(action.list)) return state;

        return state.withMutations(map => {
          map.set('list', (0, _immutable.fromJS)(action.list)).set('selectedIndexes', (0, _immutable.List)(action.selectedIndexes || []).sort());
        });
      case sortAction:
        if (state.get('sortField') === action.field && state.get('sortDir') === action.dir) return state;

        return state.withMutations(map => {
          map.set('sortField', action.field).set('sortDir', action.dir);
        });
      case selectionAction:
        let selectedIndexes = (0, _immutable.List)(action.selectedIndexes).sort();
        if (state.get('selectedIndexes').equals(selectedIndexes)) return state;

        return state.set('selectedIndexes', selectedIndexes);
    }

    return state;
  };
};

exports.default = paneFactory;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = __webpack_require__(2);

var actions = _interopRequireWildcard(_actionTypes);

var _immutable = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const infoListFactory = type => {
  let setAction;
  let clearAction;
  switch (type) {
    case 'LIST':
      setAction = actions.SET_LIST;
      clearAction = actions.CLEAR_LIST;
      break;
    case 'CONTENT':
      setAction = actions.SET_CONTENT;
      clearAction = actions.CLEAR_CONTENT;
      break;
    case 'INFO':
      setAction = actions.SET_INFO;
      clearAction = actions.CLEAR_INFO;
      break;
    case 'SIZE':
      setAction = actions.SET_SIZE;
      clearAction = actions.CLEAR_SIZE;
      break;
    default:
      throw new Error('Unknown list type');
  }

  return (state = (0, _immutable.Map)({}), action) => {
    switch (action.type) {
      case setAction:
        return state.set(action.id, (0, _immutable.fromJS)(action[type.toLowerCase()]));
      case clearAction:
        return state.filter((value, key) => action.keep.includes(key));
    }

    return state;
  };
};

exports.default = infoListFactory;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(5);

var _drag = __webpack_require__(18);

var _Screen = __webpack_require__(58);

var _Screen2 = _interopRequireDefault(_Screen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mapStateToProps = state => {
  return {
    isConnected: state.getIn(['app', 'isConnected']) && state.getIn(['app', 'isSameVersion']),
    isLeftPaneVisible: state.getIn(['leftPane', 'isVisible']),
    isRightPaneVisible: state.getIn(['rightPane', 'isVisible'])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetDragMode: mode => dispatch((0, _drag.updateDragMode)(mode))
  };
};

const App = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Screen2.default);

exports.default = App;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDnd = __webpack_require__(25);

var _reactDndHtml5Backend = __webpack_require__(59);

var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);

var _reactTransitionGroup = __webpack_require__(16);

var _fa = __webpack_require__(6);

var _Fade = __webpack_require__(26);

var _Fade2 = _interopRequireDefault(_Fade);

var _Navbar = __webpack_require__(61);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _SignInDialog = __webpack_require__(70);

var _SignInDialog2 = _interopRequireDefault(_SignInDialog);

var _ProgressDialog = __webpack_require__(72);

var _ProgressDialog2 = _interopRequireDefault(_ProgressDialog);

var _MkdirDialog = __webpack_require__(74);

var _MkdirDialog2 = _interopRequireDefault(_MkdirDialog);

var _RenameDialog = __webpack_require__(76);

var _RenameDialog2 = _interopRequireDefault(_RenameDialog);

var _CopyDialog = __webpack_require__(78);

var _CopyDialog2 = _interopRequireDefault(_CopyDialog);

var _MoveDialog = __webpack_require__(80);

var _MoveDialog2 = _interopRequireDefault(_MoveDialog);

var _DeleteDialog = __webpack_require__(82);

var _DeleteDialog2 = _interopRequireDefault(_DeleteDialog);

var _FailureDialog = __webpack_require__(84);

var _FailureDialog2 = _interopRequireDefault(_FailureDialog);

var _LeftPane = __webpack_require__(86);

var _LeftPane2 = _interopRequireDefault(_LeftPane);

var _RightPane = __webpack_require__(98);

var _RightPane2 = _interopRequireDefault(_RightPane);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Screen = (_dec = (0, _reactDnd.DragDropContext)(_reactDndHtml5Backend2.default), _dec(_class = class Screen extends _react2.default.Component {

  constructor(props) {
    super(props);

    this.handleDrag = this.handleDrag.bind(this);
  }

  handleDrag(event) {
    this.props.onSetDragMode(event.ctrlKey ? 'MOVE' : 'COPY');
  }

  componentDidCatch(error) {
    console.error(error);
  }

  render() {
    let overlay = null;
    if (!this.props.isConnected) {
      overlay = _react2.default.createElement(
        'div',
        { className: 'page-overlay shaded' },
        _react2.default.createElement(
          'div',
          { className: 'no-connection-window rounded' },
          _react2.default.createElement(_fa.FaCog, { className: 'rotating icon-text' }),
          '\xA0',
          __('not_connected_message')
        )
      );
    }

    return _react2.default.createElement(
      'div',
      { className: 'w-100 h-100', onDrag: this.handleDrag },
      overlay,
      _react2.default.createElement(
        'div',
        { className: 'w-100 h-100 d-flex flex-column' },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_Navbar2.default, null),
          _react2.default.createElement(_SignInDialog2.default, null),
          _react2.default.createElement(_ProgressDialog2.default, null),
          _react2.default.createElement(_MkdirDialog2.default, null),
          _react2.default.createElement(_RenameDialog2.default, null),
          _react2.default.createElement(_CopyDialog2.default, null),
          _react2.default.createElement(_MoveDialog2.default, null),
          _react2.default.createElement(_DeleteDialog2.default, null),
          _react2.default.createElement(_FailureDialog2.default, null)
        ),
        _react2.default.createElement(
          _reactTransitionGroup.TransitionGroup,
          { className: 'pane-container' },
          this.props.isLeftPaneVisible ? _react2.default.createElement(
            _Fade2.default,
            null,
            _react2.default.createElement(_LeftPane2.default, null)
          ) : null,
          this.props.isRightPaneVisible ? _react2.default.createElement(
            _Fade2.default,
            null,
            _react2.default.createElement(_RightPane2.default, null)
          ) : null
        )
      )
    );
  }
}) || _class);
Screen.propTypes = {
  isConnected: _propTypes2.default.bool.isRequired,
  isLeftPaneVisible: _propTypes2.default.bool.isRequired,
  isRightPaneVisible: _propTypes2.default.bool.isRequired,
  onSetDragMode: _propTypes2.default.func.isRequired
};
exports.default = Screen;

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("react-dnd-html5-backend");

/***/ }),
/* 60 */
/***/ (function(module, exports) {



/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(5);

var _navbar = __webpack_require__(19);

var _signInDialog = __webpack_require__(27);

var _mkdirDialog = __webpack_require__(20);

var _renameDialog = __webpack_require__(21);

var _copyDialog = __webpack_require__(22);

var _moveDialog = __webpack_require__(23);

var _deleteDialog = __webpack_require__(24);

var _user = __webpack_require__(8);

var _TopNavbar = __webpack_require__(69);

var _TopNavbar2 = _interopRequireDefault(_TopNavbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mapStateToProps = state => {
  return {
    isOpen: state.getIn(['navbar', 'isOpen']),
    breakpoint: state.getIn(['app', 'breakpoint']),
    isLoggedIn: state.getIn(['user', 'isAuthorized']),
    login: state.getIn(['user', 'login']),
    hasSelection: state.getIn(['leftPane', 'isActive']) && !!state.getIn(['leftPane', 'name']) || state.getIn(['rightPane', 'isActive']) && !!state.getIn(['rightPane', 'name'])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggleNavbar: () => dispatch((0, _navbar.toggleNavbar)()),
    onMkdirCommand: () => dispatch((0, _mkdirDialog.toggleMkdirDialog)()),
    onRenameCommand: () => dispatch((0, _renameDialog.toggleRenameDialog)()),
    onCopyCommand: () => dispatch((0, _copyDialog.toggleCopyDialog)()),
    onMoveCommand: () => dispatch((0, _moveDialog.toggleMoveDialog)()),
    onDeleteCommand: () => dispatch((0, _deleteDialog.toggleDeleteDialog)()),
    onSignIn: () => dispatch((0, _signInDialog.toggleSignInDialog)()),
    onSignOut: () => dispatch((0, _user.signOut)())
  };
};

const Navbar = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_TopNavbar2.default);

exports.default = Navbar;

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = {"name":"webfm","version":"0.9.33","description":"Two pane file manager for the Web","keywords":["file manager","two pane","node","react","redux","sails"],"license":"MIT","author":"Ross Basarevych <basarevych@gmail.com>","repository":{"type":"git","url":"git+https://github.com/basarevych/webfm.git"},"dependencies":{"babel-core":"~6.26.0","babel-plugin-transform-class-properties":"~6.24.1","babel-plugin-transform-decorators-legacy":"~1.3.4","babel-plugin-transform-object-rest-spread":"~6.26.0","babel-polyfill":"~6.26.0","babel-preset-env":"~1.6.1","babel-preset-react":"~6.24.1","async":"~2.6.0","autoprefixer":"~8.0.0","babel-loader":"~7.1.2","bootstrap":"~4.0.0","bootstrap-loader":"~2.2.0","breakpoints-js":"~1.0.5","clean-webpack-plugin":"~0.1.18","connect-redis":"~3.3.3","css-loader":"~0.28.9","cssnano":"~3.10.0","exports-loader":"~0.7.0","extract-text-webpack-plugin":"~3.0.2","file-loader":"~1.1.9","grunt":"~1.0.2","history":"~4.7.2","i18n-for-browser":"~0.9.7","ignore-loader":"~0.1.2","immutable":"~3.8.2","imports-loader":"~0.8.0","ini":"~1.3.5","isomorphic-fetch":"~2.2.1","lodash":"~4.17.5","moment-timezone":"~0.5.14","node-sass":"~4.7.2","optimize-css-assets-webpack-plugin":"~3.2.0","popper.js":"~1.12.9","postcss-loader":"~2.1.0","prop-types":"~15.6.0","raf":"~3.4.0","react":"~16.2.0","react-dnd":"~2.5.4","react-dnd-html5-backend":"~2.5.4","react-dom":"~16.2.0","react-icons":"~2.2.7","react-list":"~0.8.8","react-redux":"~5.0.7","react-router":"~4.2.0","react-router-redux":"^5.0.0-alpha.9","react-scroll-box":"~0.3.5","react-transition-group":"~2.2.1","reactstrap":"^5.0.0-beta","redux":"~3.7.2","redux-immutable":"~4.0.0","redux-thunk":"~2.2.0","resolve-url-loader":"~2.2.1","sails":"^1.0.0-46","sails-hook-grunt":"~3.1.0","sails-hook-orm":"^2.0.0-23","sails-hook-panic-mode":"~0.1.3","sails-hook-sockets":"~1.4.0","sails.io.js":"~1.1.13","sass-loader":"~6.0.6","socket.io-client":"2.0.3","socket.io-redis":"~4.0.1","stat-mode":"~0.2.2","style-loader":"~0.20.2","uglifyjs-webpack-plugin":"~1.2.0","url-loader":"~0.6.2","userid":"~0.3.1","webpack":"~3.11.0","webpack-config-utils":"~2.3.0","webpack-node-externals":"~1.6.0"},"devDependencies":{"babel-eslint":"~8.2.2","eslint":"~4.18.1"},"scripts":{"build":"env NODE_ENV=production ./node_modules/.bin/webpack --progress","start":"env NODE_ENV=production node app.js","build:dev":"env NODE_ENV=development ./node_modules/.bin/webpack --watch --progress","start:dev":"env NODE_ENV=development ./node_modules/.bin/sails lift","lint":"node ./node_modules/eslint/bin/eslint . --max-warnings=0","debug":"node debug app.js"},"main":"app.js","engines":{"node":">=8.0.0"}}

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _i18n = __webpack_require__(64);

var _i18n2 = _interopRequireDefault(_i18n);

var _en = __webpack_require__(65);

var _en2 = _interopRequireDefault(_en);

var _i18nForBrowser = __webpack_require__(66);

var i18n = _interopRequireWildcard(_i18nForBrowser);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

i18n.configure({
  locales: {
    'en': _en2.default
  },
  defaultLocale: _i18n2.default.i18n.defaultLocale,
  globalize: true
});

exports.default = i18n;

/***/ }),
/* 64 */
/***/ (function(module, exports) {

/**
 * Internationalization / Localization Settings
 * (sails.config.i18n)
 *
 * If your app will touch people from all over the world, i18n (or internationalization)
 * may be an important part of your international strategy.
 *
 * For a complete list of options for Sails' built-in i18n support, see:
 * https://sailsjs.com/config/i-18-n
 *
 * For more info on i18n in Sails in general, check out:
 * https://sailsjs.com/docs/concepts/internationalization
 */

module.exports.i18n = {

  /***************************************************************************
  *                                                                          *
  * Which locales are supported?                                             *
  *                                                                          *
  ***************************************************************************/

  locales: ['en'],

  /****************************************************************************
  *                                                                           *
  * What is the default locale for the site? Note that this setting will be   *
  * overridden for any request that sends an "Accept-Language" header (i.e.   *
  * most browsers), but it's still useful if you need to localize the         *
  * response for requests made by non-browser clients (e.g. cURL).            *
  *                                                                           *
  ****************************************************************************/

  defaultLocale: 'en',

  /****************************************************************************
  *                                                                           *
  * Path (relative to app root) of directory to store locale (translation)    *
  * files in.                                                                 *
  *                                                                           *
  ****************************************************************************/

  localesDirectory: 'config/locales'

};


/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = {"project_title":"WebFM","not_connected_message":"Establishing connection...","not_authorized_message":"Not signed in","forbidden_message":"No access or not found","contents_view_message":"Contents view","type_DIR_message":"This is a directory","type_SYMLINK_message":"This is a symbolic link to outside of the share","type_BINARY_message":"This is a binary data file","info_view_message":"Info view","empty_message":"Empty...","select_share_label":"Select...","read_only_label":"[read]","read_write_label":"[write]","two_dots_label":"Go up one level","info_name_label":"Name:","info_parent_label":"Parent:","info_size_bytes_label":"Size (bytes):","info_size_human_label":"Size (Human):","info_du_bytes_label":"Disk usage (bytes):","info_du_human_label":"Disk usage (Human):","info_mode_number_label":"Mode (octal):","info_mode_string_label":"Mode (string):","info_user_id_label":"Owner (ID):","info_user_name_label":"Owner (name):","info_group_id_label":"Group (ID):","info_group_name_label":"Group (name):","info_atime_label":"atime:","info_mtime_label":"mtime:","info_ctime_label":"ctime:","mkdir_command":"MkDir","rename_command":"Rename","copy_command":"Copy","move_command":"Move","delete_command":"Delete","sign_in_button":"Sign in","sign_out_button":"Sign out","cancel_button":"Cancel","submit_button":"Submit","done_button":"Done","required_field":"Required field","sign_in_title":"Sign In","login_label":"Login:","password_label":"Password:","invalid_credentials_message":"Wrong login or password","no_shares_message":"You have no shares defined in the config","user.login.E_REQUIRED":"Login is required","user.password.E_REQUIRED":"Password is required","mkdir_title":"Create directory","share_label":"Share:","directory_label":"Parent directory:","name_label":"Name:","mkdir.share.E_NOT_FOUND":"Share not found","mkdir.share.E_READ_ONLY":"No write access to this share","mkdir.directory.E_NOT_DIR":"This is not a directory","mkdir.directory.E_OUTSIDE":"Parent directory is not inside the share","mkdir.name.E_REQUIRED":"Name is required","mkdir.name.E_INVALID":"Name is invalid","mkdir.name.E_EXISTS":"Target already exists","rename_title":"Rename","new_name_label":"New name:","rename.share.E_NOT_FOUND":"Share not found","rename.share.E_READ_ONLY":"No write access to this share","rename.directory.E_NOT_DIR":"This is not a directory","rename.directory.E_OUTSIDE":"Parent directory is not inside the share","rename.name.E_NOT_FOUND":"File not found","rename.newName.E_REQUIRED":"Name is required","rename.newName.E_SAME":"New name should differ from the original","rename.newName.E_INVALID":"Name is invalid","rename.newName.E_EXISTS":"Target already exists","copy_title":"Copy","copy_start_message":"Copying...","src_share_label":"Source share:","src_directory_label":"Source parent directory:","src_name_label":"Source name:","src_name_hint":"Use wildcard symbols like <strong>*</strong> or <strong>?</strong>","src_find_button":"Search","src_find_empty":"No files found","dst_share_label":"Destination share:","dst_directory_label":"Destination parent directory:","dst_name_label":"Destination name:","copy.srcShare.E_NOT_FOUND":"Share not found","copy.srcDirectory.E_NOT_DIR":"This is not a directory","copy.srcDirectory.E_OUTSIDE":"Source directory is not inside the share","copy.srcName.E_REQUIRED":"Name is required","copy.srcName.E_INVALID":"Name is invalid","copy.dstShare.E_NOT_FOUND":"Share not found","copy.dstShare.E_READ_ONLY":"No write access to this share","copy.dstDirectory.E_NOT_DIR":"This is not a directory","copy.dstDirectory.E_OUTSIDE":"Target directory is not inside the share","copy.dstDirectory.E_SAME":"Target directory should not be the same as source","copy.dstDirectory.E_RECURSIVE":"Cannot copy into itself","copy.result.ENOENT":"No files to copy","progress_title":"Progress","copy_success_message":"%s ==> %s","copy_failure_message":"Couldn't copy %s","move_success_message":"%s ==> %s","move_failure_message":"Couldn't move %s","delete_success_message":"Deleted %s","delete_failure_message":"Couldn't delete %s","done_message":"Done","move_title":"Move","move_start_message":"Moving...","move.srcShare.E_NOT_FOUND":"Share not found","move.srcShare.E_READ_ONLY":"No write access to this share","move.srcDirectory.E_NOT_DIR":"This is not a directory","move.srcDirectory.E_OUTSIDE":"Source directory is not inside the share","move.srcName.E_REQUIRED":"Name is required","move.srcName.E_INVALID":"Name is invalid","move.dstShare.E_NOT_FOUND":"Share not found","move.dstShare.E_READ_ONLY":"No write access to this share","move.dstDirectory.E_NOT_DIR":"This is not a directory","move.dstDirectory.E_OUTSIDE":"Target directory is not inside the share","move.dstDirectory.E_SAME":"Target directory should not be the same as source","move.dstDirectory.E_RECURSIVE":"Cannot move into itself","move.result.ENOENT":"No files to move","delete_title":"Copy","delete_start_message":"Deleting...","delete.share.E_NOT_FOUND":"Share not found","delete.share.E_READ_ONLY":"No write access to this share","delete.directory.E_NOT_DIR":"This is not a directory","delete.directory.E_OUTSIDE":"Source directory is not inside the share","delete.name.E_REQUIRED":"Name is required","delete.name.E_INVALID":"Name is invalid","delete.result.ENOENT":"No files to delete","failure_title":"Failure","field_share_label":"Share:","field_directory_label":"Directory:","field_name_label":"Name:","field_srcShare_label":"Source share:","field_srcDirectory_label":"Source directory:","field_srcName_label":"Source name:","field_dstShare_label":"Destination share:","field_dstDirectory_label":"Destination directory:","field_dstName_label":"Destination name:","sort_name_hint":"Sort by name<br>(toggle direction)","sort_size_hint":"Sort by size<br>(toggle direction)","mode_list_hint":"Display list of files","mode_contents_hint":"Display contents of the selected in the other pane file","mode_info_hint":"Display info of the selected in the other pane file","toggle_pane_hint":"Toggle visibility<br>of the other pane","size_button_hint":"Calculate size<br>of this item","copy_button_hint":"Copy this item<br>to the other pane","move_button_hint":"Move this item<br>to the other pane","delete_button_hint":"Delete this item","copy_drop_hint":"Copy item here","copy_drop_selected_hint":"Copy selected items here","move_drop_hint":"Move item here","move_drop_selected_hint":"Move selected items here","switch_to_list_hint":"Switch to list mode first"}

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("i18n-for-browser");

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadContent = exports.clearContents = exports.setContent = undefined;

var _actionTypes = __webpack_require__(2);

var actions = _interopRequireWildcard(_actionTypes);

var _user = __webpack_require__(8);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const setContent = exports.setContent = (id, content) => {
  return {
    type: actions.SET_CONTENT,
    id,
    content
  };
};

const clearContents = exports.clearContents = () => {
  return async (dispatch, getState) => {
    let state = getState();
    let contents = state.get('contents');
    let leftPane = state.get('leftPane');
    let rightPane = state.get('rightPane');
    let leftId;
    if (leftPane.get('share') && leftPane.get('path')) leftId = `${leftPane.get('share')}:${leftPane.get('path')}`;
    let rightId;
    if (rightPane.get('share') && rightPane.get('path')) rightId = `${rightPane.get('share')}:${rightPane.get('path')}`;

    if (contents.size === 0 || leftId && rightId && (leftId === rightId ? contents.size === 1 : contents.size === 2)) return;

    let keep = [];
    if (leftId) keep.push(leftId);
    if (rightId && rightId !== leftId) keep.push(rightId);

    await dispatch({
      type: actions.CLEAR_CONTENT,
      keep
    });
  };
};

const loadContent = exports.loadContent = pane => {
  return async (dispatch, getState) => {
    let state = getState();
    let app = state.get('app');
    let contents = state.get('contents');
    let leftPane = state.get('leftPane');
    let rightPane = state.get('rightPane');

    let id;
    let share;
    let path;
    if (pane === 'LEFT' && leftPane.get('share') && leftPane.get('name')) {
      share = leftPane.get('share');
      path = leftPane.get('path');
      id = `${share}:${path}`;
    } else if (pane === 'RIGHT' && rightPane.get('share') && rightPane.get('name')) {
      share = rightPane.get('share');
      path = rightPane.get('path');
      id = `${share}:${path}`;
    }

    if (!id || contents.has(id)) return;

    let params = {
      share,
      path,
      _csrf: app.get('csrf')
    };

    await dispatch(setContent(id, {
      isLoading: true,
      isForbidden: false
    }));

    return new Promise(resolve => {
      io.socket.get('/pane/content', params, async (data, response) => {
        if (response.statusCode === 200) {
          if (data.success) {
            await dispatch(setContent(id, {
              isLoading: false,
              isForbidden: false,
              type: data.type,
              mime: data.mime,
              base64: data.base64
            }));
          } else {
            await dispatch(setContent(id, {
              isLoading: false,
              isForbidden: true
            }));
          }
          await dispatch(clearContents());
        } else {
          await dispatch((0, _user.signOut)());
        }

        resolve();
      });
    });
  };
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadInfo = exports.clearInfos = exports.setInfo = undefined;

var _actionTypes = __webpack_require__(2);

var actions = _interopRequireWildcard(_actionTypes);

var _size = __webpack_require__(28);

var _user = __webpack_require__(8);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const setInfo = exports.setInfo = (id, info) => {
  return {
    type: actions.SET_INFO,
    id,
    info
  };
};

const clearInfos = exports.clearInfos = () => {
  return async (dispatch, getState) => {
    let state = getState();
    let infos = state.get('infos');
    let leftPane = state.get('leftPane');
    let rightPane = state.get('rightPane');

    let leftId;
    if (leftPane.get('share') && leftPane.get('name')) leftId = `${leftPane.get('share')}:${leftPane.get('path')}`;
    let rightId;
    if (rightPane.get('share') && rightPane.get('name')) rightId = `${rightPane.get('share')}:${rightPane.get('path')}`;

    if (infos.size === 0 || leftId && rightId && (leftId === rightId ? infos.size === 1 : infos.size === 2)) return;

    let keep = [];
    if (leftId) keep.push(leftId);
    if (rightId && rightId !== leftId) keep.push(rightId);

    await dispatch({
      type: actions.CLEAR_INFO,
      keep
    });
  };
};

const loadInfo = exports.loadInfo = pane => {
  return async (dispatch, getState) => {
    let state = getState();
    let app = state.get('app');
    let infos = state.get('infos');
    let leftPane = state.get('leftPane');
    let rightPane = state.get('rightPane');

    let id;
    let share;
    let path;
    if (pane === 'LEFT' && leftPane.get('share') && leftPane.get('name')) {
      share = leftPane.get('share');
      path = leftPane.get('path');
      id = `${share}:${path}`;
    } else if (pane === 'RIGHT' && rightPane.get('share') && rightPane.get('name')) {
      share = rightPane.get('share');
      path = rightPane.get('path');
      id = `${share}:${path}`;
    }

    if (!id || infos.has(id)) return;

    let params = {
      share,
      path,
      _csrf: app.get('csrf')
    };

    await dispatch(setInfo(id, {
      isLoading: true,
      isForbidden: false
    }));
    await dispatch((0, _size.setSize)(id, {
      isLoading: true,
      isForbidden: false
    }));

    return new Promise(resolve => {
      io.socket.get('/pane/info', params, async (data, response) => {
        if (response.statusCode === 200) {
          if (data.success) {
            await dispatch(setInfo(id, {
              isLoading: false,
              isForbidden: false,
              name: data.name,
              parent: data.parent,
              size: data.size,
              du: data.du,
              modeNumber: data.modeNumber,
              modeString: data.modeString,
              userId: data.userId,
              userName: data.userName,
              groupId: data.groupId,
              groupName: data.groupName,
              atime: data.atime,
              mtime: data.mtime,
              ctime: data.ctime
            }));
            await dispatch((0, _size.setSize)(id, {
              isLoading: false,
              isForbidden: false,
              du: data.du
            }));
          } else {
            await dispatch(setInfo(id, {
              isLoading: false,
              isForbidden: true
            }));
            await dispatch((0, _size.setSize)(id, {
              isLoading: false,
              isForbidden: true
            }));
          }
          await dispatch(clearInfos());
          await dispatch((0, _size.clearSizes)());
        } else {
          await dispatch((0, _user.signOut)());
        }

        resolve();
      });
    });
  };
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _fa = __webpack_require__(6);

var _reactstrap = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let TopNavbar = class TopNavbar extends _react2.default.PureComponent {

  constructor(props) {
    super(props);

    this.state = { isAuthDropdownOpen: false };

    this.handleAuthDropdownToggle = this.handleAuthDropdownToggle.bind(this);
  }

  handleAuthDropdownToggle() {
    this.setState({ isAuthDropdownOpen: !this.state.isAuthDropdownOpen });
  }

  render() {
    let commands = null;
    let signing = null;
    if (this.props.isLoggedIn) {
      commands = _react2.default.createElement(
        _reactstrap.Nav,
        { navbar: true },
        _react2.default.createElement(
          _reactstrap.NavItem,
          null,
          _react2.default.createElement(
            _reactstrap.NavLink,
            { className: 'link', onClick: this.props.onMkdirCommand },
            __('mkdir_command')
          )
        ),
        _react2.default.createElement(
          _reactstrap.NavItem,
          null,
          _react2.default.createElement(
            _reactstrap.NavLink,
            { className: 'link', onClick: this.props.onRenameCommand, disabled: !this.props.hasSelection },
            __('rename_command')
          )
        ),
        _react2.default.createElement(
          _reactstrap.NavItem,
          null,
          _react2.default.createElement(
            _reactstrap.NavLink,
            { className: 'link', onClick: this.props.onCopyCommand },
            __('copy_command')
          )
        ),
        _react2.default.createElement(
          _reactstrap.NavItem,
          null,
          _react2.default.createElement(
            _reactstrap.NavLink,
            { className: 'link', onClick: this.props.onMoveCommand },
            __('move_command')
          )
        ),
        _react2.default.createElement(
          _reactstrap.NavItem,
          null,
          _react2.default.createElement(
            _reactstrap.NavLink,
            { className: 'link', onClick: this.props.onDeleteCommand },
            __('delete_command')
          )
        )
      );
      signing = _react2.default.createElement(
        _reactstrap.Nav,
        { className: 'ml-auto', navbar: true },
        _react2.default.createElement(
          _reactstrap.NavItem,
          null,
          _react2.default.createElement(
            _reactstrap.Dropdown,
            {
              isOpen: this.state.isAuthDropdownOpen,
              toggle: this.handleAuthDropdownToggle
            },
            _react2.default.createElement(
              _reactstrap.DropdownToggle,
              { caret: true, nav: true },
              _react2.default.createElement(_fa.FaUser, { className: 'icon-text' }),
              ' ',
              this.props.login
            ),
            _react2.default.createElement(
              _reactstrap.DropdownMenu,
              { right: this.props.breakpoint !== 'xs' },
              _react2.default.createElement(
                _reactstrap.DropdownItem,
                { onClick: this.props.onSignOut },
                __('sign_out_button')
              )
            )
          )
        )
      );
    } else {
      signing = _react2.default.createElement(
        _reactstrap.Nav,
        { className: 'ml-auto', navbar: true },
        _react2.default.createElement(
          _reactstrap.NavItem,
          null,
          _react2.default.createElement(
            _reactstrap.NavLink,
            { className: 'link', onClick: this.props.onSignIn },
            __('sign_in_button')
          )
        )
      );
    }

    return _react2.default.createElement(
      _reactstrap.Navbar,
      { dark: true, expand: 'sm' },
      _react2.default.createElement(_reactstrap.NavbarToggler, { onClick: this.props.onToggleNavbar }),
      _react2.default.createElement(
        _reactstrap.NavbarBrand,
        { href: '/' },
        __('project_title')
      ),
      _react2.default.createElement(
        _reactstrap.Collapse,
        { isOpen: this.props.isOpen, navbar: true },
        commands,
        signing
      )
    );
  }
};
TopNavbar.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  breakpoint: _propTypes2.default.string.isRequired,
  isLoggedIn: _propTypes2.default.bool.isRequired,
  login: _propTypes2.default.string,
  hasSelection: _propTypes2.default.bool.isRequired,
  onToggleNavbar: _propTypes2.default.func.isRequired,
  onMkdirCommand: _propTypes2.default.func.isRequired,
  onRenameCommand: _propTypes2.default.func.isRequired,
  onCopyCommand: _propTypes2.default.func.isRequired,
  onMoveCommand: _propTypes2.default.func.isRequired,
  onDeleteCommand: _propTypes2.default.func.isRequired,
  onSignIn: _propTypes2.default.func.isRequired,
  onSignOut: _propTypes2.default.func.isRequired
};
exports.default = TopNavbar;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(5);

var _signInDialog = __webpack_require__(27);

var _user = __webpack_require__(8);

var _SignInModal = __webpack_require__(71);

var _SignInModal2 = _interopRequireDefault(_SignInModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mapStateToProps = state => {
  return {
    isOpen: state.getIn(['signInDialog', 'isOpen']),
    isLocked: state.getIn(['signInDialog', 'locked']) > 0,
    values: state.getIn(['signInDialog', 'values']),
    messages: state.getIn(['signInDialog', 'messages']),
    errors: state.getIn(['signInDialog', 'errors'])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggle: () => dispatch((0, _signInDialog.toggleSignInDialog)()),
    onInput: values => dispatch((0, _signInDialog.updateSignInDialog)({ values })),
    onSubmit: (when, validate) => dispatch((0, _user.signIn)(when, validate))
  };
};

const SignInDialog = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_SignInModal2.default);

exports.default = SignInDialog;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _immutable = __webpack_require__(1);

var _reactstrap = __webpack_require__(4);

var _RequiredFieldLabel = __webpack_require__(12);

var _RequiredFieldLabel2 = _interopRequireDefault(_RequiredFieldLabel);

var _FormMessages = __webpack_require__(9);

var _FormMessages2 = _interopRequireDefault(_FormMessages);

var _FieldErrors = __webpack_require__(13);

var _FieldErrors2 = _interopRequireDefault(_FieldErrors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let SignInModal = class SignInModal extends _react2.default.PureComponent {

  constructor(props) {
    super(props);

    this.state = { ignoreBlur: true };

    this.handleInput = this.handleInput.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    if (this.props.isLocked) return;

    this.props.onInput({ [event.target.name]: event.target.value });
  }

  handleKeyPress(event) {
    if (this.props.isLocked || event.charCode !== 13) // enter
      return;

    switch (event.target.name) {
      case 'login':
        if (this.passwordInput) setTimeout(() => this.passwordInput.focus(), 0);
        break;
      case 'password':
        this.handleSubmit();
        break;
    }
  }

  handleFocus() {
    if (this.props.isLocked) return;

    this.setState({ ignoreBlur: false });
  }

  handleBlur(event) {
    if (this.props.isLocked || this.state.ignoreBlur) return;

    let submittedAt = Date.now();
    let field = event.target.name;

    setTimeout(() => {
      if (this.props.isLocked || this.state.ignoreBlur) return;

      this.props.onSubmit(submittedAt, field);
    }, 250);
  }

  handleSubmit() {
    if (this.props.isLocked) return;

    this.setState({ ignoreBlur: true });
    this.props.onSubmit(Date.now());
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isLocked) {
      if (nextProps.isLocked) return;

      switch (nextProps.errors.keys().next().value) {
        case 'login':
          if (this.loginInput) setTimeout(() => this.loginInput.focus(), 0);
          break;
        case 'password':
          if (this.passwordInput) setTimeout(() => this.passwordInput.focus(), 0);
          break;
      }
    }
  }

  render() {
    return _react2.default.createElement(
      _reactstrap.Modal,
      {
        isOpen: this.props.isOpen,
        toggle: this.props.onToggle,
        autoFocus: true,
        backdrop: 'static',
        fade: true
      },
      _react2.default.createElement(
        _reactstrap.ModalHeader,
        { toggle: this.props.onToggle },
        __('sign_in_title')
      ),
      _react2.default.createElement(
        _reactstrap.ModalBody,
        null,
        _react2.default.createElement(
          _reactstrap.Form,
          null,
          _react2.default.createElement(_FormMessages2.default, { messages: this.props.messages }),
          _react2.default.createElement(
            _reactstrap.FormGroup,
            { row: true },
            _react2.default.createElement(
              _reactstrap.Label,
              { 'for': 'signInLogin', sm: 4, className: 'text-sm-right' },
              __('login_label'),
              _react2.default.createElement(_RequiredFieldLabel2.default, null)
            ),
            _react2.default.createElement(
              _reactstrap.Col,
              { sm: 8 },
              _react2.default.createElement(_reactstrap.Input, {
                type: 'text',
                name: 'login',
                id: 'signInLogin',
                disabled: this.props.isLocked,
                autoFocus: true,
                valid: !this.props.errors.has('login') && undefined,
                value: this.props.values.get('login'),
                onChange: this.handleInput,
                onKeyPress: this.handleKeyPress,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur,
                innerRef: input => {
                  this.loginInput = input;
                }
              }),
              _react2.default.createElement(_FieldErrors2.default, { errors: this.props.errors.get('login') })
            )
          ),
          _react2.default.createElement(
            _reactstrap.FormGroup,
            { row: true },
            _react2.default.createElement(
              _reactstrap.Label,
              { 'for': 'signInPassword', sm: 4, className: 'text-sm-right' },
              __('password_label'),
              _react2.default.createElement(_RequiredFieldLabel2.default, null)
            ),
            _react2.default.createElement(
              _reactstrap.Col,
              { sm: 8 },
              _react2.default.createElement(_reactstrap.Input, {
                type: 'password',
                name: 'password',
                id: 'signInPassword',
                disabled: this.props.isLocked,
                valid: !this.props.errors.has('password') && undefined,
                value: this.props.values.get('password'),
                onChange: this.handleInput,
                onKeyPress: this.handleKeyPress,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur,
                innerRef: input => {
                  this.passwordInput = input;
                }
              }),
              _react2.default.createElement(_FieldErrors2.default, { errors: this.props.errors.get('password') })
            )
          )
        )
      ),
      _react2.default.createElement(
        _reactstrap.ModalFooter,
        null,
        _react2.default.createElement(
          _reactstrap.Button,
          { color: 'secondary', disabled: this.props.isLocked, onClick: this.props.onToggle },
          __('cancel_button')
        ),
        '\xA0',
        _react2.default.createElement(
          _reactstrap.Button,
          { color: 'primary', disabled: this.props.isLocked, onClick: this.handleSubmit },
          __('submit_button')
        )
      )
    );
  }
};
SignInModal.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  isLocked: _propTypes2.default.bool.isRequired,
  values: _propTypes2.default.instanceOf(_immutable.Map).isRequired,
  messages: _propTypes2.default.instanceOf(_immutable.Map).isRequired,
  errors: _propTypes2.default.instanceOf(_immutable.Map).isRequired,
  onToggle: _propTypes2.default.func.isRequired,
  onInput: _propTypes2.default.func.isRequired,
  onSubmit: _propTypes2.default.func.isRequired
};
exports.default = SignInModal;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(5);

var _progressDialog = __webpack_require__(33);

var _ProgressModal = __webpack_require__(73);

var _ProgressModal2 = _interopRequireDefault(_ProgressModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mapStateToProps = state => {
  return {
    isStarted: state.getIn(['progress', 'isStarted']),
    isFinished: state.getIn(['progress', 'isFinished']),
    message: state.getIn(['progress', 'message'])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDoneClick: () => dispatch((0, _progressDialog.clearProgress)())
  };
};

const ProgressDialog = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_ProgressModal2.default);

exports.default = ProgressDialog;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactstrap = __webpack_require__(4);

var _reactScrollBox = __webpack_require__(10);

var _ScrollViewport = __webpack_require__(11);

var _ScrollViewport2 = _interopRequireDefault(_ScrollViewport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ProgressModal = class ProgressModal extends _react2.default.Component {

  constructor(props) {
    super(props);

    this.state = { progress: 0 };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.setState({ progress: this.state.progress >= 100 ? 0 : this.state.progress + 10 }), 500);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.message !== nextProps.message || this.props.isFinished !== nextProps.isFinished || !this.props.isFinished && this.state.progress !== nextState.progress;
  }

  componentDidUpdate() {
    if (this.viewport) this.viewport.scrollDown();
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  render() {
    return _react2.default.createElement(
      _reactstrap.Modal,
      { isOpen: this.props.isStarted, size: 'lg', backdrop: 'static', fade: true, toggle: () => {} },
      _react2.default.createElement(
        _reactstrap.ModalHeader,
        null,
        __('progress_title')
      ),
      _react2.default.createElement(
        _reactstrap.ModalBody,
        null,
        !this.props.isStarted || this.props.isFinished ? _react2.default.createElement(
          _reactstrap.Progress,
          { color: 'primary', barClassName: 'text-dark', value: 100 },
          __('done_message')
        ) : _react2.default.createElement(_reactstrap.Progress, { color: 'warning', barClassName: 'text-light', animated: true, value: this.state.progress }),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'progress-widget' },
          _react2.default.createElement(
            'div',
            { className: 'scroll-wrapper' },
            _react2.default.createElement(
              _reactScrollBox.GenericScrollBox,
              { permitHandleDragInterruption: false },
              _react2.default.createElement(
                _ScrollViewport2.default,
                { classes: 'text-content condensed', reactList: false, ref: el => {
                    this.viewport = el;
                  } },
                this.props.message,
                _react2.default.createElement('br', null)
              )
            )
          )
        )
      ),
      _react2.default.createElement(
        _reactstrap.ModalFooter,
        null,
        _react2.default.createElement(
          _reactstrap.Button,
          {
            color: this.props.isFinished ? 'primary' : 'secondary',
            disabled: !this.props.isFinished,
            onClick: this.props.onDoneClick
          },
          __('done_button')
        )
      )
    );
  }
};
ProgressModal.propTypes = {
  isStarted: _propTypes2.default.bool.isRequired,
  isFinished: _propTypes2.default.bool.isRequired,
  message: _propTypes2.default.string.isRequired,
  onDoneClick: _propTypes2.default.func.isRequired
};
exports.default = ProgressModal;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(5);

var _mkdirDialog = __webpack_require__(20);

var _commands = __webpack_require__(7);

var _MkdirModal = __webpack_require__(75);

var _MkdirModal2 = _interopRequireDefault(_MkdirModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mapStateToProps = state => {
  return {
    isOpen: state.getIn(['mkdirDialog', 'isOpen']),
    isLocked: state.getIn(['mkdirDialog', 'locked']) > 0,
    values: state.getIn(['mkdirDialog', 'values']),
    messages: state.getIn(['mkdirDialog', 'messages']),
    errors: state.getIn(['mkdirDialog', 'errors'])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggle: () => dispatch((0, _mkdirDialog.toggleMkdirDialog)()),
    onInput: values => dispatch((0, _mkdirDialog.updateMkdirDialog)({ values })),
    onSubmit: (when, validate) => dispatch((0, _commands.mkdir)(when, validate))
  };
};

const MkdirDialog = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_MkdirModal2.default);

exports.default = MkdirDialog;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _immutable = __webpack_require__(1);

var _reactstrap = __webpack_require__(4);

var _RequiredFieldLabel = __webpack_require__(12);

var _RequiredFieldLabel2 = _interopRequireDefault(_RequiredFieldLabel);

var _FormMessages = __webpack_require__(9);

var _FormMessages2 = _interopRequireDefault(_FormMessages);

var _FieldErrors = __webpack_require__(13);

var _FieldErrors2 = _interopRequireDefault(_FieldErrors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let MkdirModal = class MkdirModal extends _react2.default.PureComponent {

  constructor(props) {
    super(props);

    this.state = { ignoreBlur: true };

    this.handleInput = this.handleInput.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    if (this.props.isLocked) return;

    this.props.onInput({ [event.target.name]: event.target.value });
  }

  handleKeyPress(event) {
    if (this.props.isLocked || event.charCode !== 13) // enter
      return;

    switch (event.target.name) {
      case 'share':
        if (this.directoryInput) setTimeout(() => this.directoryInput.focus(), 0);
        break;
      case 'directory':
        if (this.nameInput) setTimeout(() => this.nameInput.focus(), 0);
        break;
      case 'name':
        this.handleSubmit();
        break;
    }
  }

  handleFocus() {
    if (this.props.isLocked) return;

    this.setState({ ignoreBlur: false });
  }

  handleBlur(event) {
    if (this.props.isLocked || this.state.ignoreBlur) return;

    let submittedAt = Date.now();
    let field = event.target.name;

    setTimeout(() => {
      if (this.props.isLocked || this.state.ignoreBlur) return;

      this.props.onSubmit(submittedAt, field);
    }, 250);
  }

  handleSubmit() {
    if (this.props.isLocked) return;

    this.setState({ ignoreBlur: true });
    this.props.onSubmit(Date.now());
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isLocked) {
      if (nextProps.isLocked) return;

      switch (nextProps.errors.keys().next().value) {
        case 'share':
          if (this.shareInput) setTimeout(() => this.shareInput.focus(), 0);
          break;
        case 'directory':
          if (this.directoryInput) setTimeout(() => this.directoryInput.focus(), 0);
          break;
        case 'name':
          if (this.nameInput) setTimeout(() => this.nameInput.focus(), 0);
          break;
      }
    }
  }

  render() {
    return _react2.default.createElement(
      _reactstrap.Modal,
      {
        isOpen: this.props.isOpen,
        toggle: this.props.onToggle,
        autoFocus: true,
        backdrop: 'static',
        fade: true
      },
      _react2.default.createElement(
        _reactstrap.ModalHeader,
        { toggle: this.props.onToggle },
        __('mkdir_title')
      ),
      _react2.default.createElement(
        _reactstrap.ModalBody,
        null,
        _react2.default.createElement(
          _reactstrap.Form,
          null,
          _react2.default.createElement(_FormMessages2.default, { messages: this.props.messages }),
          _react2.default.createElement(
            _reactstrap.FormGroup,
            { row: true },
            _react2.default.createElement(
              _reactstrap.Label,
              { 'for': 'mkdirShare', sm: 4, className: 'text-sm-right' },
              __('share_label')
            ),
            _react2.default.createElement(
              _reactstrap.Col,
              { sm: 8 },
              _react2.default.createElement(_reactstrap.Input, {
                type: 'text',
                name: 'share',
                id: 'mkdirShare',
                disabled: true,
                valid: !this.props.errors.has('share') && undefined,
                value: this.props.values.get('share'),
                onKeyPress: this.handleKeyPress,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur,
                innerRef: input => {
                  this.shareInput = input;
                }
              }),
              _react2.default.createElement(_FieldErrors2.default, { errors: this.props.errors.get('share') })
            )
          ),
          _react2.default.createElement(
            _reactstrap.FormGroup,
            { row: true },
            _react2.default.createElement(
              _reactstrap.Label,
              { 'for': 'mkdirDirectory', sm: 4, className: 'text-sm-right' },
              __('directory_label')
            ),
            _react2.default.createElement(
              _reactstrap.Col,
              { sm: 8 },
              _react2.default.createElement(_reactstrap.Input, {
                type: 'text',
                name: 'directory',
                id: 'mkdirDirectory',
                disabled: true,
                valid: !this.props.errors.has('directory') && undefined,
                value: this.props.values.get('directory'),
                onKeyPress: this.handleKeyPress,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur,
                innerRef: input => {
                  this.directoryInput = input;
                }
              }),
              _react2.default.createElement(_FieldErrors2.default, { errors: this.props.errors.get('directory') })
            )
          ),
          _react2.default.createElement(
            _reactstrap.FormGroup,
            { row: true },
            _react2.default.createElement(
              _reactstrap.Label,
              { 'for': 'mkdirName', sm: 4, className: 'text-sm-right' },
              __('name_label'),
              _react2.default.createElement(_RequiredFieldLabel2.default, null)
            ),
            _react2.default.createElement(
              _reactstrap.Col,
              { sm: 8 },
              _react2.default.createElement(_reactstrap.Input, {
                type: 'text',
                name: 'name',
                id: 'mkdirName',
                disabled: this.props.isLocked,
                autoFocus: true,
                valid: !this.props.errors.has('name') && undefined,
                value: this.props.values.get('name'),
                onChange: this.handleInput,
                onKeyPress: this.handleKeyPress,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur,
                innerRef: input => {
                  this.nameInput = input;
                }
              }),
              _react2.default.createElement(_FieldErrors2.default, { errors: this.props.errors.get('name') })
            )
          )
        )
      ),
      _react2.default.createElement(
        _reactstrap.ModalFooter,
        null,
        _react2.default.createElement(
          _reactstrap.Button,
          { color: 'secondary', disabled: this.props.isLocked, onClick: this.props.onToggle },
          __('cancel_button')
        ),
        '\xA0',
        _react2.default.createElement(
          _reactstrap.Button,
          { color: 'primary', disabled: this.props.isLocked, onClick: this.handleSubmit },
          __('submit_button')
        )
      )
    );
  }
};
MkdirModal.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  isLocked: _propTypes2.default.bool.isRequired,
  values: _propTypes2.default.instanceOf(_immutable.Map).isRequired,
  messages: _propTypes2.default.instanceOf(_immutable.Map).isRequired,
  errors: _propTypes2.default.instanceOf(_immutable.Map).isRequired,
  onToggle: _propTypes2.default.func.isRequired,
  onInput: _propTypes2.default.func.isRequired,
  onSubmit: _propTypes2.default.func.isRequired
};
exports.default = MkdirModal;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(5);

var _renameDialog = __webpack_require__(21);

var _commands = __webpack_require__(7);

var _RenameModal = __webpack_require__(77);

var _RenameModal2 = _interopRequireDefault(_RenameModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mapStateToProps = state => {
  return {
    isOpen: state.getIn(['renameDialog', 'isOpen']),
    isLocked: state.getIn(['renameDialog', 'locked']) > 0,
    values: state.getIn(['renameDialog', 'values']),
    messages: state.getIn(['renameDialog', 'messages']),
    errors: state.getIn(['renameDialog', 'errors'])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggle: () => dispatch((0, _renameDialog.toggleRenameDialog)()),
    onInput: values => dispatch((0, _renameDialog.updateRenameDialog)({ values })),
    onSubmit: (when, validate) => dispatch((0, _commands.rename)(when, validate))
  };
};

const RenameDialog = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_RenameModal2.default);

exports.default = RenameDialog;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _immutable = __webpack_require__(1);

var _reactstrap = __webpack_require__(4);

var _RequiredFieldLabel = __webpack_require__(12);

var _RequiredFieldLabel2 = _interopRequireDefault(_RequiredFieldLabel);

var _FormMessages = __webpack_require__(9);

var _FormMessages2 = _interopRequireDefault(_FormMessages);

var _FieldErrors = __webpack_require__(13);

var _FieldErrors2 = _interopRequireDefault(_FieldErrors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let RenameModal = class RenameModal extends _react2.default.PureComponent {

  constructor(props) {
    super(props);

    this.state = { ignoreBlur: true };

    this.handleInput = this.handleInput.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    if (this.props.isLocked) return;

    this.props.onInput({ [event.target.name]: event.target.value });
  }

  handleKeyPress(event) {
    if (this.props.isLocked || event.charCode !== 13) // enter
      return;

    switch (event.target.name) {
      case 'share':
        if (this.directoryInput) setTimeout(() => this.directoryInput.focus(), 0);
        break;
      case 'directory':
        if (this.nameInput) setTimeout(() => this.nameInput.focus(), 0);
        break;
      case 'name':
        if (this.newNameInput) setTimeout(() => this.newNameInput.focus(), 0);
        break;
      case 'newName':
        this.handleSubmit();
        break;
    }
  }

  handleFocus() {
    if (this.props.isLocked) return;

    this.setState({ ignoreBlur: false });
  }

  handleBlur(event) {
    if (this.props.isLocked || this.state.ignoreBlur) return;

    let submittedAt = Date.now();
    let field = event.target.name;

    setTimeout(() => {
      if (this.props.isLocked || this.state.ignoreBlur) return;

      this.props.onSubmit(submittedAt, field);
    }, 250);
  }

  handleSubmit() {
    if (this.props.isLocked) return;

    this.setState({ ignoreBlur: true });
    this.props.onSubmit(Date.now());
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isLocked) {
      if (nextProps.isLocked) return;

      switch (nextProps.errors.keys().next().value) {
        case 'share':
          if (this.shareInput) setTimeout(() => this.shareInput.focus(), 0);
          break;
        case 'directory':
          if (this.directoryInput) setTimeout(() => this.directoryInput.focus(), 0);
          break;
        case 'name':
          if (this.nameInput) setTimeout(() => this.nameInput.focus(), 0);
          break;
        case 'newName':
          if (this.newNameInput) setTimeout(() => this.newNameInput.focus(), 0);
          break;
      }
    }
  }

  render() {
    return _react2.default.createElement(
      _reactstrap.Modal,
      {
        isOpen: this.props.isOpen,
        toggle: this.props.onToggle,
        autoFocus: true,
        backdrop: 'static',
        fade: true
      },
      _react2.default.createElement(
        _reactstrap.ModalHeader,
        { toggle: this.props.onToggle },
        __('rename_title')
      ),
      _react2.default.createElement(
        _reactstrap.ModalBody,
        null,
        _react2.default.createElement(
          _reactstrap.Form,
          null,
          _react2.default.createElement(_FormMessages2.default, { messages: this.props.messages }),
          _react2.default.createElement(
            _reactstrap.FormGroup,
            { row: true },
            _react2.default.createElement(
              _reactstrap.Label,
              { 'for': 'renameShare', sm: 4, className: 'text-sm-right' },
              __('share_label')
            ),
            _react2.default.createElement(
              _reactstrap.Col,
              { sm: 8 },
              _react2.default.createElement(_reactstrap.Input, {
                type: 'text',
                name: 'share',
                id: 'renameShare',
                disabled: true,
                valid: !this.props.errors.has('share') && undefined,
                value: this.props.values.get('share'),
                onKeyPress: this.handleKeyPress,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur,
                innerRef: input => {
                  this.shareInput = input;
                }
              }),
              _react2.default.createElement(_FieldErrors2.default, { errors: this.props.errors.get('share') })
            )
          ),
          _react2.default.createElement(
            _reactstrap.FormGroup,
            { row: true },
            _react2.default.createElement(
              _reactstrap.Label,
              { 'for': 'renameDirectory', sm: 4, className: 'text-sm-right' },
              __('directory_label')
            ),
            _react2.default.createElement(
              _reactstrap.Col,
              { sm: 8 },
              _react2.default.createElement(_reactstrap.Input, {
                type: 'text',
                name: 'directory',
                id: 'renameDirectory',
                disabled: true,
                valid: !this.props.errors.has('directory') && undefined,
                value: this.props.values.get('directory'),
                onKeyPress: this.handleKeyPress,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur,
                innerRef: input => {
                  this.directoryInput = input;
                }
              }),
              _react2.default.createElement(_FieldErrors2.default, { errors: this.props.errors.get('directory') })
            )
          ),
          _react2.default.createElement(
            _reactstrap.FormGroup,
            { row: true },
            _react2.default.createElement(
              _reactstrap.Label,
              { 'for': 'renameName', sm: 4, className: 'text-sm-right' },
              __('name_label')
            ),
            _react2.default.createElement(
              _reactstrap.Col,
              { sm: 8 },
              _react2.default.createElement(_reactstrap.Input, {
                type: 'text',
                name: 'name',
                id: 'renameName',
                disabled: true,
                valid: !this.props.errors.has('name') && undefined,
                value: this.props.values.get('name'),
                onKeyPress: this.handleKeyPress,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur,
                innerRef: input => {
                  this.nameInput = input;
                }
              }),
              _react2.default.createElement(_FieldErrors2.default, { errors: this.props.errors.get('name') })
            )
          ),
          _react2.default.createElement(
            _reactstrap.FormGroup,
            { row: true },
            _react2.default.createElement(
              _reactstrap.Label,
              { 'for': 'renameNewName', sm: 4, className: 'text-sm-right' },
              __('new_name_label'),
              _react2.default.createElement(_RequiredFieldLabel2.default, null)
            ),
            _react2.default.createElement(
              _reactstrap.Col,
              { sm: 8 },
              _react2.default.createElement(_reactstrap.Input, {
                type: 'text',
                name: 'newName',
                id: 'renameNewName',
                disabled: this.props.isLocked,
                autoFocus: true,
                valid: !this.props.errors.has('newName') && undefined,
                value: this.props.values.get('newName'),
                onChange: this.handleInput,
                onKeyPress: this.handleKeyPress,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur,
                innerRef: input => {
                  this.newNameInput = input;
                }
              }),
              _react2.default.createElement(_FieldErrors2.default, { errors: this.props.errors.get('newName') })
            )
          )
        )
      ),
      _react2.default.createElement(
        _reactstrap.ModalFooter,
        null,
        _react2.default.createElement(
          _reactstrap.Button,
          { color: 'secondary', disabled: this.props.isLocked, onClick: this.props.onToggle },
          __('cancel_button')
        ),
        '\xA0',
        _react2.default.createElement(
          _reactstrap.Button,
          { color: 'primary', disabled: this.props.isLocked, onClick: this.handleSubmit },
          __('submit_button')
        )
      )
    );
  }
};
RenameModal.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  isLocked: _propTypes2.default.bool.isRequired,
  values: _propTypes2.default.instanceOf(_immutable.Map).isRequired,
  messages: _propTypes2.default.instanceOf(_immutable.Map).isRequired,
  errors: _propTypes2.default.instanceOf(_immutable.Map).isRequired,
  onToggle: _propTypes2.default.func.isRequired,
  onInput: _propTypes2.default.func.isRequired,
  onSubmit: _propTypes2.default.func.isRequired
};
exports.default = RenameModal;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(5);

var _copyDialog = __webpack_require__(22);

var _commands = __webpack_require__(7);

var _CopyModal = __webpack_require__(79);

var _CopyModal2 = _interopRequireDefault(_CopyModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mapStateToProps = state => {
  return {
    isOpen: state.getIn(['copyDialog', 'isOpen']),
    isLocked: state.getIn(['copyDialog', 'locked']) > 0,
    values: state.getIn(['copyDialog', 'values']),
    messages: state.getIn(['copyDialog', 'messages']),
    errors: state.getIn(['copyDialog', 'errors']),
    found: state.getIn(['copyDialog', 'found'])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggle: () => dispatch((0, _copyDialog.toggleCopyDialog)()),
    onInput: values => dispatch((0, _copyDialog.updateCopyDialog)({ values })),
    onSubmit: (when, validate) => dispatch((0, _commands.copy)(when, validate)),
    onFind: () => dispatch((0, _commands.find)('COPY'))
  };
};

const CopyDialog = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_CopyModal2.default);

exports.default = CopyDialog;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _immutable = __webpack_require__(1);

var _reactstrap = __webpack_require__(4);

var _fa = __webpack_require__(6);

var _reactScrollBox = __webpack_require__(10);

var _RequiredFieldLabel = __webpack_require__(12);

var _RequiredFieldLabel2 = _interopRequireDefault(_RequiredFieldLabel);

var _FormMessages = __webpack_require__(9);

var _FormMessages2 = _interopRequireDefault(_FormMessages);

var _FieldErrors = __webpack_require__(13);

var _FieldErrors2 = _interopRequireDefault(_FieldErrors);

var _ScrollViewport = __webpack_require__(11);

var _ScrollViewport2 = _interopRequireDefault(_ScrollViewport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let CopyModal = class CopyModal extends _react2.default.PureComponent {

  constructor(props) {
    super(props);

    this.state = { ignoreBlur: true };

    this.handleInput = this.handleInput.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    if (this.props.isLocked) return;

    this.props.onInput({ [event.target.name]: event.target.value });
  }

  handleKeyPress(event) {
    if (this.props.isLocked || event.charCode !== 13) // enter
      return;

    switch (event.target.name) {
      case 'srcShare':
        if (this.srcDirectoryInput) setTimeout(() => this.srcDirectoryInput.focus(), 0);
        break;
      case 'srcDirectory':
        if (this.srcNameInput) setTimeout(() => this.srcNameInput.focus(), 0);
        break;
      case 'srcName':
        if (this.dstShareInput) setTimeout(() => this.dstShareInput.focus(), 0);
        break;
      case 'dstShare':
        if (this.dstDirectoryInput) setTimeout(() => this.dstDirectoryInput.focus(), 0);
        break;
      case 'dstDirectory':
        this.handleSubmit();
        break;
    }
  }

  handleFocus() {
    if (this.props.isLocked) return;

    this.setState({ ignoreBlur: false });
  }

  handleBlur(event) {
    if (this.props.isLocked || this.state.ignoreBlur) return;

    let submittedAt = Date.now();
    let field = event.target.name;

    setTimeout(() => {
      if (this.props.isLocked || this.state.ignoreBlur) return;

      this.props.onSubmit(submittedAt, field);
    }, 250);
  }

  handleSubmit() {
    if (this.props.isLocked) return;

    this.setState({ ignoreBlur: true });
    this.props.onSubmit(Date.now());
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isLocked) {
      if (nextProps.isLocked) return;

      switch (nextProps.errors.keys().next().value) {
        case 'srcShare':
          if (this.srcShareInput) setTimeout(() => this.srcShareInput.focus(), 250);
          break;
        case 'srcDirectory':
          if (this.srcDirectoryInput) setTimeout(() => this.srcDirectoryInput.focus(), 250);
          break;
        case 'srcName':
          if (this.srcNameInput) setTimeout(() => this.srcNameInput.focus(), 250);
          break;
        case 'dstShare':
          if (this.dstShareInput) setTimeout(() => this.dstShareInput.focus(), 250);
          break;
        case 'dstDirectory':
          if (this.dstDirectoryInput) setTimeout(() => this.dstDirectoryInput.focus(), 250);
          break;
      }
    }
  }

  render() {
    let find = null;
    if (!this.props.errors.has('srcName')) {
      if (this.props.found.get('isLoaded')) {
        find = [];
        for (let node of this.props.found.get('nodes')) {
          let name = node.get('name');
          find.push(node.get('isDirectory') ? _react2.default.createElement(
            'div',
            { key: name },
            _react2.default.createElement(
              'strong',
              null,
              _react2.default.createElement(_fa.FaFolderO, null),
              ' ',
              name
            )
          ) : _react2.default.createElement(
            'div',
            { key: name },
            _react2.default.createElement(_fa.FaFileO, null),
            ' ',
            name
          ));
        }
        find = _react2.default.createElement(
          'div',
          { className: 'found-nodes' },
          _react2.default.createElement(
            'div',
            { className: 'scroll-wrapper' },
            _react2.default.createElement(
              _reactScrollBox.GenericScrollBox,
              { permitHandleDragInterruption: false, outsetScrollBarX: true, outsetScrollBarY: true },
              _react2.default.createElement(
                _ScrollViewport2.default,
                { classes: 'text-content condensed' },
                find.length ? find : _react2.default.createElement(
                  'em',
                  null,
                  __('src_find_empty')
                ),
                _react2.default.createElement('br', null)
              )
            )
          )
        );
      } else if (this.props.found.get('isLoading')) {
        find = _react2.default.createElement(
          'div',
          { className: 'found-nodes' },
          _react2.default.createElement(
            'div',
            { className: 'processing' },
            _react2.default.createElement(_fa.FaCog, { className: 'rotating' })
          )
        );
      } else {
        find = _react2.default.createElement(_reactstrap.FormText, { color: 'muted', dangerouslySetInnerHTML: { __html: __('src_name_hint') } });
      }
    }

    return _react2.default.createElement(
      _reactstrap.Modal,
      {
        isOpen: this.props.isOpen,
        toggle: this.props.onToggle,
        autoFocus: true,
        backdrop: 'static',
        fade: true
      },
      _react2.default.createElement(
        _reactstrap.ModalHeader,
        { toggle: this.props.onToggle },
        __('copy_title')
      ),
      _react2.default.createElement(
        _reactstrap.ModalBody,
        null,
        _react2.default.createElement(
          _reactstrap.Form,
          null,
          _react2.default.createElement(_FormMessages2.default, { messages: this.props.messages }),
          _react2.default.createElement(
            _reactstrap.FormGroup,
            { row: true },
            _react2.default.createElement(
              _reactstrap.Label,
              { 'for': 'copySrcShare', sm: 4, className: 'text-sm-right' },
              __('src_share_label')
            ),
            _react2.default.createElement(
              _reactstrap.Col,
              { sm: 8 },
              _react2.default.createElement(_reactstrap.Input, {
                type: 'text',
                name: 'srcShare',
                id: 'copySrcShare',
                disabled: true,
                valid: !this.props.errors.has('srcShare') && undefined,
                value: this.props.values.get('srcShare'),
                onKeyPress: this.handleKeyPress,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur,
                innerRef: input => {
                  this.srcShareInput = input;
                }
              }),
              _react2.default.createElement(_FieldErrors2.default, { errors: this.props.errors.get('srcShare') })
            )
          ),
          _react2.default.createElement(
            _reactstrap.FormGroup,
            { row: true },
            _react2.default.createElement(
              _reactstrap.Label,
              { 'for': 'copySrcDirectory', sm: 4, className: 'text-sm-right' },
              __('src_directory_label')
            ),
            _react2.default.createElement(
              _reactstrap.Col,
              { sm: 8 },
              _react2.default.createElement(_reactstrap.Input, {
                type: 'text',
                name: 'srcDirectory',
                id: 'copySrcDirectory',
                disabled: true,
                valid: !this.props.errors.has('srcDirectory') && undefined,
                value: this.props.values.get('srcDirectory'),
                onKeyPress: this.handleKeyPress,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur,
                innerRef: input => {
                  this.srcDirectoryInput = input;
                }
              }),
              _react2.default.createElement(_FieldErrors2.default, { errors: this.props.errors.get('srcDirectory') })
            )
          ),
          _react2.default.createElement(
            _reactstrap.FormGroup,
            { row: true },
            _react2.default.createElement(
              _reactstrap.Label,
              { 'for': 'copySrcName', sm: 4, className: 'text-sm-right' },
              __('src_name_label'),
              _react2.default.createElement(_RequiredFieldLabel2.default, null)
            ),
            _react2.default.createElement(
              _reactstrap.Col,
              { sm: 8 },
              _react2.default.createElement(
                _reactstrap.InputGroup,
                null,
                _react2.default.createElement(_reactstrap.Input, {
                  type: 'text',
                  name: 'srcName',
                  id: 'copySrcName',
                  disabled: this.props.isLocked,
                  autoFocus: true,
                  valid: !this.props.errors.has('srcName') && undefined,
                  value: this.props.values.get('srcName'),
                  onChange: this.handleInput,
                  onKeyPress: this.handleKeyPress,
                  onFocus: this.handleFocus,
                  onBlur: this.handleBlur,
                  innerRef: input => {
                    this.srcNameInput = input;
                  }
                }),
                _react2.default.createElement(
                  _reactstrap.InputGroupAddon,
                  { addonType: 'append' },
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { color: 'secondary', disabled: this.props.isLocked, onClick: this.props.onFind },
                    __('src_find_button')
                  )
                ),
                _react2.default.createElement(_FieldErrors2.default, { errors: this.props.errors.get('srcName') })
              ),
              find
            )
          ),
          _react2.default.createElement(
            _reactstrap.FormGroup,
            { row: true },
            _react2.default.createElement(
              _reactstrap.Label,
              { 'for': 'copyDstShare', sm: 4, className: 'text-sm-right' },
              __('dst_share_label')
            ),
            _react2.default.createElement(
              _reactstrap.Col,
              { sm: 8 },
              _react2.default.createElement(_reactstrap.Input, {
                type: 'text',
                name: 'dstShare',
                id: 'copyDstShare',
                disabled: true,
                valid: !this.props.errors.has('dstShare') && undefined,
                value: this.props.values.get('dstShare'),
                onKeyPress: this.handleKeyPress,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur,
                innerRef: input => {
                  this.dstShareInput = input;
                }
              }),
              _react2.default.createElement(_FieldErrors2.default, { errors: this.props.errors.get('dstShare') })
            )
          ),
          _react2.default.createElement(
            _reactstrap.FormGroup,
            { row: true },
            _react2.default.createElement(
              _reactstrap.Label,
              { 'for': 'copyDstDirectory', sm: 4, className: 'text-sm-right' },
              __('dst_directory_label')
            ),
            _react2.default.createElement(
              _reactstrap.Col,
              { sm: 8 },
              _react2.default.createElement(_reactstrap.Input, {
                type: 'text',
                name: 'dstDirectory',
                id: 'copyDstDirectory',
                disabled: true,
                valid: !this.props.errors.has('dstDirectory') && undefined,
                value: this.props.values.get('dstDirectory'),
                onKeyPress: this.handleKeyPress,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur,
                innerRef: input => {
                  this.dstDirectoryInput = input;
                }
              }),
              _react2.default.createElement(_FieldErrors2.default, { errors: this.props.errors.get('dstDirectory') })
            )
          )
        )
      ),
      _react2.default.createElement(
        _reactstrap.ModalFooter,
        null,
        _react2.default.createElement(
          _reactstrap.Button,
          { color: 'secondary', disabled: this.props.isLocked, onClick: this.props.onToggle },
          __('cancel_button')
        ),
        '\xA0',
        _react2.default.createElement(
          _reactstrap.Button,
          { color: 'primary', disabled: this.props.isLocked, onClick: this.handleSubmit },
          __('submit_button')
        )
      )
    );
  }
};
CopyModal.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  isLocked: _propTypes2.default.bool.isRequired,
  values: _propTypes2.default.instanceOf(_immutable.Map).isRequired,
  messages: _propTypes2.default.instanceOf(_immutable.Map).isRequired,
  errors: _propTypes2.default.instanceOf(_immutable.Map).isRequired,
  found: _propTypes2.default.instanceOf(_immutable.Map).isRequired,
  onToggle: _propTypes2.default.func.isRequired,
  onInput: _propTypes2.default.func.isRequired,
  onSubmit: _propTypes2.default.func.isRequired,
  onFind: _propTypes2.default.func.isRequired
};
exports.default = CopyModal;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(5);

var _moveDialog = __webpack_require__(23);

var _commands = __webpack_require__(7);

var _MoveModal = __webpack_require__(81);

var _MoveModal2 = _interopRequireDefault(_MoveModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mapStateToProps = state => {
  return {
    isOpen: state.getIn(['moveDialog', 'isOpen']),
    isLocked: state.getIn(['moveDialog', 'locked']) > 0,
    values: state.getIn(['moveDialog', 'values']),
    messages: state.getIn(['moveDialog', 'messages']),
    errors: state.getIn(['moveDialog', 'errors']),
    found: state.getIn(['moveDialog', 'found'])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggle: () => dispatch((0, _moveDialog.toggleMoveDialog)()),
    onInput: values => dispatch((0, _moveDialog.updateMoveDialog)({ values })),
    onSubmit: (when, validate) => dispatch((0, _commands.move)(when, validate)),
    onFind: () => dispatch((0, _commands.find)('MOVE'))
  };
};

const MoveDialog = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_MoveModal2.default);

exports.default = MoveDialog;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _immutable = __webpack_require__(1);

var _reactstrap = __webpack_require__(4);

var _fa = __webpack_require__(6);

var _reactScrollBox = __webpack_require__(10);

var _RequiredFieldLabel = __webpack_require__(12);

var _RequiredFieldLabel2 = _interopRequireDefault(_RequiredFieldLabel);

var _FormMessages = __webpack_require__(9);

var _FormMessages2 = _interopRequireDefault(_FormMessages);

var _FieldErrors = __webpack_require__(13);

var _FieldErrors2 = _interopRequireDefault(_FieldErrors);

var _ScrollViewport = __webpack_require__(11);

var _ScrollViewport2 = _interopRequireDefault(_ScrollViewport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let MoveModal = class MoveModal extends _react2.default.PureComponent {

  constructor(props) {
    super(props);

    this.state = { ignoreBlur: true };

    this.handleInput = this.handleInput.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    if (this.props.isLocked) return;

    this.props.onInput({ [event.target.name]: event.target.value });
  }

  handleKeyPress(event) {
    if (this.props.isLocked || event.charCode !== 13) // enter
      return;

    switch (event.target.name) {
      case 'srcShare':
        if (this.srcDirectoryInput) setTimeout(() => this.srcDirectoryInput.focus(), 0);
        break;
      case 'srcDirectory':
        if (this.srcNameInput) setTimeout(() => this.srcNameInput.focus(), 0);
        break;
      case 'srcName':
        if (this.dstShareInput) setTimeout(() => this.dstShareInput.focus(), 0);
        break;
      case 'dstShare':
        if (this.dstDirectoryInput) setTimeout(() => this.dstDirectoryInput.focus(), 0);
        break;
      case 'dstDirectory':
        this.handleSubmit();
        break;
    }
  }

  handleFocus() {
    if (this.props.isLocked) return;

    this.setState({ ignoreBlur: false });
  }

  handleBlur(event) {
    if (this.props.isLocked || this.state.ignoreBlur) return;

    let submittedAt = Date.now();
    let field = event.target.name;

    setTimeout(() => {
      if (this.props.isLocked || this.state.ignoreBlur) return;

      this.props.onSubmit(submittedAt, field);
    }, 250);
  }

  handleSubmit() {
    if (this.props.isLocked) return;

    this.setState({ ignoreBlur: true });
    this.props.onSubmit(Date.now());
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isLocked) {
      if (nextProps.isLocked) return;

      switch (nextProps.errors.keys().next().value) {
        case 'srcShare':
          if (this.srcShareInput) setTimeout(() => this.srcShareInput.focus(), 250);
          break;
        case 'srcDirectory':
          if (this.srcDirectoryInput) setTimeout(() => this.srcDirectoryInput.focus(), 250);
          break;
        case 'srcName':
          if (this.srcNameInput) setTimeout(() => this.srcNameInput.focus(), 250);
          break;
        case 'dstShare':
          if (this.dstShareInput) setTimeout(() => this.dstShareInput.focus(), 250);
          break;
        case 'dstDirectory':
          if (this.dstDirectoryInput) setTimeout(() => this.dstDirectoryInput.focus(), 250);
          break;
      }
    }
  }

  render() {
    let find = null;
    if (!this.props.errors.has('srcName')) {
      if (this.props.found.get('isLoaded')) {
        find = [];
        for (let node of this.props.found.get('nodes')) {
          let name = node.get('name');
          find.push(node.get('isDirectory') ? _react2.default.createElement(
            'div',
            { key: name },
            _react2.default.createElement(
              'strong',
              null,
              _react2.default.createElement(_fa.FaFolderO, null),
              ' ',
              name
            )
          ) : _react2.default.createElement(
            'div',
            { key: name },
            _react2.default.createElement(_fa.FaFileO, null),
            ' ',
            name
          ));
        }
        find = _react2.default.createElement(
          'div',
          { className: 'found-nodes' },
          _react2.default.createElement(
            'div',
            { className: 'scroll-wrapper' },
            _react2.default.createElement(
              _reactScrollBox.GenericScrollBox,
              { permitHandleDragInterruption: false, outsetScrollBarX: true, outsetScrollBarY: true },
              _react2.default.createElement(
                _ScrollViewport2.default,
                { classes: 'text-content condensed' },
                find.length ? find : _react2.default.createElement(
                  'em',
                  null,
                  __('src_find_empty')
                ),
                _react2.default.createElement('br', null)
              )
            )
          )
        );
      } else if (this.props.found.get('isLoading')) {
        find = _react2.default.createElement(
          'div',
          { className: 'found-nodes' },
          _react2.default.createElement(
            'div',
            { className: 'processing' },
            _react2.default.createElement(_fa.FaCog, { className: 'rotating' })
          )
        );
      } else {
        find = _react2.default.createElement(_reactstrap.FormText, { color: 'muted', dangerouslySetInnerHTML: { __html: __('src_name_hint') } });
      }
    }

    return _react2.default.createElement(
      _reactstrap.Modal,
      {
        isOpen: this.props.isOpen,
        toggle: this.props.onToggle,
        autoFocus: true,
        backdrop: 'static',
        fade: true
      },
      _react2.default.createElement(
        _reactstrap.ModalHeader,
        { toggle: this.props.onToggle },
        __('move_title')
      ),
      _react2.default.createElement(
        _reactstrap.ModalBody,
        null,
        _react2.default.createElement(
          _reactstrap.Form,
          null,
          _react2.default.createElement(_FormMessages2.default, { messages: this.props.messages }),
          _react2.default.createElement(
            _reactstrap.FormGroup,
            { row: true },
            _react2.default.createElement(
              _reactstrap.Label,
              { 'for': 'moveSrcShare', sm: 4, className: 'text-sm-right' },
              __('src_share_label')
            ),
            _react2.default.createElement(
              _reactstrap.Col,
              { sm: 8 },
              _react2.default.createElement(_reactstrap.Input, {
                type: 'text',
                name: 'srcShare',
                id: 'moveSrcShare',
                disabled: true,
                valid: !this.props.errors.has('srcShare') && undefined,
                value: this.props.values.get('srcShare'),
                onKeyPress: this.handleKeyPress,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur,
                innerRef: input => {
                  this.srcShareInput = input;
                }
              }),
              _react2.default.createElement(_FieldErrors2.default, { errors: this.props.errors.get('srcShare') })
            )
          ),
          _react2.default.createElement(
            _reactstrap.FormGroup,
            { row: true },
            _react2.default.createElement(
              _reactstrap.Label,
              { 'for': 'moveSrcDirectory', sm: 4, className: 'text-sm-right' },
              __('src_directory_label')
            ),
            _react2.default.createElement(
              _reactstrap.Col,
              { sm: 8 },
              _react2.default.createElement(_reactstrap.Input, {
                type: 'text',
                name: 'srcDirectory',
                id: 'moveSrcDirectory',
                disabled: true,
                valid: !this.props.errors.has('srcDirectory') && undefined,
                value: this.props.values.get('srcDirectory'),
                onKeyPress: this.handleKeyPress,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur,
                innerRef: input => {
                  this.srcDirectoryInput = input;
                }
              }),
              _react2.default.createElement(_FieldErrors2.default, { errors: this.props.errors.get('srcDirectory') })
            )
          ),
          _react2.default.createElement(
            _reactstrap.FormGroup,
            { row: true },
            _react2.default.createElement(
              _reactstrap.Label,
              { 'for': 'moveSrcName', sm: 4, className: 'text-sm-right' },
              __('src_name_label'),
              _react2.default.createElement(_RequiredFieldLabel2.default, null)
            ),
            _react2.default.createElement(
              _reactstrap.Col,
              { sm: 8 },
              _react2.default.createElement(
                _reactstrap.InputGroup,
                null,
                _react2.default.createElement(_reactstrap.Input, {
                  type: 'text',
                  name: 'srcName',
                  id: 'moveSrcName',
                  disabled: this.props.isLocked,
                  autoFocus: true,
                  valid: !this.props.errors.has('srcName') && undefined,
                  value: this.props.values.get('srcName'),
                  onChange: this.handleInput,
                  onKeyPress: this.handleKeyPress,
                  onFocus: this.handleFocus,
                  onBlur: this.handleBlur,
                  innerRef: input => {
                    this.srcNameInput = input;
                  }
                }),
                _react2.default.createElement(
                  _reactstrap.InputGroupAddon,
                  { addonType: 'append' },
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { color: 'secondary', disabled: this.props.isLocked, onClick: this.props.onFind },
                    __('src_find_button')
                  )
                ),
                _react2.default.createElement(_FieldErrors2.default, { errors: this.props.errors.get('srcName') })
              ),
              find
            )
          ),
          _react2.default.createElement(
            _reactstrap.FormGroup,
            { row: true },
            _react2.default.createElement(
              _reactstrap.Label,
              { 'for': 'moveDstShare', sm: 4, className: 'text-sm-right' },
              __('dst_share_label')
            ),
            _react2.default.createElement(
              _reactstrap.Col,
              { sm: 8 },
              _react2.default.createElement(_reactstrap.Input, {
                type: 'text',
                name: 'dstShare',
                id: 'moveDstShare',
                disabled: true,
                valid: !this.props.errors.has('dstShare') && undefined,
                value: this.props.values.get('dstShare'),
                onKeyPress: this.handleKeyPress,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur,
                innerRef: input => {
                  this.dstShareInput = input;
                }
              }),
              _react2.default.createElement(_FieldErrors2.default, { errors: this.props.errors.get('dstShare') })
            )
          ),
          _react2.default.createElement(
            _reactstrap.FormGroup,
            { row: true },
            _react2.default.createElement(
              _reactstrap.Label,
              { 'for': 'moveDstDirectory', sm: 4, className: 'text-sm-right' },
              __('dst_directory_label')
            ),
            _react2.default.createElement(
              _reactstrap.Col,
              { sm: 8 },
              _react2.default.createElement(_reactstrap.Input, {
                type: 'text',
                name: 'dstDirectory',
                id: 'moveDstDirectory',
                disabled: true,
                valid: !this.props.errors.has('dstDirectory') && undefined,
                value: this.props.values.get('dstDirectory'),
                onKeyPress: this.handleKeyPress,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur,
                innerRef: input => {
                  this.dstDirectoryInput = input;
                }
              }),
              _react2.default.createElement(_FieldErrors2.default, { errors: this.props.errors.get('dstDirectory') })
            )
          )
        )
      ),
      _react2.default.createElement(
        _reactstrap.ModalFooter,
        null,
        _react2.default.createElement(
          _reactstrap.Button,
          { color: 'secondary', disabled: this.props.isLocked, onClick: this.props.onToggle },
          __('cancel_button')
        ),
        '\xA0',
        _react2.default.createElement(
          _reactstrap.Button,
          { color: 'primary', disabled: this.props.isLocked, onClick: this.handleSubmit },
          __('submit_button')
        )
      )
    );
  }
};
MoveModal.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  isLocked: _propTypes2.default.bool.isRequired,
  values: _propTypes2.default.instanceOf(_immutable.Map).isRequired,
  messages: _propTypes2.default.instanceOf(_immutable.Map).isRequired,
  errors: _propTypes2.default.instanceOf(_immutable.Map).isRequired,
  found: _propTypes2.default.instanceOf(_immutable.Map).isRequired,
  onToggle: _propTypes2.default.func.isRequired,
  onInput: _propTypes2.default.func.isRequired,
  onSubmit: _propTypes2.default.func.isRequired,
  onFind: _propTypes2.default.func.isRequired
};
exports.default = MoveModal;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(5);

var _deleteDialog = __webpack_require__(24);

var _commands = __webpack_require__(7);

var _DeleteModal = __webpack_require__(83);

var _DeleteModal2 = _interopRequireDefault(_DeleteModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mapStateToProps = state => {
  return {
    isOpen: state.getIn(['deleteDialog', 'isOpen']),
    isLocked: state.getIn(['deleteDialog', 'locked']) > 0,
    values: state.getIn(['deleteDialog', 'values']),
    messages: state.getIn(['deleteDialog', 'messages']),
    errors: state.getIn(['deleteDialog', 'errors']),
    found: state.getIn(['deleteDialog', 'found'])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggle: () => dispatch((0, _deleteDialog.toggleDeleteDialog)()),
    onInput: values => dispatch((0, _deleteDialog.updateDeleteDialog)({ values })),
    onSubmit: (when, validate) => dispatch((0, _commands.del)(when, validate)),
    onFind: () => dispatch((0, _commands.find)('DELETE'))
  };
};

const DeleteDialog = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_DeleteModal2.default);

exports.default = DeleteDialog;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _immutable = __webpack_require__(1);

var _reactstrap = __webpack_require__(4);

var _fa = __webpack_require__(6);

var _reactScrollBox = __webpack_require__(10);

var _RequiredFieldLabel = __webpack_require__(12);

var _RequiredFieldLabel2 = _interopRequireDefault(_RequiredFieldLabel);

var _FormMessages = __webpack_require__(9);

var _FormMessages2 = _interopRequireDefault(_FormMessages);

var _FieldErrors = __webpack_require__(13);

var _FieldErrors2 = _interopRequireDefault(_FieldErrors);

var _ScrollViewport = __webpack_require__(11);

var _ScrollViewport2 = _interopRequireDefault(_ScrollViewport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let DeleteModal = class DeleteModal extends _react2.default.PureComponent {

  constructor(props) {
    super(props);

    this.state = { ignoreBlur: true };

    this.handleInput = this.handleInput.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    if (this.props.isLocked) return;

    this.props.onInput({ [event.target.name]: event.target.value });
  }

  handleKeyPress(event) {
    if (this.props.isLocked || event.charCode !== 13) // enter
      return;

    switch (event.target.name) {
      case 'share':
        if (this.directoryInput) setTimeout(() => this.directoryInput.focus(), 0);
        break;
      case 'directory':
        if (this.nameInput) setTimeout(() => this.nameInput.focus(), 0);
        break;
      case 'name':
        this.handleSubmit();
        break;
    }
  }

  handleFocus() {
    if (this.props.isLocked) return;

    this.setState({ ignoreBlur: false });
  }

  handleBlur(event) {
    if (this.props.isLocked || this.state.ignoreBlur) return;

    let submittedAt = Date.now();
    let field = event.target.name;

    setTimeout(() => {
      if (this.props.isLocked || this.state.ignoreBlur) return;

      this.props.onSubmit(submittedAt, field);
    }, 250);
  }

  handleSubmit() {
    if (this.props.isLocked) return;

    this.setState({ ignoreBlur: true });
    this.props.onSubmit(Date.now());
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isLocked) {
      if (nextProps.isLocked) return;

      switch (nextProps.errors.keys().next().value) {
        case 'share':
          if (this.shareInput) setTimeout(() => this.shareInput.focus(), 250);
          break;
        case 'directory':
          if (this.directoryInput) setTimeout(() => this.directoryInput.focus(), 250);
          break;
        case 'name':
          if (this.nameInput) setTimeout(() => this.nameInput.focus(), 250);
          break;
      }
    }
  }

  render() {
    let find = null;
    if (!this.props.errors.has('name')) {
      if (this.props.found.get('isLoaded')) {
        find = [];
        for (let node of this.props.found.get('nodes')) {
          let name = node.get('name');
          find.push(node.get('isDirectory') ? _react2.default.createElement(
            'div',
            { key: name },
            _react2.default.createElement(
              'strong',
              null,
              _react2.default.createElement(_fa.FaFolderO, null),
              ' ',
              name
            )
          ) : _react2.default.createElement(
            'div',
            { key: name },
            _react2.default.createElement(_fa.FaFileO, null),
            ' ',
            name
          ));
        }
        find = _react2.default.createElement(
          'div',
          { className: 'found-nodes' },
          _react2.default.createElement(
            'div',
            { className: 'scroll-wrapper' },
            _react2.default.createElement(
              _reactScrollBox.GenericScrollBox,
              { permitHandleDragInterruption: false, outsetScrollBarX: true, outsetScrollBarY: true },
              _react2.default.createElement(
                _ScrollViewport2.default,
                { classes: 'text-content condensed' },
                find.length ? find : _react2.default.createElement(
                  'em',
                  null,
                  __('src_find_empty')
                ),
                _react2.default.createElement('br', null)
              )
            )
          )
        );
      } else if (this.props.found.get('isLoading')) {
        find = _react2.default.createElement(
          'div',
          { className: 'found-nodes' },
          _react2.default.createElement(
            'div',
            { className: 'processing' },
            _react2.default.createElement(_fa.FaCog, { className: 'rotating' })
          )
        );
      } else {
        find = _react2.default.createElement(_reactstrap.FormText, { color: 'muted', dangerouslySetInnerHTML: { __html: __('src_name_hint') } });
      }
    }

    return _react2.default.createElement(
      _reactstrap.Modal,
      {
        isOpen: this.props.isOpen,
        toggle: this.props.onToggle,
        autoFocus: true,
        backdrop: 'static',
        fade: true
      },
      _react2.default.createElement(
        _reactstrap.ModalHeader,
        { toggle: this.props.onToggle },
        __('delete_title')
      ),
      _react2.default.createElement(
        _reactstrap.ModalBody,
        null,
        _react2.default.createElement(
          _reactstrap.Form,
          null,
          _react2.default.createElement(_FormMessages2.default, { messages: this.props.messages }),
          _react2.default.createElement(
            _reactstrap.FormGroup,
            { row: true },
            _react2.default.createElement(
              _reactstrap.Label,
              { 'for': 'deleteShare', sm: 4, className: 'text-sm-right' },
              __('share_label')
            ),
            _react2.default.createElement(
              _reactstrap.Col,
              { sm: 8 },
              _react2.default.createElement(_reactstrap.Input, {
                type: 'text',
                name: 'share',
                id: 'deleteShare',
                disabled: true,
                valid: !this.props.errors.has('share') && undefined,
                value: this.props.values.get('share'),
                onKeyPress: this.handleKeyPress,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur,
                innerRef: input => {
                  this.shareInput = input;
                }
              }),
              _react2.default.createElement(_FieldErrors2.default, { errors: this.props.errors.get('share') })
            )
          ),
          _react2.default.createElement(
            _reactstrap.FormGroup,
            { row: true },
            _react2.default.createElement(
              _reactstrap.Label,
              { 'for': 'deleteDirectory', sm: 4, className: 'text-sm-right' },
              __('directory_label')
            ),
            _react2.default.createElement(
              _reactstrap.Col,
              { sm: 8 },
              _react2.default.createElement(_reactstrap.Input, {
                type: 'text',
                name: 'directory',
                id: 'deleteDirectory',
                disabled: true,
                valid: !this.props.errors.has('directory') && undefined,
                value: this.props.values.get('directory'),
                onKeyPress: this.handleKeyPress,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur,
                innerRef: input => {
                  this.directoryInput = input;
                }
              }),
              _react2.default.createElement(_FieldErrors2.default, { errors: this.props.errors.get('directory') })
            )
          ),
          _react2.default.createElement(
            _reactstrap.FormGroup,
            { row: true },
            _react2.default.createElement(
              _reactstrap.Label,
              { 'for': 'deleteName', sm: 4, className: 'text-sm-right' },
              __('name_label'),
              _react2.default.createElement(_RequiredFieldLabel2.default, null)
            ),
            _react2.default.createElement(
              _reactstrap.Col,
              { sm: 8 },
              _react2.default.createElement(
                _reactstrap.InputGroup,
                null,
                _react2.default.createElement(_reactstrap.Input, {
                  type: 'text',
                  name: 'name',
                  id: 'deleteName',
                  disabled: this.props.isLocked,
                  autoFocus: true,
                  valid: !this.props.errors.has('name') && undefined,
                  value: this.props.values.get('name'),
                  onChange: this.handleInput,
                  onKeyPress: this.handleKeyPress,
                  onFocus: this.handleFocus,
                  onBlur: this.handleBlur,
                  innerRef: input => {
                    this.nameInput = input;
                  }
                }),
                _react2.default.createElement(
                  _reactstrap.InputGroupAddon,
                  { addonType: 'append' },
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { color: 'secondary', disabled: this.props.isLocked, onClick: this.props.onFind },
                    __('src_find_button')
                  )
                ),
                _react2.default.createElement(_FieldErrors2.default, { errors: this.props.errors.get('name') })
              ),
              find
            )
          )
        )
      ),
      _react2.default.createElement(
        _reactstrap.ModalFooter,
        null,
        _react2.default.createElement(
          _reactstrap.Button,
          { color: 'secondary', disabled: this.props.isLocked, onClick: this.props.onToggle },
          __('cancel_button')
        ),
        '\xA0',
        _react2.default.createElement(
          _reactstrap.Button,
          { color: 'primary', disabled: this.props.isLocked, onClick: this.handleSubmit },
          __('submit_button')
        )
      )
    );
  }
};
DeleteModal.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  isLocked: _propTypes2.default.bool.isRequired,
  values: _propTypes2.default.instanceOf(_immutable.Map).isRequired,
  messages: _propTypes2.default.instanceOf(_immutable.Map).isRequired,
  errors: _propTypes2.default.instanceOf(_immutable.Map).isRequired,
  found: _propTypes2.default.instanceOf(_immutable.Map).isRequired,
  onToggle: _propTypes2.default.func.isRequired,
  onInput: _propTypes2.default.func.isRequired,
  onSubmit: _propTypes2.default.func.isRequired,
  onFind: _propTypes2.default.func.isRequired
};
exports.default = DeleteModal;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(5);

var _failureDialog = __webpack_require__(30);

var _FailureModal = __webpack_require__(85);

var _FailureModal2 = _interopRequireDefault(_FailureModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mapStateToProps = state => {
  return {
    isOpen: state.getIn(['failureDialog', 'isOpen']),
    messages: state.getIn(['failureDialog', 'messages']),
    errors: state.getIn(['failureDialog', 'errors'])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDoneClick: () => dispatch((0, _failureDialog.hideFailureDialog)())
  };
};

const FailureDialog = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_FailureModal2.default);

exports.default = FailureDialog;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _immutable = __webpack_require__(1);

var _reactstrap = __webpack_require__(4);

var _FormMessages = __webpack_require__(9);

var _FormMessages2 = _interopRequireDefault(_FormMessages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let FailureModal = class FailureModal extends _react2.default.PureComponent {

  render() {
    let list = [];
    for (let key of this.props.errors.keys()) {
      let items = [];
      for (let code of this.props.errors.get(key).keys()) {
        items.push(_react2.default.createElement(
          'p',
          { key: code },
          this.props.errors.getIn([key, code, 'message'])
        ));
      }
      list.push(_react2.default.createElement(
        'dl',
        { className: 'row', key: key },
        _react2.default.createElement(
          'dt',
          { className: 'col-sm-4 text-sm-right' },
          __(`field_${key}_label`)
        ),
        _react2.default.createElement(
          'dd',
          { className: 'col-sm-8' },
          items
        )
      ));
    }
    return _react2.default.createElement(
      _reactstrap.Modal,
      { isOpen: this.props.isOpen, size: 'lg', backdrop: 'static', fade: true, toggle: this.props.onDoneClick },
      _react2.default.createElement(
        _reactstrap.ModalHeader,
        null,
        __('failure_title')
      ),
      _react2.default.createElement(
        _reactstrap.ModalBody,
        null,
        _react2.default.createElement(_FormMessages2.default, { messages: this.props.messages }),
        list
      ),
      _react2.default.createElement(
        _reactstrap.ModalFooter,
        null,
        _react2.default.createElement(
          _reactstrap.Button,
          { color: 'primary', onClick: this.props.onDoneClick },
          __('done_button')
        )
      )
    );
  }
};
FailureModal.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  errors: _propTypes2.default.instanceOf(_immutable.Map).isRequired,
  messages: _propTypes2.default.instanceOf(_immutable.Map).isRequired,
  onDoneClick: _propTypes2.default.func.isRequired
};
exports.default = FailureModal;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(5);

var _pane = __webpack_require__(17);

var _size = __webpack_require__(28);

var _Pane = __webpack_require__(34);

var _Pane2 = _interopRequireDefault(_Pane);

var _commands = __webpack_require__(7);

var _drag = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mapStateToProps = state => {
  let selectedId;
  if (state.getIn(['rightPane', 'share']) && state.getIn(['rightPane', 'name'])) selectedId = `${state.getIn(['rightPane', 'share'])}:${state.getIn(['rightPane', 'path'])}`;

  return {
    which: 'LEFT',
    breakpoint: state.getIn(['app', 'breakpoint']),
    mode: state.getIn(['leftPane', 'mode']),
    otherPath: state.getIn(['rightPane', 'path']),
    shares: state.getIn(['user', 'shares']),
    share: state.getIn(['leftPane', 'share']),
    directory: state.getIn(['leftPane', 'directory']),
    list: state.getIn(['leftPane', 'list']),
    sizes: state.getIn(['sizes']),
    selectedIndexes: state.getIn(['leftPane', 'selectedIndexes']),
    sortField: state.getIn(['leftPane', 'sortField']),
    sortDir: state.getIn(['leftPane', 'sortDir']),
    content: selectedId && state.getIn(['contents', selectedId]),
    info: selectedId && state.getIn(['infos', selectedId]),
    isActive: state.getIn(['leftPane', 'isActive']),
    isDisabled: !state.getIn(['user', 'isAuthorized']),
    isLoading: state.getIn(['leftPane', 'isLoading']),
    isForbidden: state.getIn(['leftPane', 'isForbidden']),
    isOtherVisible: state.getIn(['rightPane', 'isVisible']),
    isOtherDragging: state.getIn(['drag', 'right', 'isDragging']),
    isOtherDraggingSelected: state.getIn(['drag', 'right', 'isSelected']),
    isOtherDraggingCopy: state.getIn(['drag', 'right', 'dragMode']) === 'COPY'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPaneClick: () => dispatch((0, _pane.setActivePane)('LEFT')),
    onSetShare: share => dispatch((0, _pane.paneCD)('LEFT', share, '/')),
    onSetSort: (field, dir) => dispatch((0, _pane.paneSort)('LEFT', field, dir)),
    onChangeDirectory: directory => dispatch((0, _pane.paneCD)('LEFT', null, directory === '/' ? '/' : directory + '/')),
    onNodeClick: node => dispatch((0, _pane.paneSelect)('LEFT', node)),
    onNodeShiftClick: node => dispatch((0, _pane.paneSelectRange)('LEFT', node)),
    onNodeControlClick: node => dispatch((0, _pane.paneToggleSelect)('LEFT', node)),
    onSizeClick: (share, path) => dispatch((0, _size.loadSize)(share, path)),
    onToggleOther: () => dispatch((0, _pane.togglePane)('RIGHT')),
    onSetMode: mode => dispatch((0, _pane.setPaneMode)('LEFT', mode)),
    onCopyClick: name => dispatch((0, _commands.fastCopy)('LEFT', name)),
    onMoveClick: name => dispatch((0, _commands.fastMove)('LEFT', name)),
    onDeleteClick: name => dispatch((0, _commands.fastDel)('LEFT', name)),
    onDrag: (pane, isDragging, isSelected) => dispatch((0, _drag.handleDrag)(pane, isDragging, isSelected)),
    onDrop: (pane, name, isSelected) => dispatch((0, _drag.handleDrop)(pane, name, isSelected))
  };
};

const LeftPane = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Pane2.default);

exports.default = LeftPane;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let DisabledView = class DisabledView extends _react2.default.PureComponent {

  render() {
    return _react2.default.createElement(
      'div',
      { className: 'view rounded' + (this.props.isActive ? ' active' : '') },
      _react2.default.createElement(
        'div',
        { className: 'body disabled' },
        __('not_authorized_message')
      )
    );
  }
};
DisabledView.propTypes = {
  isActive: _propTypes2.default.bool.isRequired
};
exports.default = DisabledView;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _fa = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let LoadingView = class LoadingView extends _react2.default.PureComponent {

  render() {
    return _react2.default.createElement(
      'div',
      { className: 'view rounded' + (this.props.isActive ? ' active' : '') },
      _react2.default.createElement(
        'div',
        { className: 'body disabled' },
        _react2.default.createElement(
          'h1',
          null,
          _react2.default.createElement(_fa.FaCog, { className: 'rotating' })
        )
      )
    );
  }
};
LoadingView.propTypes = {
  isActive: _propTypes2.default.bool.isRequired
};
exports.default = LoadingView;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _immutable = __webpack_require__(1);

var _fa = __webpack_require__(6);

var _reactstrap = __webpack_require__(4);

var _HintedButton = __webpack_require__(35);

var _HintedButton2 = _interopRequireDefault(_HintedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Header = class Header extends _react2.default.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      isShareDropdownOpen: false,
      isMenuOpen: false,
      isSortNameTooltipOpen: false,
      isSortSizeTooltipOpen: false,
      isModeListTooltipOpen: false,
      isModeContentsTooltipOpen: false,
      isModeInfoTooltipOpen: false,
      isPaneTooltipOpen: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleShareDropdown = this.toggleShareDropdown.bind(this);
    this.toggleSortNameTooltip = this.toggleSortNameTooltip.bind(this);
    this.toggleSortSizeTooltip = this.toggleSortSizeTooltip.bind(this);
    this.toggleModeListTooltip = this.toggleModeListTooltip.bind(this);
    this.toggleModeContentsTooltip = this.toggleModeContentsTooltip.bind(this);
    this.toggleModeInfoTooltip = this.toggleModeInfoTooltip.bind(this);
    this.togglePaneTooltip = this.togglePaneTooltip.bind(this);
    this.toggleNameSort = this.toggleNameSort.bind(this);
    this.toggleSizeSort = this.toggleSizeSort.bind(this);
    this.setListMode = this.setListMode.bind(this);
    this.setContentsMode = this.setContentsMode.bind(this);
    this.setInfoMode = this.setInfoMode.bind(this);
  }

  toggleMenu() {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }

  toggleShareDropdown() {
    this.setState({ isShareDropdownOpen: !this.state.isShareDropdownOpen });
  }

  toggleSortNameTooltip() {
    this.setState({ isSortNameTooltipOpen: !this.state.isSortNameTooltipOpen });
  }

  toggleSortSizeTooltip() {
    this.setState({ isSortSizeTooltipOpen: !this.state.isSortSizeTooltipOpen });
  }

  toggleModeListTooltip() {
    this.setState({ isModeListTooltipOpen: !this.state.isModeListTooltipOpen });
  }

  toggleModeContentsTooltip() {
    this.setState({ isModeContentsTooltipOpen: !this.state.isModeContentsTooltipOpen });
  }

  toggleModeInfoTooltip() {
    this.setState({ isModeInfoTooltipOpen: !this.state.isModeInfoTooltipOpen });
  }

  togglePaneTooltip() {
    this.setState({ isPaneTooltipOpen: !this.state.isPaneTooltipOpen });
  }

  toggleNameSort() {
    this.props.onSetSort('NAME', this.props.sortField === 'NAME' ? this.props.sortDir === 'ASC' ? 'DESC' : 'ASC' : 'ASC');
  }

  toggleSizeSort() {
    this.props.onSetSort('SIZE', this.props.sortField === 'SIZE' ? this.props.sortDir === 'ASC' ? 'DESC' : 'ASC' : 'ASC');
  }

  setListMode() {
    this.props.onSetMode('LIST');
  }

  setContentsMode() {
    this.props.onSetMode('CONTENTS');
  }

  setInfoMode() {
    this.props.onSetMode('INFO');
  }

  render() {
    let share = null;
    if (this.props.mode === 'LIST') {
      let selectedShare = null;
      if (this.props.directory) selectedShare = _react2.default.createElement(
        'span',
        null,
        this.props.share
      );else selectedShare = __('select_share_label');

      let shares = null;
      if (this.props.shares.size) {
        shares = [];
        for (let share of this.props.shares) {
          let name = share.get('name');
          shares.push(_react2.default.createElement(
            _reactstrap.DropdownItem,
            { key: name, onClick: () => this.props.onSetShare(name) },
            name + ' ' + (share.get('isReadOnly') ? __('read_only_label') : __('read_write_label'))
          ));
        }
        shares = _react2.default.createElement(
          _reactstrap.DropdownMenu,
          null,
          shares
        );
      }

      share = _react2.default.createElement(
        _reactstrap.Dropdown,
        {
          color: 'secondary',
          size: 'sm',
          isOpen: this.state.isShareDropdownOpen,
          toggle: this.toggleShareDropdown
        },
        _react2.default.createElement(
          _reactstrap.DropdownToggle,
          { caret: true },
          _react2.default.createElement(
            'div',
            { className: 'fit-width' },
            selectedShare
          )
        ),
        shares
      );
    }

    let path = null;
    if (this.props.mode === 'LIST') {
      if (this.props.directory && this.props.breakpoint !== 'xs' && !(this.props.breakpoint === 'sm' && this.props.isOtherVisible)) path = this.props.directory;
    } else {
      path = this.props.otherPath;
    }

    let sorting = null;
    if (this.props.mode === 'LIST' && this.props.directory) {
      sorting = _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(
          _reactstrap.ButtonGroup,
          null,
          _react2.default.createElement(
            _HintedButton2.default,
            {
              size: 'sm',
              color: this.props.sortField === 'NAME' ? 'primary' : 'secondary',
              onClick: this.toggleNameSort,
              tooltipPlacement: 'bottom',
              tooltipIsOpen: this.state.isSortNameTooltipOpen,
              tooltipToggle: this.toggleSortNameTooltip,
              tooltipHTML: __('sort_name_hint')
            },
            this.props.sortField === 'NAME' ? this.props.sortDir === 'ASC' ? _react2.default.createElement(_fa.FaSortAlphaAsc, null) : _react2.default.createElement(_fa.FaSortAlphaDesc, null) : _react2.default.createElement(_fa.FaSortAlphaAsc, null)
          ),
          _react2.default.createElement(
            _HintedButton2.default,
            {
              size: 'sm',
              color: this.props.sortField === 'SIZE' ? 'primary' : 'secondary',
              onClick: this.toggleSizeSort,
              tooltipPlacement: 'bottom',
              tooltipIsOpen: this.state.isSortSizeTooltipOpen,
              tooltipToggle: this.toggleSortSizeTooltip,
              tooltipHTML: __('sort_size_hint')
            },
            this.props.sortField === 'SIZE' ? this.props.sortDir === 'ASC' ? _react2.default.createElement(_fa.FaSortAmountAsc, null) : _react2.default.createElement(_fa.FaSortAmountDesc, null) : _react2.default.createElement(_fa.FaSortAmountAsc, null)
          )
        ),
        '\xA0'
      );
    }

    let modes = _react2.default.createElement(
      'span',
      null,
      _react2.default.createElement(
        _reactstrap.ButtonGroup,
        null,
        _react2.default.createElement(
          _HintedButton2.default,
          {
            size: 'sm',
            color: this.props.mode === 'LIST' ? 'primary' : 'secondary',
            onClick: this.setListMode,
            tooltipPlacement: 'bottom',
            tooltipIsOpen: this.state.isModeListTooltipOpen,
            tooltipToggle: this.toggleModeListTooltip,
            tooltipHTML: __('mode_list_hint')
          },
          _react2.default.createElement(_fa.FaFolderOpenO, null)
        ),
        _react2.default.createElement(
          _HintedButton2.default,
          {
            size: 'sm',
            color: this.props.mode === 'CONTENTS' ? 'primary' : 'secondary',
            onClick: this.setContentsMode,
            tooltipPlacement: 'bottom',
            tooltipIsOpen: this.state.isModeContentsTooltipOpen,
            tooltipToggle: this.toggleModeContentsTooltip,
            tooltipHTML: __('mode_contents_hint')
          },
          _react2.default.createElement(_fa.FaFileTextO, null)
        ),
        _react2.default.createElement(
          _HintedButton2.default,
          {
            size: 'sm',
            color: this.props.mode === 'INFO' ? 'primary' : 'secondary',
            onClick: this.setInfoMode,
            tooltipPlacement: 'bottom',
            tooltipIsOpen: this.state.isModeInfoTooltipOpen,
            tooltipToggle: this.toggleModeInfoTooltip,
            tooltipHTML: __('mode_info_hint')
          },
          _react2.default.createElement(_fa.FaAlignLeft, null)
        )
      ),
      '\xA0'
    );

    let tools = _react2.default.createElement(
      'span',
      null,
      sorting,
      modes,
      _react2.default.createElement(
        _HintedButton2.default,
        {
          size: 'sm',
          color: 'secondary',
          onClick: this.props.onToggleOther,
          tooltipPlacement: 'bottom',
          tooltipIsOpen: this.state.isPaneTooltipOpen,
          tooltipToggle: this.togglePaneTooltip,
          tooltipHTML: __('toggle_pane_hint')
        },
        this.props.isOtherVisible ? _react2.default.createElement(_fa.FaToggleOn, null) : _react2.default.createElement(_fa.FaToggleOff, null)
      )
    );
    if (this.props.breakpoint === 'xs' || this.props.breakpoint === 'sm' && this.props.isOtherVisible) {
      tools = _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactstrap.Button,
          { size: 'sm', color: 'secondary', onClick: this.toggleMenu },
          _react2.default.createElement(_fa.FaBars, null)
        ),
        this.state.isMenuOpen && _react2.default.createElement(
          'div',
          { className: 'submenu rounded' },
          tools
        )
      );
    }

    return _react2.default.createElement(
      'div',
      { className: 'header' },
      _react2.default.createElement(
        'div',
        { className: 'share' },
        share
      ),
      _react2.default.createElement(
        'div',
        { className: 'path' },
        path
      ),
      _react2.default.createElement(
        'div',
        { className: 'tools' },
        tools
      )
    );
  }
};
Header.propTypes = {
  breakpoint: _propTypes2.default.string.isRequired,
  shares: _propTypes2.default.instanceOf(_immutable.List).isRequired,
  share: _propTypes2.default.string.isRequired,
  directory: _propTypes2.default.string.isRequired,
  mode: _propTypes2.default.string.isRequired,
  otherPath: _propTypes2.default.string.isRequired,
  sortField: _propTypes2.default.string.isRequired,
  sortDir: _propTypes2.default.string.isRequired,
  isOtherVisible: _propTypes2.default.bool.isRequired,
  onSetShare: _propTypes2.default.func.isRequired,
  onSetSort: _propTypes2.default.func.isRequired,
  onSetMode: _propTypes2.default.func.isRequired,
  onToggleOther: _propTypes2.default.func.isRequired
};
exports.default = Header;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let SafeTooltip = class SafeTooltip extends _reactstrap.Tooltip {
  addTargetEvents() {
    if (this._target) super.addTargetEvents();
  }

  removeTargetEvents() {
    if (this._target) super.removeTargetEvents();
  }

  render() {
    if (this.props.target()) return super.render();

    return null;
  }
};
exports.default = SafeTooltip;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _immutable = __webpack_require__(1);

var _ListComponent = __webpack_require__(92);

var _ListComponent2 = _interopRequireDefault(_ListComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ListView = class ListView extends _react2.default.PureComponent {

  render() {
    let bodyClass;
    let listing;
    if (this.props.isForbidden) {
      bodyClass = 'body disabled';
      listing = __('forbidden_message');
    } else if (!this.props.list.size) {
      bodyClass = 'body disabled';
      listing = __('empty_message');
    } else {
      bodyClass = 'body';
      listing = _react2.default.createElement(_ListComponent2.default, {
        which: this.props.which,
        share: this.props.share,
        directory: this.props.directory,
        list: this.props.list,
        sizes: this.props.sizes,
        selectedIndexes: this.props.selectedIndexes,
        onChangeDirectory: this.props.onChangeDirectory,
        onNodeClick: this.props.onNodeClick,
        onNodeShiftClick: this.props.onNodeShiftClick,
        onNodeControlClick: this.props.onNodeControlClick,
        onSizeClick: this.props.onSizeClick,
        onCopyClick: this.props.onCopyClick,
        onMoveClick: this.props.onMoveClick,
        onDeleteClick: this.props.onDeleteClick,
        onDrag: this.props.onDrag
      });
    }

    return _react2.default.createElement(
      'div',
      { className: bodyClass },
      listing
    );
  }
};
ListView.propTypes = {
  which: _propTypes2.default.string.isRequired,
  share: _propTypes2.default.string.isRequired,
  directory: _propTypes2.default.string.isRequired,
  list: _propTypes2.default.instanceOf(_immutable.List).isRequired,
  sizes: _propTypes2.default.instanceOf(_immutable.Map).isRequired,
  selectedIndexes: _propTypes2.default.instanceOf(_immutable.List).isRequired,
  isForbidden: _propTypes2.default.bool.isRequired,
  onChangeDirectory: _propTypes2.default.func.isRequired,
  onNodeClick: _propTypes2.default.func.isRequired,
  onNodeShiftClick: _propTypes2.default.func.isRequired,
  onNodeControlClick: _propTypes2.default.func.isRequired,
  onSizeClick: _propTypes2.default.func.isRequired,
  onCopyClick: _propTypes2.default.func.isRequired,
  onMoveClick: _propTypes2.default.func.isRequired,
  onDeleteClick: _propTypes2.default.func.isRequired,
  onDrag: _propTypes2.default.func.isRequired
};
exports.default = ListView;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _immutable = __webpack_require__(1);

var _reactScrollBox = __webpack_require__(10);

var _reactList = __webpack_require__(93);

var _reactList2 = _interopRequireDefault(_reactList);

var _ScrollViewport = __webpack_require__(11);

var _ScrollViewport2 = _interopRequireDefault(_ScrollViewport);

var _ListItem = __webpack_require__(94);

var _ListItem2 = _interopRequireDefault(_ListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ListComponent = class ListComponent extends _react2.default.PureComponent {

  constructor(props) {
    super(props);

    this.state = { initialIndex: 0 };

    this.renderItem = this.renderItem.bind(this);
    this.renderTable = this.renderTable.bind(this);
  }

  renderItem(index, key) {
    let node = this.props.list.get(index);
    return _react2.default.createElement(_ListItem2.default, {
      which: this.props.which,
      key: key,
      node: node,
      size: this.props.sizes.get(`${this.props.share}:${node.get('path')}`),
      index: index,
      isSelected: this.props.selectedIndexes.includes(index),
      onChangeDirectory: this.props.onChangeDirectory,
      onNodeClick: this.props.onNodeClick,
      onNodeShiftClick: this.props.onNodeShiftClick,
      onNodeControlClick: this.props.onNodeControlClick,
      onSizeClick: () => this.props.onSizeClick(this.props.share, node.get('path')),
      onCopyClick: this.props.onCopyClick,
      onMoveClick: this.props.onMoveClick,
      onDeleteClick: this.props.onDeleteClick,
      onDrag: this.props.onDrag
    });
  }

  renderTable(items, ref) {
    return _react2.default.createElement(
      'div',
      { className: 'listing', ref: ref },
      items
    );
  }

  componentDidMount() {
    setTimeout(() => window.dispatchEvent(new Event('resize')));
  }

  componentWillReceiveProps(nextProps) {
    if (this.list && nextProps.share === this.props.share && nextProps.directory === this.props.directory) {
      let [first] = this.list.getVisibleRange();
      this.setState({ initialIndex: first || 0 });
    } else {
      this.setState({ initialIndex: 0 });
    }
  }

  render() {
    return _react2.default.createElement(
      'div',
      { className: 'scroll-wrapper' },
      _react2.default.createElement(
        _reactScrollBox.GenericScrollBox,
        { permitHandleDragInterruption: false },
        _react2.default.createElement(
          _ScrollViewport2.default,
          { reactList: true },
          _react2.default.createElement(_reactList2.default, {
            length: this.props.list.size,
            minSize: 100,
            initialIndex: this.state.initialIndex,
            itemRenderer: this.renderItem,
            itemsRenderer: this.renderTable,
            type: 'uniform',
            useTranslate3d: true,
            ref: el => {
              this.list = el;
            }
          })
        )
      )
    );
  }
};
ListComponent.propTypes = {
  which: _propTypes2.default.string.isRequired,
  share: _propTypes2.default.string.isRequired,
  directory: _propTypes2.default.string.isRequired,
  list: _propTypes2.default.instanceOf(_immutable.List).isRequired,
  sizes: _propTypes2.default.instanceOf(_immutable.Map).isRequired,
  selectedIndexes: _propTypes2.default.instanceOf(_immutable.List).isRequired,
  onChangeDirectory: _propTypes2.default.func.isRequired,
  onNodeClick: _propTypes2.default.func.isRequired,
  onNodeShiftClick: _propTypes2.default.func.isRequired,
  onNodeControlClick: _propTypes2.default.func.isRequired,
  onSizeClick: _propTypes2.default.func.isRequired,
  onCopyClick: _propTypes2.default.func.isRequired,
  onMoveClick: _propTypes2.default.func.isRequired,
  onDeleteClick: _propTypes2.default.func.isRequired,
  onDrag: _propTypes2.default.func.isRequired
};
exports.default = ListComponent;

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = require("react-list");

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _immutable = __webpack_require__(1);

var _reactDnd = __webpack_require__(25);

var _fa = __webpack_require__(6);

var _HintedButton = __webpack_require__(35);

var _HintedButton2 = _interopRequireDefault(_HintedButton);

var _path = __webpack_require__(15);

var _size = __webpack_require__(36);

var _dragTypes = __webpack_require__(37);

var dragTypes = _interopRequireWildcard(_dragTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const nodeSource = {
  beginDrag(props) {
    return {
      pane: props.which,
      name: props.node.get('name'),
      isSelected: props.isSelected
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

let ListItem = (_dec = (0, _reactDnd.DragSource)(dragTypes.NODE, nodeSource, collect), _dec(_class = class ListItem extends _react2.default.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      isHovered: false,
      isSizeTooltipOpen: false,
      isCopyTooltipOpen: false,
      isMoveTooltipOpen: false,
      isDeleteTooltipOpen: false
    };

    this.toggleSizeTooltip = this.toggleSizeTooltip.bind(this);
    this.toggleCopyTooltip = this.toggleCopyTooltip.bind(this);
    this.toggleMoveTooltip = this.toggleMoveTooltip.bind(this);
    this.toggleDeleteTooltip = this.toggleDeleteTooltip.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
    this.handleNameClick = this.handleNameClick.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.props.onDrag(nextProps.which, nextProps.isDragging, nextProps.isSelected);
  }

  toggleSizeTooltip() {
    this.setState({ isSizeTooltipOpen: !this.state.isSizeTooltipOpen });
  }

  toggleCopyTooltip() {
    this.setState({ isCopyTooltipOpen: !this.state.isCopyTooltipOpen });
  }

  toggleMoveTooltip() {
    this.setState({ isMoveTooltipOpen: !this.state.isMoveTooltipOpen });
  }

  toggleDeleteTooltip() {
    this.setState({ isDeleteTooltipOpen: !this.state.isDeleteTooltipOpen });
  }

  handleEnter() {
    this.setState({ isHovered: true });
  }

  handleLeave() {
    this.setState({ isHovered: false });
  }

  handleNameClick(e) {
    e.stopPropagation();
    this.props.onChangeDirectory((0, _path.join)(this.props.node.get('directory'), this.props.node.get('name')));
  }

  handleItemClick(e) {
    if (this.props.node.get('name') === '..') return;

    if (e.shiftKey) this.props.onNodeShiftClick(this.props.index);else if (e.ctrlKey) this.props.onNodeControlClick(this.props.index);else this.props.onNodeClick(this.props.index);
  }

  render() {
    let icon = this.props.node.get('isDirectory') ? _react2.default.createElement(_fa.FaFolderO, null) : _react2.default.createElement(_fa.FaFileO, null);

    let name = _react2.default.createElement(
      'span',
      null,
      icon,
      ' ',
      this.props.node.get('name'),
      this.props.node.get('target') && ' ⇨ ' + this.props.node.get('target')
    );
    if (this.props.node.get('isDirectory')) {
      name = _react2.default.createElement(
        'a',
        { className: 'link', onClick: this.handleNameClick },
        _react2.default.createElement(
          'strong',
          null,
          name
        )
      );
    }

    let size;
    if (this.props.node.get('isDirectory')) {
      if (this.props.size.size && !this.props.size.get('isForbidden')) size = this.props.size.get('isLoading') ? _react2.default.createElement(_fa.FaCog, { className: 'rotating' }) : (0, _size.human)(this.props.size.get('du'));else size = _react2.default.createElement(_fa.FaBalanceScale, null);

      size = _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _HintedButton2.default,
          {
            size: 'sm',
            color: this.props.isSelected ? 'primary' : 'secondary',
            onClick: this.props.onSizeClick,
            tooltipPlacement: 'bottom',
            tooltipIsOpen: this.state.isSizeTooltipOpen,
            tooltipToggle: this.toggleSizeTooltip,
            tooltipHTML: __('size_button_hint')
          },
          size
        )
      );
    } else {
      size = (0, _size.human)(this.props.node.get('size'));
    }

    let aux = null;
    if (this.props.node.get('name') === '..') {
      aux = _react2.default.createElement(
        'div',
        { className: 'wrapper' },
        _react2.default.createElement(
          'div',
          { className: 'size' },
          _react2.default.createElement(
            'em',
            null,
            __('two_dots_label')
          )
        )
      );
    } else {
      aux = _react2.default.createElement(
        'div',
        { className: 'wrapper' },
        _react2.default.createElement(
          'div',
          { className: 'size' },
          size
        ),
        _react2.default.createElement(
          'div',
          { className: 'tools' },
          _react2.default.createElement(
            _HintedButton2.default,
            {
              size: 'sm',
              color: this.props.isSelected ? 'primary' : 'secondary',
              onClick: () => this.props.onCopyClick(this.props.node.get('name')),
              tooltipPlacement: 'bottom',
              tooltipIsOpen: this.state.isCopyTooltipOpen,
              tooltipToggle: this.toggleCopyTooltip,
              tooltipHTML: __('copy_button_hint')
            },
            _react2.default.createElement(_fa.FaCopy, null)
          ),
          ' ',
          _react2.default.createElement(
            _HintedButton2.default,
            {
              size: 'sm',
              color: this.props.isSelected ? 'primary' : 'secondary',
              onClick: () => this.props.onMoveClick(this.props.node.get('name')),
              tooltipPlacement: 'bottom',
              tooltipIsOpen: this.state.isMoveTooltipOpen,
              tooltipToggle: this.toggleMoveTooltip,
              tooltipHTML: __('move_button_hint')
            },
            _react2.default.createElement(_fa.FaCut, null)
          ),
          ' ',
          _react2.default.createElement(
            _HintedButton2.default,
            {
              size: 'sm',
              color: this.props.isSelected ? 'primary' : 'secondary',
              onClick: () => this.props.onDeleteClick(this.props.node.get('name')),
              tooltipPlacement: 'bottom',
              tooltipIsOpen: this.state.isDeleteTooltipOpen,
              tooltipToggle: this.toggleDeleteTooltip,
              tooltipHTML: __('delete_button_hint')
            },
            _react2.default.createElement(_fa.FaTrash, null)
          )
        )
      );
    }

    return this.props.connectDragSource(_react2.default.createElement(
      'div',
      {
        className: 'listing-item' + (this.props.isSelected ? ' selected' : '') + (this.state.isHovered ? ' hovered' : this.props.index % 2 ? ' odd' : ' even'),
        onMouseEnter: this.handleEnter,
        onMouseLeave: this.handleLeave,
        onClick: this.handleItemClick
      },
      _react2.default.createElement(
        'div',
        { className: 'name' },
        _react2.default.createElement(
          'div',
          { className: 'fit-width' },
          name
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'info' },
        aux
      )
    ));
  }
}) || _class);
ListItem.propTypes = {
  which: _propTypes2.default.string.isRequired,
  node: _propTypes2.default.instanceOf(_immutable.Map).isRequired,
  size: _propTypes2.default.instanceOf(_immutable.Map),
  index: _propTypes2.default.number.isRequired,
  connectDragSource: _propTypes2.default.func,
  isSelected: _propTypes2.default.bool.isRequired,
  isDragging: _propTypes2.default.bool,
  onChangeDirectory: _propTypes2.default.func.isRequired,
  onNodeClick: _propTypes2.default.func.isRequired,
  onNodeShiftClick: _propTypes2.default.func.isRequired,
  onNodeControlClick: _propTypes2.default.func.isRequired,
  onSizeClick: _propTypes2.default.func.isRequired,
  onCopyClick: _propTypes2.default.func.isRequired,
  onMoveClick: _propTypes2.default.func.isRequired,
  onDeleteClick: _propTypes2.default.func.isRequired,
  onDrag: _propTypes2.default.func.isRequired
};
ListItem.defaultProps = {
  size: (0, _immutable.Map)({}),
  connectDragSource: arg => arg,
  isDragging: false
};
exports.default = ListItem;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _immutable = __webpack_require__(1);

var _reactScrollBox = __webpack_require__(10);

var _fa = __webpack_require__(6);

var _ScrollViewport = __webpack_require__(11);

var _ScrollViewport2 = _interopRequireDefault(_ScrollViewport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ContentView = class ContentView extends _react2.default.PureComponent {

  render() {
    let bodyClass = 'body disabled';
    let body;
    if (!this.props.content.size) {
      body = __('contents_view_message');
    } else {
      if (this.props.content.get('isLoading')) {
        body = _react2.default.createElement(
          'h1',
          null,
          _react2.default.createElement(_fa.FaCog, { className: 'rotating' })
        );
      } else if (this.props.content.get('isForbidden')) {
        body = __('forbidden_message');
      } else if (this.props.content.get('type') !== 'TEXT') {
        body = __(`type_${this.props.content.get('type')}_message`);
      } else {
        body = _react2.default.createElement(
          'div',
          { className: 'scroll-wrapper' },
          _react2.default.createElement(
            _reactScrollBox.GenericScrollBox,
            { permitHandleDragInterruption: false },
            _react2.default.createElement(
              _ScrollViewport2.default,
              { classes: 'text-content', reactList: false },
              this.props.content.has('base64') && atob(this.props.content.get('base64')),
              _react2.default.createElement('br', null)
            )
          )
        );
        bodyClass = 'body';
      }
    }

    return _react2.default.createElement(
      'div',
      { className: bodyClass },
      body
    );
  }
};
ContentView.propTypes = {
  content: _propTypes2.default.instanceOf(_immutable.Map)
};
ContentView.defaultProps = {
  content: (0, _immutable.Map)({})
};
exports.default = ContentView;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _immutable = __webpack_require__(1);

var _reactScrollBox = __webpack_require__(10);

var _fa = __webpack_require__(6);

var _momentTimezone = __webpack_require__(97);

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

var _ScrollViewport = __webpack_require__(11);

var _ScrollViewport2 = _interopRequireDefault(_ScrollViewport);

var _size = __webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let InfoView = class InfoView extends _react2.default.PureComponent {

  render() {
    let bodyClass = 'body disabled';
    let body;
    if (!this.props.info.size) {
      body = __('info_view_message');
    } else {
      if (this.props.info.get('isLoading')) {
        body = _react2.default.createElement(
          'h1',
          null,
          _react2.default.createElement(_fa.FaCog, { className: 'rotating' })
        );
      } else if (this.props.info.get('isForbidden')) {
        body = __('forbidden_message');
      } else {
        body = _react2.default.createElement(
          'div',
          { className: 'scroll-wrapper' },
          _react2.default.createElement(
            _reactScrollBox.GenericScrollBox,
            { permitHandleDragInterruption: false },
            _react2.default.createElement(
              _ScrollViewport2.default,
              { reactList: false },
              _react2.default.createElement(
                'div',
                { className: 'listing' },
                _react2.default.createElement(
                  'div',
                  { className: 'listing-item odd' },
                  _react2.default.createElement(
                    'div',
                    { className: 'info' },
                    _react2.default.createElement(
                      'div',
                      { className: 'wrapper' },
                      _react2.default.createElement(
                        'div',
                        { className: 'data' },
                        __('info_name_label')
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'name' },
                    _react2.default.createElement(
                      'div',
                      { className: 'fit-width fixed-margin' },
                      _react2.default.createElement(
                        'strong',
                        null,
                        this.props.info.get('name')
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'listing-item even' },
                  _react2.default.createElement(
                    'div',
                    { className: 'info' },
                    _react2.default.createElement(
                      'div',
                      { className: 'wrapper' },
                      _react2.default.createElement(
                        'div',
                        { className: 'data' },
                        __('info_parent_label')
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'name' },
                    _react2.default.createElement(
                      'div',
                      { className: 'fit-width fixed-margin' },
                      _react2.default.createElement(
                        'strong',
                        null,
                        this.props.info.get('parent')
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'listing-item odd' },
                  _react2.default.createElement(
                    'div',
                    { className: 'info' },
                    _react2.default.createElement(
                      'div',
                      { className: 'wrapper' },
                      _react2.default.createElement(
                        'div',
                        { className: 'data' },
                        __('info_size_bytes_label')
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'name' },
                    _react2.default.createElement(
                      'div',
                      { className: 'fit-width fixed-margin' },
                      _react2.default.createElement(
                        'strong',
                        null,
                        this.props.info.get('size')
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'listing-item even' },
                  _react2.default.createElement(
                    'div',
                    { className: 'info' },
                    _react2.default.createElement(
                      'div',
                      { className: 'wrapper' },
                      _react2.default.createElement(
                        'div',
                        { className: 'data' },
                        __('info_size_human_label')
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'name' },
                    _react2.default.createElement(
                      'div',
                      { className: 'fit-width fixed-margin' },
                      _react2.default.createElement(
                        'strong',
                        null,
                        (0, _size.human)(this.props.info.get('size'))
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'listing-item odd' },
                  _react2.default.createElement(
                    'div',
                    { className: 'info' },
                    _react2.default.createElement(
                      'div',
                      { className: 'wrapper' },
                      _react2.default.createElement(
                        'div',
                        { className: 'data' },
                        __('info_du_bytes_label')
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'name' },
                    _react2.default.createElement(
                      'div',
                      { className: 'fit-width fixed-margin' },
                      _react2.default.createElement(
                        'strong',
                        null,
                        this.props.info.get('du')
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'listing-item even' },
                  _react2.default.createElement(
                    'div',
                    { className: 'info' },
                    _react2.default.createElement(
                      'div',
                      { className: 'wrapper' },
                      _react2.default.createElement(
                        'div',
                        { className: 'data' },
                        __('info_du_human_label')
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'name' },
                    _react2.default.createElement(
                      'div',
                      { className: 'fit-width fixed-margin' },
                      _react2.default.createElement(
                        'strong',
                        null,
                        (0, _size.human)(this.props.info.get('du'))
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'listing-item odd' },
                  _react2.default.createElement(
                    'div',
                    { className: 'info' },
                    _react2.default.createElement(
                      'div',
                      { className: 'wrapper' },
                      _react2.default.createElement(
                        'div',
                        { className: 'data' },
                        __('info_mode_number_label')
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'name' },
                    _react2.default.createElement(
                      'div',
                      { className: 'fit-width fixed-margin' },
                      _react2.default.createElement(
                        'strong',
                        null,
                        this.props.info.get('modeNumber').toString(8)
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'listing-item even' },
                  _react2.default.createElement(
                    'div',
                    { className: 'info' },
                    _react2.default.createElement(
                      'div',
                      { className: 'wrapper' },
                      _react2.default.createElement(
                        'div',
                        { className: 'data' },
                        __('info_mode_string_label')
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'name' },
                    _react2.default.createElement(
                      'div',
                      { className: 'fit-width fixed-margin' },
                      _react2.default.createElement(
                        'strong',
                        null,
                        this.props.info.get('modeString')
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'listing-item odd' },
                  _react2.default.createElement(
                    'div',
                    { className: 'info' },
                    _react2.default.createElement(
                      'div',
                      { className: 'wrapper' },
                      _react2.default.createElement(
                        'div',
                        { className: 'data' },
                        __('info_user_id_label')
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'name' },
                    _react2.default.createElement(
                      'div',
                      { className: 'fit-width fixed-margin' },
                      _react2.default.createElement(
                        'strong',
                        null,
                        this.props.info.get('userId')
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'listing-item even' },
                  _react2.default.createElement(
                    'div',
                    { className: 'info' },
                    _react2.default.createElement(
                      'div',
                      { className: 'wrapper' },
                      _react2.default.createElement(
                        'div',
                        { className: 'data' },
                        __('info_user_name_label')
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'name' },
                    _react2.default.createElement(
                      'div',
                      { className: 'fit-width fixed-margin' },
                      _react2.default.createElement(
                        'strong',
                        null,
                        this.props.info.get('userName')
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'listing-item odd' },
                  _react2.default.createElement(
                    'div',
                    { className: 'info' },
                    _react2.default.createElement(
                      'div',
                      { className: 'wrapper' },
                      _react2.default.createElement(
                        'div',
                        { className: 'data' },
                        __('info_group_id_label')
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'name' },
                    _react2.default.createElement(
                      'div',
                      { className: 'fit-width fixed-margin' },
                      _react2.default.createElement(
                        'strong',
                        null,
                        this.props.info.get('groupId')
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'listing-item even' },
                  _react2.default.createElement(
                    'div',
                    { className: 'info' },
                    _react2.default.createElement(
                      'div',
                      { className: 'wrapper' },
                      _react2.default.createElement(
                        'div',
                        { className: 'data' },
                        __('info_group_name_label')
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'name' },
                    _react2.default.createElement(
                      'div',
                      { className: 'fit-width fixed-margin' },
                      _react2.default.createElement(
                        'strong',
                        null,
                        this.props.info.get('groupName')
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'listing-item odd' },
                  _react2.default.createElement(
                    'div',
                    { className: 'info' },
                    _react2.default.createElement(
                      'div',
                      { className: 'wrapper' },
                      _react2.default.createElement(
                        'div',
                        { className: 'data' },
                        __('info_atime_label')
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'name' },
                    _react2.default.createElement(
                      'div',
                      { className: 'fit-width fixed-margin' },
                      _react2.default.createElement(
                        'strong',
                        null,
                        (0, _momentTimezone2.default)(this.props.info.get('atime')).format('YYYY-MM-DD HH:mm:ss')
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'listing-item even' },
                  _react2.default.createElement(
                    'div',
                    { className: 'info' },
                    _react2.default.createElement(
                      'div',
                      { className: 'wrapper' },
                      _react2.default.createElement(
                        'div',
                        { className: 'data' },
                        __('info_mtime_label')
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'name' },
                    _react2.default.createElement(
                      'div',
                      { className: 'fit-width fixed-margin' },
                      _react2.default.createElement(
                        'strong',
                        null,
                        (0, _momentTimezone2.default)(this.props.info.get('mtime')).format('YYYY-MM-DD HH:mm:ss')
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'listing-item odd' },
                  _react2.default.createElement(
                    'div',
                    { className: 'info' },
                    _react2.default.createElement(
                      'div',
                      { className: 'wrapper' },
                      _react2.default.createElement(
                        'div',
                        { className: 'data' },
                        __('info_ctime_label')
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'name' },
                    _react2.default.createElement(
                      'div',
                      { className: 'fit-width fixed-margin' },
                      _react2.default.createElement(
                        'strong',
                        null,
                        (0, _momentTimezone2.default)(this.props.info.get('ctime')).format('YYYY-MM-DD HH:mm:ss')
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement('br', null)
            )
          )
        );
        bodyClass = 'body';
      }
    }

    return _react2.default.createElement(
      'div',
      { className: bodyClass },
      body
    );
  }
};
InfoView.propTypes = {
  info: _propTypes2.default.instanceOf(_immutable.Map)
};
InfoView.defaultProps = {
  info: (0, _immutable.Map)({})
};
exports.default = InfoView;

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = require("moment-timezone");

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(5);

var _pane = __webpack_require__(17);

var _size = __webpack_require__(28);

var _Pane = __webpack_require__(34);

var _Pane2 = _interopRequireDefault(_Pane);

var _commands = __webpack_require__(7);

var _drag = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mapStateToProps = state => {
  let selectedId;
  if (state.getIn(['leftPane', 'share']) && state.getIn(['leftPane', 'name'])) selectedId = `${state.getIn(['leftPane', 'share'])}:${state.getIn(['leftPane', 'path'])}`;

  return {
    which: 'RIGHT',
    breakpoint: state.getIn(['app', 'breakpoint']),
    mode: state.getIn(['rightPane', 'mode']),
    otherPath: state.getIn(['leftPane', 'path']),
    shares: state.getIn(['user', 'shares']),
    share: state.getIn(['rightPane', 'share']),
    directory: state.getIn(['rightPane', 'directory']),
    list: state.getIn(['rightPane', 'list']),
    sizes: state.get('sizes'),
    selectedIndexes: state.getIn(['rightPane', 'selectedIndexes']),
    sortField: state.getIn(['leftPane', 'sortField']),
    sortDir: state.getIn(['leftPane', 'sortDir']),
    content: selectedId && state.getIn(['contents', selectedId]),
    info: selectedId && state.getIn(['infos', selectedId]),
    isActive: state.getIn(['rightPane', 'isActive']),
    isDisabled: !state.getIn(['user', 'isAuthorized']),
    isLoading: state.getIn(['rightPane', 'isLoading']),
    isForbidden: state.getIn(['rightPane', 'isForbidden']),
    isOtherVisible: state.getIn(['leftPane', 'isVisible']),
    isOtherDragging: state.getIn(['drag', 'left', 'isDragging']),
    isOtherDraggingSelected: state.getIn(['drag', 'left', 'isSelected']),
    isOtherDraggingCopy: state.getIn(['drag', 'left', 'dragMode']) === 'COPY'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPaneClick: () => dispatch((0, _pane.setActivePane)('RIGHT')),
    onSetShare: share => dispatch((0, _pane.paneCD)('RIGHT', share, '/')),
    onSetSort: (field, dir) => dispatch((0, _pane.paneSort)('RIGHT', field, dir)),
    onChangeDirectory: directory => dispatch((0, _pane.paneCD)('RIGHT', null, directory === '/' ? '/' : directory + '/')),
    onNodeClick: node => dispatch((0, _pane.paneSelect)('RIGHT', node)),
    onNodeShiftClick: node => dispatch((0, _pane.paneSelectRange)('RIGHT', node)),
    onNodeControlClick: node => dispatch((0, _pane.paneToggleSelect)('RIGHT', node)),
    onSizeClick: (share, path) => dispatch((0, _size.loadSize)(share, path)),
    onToggleOther: () => dispatch((0, _pane.togglePane)('LEFT')),
    onSetMode: mode => dispatch((0, _pane.setPaneMode)('RIGHT', mode)),
    onCopyClick: name => dispatch((0, _commands.fastCopy)('RIGHT', name)),
    onMoveClick: name => dispatch((0, _commands.fastMove)('RIGHT', name)),
    onDeleteClick: name => dispatch((0, _commands.fastDel)('RIGHT', name)),
    onDrag: (pane, isDragging, isSelected) => dispatch((0, _drag.handleDrag)(pane, isDragging, isSelected)),
    onDrop: (pane, name, isSelected) => dispatch((0, _drag.handleDrop)(pane, name, isSelected))
  };
};

const RightPane = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Pane2.default);

exports.default = RightPane;

/***/ })
/******/ ]);