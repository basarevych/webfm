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
/******/ 	return __webpack_require__(__webpack_require__.s = 46);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/jsx");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// App

Object.defineProperty(exports, "__esModule", {
  value: true
});
var SET_CSRF_TOKEN = exports.SET_CSRF_TOKEN = 'SET_CSRF_TOKEN';
var CONNECT_APP = exports.CONNECT_APP = 'CONNECT_APP';
var DISCONNECT_APP = exports.DISCONNECT_APP = 'DISCONNECT_APP';
var START_APP = exports.START_APP = 'START_APP';
var APP_VERSION = exports.APP_VERSION = 'APP_VERSION';
var SCREEN_RESIZE = exports.SCREEN_RESIZE = 'SCREEN_RESIZE';

// Lists
var SET_LIST = exports.SET_LIST = 'SET_LIST';
var CLEAR_LIST = exports.CLEAR_LIST = 'CLEAR_LIST';
var SET_CONTENT = exports.SET_CONTENT = 'SET_CONTENT';
var CLEAR_CONTENT = exports.CLEAR_CONTENT = 'CLEAR_CONTENT';
var SET_INFO = exports.SET_INFO = 'SET_INFO';
var CLEAR_INFO = exports.CLEAR_INFO = 'CLEAR_INFO';
var SET_SIZE = exports.SET_SIZE = 'SET_SIZE';
var CLEAR_SIZE = exports.CLEAR_SIZE = 'CLEAR_SIZE';

// User
var SET_USER = exports.SET_USER = 'SET_USER';

// Navbar
var OPEN_NAVBAR = exports.OPEN_NAVBAR = 'OPEN_NAVBAR';
var CLOSE_NAVBAR = exports.CLOSE_NAVBAR = 'CLOSE_NAVBAR';
var TOGGLE_NAVBAR = exports.TOGGLE_NAVBAR = 'TOGGLE_NAVBAR';

// Progress
var START_PROGRESS = exports.START_PROGRESS = 'START_PROGRESS';
var UPDATE_PROGRESS = exports.UPDATE_PROGRESS = 'UPDATE_PROGRESS';
var FINISH_PROGRESS = exports.FINISH_PROGRESS = 'FINISH_PROGRESS';
var CLEAR_PROGRESS = exports.CLEAR_PROGRESS = 'CLEAR_PROGRESS';

// Panes
var DEACTIVATE_RIGHT_PANE = exports.DEACTIVATE_RIGHT_PANE = 'DEACTIVATE_RIGHT_PANE';
var DEACTIVATE_LEFT_PANE = exports.DEACTIVATE_LEFT_PANE = 'DEACTIVATE_LEFT_PANE';
var ACTIVATE_LEFT_PANE = exports.ACTIVATE_LEFT_PANE = 'ACTIVATE_LEFT_PANE';
var ACTIVATE_RIGHT_PANE = exports.ACTIVATE_RIGHT_PANE = 'ACTIVATE_RIGHT_PANE';
var SHOW_LEFT_PANE = exports.SHOW_LEFT_PANE = 'SHOW_LEFT_PANE';
var SHOW_RIGHT_PANE = exports.SHOW_RIGHT_PANE = 'SHOW_RIGHT_PANE';
var HIDE_LEFT_PANE = exports.HIDE_LEFT_PANE = 'HIDE_LEFT_PANE';
var HIDE_RIGHT_PANE = exports.HIDE_RIGHT_PANE = 'HIDE_RIGHT_PANE';
var START_LEFT_PANE_LOADING = exports.START_LEFT_PANE_LOADING = 'START_LEFT_PANE_LOADING';
var START_RIGHT_PANE_LOADING = exports.START_RIGHT_PANE_LOADING = 'START_RIGHT_PANE_LOADING';
var STOP_LEFT_PANE_LOADING = exports.STOP_LEFT_PANE_LOADING = 'STOP_LEFT_PANE_LOADING';
var STOP_RIGHT_PANE_LOADING = exports.STOP_RIGHT_PANE_LOADING = 'STOP_RIGHT_PANE_LOADING';
var SET_LEFT_PANE_MODE = exports.SET_LEFT_PANE_MODE = 'SET_LEFT_PANE_MODE';
var SET_RIGHT_PANE_MODE = exports.SET_RIGHT_PANE_MODE = 'SET_RIGHT_PANE_MODE';
var SET_LEFT_PANE_SHARE = exports.SET_LEFT_PANE_SHARE = 'SET_LEFT_PANE_SHARE';
var SET_RIGHT_PANE_SHARE = exports.SET_RIGHT_PANE_SHARE = 'SET_RIGHT_PANE_SHARE';
var SET_LEFT_PANE_PATH = exports.SET_LEFT_PANE_PATH = 'SET_LEFT_PANE_PATH';
var SET_RIGHT_PANE_PATH = exports.SET_RIGHT_PANE_PATH = 'SET_RIGHT_PANE_PATH';
var SET_LEFT_PANE_SORT = exports.SET_LEFT_PANE_SORT = 'SET_LEFT_PANE_SORT';
var SET_RIGHT_PANE_SORT = exports.SET_RIGHT_PANE_SORT = 'SET_RIGHT_PANE_SORT';
var SET_LEFT_PANE_LIST = exports.SET_LEFT_PANE_LIST = 'SET_LEFT_PANE_LIST';
var SET_RIGHT_PANE_LIST = exports.SET_RIGHT_PANE_LIST = 'SET_RIGHT_PANE_LIST';
var SET_LEFT_PANE_SELECTION = exports.SET_LEFT_PANE_SELECTION = 'SET_LEFT_PANE_SELECTION';
var SET_RIGHT_PANE_SELECTION = exports.SET_RIGHT_PANE_SELECTION = 'SET_RIGHT_PANE_SELECTION';

// Failure dialog
var SHOW_FAILURE_DIALOG = exports.SHOW_FAILURE_DIALOG = 'SHOW_FAILURE_DIALOG';
var HIDE_FAILURE_DIALOG = exports.HIDE_FAILURE_DIALOG = 'HIDE_FAILURE_DIALOG';

// Copy dialog
var LOCK_COPY_DIALOG = exports.LOCK_COPY_DIALOG = 'LOCK_COPY_DIALOG';
var UNLOCK_COPY_DIALOG = exports.UNLOCK_COPY_DIALOG = 'UNLOCK_COPY_DIALOG';
var RESET_COPY_DIALOG = exports.RESET_COPY_DIALOG = 'RESET_COPY_DIALOG';
var SHOW_COPY_DIALOG = exports.SHOW_COPY_DIALOG = 'SHOW_COPY_DIALOG';
var HIDE_COPY_DIALOG = exports.HIDE_COPY_DIALOG = 'HIDE_COPY_DIALOG';
var SUBMIT_COPY_DIALOG = exports.SUBMIT_COPY_DIALOG = 'SUBMIT_COPY_DIALOG';
var UPDATE_COPY_DIALOG = exports.UPDATE_COPY_DIALOG = 'UPDATE_COPY_DIALOG';
var START_COPY_DIALOG_FIND = exports.START_COPY_DIALOG_FIND = 'START_COPY_DIALOG_FIND';
var STOP_COPY_DIALOG_FIND = exports.STOP_COPY_DIALOG_FIND = 'STOP_COPY_DIALOG_FIND';

// Delete dialog
var LOCK_DELETE_DIALOG = exports.LOCK_DELETE_DIALOG = 'LOCK_DELETE_DIALOG';
var UNLOCK_DELETE_DIALOG = exports.UNLOCK_DELETE_DIALOG = 'UNLOCK_DELETE_DIALOG';
var RESET_DELETE_DIALOG = exports.RESET_DELETE_DIALOG = 'RESET_DELETE_DIALOG';
var SHOW_DELETE_DIALOG = exports.SHOW_DELETE_DIALOG = 'SHOW_DELETE_DIALOG';
var HIDE_DELETE_DIALOG = exports.HIDE_DELETE_DIALOG = 'HIDE_DELETE_DIALOG';
var SUBMIT_DELETE_DIALOG = exports.SUBMIT_DELETE_DIALOG = 'SUBMIT_DELETE_DIALOG';
var UPDATE_DELETE_DIALOG = exports.UPDATE_DELETE_DIALOG = 'UPDATE_DELETE_DIALOG';
var START_DELETE_DIALOG_FIND = exports.START_DELETE_DIALOG_FIND = 'START_DELETE_DIALOG_FIND';
var STOP_DELETE_DIALOG_FIND = exports.STOP_DELETE_DIALOG_FIND = 'STOP_DELETE_DIALOG_FIND';

// MkDir dialog
var LOCK_MKDIR_DIALOG = exports.LOCK_MKDIR_DIALOG = 'LOCK_MKDIR_DIALOG';
var UNLOCK_MKDIR_DIALOG = exports.UNLOCK_MKDIR_DIALOG = 'UNLOCK_MKDIR_DIALOG';
var RESET_MKDIR_DIALOG = exports.RESET_MKDIR_DIALOG = 'RESET_MKDIR_DIALOG';
var SHOW_MKDIR_DIALOG = exports.SHOW_MKDIR_DIALOG = 'SHOW_MKDIR_DIALOG';
var HIDE_MKDIR_DIALOG = exports.HIDE_MKDIR_DIALOG = 'HIDE_MKDIR_DIALOG';
var SUBMIT_MKDIR_DIALOG = exports.SUBMIT_MKDIR_DIALOG = 'SUBMIT_MKDIR_DIALOG';
var UPDATE_MKDIR_DIALOG = exports.UPDATE_MKDIR_DIALOG = 'UPDATE_MKDIR_DIALOG';

// Move dialog
var LOCK_MOVE_DIALOG = exports.LOCK_MOVE_DIALOG = 'LOCK_MOVE_DIALOG';
var UNLOCK_MOVE_DIALOG = exports.UNLOCK_MOVE_DIALOG = 'UNLOCK_MOVE_DIALOG';
var RESET_MOVE_DIALOG = exports.RESET_MOVE_DIALOG = 'RESET_MOVE_DIALOG';
var SHOW_MOVE_DIALOG = exports.SHOW_MOVE_DIALOG = 'SHOW_MOVE_DIALOG';
var HIDE_MOVE_DIALOG = exports.HIDE_MOVE_DIALOG = 'HIDE_MOVE_DIALOG';
var SUBMIT_MOVE_DIALOG = exports.SUBMIT_MOVE_DIALOG = 'SUBMIT_MOVE_DIALOG';
var UPDATE_MOVE_DIALOG = exports.UPDATE_MOVE_DIALOG = 'UPDATE_MOVE_DIALOG';
var START_MOVE_DIALOG_FIND = exports.START_MOVE_DIALOG_FIND = 'START_MOVE_DIALOG_FIND';
var STOP_MOVE_DIALOG_FIND = exports.STOP_MOVE_DIALOG_FIND = 'STOP_MOVE_DIALOG_FIND';

// Rename dialog
var LOCK_RENAME_DIALOG = exports.LOCK_RENAME_DIALOG = 'LOCK_RENAME_DIALOG';
var UNLOCK_RENAME_DIALOG = exports.UNLOCK_RENAME_DIALOG = 'UNLOCK_RENAME_DIALOG';
var RESET_RENAME_DIALOG = exports.RESET_RENAME_DIALOG = 'RESET_RENAME_DIALOG';
var SHOW_RENAME_DIALOG = exports.SHOW_RENAME_DIALOG = 'SHOW_RENAME_DIALOG';
var HIDE_RENAME_DIALOG = exports.HIDE_RENAME_DIALOG = 'HIDE_RENAME_DIALOG';
var SUBMIT_RENAME_DIALOG = exports.SUBMIT_RENAME_DIALOG = 'SUBMIT_RENAME_DIALOG';
var UPDATE_RENAME_DIALOG = exports.UPDATE_RENAME_DIALOG = 'UPDATE_RENAME_DIALOG';

// Sign in dialog
var LOCK_SIGN_IN_DIALOG = exports.LOCK_SIGN_IN_DIALOG = 'LOCK_SIGN_IN_DIALOG';
var UNLOCK_SIGN_IN_DIALOG = exports.UNLOCK_SIGN_IN_DIALOG = 'UNLOCK_SIGN_IN_DIALOG';
var RESET_SIGN_IN_DIALOG = exports.RESET_SIGN_IN_DIALOG = 'RESET_SIGN_IN_DIALOG';
var SHOW_SIGN_IN_DIALOG = exports.SHOW_SIGN_IN_DIALOG = 'SHOW_SIGN_IN_DIALOG';
var HIDE_SIGN_IN_DIALOG = exports.HIDE_SIGN_IN_DIALOG = 'HIDE_SIGN_IN_DIALOG';
var SUBMIT_SIGN_IN_DIALOG = exports.SUBMIT_SIGN_IN_DIALOG = 'SUBMIT_SIGN_IN_DIALOG';
var UPDATE_SIGN_IN_DIALOG = exports.UPDATE_SIGN_IN_DIALOG = 'UPDATE_SIGN_IN_DIALOG';

// This will never be fired
var UNUSED = exports.UNUSED = 'UNUSED';

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/fa");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/get-iterator");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signIn = exports.signOut = exports.updateStatus = exports.setUser = undefined;

var _stringify = __webpack_require__(38);

var _stringify2 = _interopRequireDefault(_stringify);

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(17);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _actionTypes = __webpack_require__(3);

var actions = _interopRequireWildcard(_actionTypes);

var _package = __webpack_require__(68);

var _package2 = _interopRequireDefault(_package);

var _i18n = __webpack_require__(69);

var _i18n2 = _interopRequireDefault(_i18n);

var _app = __webpack_require__(39);

var _pane = __webpack_require__(28);

var _signInDialog = __webpack_require__(31);

var _navbar = __webpack_require__(30);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setUser = exports.setUser = function setUser(isAuthorized, login, locale, shares) {
  return {
    type: actions.SET_USER,
    isAuthorized: isAuthorized,
    login: login,
    locale: locale,
    shares: shares
  };
};

var updateStatus = exports.updateStatus = function updateStatus() {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(dispatch, getState) {
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt('return', new _promise2.default(function () {
                var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(resolve) {
                  return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          io.socket.get('/status', function () {
                            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(data, response) {
                              var user;
                              return _regenerator2.default.wrap(function _callee$(_context) {
                                while (1) {
                                  switch (_context.prev = _context.next) {
                                    case 0:
                                      if (!(response.statusCode === 200)) {
                                        _context.next = 9;
                                        break;
                                      }

                                      _context.next = 3;
                                      return dispatch((0, _app.setAppVersion)(data.version === _package2.default.version));

                                    case 3:
                                      _context.next = 5;
                                      return dispatch(setUser(data.isAuthorized, data.login, data.locale, data.shares));

                                    case 5:
                                      user = getState().get('user');


                                      if (_i18n2.default.getLocale() !== user.get('locale')) _i18n2.default.setLocale(user.get('locale'));
                                      _context.next = 10;
                                      break;

                                    case 9:
                                      window.location.reload(true);

                                    case 10:

                                      resolve();

                                    case 11:
                                    case 'end':
                                      return _context.stop();
                                  }
                                }
                              }, _callee, undefined);
                            }));

                            return function (_x4, _x5) {
                              return _ref3.apply(this, arguments);
                            };
                          }());

                        case 1:
                        case 'end':
                          return _context2.stop();
                      }
                    }
                  }, _callee2, undefined);
                }));

                return function (_x3) {
                  return _ref2.apply(this, arguments);
                };
              }()));

            case 1:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
};

var signOut = exports.signOut = function signOut() {
  return function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(dispatch, getState) {
      var app;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              app = getState().get('app');
              _context4.next = 3;
              return new _promise2.default(function (resolve) {
                io.socket.post('/auth/sign-out', { _csrf: app.get('csrf') }, function () {
                  return resolve();
                });
              });

            case 3:
              return _context4.abrupt('return', dispatch(updateStatus()));

            case 4:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined);
    }));

    return function (_x6, _x7) {
      return _ref4.apply(this, arguments);
    };
  }();
};

var signIn = exports.signIn = function signIn(when, validate) {
  return function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(dispatch, getState) {
      var state, app, signInDialog;
      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              state = getState();
              app = state.get('app');
              signInDialog = state.get('signInDialog');

              if (!(signInDialog.get('submittedAt') >= when)) {
                _context6.next = 5;
                break;
              }

              return _context6.abrupt('return');

            case 5:
              if (validate) {
                _context6.next = 8;
                break;
              }

              _context6.next = 8;
              return dispatch((0, _signInDialog.lockSignInDialog)());

            case 8:
              _context6.next = 10;
              return dispatch((0, _signInDialog.submitSignInDialog)(when));

            case 10:
              return _context6.abrupt('return', new _promise2.default(function () {
                var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(resolve) {
                  var response, data;
                  return _regenerator2.default.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.prev = 0;
                          _context5.next = 3;
                          return fetch('/auth/sign-in', {
                            method: 'POST',
                            credentials: 'same-origin',
                            headers: {
                              'Content-Type': 'application/json',
                              'Accept': 'application/json'
                            },
                            body: (0, _stringify2.default)({
                              login: signInDialog.getIn(['values', 'login']),
                              password: signInDialog.getIn(['values', 'password']),
                              _validate: validate,
                              _csrf: app.get('csrf')
                            })
                          });

                        case 3:
                          response = _context5.sent;

                          if (!(response.status === 200)) {
                            _context5.next = 23;
                            break;
                          }

                          _context5.next = 7;
                          return response.json();

                        case 7:
                          data = _context5.sent;


                          if (validate) {
                            // clear previous errors of the field on successful validation
                            if (!data.errors[validate]) data.errors[validate] = {};
                          } else {
                            // clear all successful fields previous errors on submit
                            if (!data.errors.login) data.errors.login = {};
                            if (!data.errors.password) data.errors.password = {};
                          }

                          _context5.next = 11;
                          return dispatch((0, _signInDialog.updateSignInDialog)({
                            values: data.values || {},
                            messages: data.messages || {},
                            errors: data.errors || {}
                          }, when));

                        case 11:
                          if (validate) {
                            _context5.next = 22;
                            break;
                          }

                          _context5.next = 14;
                          return dispatch((0, _signInDialog.unlockSignInDialog)());

                        case 14:
                          if (!data.success) {
                            _context5.next = 22;
                            break;
                          }

                          _context5.next = 17;
                          return dispatch((0, _navbar.closeNavbar)());

                        case 17:
                          _context5.next = 19;
                          return dispatch((0, _signInDialog.hideSignInDialog)());

                        case 19:
                          _context5.next = 21;
                          return dispatch(updateStatus());

                        case 21:
                          dispatch((0, _pane.initPanes)());

                        case 22:
                          return _context5.abrupt('return', resolve());

                        case 23:
                          _context5.next = 28;
                          break;

                        case 25:
                          _context5.prev = 25;
                          _context5.t0 = _context5['catch'](0);

                          console.error(_context5.t0);

                        case 28:
                          if (validate) {
                            _context5.next = 31;
                            break;
                          }

                          _context5.next = 31;
                          return dispatch((0, _signInDialog.unlockSignInDialog)());

                        case 31:

                          resolve();

                        case 32:
                        case 'end':
                          return _context5.stop();
                      }
                    }
                  }, _callee5, undefined, [[0, 25]]);
                }));

                return function (_x10) {
                  return _ref6.apply(this, arguments);
                };
              }()));

            case 11:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, undefined);
    }));

    return function (_x8, _x9) {
      return _ref5.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/promise");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _from = __webpack_require__(42);

var _from2 = _interopRequireDefault(_from);

var _jsx2 = __webpack_require__(2);

var _jsx3 = _interopRequireDefault(_jsx2);

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _immutable = __webpack_require__(0);

var _reactTransitionGroup = __webpack_require__(27);

var _Fade = __webpack_require__(29);

var _Fade2 = _interopRequireDefault(_Fade);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapTypeToClass = function mapTypeToClass(type) {
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

var FormMessages = function (_React$PureComponent) {
  (0, _inherits3.default)(FormMessages, _React$PureComponent);

  function FormMessages() {
    (0, _classCallCheck3.default)(this, FormMessages);
    return (0, _possibleConstructorReturn3.default)(this, (FormMessages.__proto__ || (0, _getPrototypeOf2.default)(FormMessages)).apply(this, arguments));
  }

  (0, _createClass3.default)(FormMessages, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return (0, _jsx3.default)(_reactTransitionGroup.TransitionGroup, {}, void 0, (0, _from2.default)(this.props.messages.keys()).map(function (code) {
        return (0, _jsx3.default)(_Fade2.default, {}, code, (0, _jsx3.default)('div', {
          className: mapTypeToClass(_this2.props.messages.getIn([code, 'type'])),
          role: 'alert',
          dangerouslySetInnerHTML: { __html: _this2.props.messages.getIn([code, 'message']) }
        }));
      }));
    }
  }]);
  return FormMessages;
}(_react2.default.PureComponent);

FormMessages.defaultProps = {
  messages: (0, _immutable.Map)({})
};
exports.default = FormMessages;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-scroll-box");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(2);

var _jsx3 = _interopRequireDefault(_jsx2);

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _reactDom = __webpack_require__(80);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Viewport = function (_React$Component) {
  (0, _inherits3.default)(Viewport, _React$Component);

  function Viewport() {
    (0, _classCallCheck3.default)(this, Viewport);
    return (0, _possibleConstructorReturn3.default)(this, (Viewport.__proto__ || (0, _getPrototypeOf2.default)(Viewport)).apply(this, arguments));
  }

  (0, _createClass3.default)(Viewport, [{
    key: 'scrollDown',
    value: function scrollDown() {
      if (!this.touching) this.viewport.scrollTop = this.viewport.scrollHeight;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.viewport = _reactDom2.default.findDOMNode(this);
      this.touching = false;

      try {
        document.createEvent('TouchEvent');
      } catch (error) {
        return;
      }

      var scrollStartTop = 0;
      var scrollStartLeft = 0;
      var scrollTop = 0;
      var scrollLeft = 0;
      var frameId = null;
      var frame = function frame() {
        frameId = null;
        _this2.viewport.scrollTop = scrollTop;
        _this2.viewport.scrollLeft = scrollLeft;
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
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
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
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var target = void 0;
      if (this.props.reactList) target = _react2.default.cloneElement(this.props.children, { scrollParentGetter: function scrollParentGetter() {
          return _reactDom2.default.findDOMNode(_this3);
        } });else target = this.props.children;

      return (0, _jsx3.default)('div', {
        className: 'scroll-box__viewport' + (this.props.classes ? ' ' + this.props.classes : '')
      }, void 0, target);
    }
  }]);
  return Viewport;
}(_react2.default.Component);

Viewport.defaultProps = {
  classes: '',
  reactList: false
};
exports.default = Viewport;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.find = exports.fastDel = exports.del = exports.fastMove = exports.move = exports.fastCopy = exports.copy = exports.rename = exports.mkdir = undefined;

var _getIterator2 = __webpack_require__(15);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = __webpack_require__(38);

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = __webpack_require__(17);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _navbar = __webpack_require__(30);

var _mkdirDialog = __webpack_require__(32);

var _renameDialog = __webpack_require__(33);

var _copyDialog = __webpack_require__(34);

var _moveDialog = __webpack_require__(35);

var _deleteDialog = __webpack_require__(36);

var _failureDialog = __webpack_require__(43);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mkdir = exports.mkdir = function mkdir(when, validate) {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dispatch, getState) {
      var state, app, mkdirDialog;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              state = getState();
              app = state.get('app');
              mkdirDialog = state.get('mkdirDialog');

              if (!(mkdirDialog.get('submittedAt') >= when)) {
                _context2.next = 5;
                break;
              }

              return _context2.abrupt('return');

            case 5:
              if (validate) {
                _context2.next = 8;
                break;
              }

              _context2.next = 8;
              return dispatch((0, _mkdirDialog.lockMkdirDialog)());

            case 8:
              _context2.next = 10;
              return dispatch((0, _mkdirDialog.submitMkdirDialog)(when));

            case 10:
              return _context2.abrupt('return', new _promise2.default(function () {
                var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(resolve) {
                  var response, data;
                  return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.prev = 0;
                          _context.next = 3;
                          return fetch('/pane/mkdir', {
                            method: 'POST',
                            credentials: 'same-origin',
                            headers: {
                              'Content-Type': 'application/json',
                              'Accept': 'application/json'
                            },
                            body: (0, _stringify2.default)({
                              share: mkdirDialog.getIn(['values', 'share']),
                              directory: mkdirDialog.getIn(['values', 'directory']),
                              name: mkdirDialog.getIn(['values', 'name']),
                              _validate: validate,
                              _csrf: app.get('csrf')
                            })
                          });

                        case 3:
                          response = _context.sent;

                          if (!(response.status === 200)) {
                            _context.next = 20;
                            break;
                          }

                          _context.next = 7;
                          return response.json();

                        case 7:
                          data = _context.sent;


                          if (validate) {
                            // clear previous errors of the field on successful validation
                            if (!data.errors[validate]) data.errors[validate] = {};
                          } else {
                            // clear all successful fields previous errors on submit
                            if (!data.errors.share) data.errors.share = {};
                            if (!data.errors.directory) data.errors.directory = {};
                            if (!data.errors.name) data.errors.name = {};
                          }

                          _context.next = 11;
                          return dispatch((0, _mkdirDialog.updateMkdirDialog)({
                            values: data.values || {},
                            messages: data.messages || {},
                            errors: data.errors || {}
                          }, when));

                        case 11:
                          if (validate) {
                            _context.next = 19;
                            break;
                          }

                          _context.next = 14;
                          return dispatch((0, _mkdirDialog.unlockMkdirDialog)());

                        case 14:
                          if (!data.success) {
                            _context.next = 19;
                            break;
                          }

                          _context.next = 17;
                          return dispatch((0, _navbar.closeNavbar)());

                        case 17:
                          _context.next = 19;
                          return dispatch((0, _mkdirDialog.hideMkdirDialog)());

                        case 19:
                          return _context.abrupt('return', resolve());

                        case 20:
                          _context.next = 25;
                          break;

                        case 22:
                          _context.prev = 22;
                          _context.t0 = _context['catch'](0);

                          console.error(_context.t0);

                        case 25:
                          if (validate) {
                            _context.next = 28;
                            break;
                          }

                          _context.next = 28;
                          return dispatch((0, _mkdirDialog.unlockMkdirDialog)());

                        case 28:

                          resolve();

                        case 29:
                        case 'end':
                          return _context.stop();
                      }
                    }
                  }, _callee, undefined, [[0, 22]]);
                }));

                return function (_x3) {
                  return _ref2.apply(this, arguments);
                };
              }()));

            case 11:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
};

var rename = exports.rename = function rename(when, validate) {
  return function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(dispatch, getState) {
      var state, app, renameDialog;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              state = getState();
              app = state.get('app');
              renameDialog = state.get('renameDialog');

              if (!(renameDialog.get('submittedAt') >= when)) {
                _context4.next = 5;
                break;
              }

              return _context4.abrupt('return');

            case 5:
              if (validate) {
                _context4.next = 8;
                break;
              }

              _context4.next = 8;
              return dispatch((0, _renameDialog.lockRenameDialog)());

            case 8:
              _context4.next = 10;
              return dispatch((0, _renameDialog.submitRenameDialog)(when));

            case 10:
              return _context4.abrupt('return', new _promise2.default(function () {
                var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(resolve) {
                  var response, data;
                  return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          _context3.prev = 0;
                          _context3.next = 3;
                          return fetch('/pane/rename', {
                            method: 'POST',
                            credentials: 'same-origin',
                            headers: {
                              'Content-Type': 'application/json',
                              'Accept': 'application/json'
                            },
                            body: (0, _stringify2.default)({
                              share: renameDialog.getIn(['values', 'share']),
                              directory: renameDialog.getIn(['values', 'directory']),
                              name: renameDialog.getIn(['values', 'name']),
                              newName: renameDialog.getIn(['values', 'newName']),
                              _validate: validate,
                              _csrf: app.get('csrf')
                            })
                          });

                        case 3:
                          response = _context3.sent;

                          if (!(response.status === 200)) {
                            _context3.next = 20;
                            break;
                          }

                          _context3.next = 7;
                          return response.json();

                        case 7:
                          data = _context3.sent;


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

                          _context3.next = 11;
                          return dispatch((0, _renameDialog.updateRenameDialog)({
                            values: data.values || {},
                            messages: data.messages || {},
                            errors: data.errors || {}
                          }, when));

                        case 11:
                          if (validate) {
                            _context3.next = 19;
                            break;
                          }

                          _context3.next = 14;
                          return dispatch((0, _renameDialog.unlockRenameDialog)());

                        case 14:
                          if (!data.success) {
                            _context3.next = 19;
                            break;
                          }

                          _context3.next = 17;
                          return dispatch((0, _navbar.closeNavbar)());

                        case 17:
                          _context3.next = 19;
                          return dispatch((0, _renameDialog.hideRenameDialog)());

                        case 19:
                          return _context3.abrupt('return', resolve());

                        case 20:
                          _context3.next = 25;
                          break;

                        case 22:
                          _context3.prev = 22;
                          _context3.t0 = _context3['catch'](0);

                          console.error(_context3.t0);

                        case 25:
                          if (validate) {
                            _context3.next = 28;
                            break;
                          }

                          _context3.next = 28;
                          return dispatch((0, _renameDialog.unlockRenameDialog)());

                        case 28:

                          resolve();

                        case 29:
                        case 'end':
                          return _context3.stop();
                      }
                    }
                  }, _callee3, undefined, [[0, 22]]);
                }));

                return function (_x6) {
                  return _ref4.apply(this, arguments);
                };
              }()));

            case 11:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined);
    }));

    return function (_x4, _x5) {
      return _ref3.apply(this, arguments);
    };
  }();
};

var copy = exports.copy = function copy(when, validate) {
  return function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(dispatch, getState) {
      var state, app, copyDialog;
      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              state = getState();
              app = state.get('app');
              copyDialog = state.get('copyDialog');

              if (!(copyDialog.get('submittedAt') >= when)) {
                _context6.next = 5;
                break;
              }

              return _context6.abrupt('return');

            case 5:
              if (validate) {
                _context6.next = 8;
                break;
              }

              _context6.next = 8;
              return dispatch((0, _copyDialog.lockCopyDialog)());

            case 8:
              _context6.next = 10;
              return dispatch((0, _copyDialog.submitCopyDialog)(when));

            case 10:
              return _context6.abrupt('return', new _promise2.default(function () {
                var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(resolve) {
                  var response, data;
                  return _regenerator2.default.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.prev = 0;
                          _context5.next = 3;
                          return fetch('/pane/copy', {
                            method: 'POST',
                            credentials: 'same-origin',
                            headers: {
                              'Content-Type': 'application/json',
                              'Accept': 'application/json'
                            },
                            body: (0, _stringify2.default)({
                              srcShare: copyDialog.getIn(['values', 'srcShare']),
                              srcDirectory: copyDialog.getIn(['values', 'srcDirectory']),
                              srcName: copyDialog.getIn(['values', 'srcName']),
                              dstShare: copyDialog.getIn(['values', 'dstShare']),
                              dstDirectory: copyDialog.getIn(['values', 'dstDirectory']),
                              _validate: validate,
                              _csrf: app.get('csrf')
                            })
                          });

                        case 3:
                          response = _context5.sent;

                          if (!(response.status === 200)) {
                            _context5.next = 20;
                            break;
                          }

                          _context5.next = 7;
                          return response.json();

                        case 7:
                          data = _context5.sent;


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

                          _context5.next = 11;
                          return dispatch((0, _copyDialog.updateCopyDialog)({
                            values: data.values || {},
                            messages: data.messages || {},
                            errors: data.errors || {}
                          }, when));

                        case 11:
                          if (validate) {
                            _context5.next = 19;
                            break;
                          }

                          _context5.next = 14;
                          return dispatch((0, _copyDialog.unlockCopyDialog)());

                        case 14:
                          if (!data.success) {
                            _context5.next = 19;
                            break;
                          }

                          _context5.next = 17;
                          return dispatch((0, _navbar.closeNavbar)());

                        case 17:
                          _context5.next = 19;
                          return dispatch((0, _copyDialog.hideCopyDialog)());

                        case 19:
                          return _context5.abrupt('return', resolve());

                        case 20:
                          _context5.next = 25;
                          break;

                        case 22:
                          _context5.prev = 22;
                          _context5.t0 = _context5['catch'](0);

                          console.error(_context5.t0);

                        case 25:
                          if (validate) {
                            _context5.next = 28;
                            break;
                          }

                          _context5.next = 28;
                          return dispatch((0, _copyDialog.unlockCopyDialog)());

                        case 28:

                          resolve();

                        case 29:
                        case 'end':
                          return _context5.stop();
                      }
                    }
                  }, _callee5, undefined, [[0, 22]]);
                }));

                return function (_x9) {
                  return _ref6.apply(this, arguments);
                };
              }()));

            case 11:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, undefined);
    }));

    return function (_x7, _x8) {
      return _ref5.apply(this, arguments);
    };
  }();
};

var fastCopy = exports.fastCopy = function fastCopy(pane, name) {
  return function () {
    var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(dispatch, getState) {
      var state, app, leftPane, rightPane;
      return _regenerator2.default.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              state = getState();
              app = state.get('app');
              leftPane = state.get('leftPane');
              rightPane = state.get('rightPane');
              return _context8.abrupt('return', new _promise2.default(function () {
                var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(resolve) {
                  var response, data;
                  return _regenerator2.default.wrap(function _callee7$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          _context7.prev = 0;
                          _context7.next = 3;
                          return fetch('/pane/copy', {
                            method: 'POST',
                            credentials: 'same-origin',
                            headers: {
                              'Content-Type': 'application/json',
                              'Accept': 'application/json'
                            },
                            body: (0, _stringify2.default)({
                              srcShare: pane === 'LEFT' ? leftPane.get('share') : rightPane.get('share'),
                              srcDirectory: pane === 'LEFT' ? leftPane.get('directory') : rightPane.get('directory'),
                              srcName: name,
                              dstShare: pane === 'LEFT' ? rightPane.get('share') : leftPane.get('share'),
                              dstDirectory: pane === 'LEFT' ? rightPane.get('directory') : leftPane.get('directory'),
                              _fast: true,
                              _csrf: app.get('csrf')
                            })
                          });

                        case 3:
                          response = _context7.sent;

                          if (!(response.status === 200)) {
                            _context7.next = 12;
                            break;
                          }

                          _context7.next = 7;
                          return response.json();

                        case 7:
                          data = _context7.sent;

                          if (data.success) {
                            _context7.next = 11;
                            break;
                          }

                          _context7.next = 11;
                          return dispatch((0, _failureDialog.showFailureDialog)(data.messages || {}, data.errors || {}));

                        case 11:
                          return _context7.abrupt('return', resolve());

                        case 12:
                          _context7.next = 17;
                          break;

                        case 14:
                          _context7.prev = 14;
                          _context7.t0 = _context7['catch'](0);

                          console.error(_context7.t0);

                        case 17:

                          resolve();

                        case 18:
                        case 'end':
                          return _context7.stop();
                      }
                    }
                  }, _callee7, undefined, [[0, 14]]);
                }));

                return function (_x12) {
                  return _ref8.apply(this, arguments);
                };
              }()));

            case 5:
            case 'end':
              return _context8.stop();
          }
        }
      }, _callee8, undefined);
    }));

    return function (_x10, _x11) {
      return _ref7.apply(this, arguments);
    };
  }();
};

var move = exports.move = function move(when, validate) {
  return function () {
    var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10(dispatch, getState) {
      var state, app, moveDialog;
      return _regenerator2.default.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              state = getState();
              app = state.get('app');
              moveDialog = state.get('moveDialog');

              if (!(moveDialog.get('submittedAt') >= when)) {
                _context10.next = 5;
                break;
              }

              return _context10.abrupt('return');

            case 5:
              if (validate) {
                _context10.next = 8;
                break;
              }

              _context10.next = 8;
              return dispatch((0, _moveDialog.lockMoveDialog)());

            case 8:
              _context10.next = 10;
              return dispatch((0, _moveDialog.submitMoveDialog)(when));

            case 10:
              return _context10.abrupt('return', new _promise2.default(function () {
                var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9(resolve) {
                  var response, data;
                  return _regenerator2.default.wrap(function _callee9$(_context9) {
                    while (1) {
                      switch (_context9.prev = _context9.next) {
                        case 0:
                          _context9.prev = 0;
                          _context9.next = 3;
                          return fetch('/pane/move', {
                            method: 'POST',
                            credentials: 'same-origin',
                            headers: {
                              'Content-Type': 'application/json',
                              'Accept': 'application/json'
                            },
                            body: (0, _stringify2.default)({
                              srcShare: moveDialog.getIn(['values', 'srcShare']),
                              srcDirectory: moveDialog.getIn(['values', 'srcDirectory']),
                              srcName: moveDialog.getIn(['values', 'srcName']),
                              dstShare: moveDialog.getIn(['values', 'dstShare']),
                              dstDirectory: moveDialog.getIn(['values', 'dstDirectory']),
                              _validate: validate,
                              _csrf: app.get('csrf')
                            })
                          });

                        case 3:
                          response = _context9.sent;

                          if (!(response.status === 200)) {
                            _context9.next = 20;
                            break;
                          }

                          _context9.next = 7;
                          return response.json();

                        case 7:
                          data = _context9.sent;


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

                          _context9.next = 11;
                          return dispatch((0, _moveDialog.updateMoveDialog)({
                            values: data.values || {},
                            messages: data.messages || {},
                            errors: data.errors || {}
                          }, when));

                        case 11:
                          if (validate) {
                            _context9.next = 19;
                            break;
                          }

                          _context9.next = 14;
                          return dispatch((0, _moveDialog.unlockMoveDialog)());

                        case 14:
                          if (!data.success) {
                            _context9.next = 19;
                            break;
                          }

                          _context9.next = 17;
                          return dispatch((0, _navbar.closeNavbar)());

                        case 17:
                          _context9.next = 19;
                          return dispatch((0, _moveDialog.hideMoveDialog)());

                        case 19:
                          return _context9.abrupt('return', resolve());

                        case 20:
                          _context9.next = 25;
                          break;

                        case 22:
                          _context9.prev = 22;
                          _context9.t0 = _context9['catch'](0);

                          console.error(_context9.t0);

                        case 25:
                          if (validate) {
                            _context9.next = 28;
                            break;
                          }

                          _context9.next = 28;
                          return dispatch((0, _moveDialog.unlockMoveDialog)());

                        case 28:

                          resolve();

                        case 29:
                        case 'end':
                          return _context9.stop();
                      }
                    }
                  }, _callee9, undefined, [[0, 22]]);
                }));

                return function (_x15) {
                  return _ref10.apply(this, arguments);
                };
              }()));

            case 11:
            case 'end':
              return _context10.stop();
          }
        }
      }, _callee10, undefined);
    }));

    return function (_x13, _x14) {
      return _ref9.apply(this, arguments);
    };
  }();
};

var fastMove = exports.fastMove = function fastMove(pane, name) {
  return function () {
    var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee12(dispatch, getState) {
      var state, app, leftPane, rightPane;
      return _regenerator2.default.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              state = getState();
              app = state.get('app');
              leftPane = state.get('leftPane');
              rightPane = state.get('rightPane');
              return _context12.abrupt('return', new _promise2.default(function () {
                var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee11(resolve) {
                  var response, data;
                  return _regenerator2.default.wrap(function _callee11$(_context11) {
                    while (1) {
                      switch (_context11.prev = _context11.next) {
                        case 0:
                          _context11.prev = 0;
                          _context11.next = 3;
                          return fetch('/pane/move', {
                            method: 'POST',
                            credentials: 'same-origin',
                            headers: {
                              'Content-Type': 'application/json',
                              'Accept': 'application/json'
                            },
                            body: (0, _stringify2.default)({
                              srcShare: pane === 'LEFT' ? leftPane.get('share') : rightPane.get('share'),
                              srcDirectory: pane === 'LEFT' ? leftPane.get('directory') : rightPane.get('directory'),
                              srcName: name,
                              dstShare: pane === 'LEFT' ? rightPane.get('share') : leftPane.get('share'),
                              dstDirectory: pane === 'LEFT' ? rightPane.get('directory') : leftPane.get('directory'),
                              _fast: true,
                              _csrf: app.get('csrf')
                            })
                          });

                        case 3:
                          response = _context11.sent;

                          if (!(response.status === 200)) {
                            _context11.next = 12;
                            break;
                          }

                          _context11.next = 7;
                          return response.json();

                        case 7:
                          data = _context11.sent;

                          if (data.success) {
                            _context11.next = 11;
                            break;
                          }

                          _context11.next = 11;
                          return dispatch((0, _failureDialog.showFailureDialog)(data.messages || {}, data.errors || {}));

                        case 11:
                          return _context11.abrupt('return', resolve());

                        case 12:
                          _context11.next = 17;
                          break;

                        case 14:
                          _context11.prev = 14;
                          _context11.t0 = _context11['catch'](0);

                          console.error(_context11.t0);

                        case 17:

                          resolve();

                        case 18:
                        case 'end':
                          return _context11.stop();
                      }
                    }
                  }, _callee11, undefined, [[0, 14]]);
                }));

                return function (_x18) {
                  return _ref12.apply(this, arguments);
                };
              }()));

            case 5:
            case 'end':
              return _context12.stop();
          }
        }
      }, _callee12, undefined);
    }));

    return function (_x16, _x17) {
      return _ref11.apply(this, arguments);
    };
  }();
};

var del = exports.del = function del(when, validate) {
  return function () {
    var _ref13 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee14(dispatch, getState) {
      var state, app, deleteDialog;
      return _regenerator2.default.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              state = getState();
              app = state.get('app');
              deleteDialog = state.get('deleteDialog');

              if (!(deleteDialog.get('submittedAt') >= when)) {
                _context14.next = 5;
                break;
              }

              return _context14.abrupt('return');

            case 5:
              if (validate) {
                _context14.next = 8;
                break;
              }

              _context14.next = 8;
              return dispatch((0, _deleteDialog.lockDeleteDialog)());

            case 8:
              _context14.next = 10;
              return dispatch((0, _deleteDialog.submitDeleteDialog)(when));

            case 10:
              return _context14.abrupt('return', new _promise2.default(function () {
                var _ref14 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee13(resolve) {
                  var response, data;
                  return _regenerator2.default.wrap(function _callee13$(_context13) {
                    while (1) {
                      switch (_context13.prev = _context13.next) {
                        case 0:
                          _context13.prev = 0;
                          _context13.next = 3;
                          return fetch('/pane/del', {
                            method: 'POST',
                            credentials: 'same-origin',
                            headers: {
                              'Content-Type': 'application/json',
                              'Accept': 'application/json'
                            },
                            body: (0, _stringify2.default)({
                              share: deleteDialog.getIn(['values', 'share']),
                              directory: deleteDialog.getIn(['values', 'directory']),
                              name: deleteDialog.getIn(['values', 'name']),
                              _validate: validate,
                              _csrf: app.get('csrf')
                            })
                          });

                        case 3:
                          response = _context13.sent;

                          if (!(response.status === 200)) {
                            _context13.next = 20;
                            break;
                          }

                          _context13.next = 7;
                          return response.json();

                        case 7:
                          data = _context13.sent;


                          if (validate) {
                            // clear previous errors of the field on successful validation
                            if (!data.errors[validate]) data.errors[validate] = {};
                          } else {
                            // clear all successful fields previous errors on submit
                            if (!data.errors.share) data.errors.share = {};
                            if (!data.errors.directory) data.errors.directory = {};
                            if (!data.errors.name) data.errors.name = {};
                          }

                          _context13.next = 11;
                          return dispatch((0, _deleteDialog.updateDeleteDialog)({
                            values: data.values || {},
                            messages: data.messages || {},
                            errors: data.errors || {}
                          }, when));

                        case 11:
                          if (validate) {
                            _context13.next = 19;
                            break;
                          }

                          _context13.next = 14;
                          return dispatch((0, _deleteDialog.unlockDeleteDialog)());

                        case 14:
                          if (!data.success) {
                            _context13.next = 19;
                            break;
                          }

                          _context13.next = 17;
                          return dispatch((0, _navbar.closeNavbar)());

                        case 17:
                          _context13.next = 19;
                          return dispatch((0, _deleteDialog.hideDeleteDialog)());

                        case 19:
                          return _context13.abrupt('return', resolve());

                        case 20:
                          _context13.next = 25;
                          break;

                        case 22:
                          _context13.prev = 22;
                          _context13.t0 = _context13['catch'](0);

                          console.error(_context13.t0);

                        case 25:
                          if (validate) {
                            _context13.next = 28;
                            break;
                          }

                          _context13.next = 28;
                          return dispatch((0, _deleteDialog.unlockDeleteDialog)());

                        case 28:

                          resolve();

                        case 29:
                        case 'end':
                          return _context13.stop();
                      }
                    }
                  }, _callee13, undefined, [[0, 22]]);
                }));

                return function (_x21) {
                  return _ref14.apply(this, arguments);
                };
              }()));

            case 11:
            case 'end':
              return _context14.stop();
          }
        }
      }, _callee14, undefined);
    }));

    return function (_x19, _x20) {
      return _ref13.apply(this, arguments);
    };
  }();
};

var fastDel = exports.fastDel = function fastDel(pane, name) {
  return function () {
    var _ref15 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee16(dispatch, getState) {
      var state, app, leftPane, rightPane;
      return _regenerator2.default.wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              state = getState();
              app = state.get('app');
              leftPane = state.get('leftPane');
              rightPane = state.get('rightPane');
              return _context16.abrupt('return', new _promise2.default(function () {
                var _ref16 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee15(resolve) {
                  var response, data;
                  return _regenerator2.default.wrap(function _callee15$(_context15) {
                    while (1) {
                      switch (_context15.prev = _context15.next) {
                        case 0:
                          _context15.prev = 0;
                          _context15.next = 3;
                          return fetch('/pane/del', {
                            method: 'POST',
                            credentials: 'same-origin',
                            headers: {
                              'Content-Type': 'application/json',
                              'Accept': 'application/json'
                            },
                            body: (0, _stringify2.default)({
                              share: pane === 'LEFT' ? leftPane.get('share') : rightPane.get('share'),
                              directory: pane === 'LEFT' ? leftPane.get('directory') : rightPane.get('directory'),
                              name: name,
                              _fast: true,
                              _csrf: app.get('csrf')
                            })
                          });

                        case 3:
                          response = _context15.sent;

                          if (!(response.status === 200)) {
                            _context15.next = 12;
                            break;
                          }

                          _context15.next = 7;
                          return response.json();

                        case 7:
                          data = _context15.sent;

                          if (data.success) {
                            _context15.next = 11;
                            break;
                          }

                          _context15.next = 11;
                          return dispatch((0, _failureDialog.showFailureDialog)(data.messages || {}, data.errors || {}));

                        case 11:
                          return _context15.abrupt('return', resolve());

                        case 12:
                          _context15.next = 17;
                          break;

                        case 14:
                          _context15.prev = 14;
                          _context15.t0 = _context15['catch'](0);

                          console.error(_context15.t0);

                        case 17:

                          resolve();

                        case 18:
                        case 'end':
                          return _context15.stop();
                      }
                    }
                  }, _callee15, undefined, [[0, 14]]);
                }));

                return function (_x24) {
                  return _ref16.apply(this, arguments);
                };
              }()));

            case 5:
            case 'end':
              return _context16.stop();
          }
        }
      }, _callee16, undefined);
    }));

    return function (_x22, _x23) {
      return _ref15.apply(this, arguments);
    };
  }();
};

var find = exports.find = function find(what) {
  return function () {
    var _ref17 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee18(dispatch, getState) {
      var state, app, copyDialog, moveDialog, deleteDialog, share, directory, name;
      return _regenerator2.default.wrap(function _callee18$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              state = getState();
              app = state.get('app');
              copyDialog = state.get('copyDialog');
              moveDialog = state.get('moveDialog');
              deleteDialog = state.get('deleteDialog');

              if (!(what === 'COPY' && copyDialog.get('locked'))) {
                _context18.next = 7;
                break;
              }

              return _context18.abrupt('return');

            case 7:
              if (!(what === 'MOVE' && moveDialog.get('locked'))) {
                _context18.next = 9;
                break;
              }

              return _context18.abrupt('return');

            case 9:
              if (!(what === 'DELETE' && deleteDialog.get('locked'))) {
                _context18.next = 11;
                break;
              }

              return _context18.abrupt('return');

            case 11:
              share = void 0;
              directory = void 0;
              name = void 0;
              _context18.t0 = what;
              _context18.next = _context18.t0 === 'COPY' ? 17 : _context18.t0 === 'MOVE' ? 32 : _context18.t0 === 'DELETE' ? 47 : 62;
              break;

            case 17:
              share = copyDialog.getIn(['values', 'srcShare']);
              directory = copyDialog.getIn(['values', 'srcDirectory']);
              name = copyDialog.getIn(['values', 'srcName']);
              _context18.next = 22;
              return dispatch((0, _copyDialog.lockCopyDialog)());

            case 22:
              _context18.next = 24;
              return dispatch(copy(Date.now(), 'srcName'));

            case 24:
              copyDialog = getState().get('copyDialog');

              if (!copyDialog.hasIn(['errors', 'srcName'])) {
                _context18.next = 29;
                break;
              }

              _context18.next = 28;
              return dispatch((0, _copyDialog.unlockCopyDialog)());

            case 28:
              return _context18.abrupt('return', _context18.sent);

            case 29:
              _context18.next = 31;
              return dispatch((0, _copyDialog.startCopyDialogFind)());

            case 31:
              return _context18.abrupt('break', 62);

            case 32:
              share = moveDialog.getIn(['values', 'srcShare']);
              directory = moveDialog.getIn(['values', 'srcDirectory']);
              name = moveDialog.getIn(['values', 'srcName']);
              _context18.next = 37;
              return dispatch((0, _moveDialog.lockMoveDialog)());

            case 37:
              _context18.next = 39;
              return dispatch(move(Date.now(), 'srcName'));

            case 39:
              moveDialog = getState().get('moveDialog');

              if (!moveDialog.hasIn(['errors', 'srcName'])) {
                _context18.next = 44;
                break;
              }

              _context18.next = 43;
              return dispatch((0, _moveDialog.unlockMoveDialog)());

            case 43:
              return _context18.abrupt('return', _context18.sent);

            case 44:
              _context18.next = 46;
              return dispatch((0, _moveDialog.startMoveDialogFind)());

            case 46:
              return _context18.abrupt('break', 62);

            case 47:
              share = deleteDialog.getIn(['values', 'share']);
              directory = deleteDialog.getIn(['values', 'directory']);
              name = deleteDialog.getIn(['values', 'name']);
              _context18.next = 52;
              return dispatch((0, _deleteDialog.lockDeleteDialog)());

            case 52:
              _context18.next = 54;
              return dispatch(copy(Date.now(), 'name'));

            case 54:
              deleteDialog = getState().get('deleteDialog');

              if (!deleteDialog.hasIn(['errors', 'name'])) {
                _context18.next = 59;
                break;
              }

              _context18.next = 58;
              return dispatch((0, _deleteDialog.unlockDeleteDialog)());

            case 58:
              return _context18.abrupt('return', _context18.sent);

            case 59:
              _context18.next = 61;
              return dispatch((0, _deleteDialog.startDeleteDialogFind)());

            case 61:
              return _context18.abrupt('break', 62);

            case 62:
              return _context18.abrupt('return', new _promise2.default(function () {
                var _ref18 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee17(resolve) {
                  var response, nodes, data, directories, files, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, node;

                  return _regenerator2.default.wrap(function _callee17$(_context17) {
                    while (1) {
                      switch (_context17.prev = _context17.next) {
                        case 0:
                          _context17.prev = 0;
                          _context17.next = 3;
                          return fetch('/pane/find', {
                            method: 'POST',
                            credentials: 'same-origin',
                            headers: {
                              'Content-Type': 'application/json',
                              'Accept': 'application/json'
                            },
                            body: (0, _stringify2.default)({
                              share: share,
                              directory: directory,
                              name: name,
                              _csrf: app.get('csrf')
                            })
                          });

                        case 3:
                          response = _context17.sent;
                          nodes = [];

                          if (!(response.status === 200)) {
                            _context17.next = 33;
                            break;
                          }

                          _context17.next = 8;
                          return response.json();

                        case 8:
                          data = _context17.sent;
                          directories = [];
                          files = [];
                          _iteratorNormalCompletion = true;
                          _didIteratorError = false;
                          _iteratorError = undefined;
                          _context17.prev = 14;

                          for (_iterator = (0, _getIterator3.default)(data.nodes); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            node = _step.value;

                            if (node.isDirectory) directories.push(node);else files.push(node);
                          }
                          _context17.next = 22;
                          break;

                        case 18:
                          _context17.prev = 18;
                          _context17.t0 = _context17['catch'](14);
                          _didIteratorError = true;
                          _iteratorError = _context17.t0;

                        case 22:
                          _context17.prev = 22;
                          _context17.prev = 23;

                          if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                          }

                        case 25:
                          _context17.prev = 25;

                          if (!_didIteratorError) {
                            _context17.next = 28;
                            break;
                          }

                          throw _iteratorError;

                        case 28:
                          return _context17.finish(25);

                        case 29:
                          return _context17.finish(22);

                        case 30:
                          directories.sort(function (a, b) {
                            return a.name.localeCompare(b.name);
                          });
                          files.sort(function (a, b) {
                            return a.name.localeCompare(b.name);
                          });
                          nodes = directories.concat(files);

                        case 33:
                          _context17.t1 = what;
                          _context17.next = _context17.t1 === 'COPY' ? 36 : _context17.t1 === 'MOVE' ? 41 : _context17.t1 === 'DELETE' ? 46 : 51;
                          break;

                        case 36:
                          _context17.next = 38;
                          return dispatch((0, _copyDialog.stopCopyDialogFind)(nodes));

                        case 38:
                          _context17.next = 40;
                          return dispatch((0, _copyDialog.unlockCopyDialog)());

                        case 40:
                          return _context17.abrupt('break', 51);

                        case 41:
                          _context17.next = 43;
                          return dispatch((0, _moveDialog.stopMoveDialogFind)(nodes));

                        case 43:
                          _context17.next = 45;
                          return dispatch((0, _moveDialog.unlockMoveDialog)());

                        case 45:
                          return _context17.abrupt('break', 51);

                        case 46:
                          _context17.next = 48;
                          return dispatch((0, _deleteDialog.stopDeleteDialogFind)(nodes));

                        case 48:
                          _context17.next = 50;
                          return dispatch((0, _deleteDialog.unlockDeleteDialog)());

                        case 50:
                          return _context17.abrupt('break', 51);

                        case 51:
                          return _context17.abrupt('return', resolve());

                        case 54:
                          _context17.prev = 54;
                          _context17.t2 = _context17['catch'](0);

                          console.error(_context17.t2);

                        case 57:
                          _context17.t3 = what;
                          _context17.next = _context17.t3 === 'COPY' ? 60 : _context17.t3 === 'MOVE' ? 65 : _context17.t3 === 'DELETE' ? 70 : 75;
                          break;

                        case 60:
                          _context17.next = 62;
                          return dispatch((0, _copyDialog.stopCopyDialogFind)(false));

                        case 62:
                          _context17.next = 64;
                          return dispatch((0, _copyDialog.unlockCopyDialog)());

                        case 64:
                          return _context17.abrupt('break', 75);

                        case 65:
                          _context17.next = 67;
                          return dispatch((0, _moveDialog.stopMoveDialogFind)(false));

                        case 67:
                          _context17.next = 69;
                          return dispatch((0, _moveDialog.unlockMoveDialog)());

                        case 69:
                          return _context17.abrupt('break', 75);

                        case 70:
                          _context17.next = 72;
                          return dispatch((0, _deleteDialog.stopDeleteDialogFind)(false));

                        case 72:
                          _context17.next = 74;
                          return dispatch((0, _deleteDialog.unlockDeleteDialog)());

                        case 74:
                          return _context17.abrupt('break', 75);

                        case 75:

                          resolve();

                        case 76:
                        case 'end':
                          return _context17.stop();
                      }
                    }
                  }, _callee17, undefined, [[0, 54], [14, 18, 22, 30], [23,, 25, 29]]);
                }));

                return function (_x27) {
                  return _ref18.apply(this, arguments);
                };
              }()));

            case 63:
            case 'end':
              return _context18.stop();
          }
        }
      }, _callee18, undefined);
    }));

    return function (_x25, _x26) {
      return _ref17.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/defineProperty");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(2);

var _jsx3 = _interopRequireDefault(_jsx2);

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputRequiredLabel = function (_React$PureComponent) {
  (0, _inherits3.default)(InputRequiredLabel, _React$PureComponent);

  function InputRequiredLabel() {
    (0, _classCallCheck3.default)(this, InputRequiredLabel);
    return (0, _possibleConstructorReturn3.default)(this, (InputRequiredLabel.__proto__ || (0, _getPrototypeOf2.default)(InputRequiredLabel)).apply(this, arguments));
  }

  (0, _createClass3.default)(InputRequiredLabel, [{
    key: 'render',
    value: function render() {
      return (0, _jsx3.default)('div', {
        className: 'control-required'
      }, void 0, __('required_field'));
    }
  }]);
  return InputRequiredLabel;
}(_react2.default.PureComponent);

exports.default = InputRequiredLabel;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _from = __webpack_require__(42);

var _from2 = _interopRequireDefault(_from);

var _jsx2 = __webpack_require__(2);

var _jsx3 = _interopRequireDefault(_jsx2);

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _immutable = __webpack_require__(0);

var _reactstrap = __webpack_require__(13);

var _reactTransitionGroup = __webpack_require__(27);

var _Fade = __webpack_require__(29);

var _Fade2 = _interopRequireDefault(_Fade);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FieldErrors = function (_React$PureComponent) {
  (0, _inherits3.default)(FieldErrors, _React$PureComponent);

  function FieldErrors() {
    (0, _classCallCheck3.default)(this, FieldErrors);
    return (0, _possibleConstructorReturn3.default)(this, (FieldErrors.__proto__ || (0, _getPrototypeOf2.default)(FieldErrors)).apply(this, arguments));
  }

  (0, _createClass3.default)(FieldErrors, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return (0, _jsx3.default)(_reactstrap.FormFeedback, {}, void 0, (0, _jsx3.default)(_reactTransitionGroup.TransitionGroup, {}, void 0, (0, _from2.default)(this.props.errors.keys()).map(function (code) {
        return (0, _jsx3.default)(_Fade2.default, {}, code, (0, _jsx3.default)('div', {
          dangerouslySetInnerHTML: { __html: _this2.props.errors.getIn([code, 'message']) }
        }));
      })));
    }
  }]);
  return FieldErrors;
}(_react2.default.PureComponent);

FieldErrors.defaultProps = {
  errors: (0, _immutable.Map)({})
};
exports.default = FieldErrors;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.join = join;
exports.matchLocation = matchLocation;
exports.splitPath = splitPath;
function join() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (prev, cur) {
    if (prev.length && prev[prev.length - 1] !== '/' && (!cur.length || cur[0] !== '/')) prev += '/';
    return prev + cur;
  }, '');
}

function matchLocation(location) {
  var match = /^\/~([^:]+):(.+)$/.exec(location);
  if (!match) return null;

  return {
    share: match[1],
    path: match[2]
  };
}

function splitPath(path) {
  var parts = path.split('/').filter(function (i) {
    return i.length;
  });
  if (path.endsWith('/')) return { directory: '/' + parts.join('/'), name: '' };

  var name = parts.pop() || '';
  return { directory: '/' + parts.join('/'), name: name };
}

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-router-redux");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initPanes = exports.paneCD = exports.paneUpdate = exports.paneToggleSelect = exports.paneSelectRange = exports.paneSelect = exports.paneDeselect = exports.paneSort = exports.setPaneIndex = exports.setPanePath = exports.setPaneShare = exports.setPaneMode = exports.stopLoadingPane = exports.startLoadingPane = exports.togglePane = exports.hidePane = exports.showPane = exports.setActivePane = undefined;

var _promise = __webpack_require__(17);

var _promise2 = _interopRequireDefault(_promise);

var _getIterator2 = __webpack_require__(15);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _actionTypes = __webpack_require__(3);

var actions = _interopRequireWildcard(_actionTypes);

var _reactRouterRedux = __webpack_require__(26);

var _list = __webpack_require__(40);

var _content = __webpack_require__(73);

var _info = __webpack_require__(74);

var _user = __webpack_require__(16);

var _path = __webpack_require__(25);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setActivePane = exports.setActivePane = function setActivePane(pane) {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch, getState) {
      var state, user, leftPane, rightPane, share, path;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              state = getState();
              user = state.get('user');
              leftPane = state.get('leftPane');
              rightPane = state.get('rightPane');

              if (!(pane === 'LEFT' && leftPane.get('isActive'))) {
                _context.next = 6;
                break;
              }

              return _context.abrupt('return');

            case 6:
              if (!(pane === 'RIGHT' && rightPane.get('isActive'))) {
                _context.next = 8;
                break;
              }

              return _context.abrupt('return');

            case 8:
              _context.next = 10;
              return dispatch({
                type: pane === 'LEFT' ? actions.DEACTIVATE_RIGHT_PANE : actions.DEACTIVATE_LEFT_PANE
              });

            case 10:
              _context.next = 12;
              return dispatch({
                type: pane === 'LEFT' ? actions.ACTIVATE_LEFT_PANE : actions.ACTIVATE_RIGHT_PANE
              });

            case 12:
              share = pane === 'LEFT' ? leftPane.get('share') : rightPane.get('share');
              path = pane === 'LEFT' ? leftPane.get('path') : rightPane.get('path');

              if (!user.get('isAuthorized')) {
                _context.next = 17;
                break;
              }

              _context.next = 17;
              return dispatch((0, _reactRouterRedux.push)('/~' + share + ':' + path));

            case 17:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
};

var showPane = exports.showPane = function showPane(pane) {
  return {
    type: pane === 'LEFT' ? actions.SHOW_LEFT_PANE : actions.SHOW_RIGHT_PANE
  };
};

var hidePane = exports.hidePane = function hidePane(pane) {
  return {
    type: pane === 'LEFT' ? actions.HIDE_LEFT_PANE : actions.HIDE_RIGHT_PANE
  };
};

var togglePane = exports.togglePane = function togglePane(pane) {
  return function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dispatch, getState) {
      var state, leftPane, rightPane, isVisible;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              state = getState();
              leftPane = state.get('leftPane');
              rightPane = state.get('rightPane');
              isVisible = pane === 'LEFT' ? leftPane.get('isVisible') : rightPane.get('isVisible');

              dispatch(isVisible ? hidePane(pane) : showPane(pane));
              if (isVisible) dispatch(setActivePane(pane === 'LEFT' ? 'RIGHT' : 'LEFT'));

            case 6:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var startLoadingPane = exports.startLoadingPane = function startLoadingPane(pane, timestamp) {
  return {
    type: pane === 'LEFT' ? actions.START_LEFT_PANE_LOADING : actions.START_RIGHT_PANE_LOADING,
    timestamp: timestamp
  };
};

var stopLoadingPane = exports.stopLoadingPane = function stopLoadingPane(pane, timestamp) {
  var isForbidden = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  return {
    type: pane === 'LEFT' ? actions.STOP_LEFT_PANE_LOADING : actions.STOP_RIGHT_PANE_LOADING,
    timestamp: timestamp,
    isForbidden: isForbidden
  };
};

var setPaneMode = exports.setPaneMode = function setPaneMode(pane, mode) {
  return function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(dispatch) {
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (mode === 'CONTENTS') dispatch((0, _content.loadContent)(pane === 'LEFT' ? 'RIGHT' : 'LEFT'));else if (mode === 'INFO') dispatch((0, _info.loadInfo)(pane === 'LEFT' ? 'RIGHT' : 'LEFT'));

              return _context3.abrupt('return', dispatch({
                type: pane === 'LEFT' ? actions.SET_LEFT_PANE_MODE : actions.SET_RIGHT_PANE_MODE,
                mode: mode
              }));

            case 2:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function (_x6) {
      return _ref3.apply(this, arguments);
    };
  }();
};

var setPaneShare = exports.setPaneShare = function setPaneShare(pane, share) {
  return {
    type: pane === 'LEFT' ? actions.SET_LEFT_PANE_SHARE : actions.SET_RIGHT_PANE_SHARE,
    share: share
  };
};

var setPanePath = exports.setPanePath = function setPanePath(pane, path) {
  var directory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var name = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

  return {
    type: pane === 'LEFT' ? actions.SET_LEFT_PANE_PATH : actions.SET_RIGHT_PANE_PATH,
    path: path,
    directory: directory,
    name: name
  };
};

var setPaneIndex = exports.setPaneIndex = function setPaneIndex(pane, index) {
  return function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(dispatch, getState) {
      var state, leftPane, rightPane, share, path, directory, name, dir, item, _dir, _item;

      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              state = getState();
              leftPane = state.get('leftPane');
              rightPane = state.get('rightPane');
              share = void 0;
              path = void 0;
              directory = void 0;
              name = void 0;


              if (pane === 'LEFT') {
                if (leftPane.get('isActive')) share = leftPane.get('share');

                if (index === -1) {
                  if (leftPane.get('name')) {
                    dir = leftPane.get('directory');

                    path = dir === '/' ? '/' : dir + '/';
                    directory = dir;
                    name = '';
                  }
                } else {
                  item = leftPane.getIn(['list', index]);

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
                    _dir = rightPane.get('directory');

                    path = _dir === '/' ? '/' : _dir + '/';
                    directory = _dir;
                    name = '';
                  }
                } else {
                  _item = rightPane.getIn(['list', index]);

                  if (_item) {
                    path = (0, _path.join)(rightPane.get('directory'), _item.get('name'));
                    directory = rightPane.get('directory');
                    name = _item.get('name');
                  }
                }
              }

              if (!(path && directory && name)) {
                _context4.next = 14;
                break;
              }

              _context4.next = 11;
              return dispatch(setPanePath(pane, path, directory, name));

            case 11:
              if (!share) {
                _context4.next = 14;
                break;
              }

              _context4.next = 14;
              return dispatch((0, _reactRouterRedux.push)('/~' + share + ':' + path));

            case 14:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined);
    }));

    return function (_x9, _x10) {
      return _ref4.apply(this, arguments);
    };
  }();
};

var paneSort = exports.paneSort = function paneSort(pane, field, dir) {
  return function (dispatch, getState) {
    var state = getState();
    var leftPane = state.get('leftPane');
    var rightPane = state.get('rightPane');
    var lists = state.get('lists');

    var id = void 0;
    if (pane === 'LEFT' && leftPane.get('share') && leftPane.get('directory')) id = leftPane.get('share') + ':' + leftPane.get('directory');else if (pane === 'RIGHT' && rightPane.get('share') && rightPane.get('directory')) id = rightPane.get('share') + ':' + rightPane.get('directory');

    if (field && dir) {
      dispatch({
        type: pane === 'LEFT' ? actions.SET_LEFT_PANE_SORT : actions.SET_RIGHT_PANE_SORT,
        field: field,
        dir: dir
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

    var selectedIds = [];
    var sorted = pane === 'LEFT' ? leftPane.get('list') : rightPane.get('list');
    var selected = pane === 'LEFT' ? leftPane.get('selectedIndexes') : rightPane.get('selectedIndexes');
    for (var _i = 0; _i < sorted.size; _i++) {
      if (selected.includes(_i)) selectedIds.push(sorted.getIn([_i, 'id']));
    }

    var parent = null;
    var directories = [];
    var files = [];
    var i = 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = (0, _getIterator3.default)(lists.get(id) || []), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;

        if (item.get('isDirectory')) {
          if (item.get('name') === '..') parent = item.toJS();else directories.push(item.toJS());
        } else {
          files.push(item.toJS());
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    var sort = void 0;
    if (field === 'NAME') sort = function sort(a, b) {
      return dir === 'ASC' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    };else sort = function sort(a, b) {
      return dir === 'ASC' ? a.size - b.size : b.size - a.size;
    };

    directories.sort(sort);
    files.sort(sort);

    if (parent) directories.unshift(parent);

    var list = directories.concat(files);

    var selectedIndexes = [];
    if (selectedIds.length) {
      for (var _i2 = 0; _i2 < list.length; _i2++) {
        if (selectedIds.includes(list[_i2].id)) selectedIndexes.push(_i2);
      }
    }

    dispatch({
      type: pane === 'LEFT' ? actions.SET_LEFT_PANE_LIST : actions.SET_RIGHT_PANE_LIST,
      list: list,
      selectedIndexes: selectedIndexes
    });
  };
};

var paneDeselect = exports.paneDeselect = function paneDeselect(pane) {
  return {
    type: pane === 'LEFT' ? actions.SET_LEFT_PANE_SELECTION : actions.SET_RIGHT_PANE_SELECTION,
    selectedIndexes: []
  };
};

var paneSelect = exports.paneSelect = function paneSelect(pane, index) {
  return function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(dispatch, getState) {
      var state, leftPane, rightPane, list, i;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              state = getState();
              leftPane = state.get('leftPane');
              rightPane = state.get('rightPane');

              if (!_.isUndefined(index)) {
                _context5.next = 16;
                break;
              }

              list = pane === 'LEFT' ? leftPane.get('list') : rightPane.get('list');

              index = -1;
              i = 0;

            case 7:
              if (!(i < list.size)) {
                _context5.next = 14;
                break;
              }

              if (!(list.getIn([i, 'name']) === (pane === 'LEFT' ? leftPane.get('name') : rightPane.get('name')))) {
                _context5.next = 11;
                break;
              }

              index = i;
              return _context5.abrupt('break', 14);

            case 11:
              i++;
              _context5.next = 7;
              break;

            case 14:
              _context5.next = 18;
              break;

            case 16:
              _context5.next = 18;
              return dispatch(setPaneIndex(pane, index));

            case 18:

              dispatch({
                type: pane === 'LEFT' ? actions.SET_LEFT_PANE_SELECTION : actions.SET_RIGHT_PANE_SELECTION,
                selectedIndexes: index === -1 ? [] : [index]
              });

              if (!(index === -1)) {
                _context5.next = 21;
                break;
              }

              return _context5.abrupt('return');

            case 21:

              if (pane === 'LEFT' && rightPane.get('mode') === 'CONTENTS' || pane === 'RIGHT' && leftPane.get('mode') === 'CONTENTS') dispatch((0, _content.loadContent)(pane));
              if (pane === 'LEFT' && rightPane.get('mode') === 'INFO' || pane === 'RIGHT' && leftPane.get('mode') === 'INFO') dispatch((0, _info.loadInfo)(pane));

            case 23:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, undefined);
    }));

    return function (_x11, _x12) {
      return _ref5.apply(this, arguments);
    };
  }();
};

var paneSelectRange = exports.paneSelectRange = function paneSelectRange(pane, index) {
  return function () {
    var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(dispatch, getState) {
      var state, leftPane, rightPane, selectedIndexes, length, min, max, prev, i, next, _i3, _i4;

      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              state = getState();
              leftPane = state.get('leftPane');
              rightPane = state.get('rightPane');
              selectedIndexes = pane === 'LEFT' ? leftPane.get('selectedIndexes') : rightPane.get('selectedIndexes');
              length = pane === 'LEFT' ? leftPane.get('list').size : rightPane.get('list').size;
              min = -1;
              max = -1;
              prev = -1;
              i = index - 1;

            case 9:
              if (!(i >= 0)) {
                _context6.next = 16;
                break;
              }

              if (!selectedIndexes.includes(i)) {
                _context6.next = 13;
                break;
              }

              prev = i;
              return _context6.abrupt('break', 16);

            case 13:
              i--;
              _context6.next = 9;
              break;

            case 16:
              if (!(prev === -1)) {
                _context6.next = 29;
                break;
              }

              next = -1;
              _i3 = index + 1;

            case 19:
              if (!(_i3 < length)) {
                _context6.next = 26;
                break;
              }

              if (!selectedIndexes.includes(_i3)) {
                _context6.next = 23;
                break;
              }

              next = _i3;
              return _context6.abrupt('break', 26);

            case 23:
              _i3++;
              _context6.next = 19;
              break;

            case 26:
              if (next !== -1) {
                min = index;
                max = next - 1;
              }
              _context6.next = 31;
              break;

            case 29:
              min = prev + 1;
              max = index;

            case 31:
              if (!(min !== -1 && max !== -1)) {
                _context6.next = 38;
                break;
              }

              for (_i4 = min; _i4 <= max; _i4++) {
                selectedIndexes.push(_i4);
              }dispatch({
                type: pane === 'LEFT' ? actions.SET_LEFT_PANE_SELECTION : actions.SET_RIGHT_PANE_SELECTION,
                selectedIndexes: selectedIndexes.toJS()
              });

              _context6.next = 36;
              return dispatch(setPaneIndex(pane, index));

            case 36:

              if (pane === 'LEFT' && rightPane.get('mode') === 'CONTENTS' || pane === 'RIGHT' && leftPane.get('mode') === 'CONTENTS') dispatch((0, _content.loadContent)(pane));
              if (pane === 'LEFT' && rightPane.get('mode') === 'INFO' || pane === 'RIGHT' && leftPane.get('mode') === 'INFO') dispatch((0, _info.loadInfo)(pane));

            case 38:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, undefined);
    }));

    return function (_x13, _x14) {
      return _ref6.apply(this, arguments);
    };
  }();
};

var paneToggleSelect = exports.paneToggleSelect = function paneToggleSelect(pane, index) {
  return function () {
    var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(dispatch, getState) {
      var state, leftPane, rightPane, selectedIndexes, indexOfIndex;
      return _regenerator2.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              state = getState();
              leftPane = state.get('leftPane');
              rightPane = state.get('rightPane');
              selectedIndexes = pane === 'LEFT' ? leftPane.get('selectedIndexes') : rightPane.get('selectedIndexes');
              indexOfIndex = selectedIndexes.indexOf(index);

              if (!(indexOfIndex === -1)) {
                _context7.next = 11;
                break;
              }

              selectedIndexes.push(index);
              _context7.next = 9;
              return dispatch(setPaneIndex(pane, index));

            case 9:
              _context7.next = 14;
              break;

            case 11:
              selectedIndexes.splice(indexOfIndex, 1);
              _context7.next = 14;
              return dispatch(setPaneIndex(pane, -1));

            case 14:

              dispatch({
                type: pane === 'LEFT' ? actions.SET_LEFT_PANE_SELECTION : actions.SET_RIGHT_PANE_SELECTION,
                selectedIndexes: selectedIndexes.toJS()
              });

              if (pane === 'LEFT' && rightPane.get('mode') === 'CONTENTS' || pane === 'RIGHT' && leftPane.get('mode') === 'CONTENTS') dispatch((0, _content.loadContent)(pane));
              if (pane === 'LEFT' && rightPane.get('mode') === 'INFO' || pane === 'RIGHT' && leftPane.get('mode') === 'INFO') dispatch((0, _info.loadInfo)(pane));

            case 17:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, undefined);
    }));

    return function (_x15, _x16) {
      return _ref7.apply(this, arguments);
    };
  }();
};

var paneUpdate = exports.paneUpdate = function paneUpdate(data) {
  return function () {
    var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10(dispatch, getState) {
      var state, leftPane, rightPane, now, left, right;
      return _regenerator2.default.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              state = getState();
              leftPane = state.get('leftPane');
              rightPane = state.get('rightPane');
              now = Date.now();
              _context10.next = 6;
              return dispatch((0, _list.setList)(data.share + ':' + data.directory, data.list || []));

            case 6:
              left = new _promise2.default(function () {
                var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(resolve, reject) {
                  var found, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, item, newPath;

                  return _regenerator2.default.wrap(function _callee8$(_context8) {
                    while (1) {
                      switch (_context8.prev = _context8.next) {
                        case 0:
                          _context8.prev = 0;

                          if (!(leftPane.get('share') === data.share && leftPane.get('directory') === data.directory)) {
                            _context8.next = 48;
                            break;
                          }

                          _context8.next = 4;
                          return dispatch(paneDeselect('LEFT'));

                        case 4:
                          _context8.next = 6;
                          return dispatch(paneSort('LEFT'));

                        case 6:
                          if (!leftPane.get('name')) {
                            _context8.next = 46;
                            break;
                          }

                          found = false;
                          _iteratorNormalCompletion2 = true;
                          _didIteratorError2 = false;
                          _iteratorError2 = undefined;
                          _context8.prev = 11;
                          _iterator2 = (0, _getIterator3.default)(data.list || []);

                        case 13:
                          if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                            _context8.next = 21;
                            break;
                          }

                          item = _step2.value;

                          if (!(item.name === leftPane.get('name'))) {
                            _context8.next = 18;
                            break;
                          }

                          found = true;
                          return _context8.abrupt('break', 21);

                        case 18:
                          _iteratorNormalCompletion2 = true;
                          _context8.next = 13;
                          break;

                        case 21:
                          _context8.next = 27;
                          break;

                        case 23:
                          _context8.prev = 23;
                          _context8.t0 = _context8['catch'](11);
                          _didIteratorError2 = true;
                          _iteratorError2 = _context8.t0;

                        case 27:
                          _context8.prev = 27;
                          _context8.prev = 28;

                          if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                          }

                        case 30:
                          _context8.prev = 30;

                          if (!_didIteratorError2) {
                            _context8.next = 33;
                            break;
                          }

                          throw _iteratorError2;

                        case 33:
                          return _context8.finish(30);

                        case 34:
                          return _context8.finish(27);

                        case 35:
                          if (!found) {
                            _context8.next = 40;
                            break;
                          }

                          _context8.next = 38;
                          return dispatch(paneSelect('LEFT'));

                        case 38:
                          _context8.next = 46;
                          break;

                        case 40:
                          newPath = data.directory === '/' ? '/' : data.directory + '/';
                          _context8.next = 43;
                          return dispatch(setPanePath('LEFT', newPath, data.directory, ''));

                        case 43:
                          if (!leftPane.get('isActive')) {
                            _context8.next = 46;
                            break;
                          }

                          _context8.next = 46;
                          return dispatch((0, _reactRouterRedux.push)('/~' + data.share + ':' + newPath));

                        case 46:
                          _context8.next = 48;
                          return dispatch(stopLoadingPane('LEFT', now, !data.list));

                        case 48:
                          resolve();
                          _context8.next = 54;
                          break;

                        case 51:
                          _context8.prev = 51;
                          _context8.t1 = _context8['catch'](0);

                          reject(_context8.t1);

                        case 54:
                        case 'end':
                          return _context8.stop();
                      }
                    }
                  }, _callee8, undefined, [[0, 51], [11, 23, 27, 35], [28,, 30, 34]]);
                }));

                return function (_x19, _x20) {
                  return _ref9.apply(this, arguments);
                };
              }());
              right = new _promise2.default(function () {
                var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9(resolve, reject) {
                  var found, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, item, newPath;

                  return _regenerator2.default.wrap(function _callee9$(_context9) {
                    while (1) {
                      switch (_context9.prev = _context9.next) {
                        case 0:
                          _context9.prev = 0;

                          if (!(rightPane.get('share') === data.share && rightPane.get('directory') === data.directory)) {
                            _context9.next = 48;
                            break;
                          }

                          _context9.next = 4;
                          return dispatch(paneDeselect('RIGHT'));

                        case 4:
                          _context9.next = 6;
                          return dispatch(paneSort('RIGHT'));

                        case 6:
                          if (!rightPane.get('name')) {
                            _context9.next = 46;
                            break;
                          }

                          found = false;
                          _iteratorNormalCompletion3 = true;
                          _didIteratorError3 = false;
                          _iteratorError3 = undefined;
                          _context9.prev = 11;
                          _iterator3 = (0, _getIterator3.default)(data.list || []);

                        case 13:
                          if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
                            _context9.next = 21;
                            break;
                          }

                          item = _step3.value;

                          if (!(item.name === rightPane.get('name'))) {
                            _context9.next = 18;
                            break;
                          }

                          found = true;
                          return _context9.abrupt('break', 21);

                        case 18:
                          _iteratorNormalCompletion3 = true;
                          _context9.next = 13;
                          break;

                        case 21:
                          _context9.next = 27;
                          break;

                        case 23:
                          _context9.prev = 23;
                          _context9.t0 = _context9['catch'](11);
                          _didIteratorError3 = true;
                          _iteratorError3 = _context9.t0;

                        case 27:
                          _context9.prev = 27;
                          _context9.prev = 28;

                          if (!_iteratorNormalCompletion3 && _iterator3.return) {
                            _iterator3.return();
                          }

                        case 30:
                          _context9.prev = 30;

                          if (!_didIteratorError3) {
                            _context9.next = 33;
                            break;
                          }

                          throw _iteratorError3;

                        case 33:
                          return _context9.finish(30);

                        case 34:
                          return _context9.finish(27);

                        case 35:
                          if (!found) {
                            _context9.next = 40;
                            break;
                          }

                          _context9.next = 38;
                          return dispatch(paneSelect('RIGHT'));

                        case 38:
                          _context9.next = 46;
                          break;

                        case 40:
                          newPath = data.directory === '/' ? '/' : data.directory + '/';
                          _context9.next = 43;
                          return dispatch(setPanePath('RIGHT', newPath, data.directory, ''));

                        case 43:
                          if (!rightPane.get('isActive')) {
                            _context9.next = 46;
                            break;
                          }

                          _context9.next = 46;
                          return dispatch((0, _reactRouterRedux.push)('/~' + data.share + ':' + newPath));

                        case 46:
                          _context9.next = 48;
                          return dispatch(stopLoadingPane('RIGHT', now, !data.list));

                        case 48:
                          resolve();
                          _context9.next = 54;
                          break;

                        case 51:
                          _context9.prev = 51;
                          _context9.t1 = _context9['catch'](0);

                          reject(_context9.t1);

                        case 54:
                        case 'end':
                          return _context9.stop();
                      }
                    }
                  }, _callee9, undefined, [[0, 51], [11, 23, 27, 35], [28,, 30, 34]]);
                }));

                return function (_x21, _x22) {
                  return _ref10.apply(this, arguments);
                };
              }());
              _context10.next = 10;
              return _promise2.default.all([left, right]);

            case 10:
              _context10.next = 12;
              return dispatch((0, _list.clearLists)());

            case 12:
            case 'end':
              return _context10.stop();
          }
        }
      }, _callee10, undefined);
    }));

    return function (_x17, _x18) {
      return _ref8.apply(this, arguments);
    };
  }();
};

var paneCD = exports.paneCD = function paneCD(pane, share, path) {
  return function () {
    var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee12(dispatch, getState) {
      var state, app, user, leftPane, rightPane, params, start;
      return _regenerator2.default.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              state = getState();
              app = state.get('app');
              user = state.get('user');
              leftPane = state.get('leftPane');
              rightPane = state.get('rightPane');

              if (user.get('isAuthorized')) {
                _context12.next = 7;
                break;
              }

              return _context12.abrupt('return');

            case 7:

              if (!share) share = pane !== 'RIGHT' ? leftPane.get('share') : rightPane.get('share');
              if (!path) path = pane !== 'RIGHT' ? leftPane.get('path') : rightPane.get('path');

              if (!(pane === 'LEFT' && leftPane.get('share') === share && leftPane.get('path') === path)) {
                _context12.next = 11;
                break;
              }

              return _context12.abrupt('return');

            case 11:
              if (!(pane === 'RIGHT' && rightPane.get('share') === share && rightPane.get('path') === path)) {
                _context12.next = 13;
                break;
              }

              return _context12.abrupt('return');

            case 13:
              if (!(pane === 'BOTH' && leftPane.get('share') === rightPane.get('share') === share && leftPane.get('path') === rightPane.get('path') === path)) {
                _context12.next = 15;
                break;
              }

              return _context12.abrupt('return');

            case 15:
              params = {
                pane: pane,
                share: share,
                path: path,
                _csrf: app.get('csrf')
              };
              start = Date.now();

              if (!((pane === 'LEFT' || pane === 'BOTH') && leftPane.get('timestamp') < start)) {
                _context12.next = 20;
                break;
              }

              _context12.next = 20;
              return dispatch(startLoadingPane('LEFT', start));

            case 20:
              if (!((pane === 'RIGHT' || pane === 'BOTH') && rightPane.get('timestamp') < start)) {
                _context12.next = 23;
                break;
              }

              _context12.next = 23;
              return dispatch(startLoadingPane('RIGHT', start));

            case 23:
              return _context12.abrupt('return', new _promise2.default(function (resolve, reject) {
                io.socket.post('/pane/cd', params, function () {
                  var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee11(data, response) {
                    var finish, _state, _leftPane, _rightPane;

                    return _regenerator2.default.wrap(function _callee11$(_context11) {
                      while (1) {
                        switch (_context11.prev = _context11.next) {
                          case 0:
                            _context11.prev = 0;
                            finish = Date.now();

                            if (!(response.statusCode !== 200)) {
                              _context11.next = 10;
                              break;
                            }

                            _context11.next = 5;
                            return dispatch(stopLoadingPane('LEFT'), finish);

                          case 5:
                            _context11.next = 7;
                            return dispatch(stopLoadingPane('RIGHT'), finish);

                          case 7:
                            _context11.next = 9;
                            return dispatch((0, _user.signOut)());

                          case 9:
                            return _context11.abrupt('return', resolve());

                          case 10:
                            _state = getState();
                            _leftPane = _state.get('leftPane');
                            _rightPane = _state.get('rightPane');

                            if (!data.success) {
                              _context11.next = 34;
                              break;
                            }

                            if (!((pane === 'LEFT' || pane === 'BOTH') && _leftPane.get('timestamp') === start)) {
                              _context11.next = 22;
                              break;
                            }

                            _context11.next = 17;
                            return dispatch(setPaneShare('LEFT', data.share));

                          case 17:
                            _context11.next = 19;
                            return dispatch(setPanePath('LEFT', data.path, data.directory, data.name));

                          case 19:
                            if (!_leftPane.get('isActive')) {
                              _context11.next = 22;
                              break;
                            }

                            _context11.next = 22;
                            return dispatch((0, _reactRouterRedux.push)('/~' + data.share + ':' + data.path));

                          case 22:
                            if (!((pane === 'RIGHT' || pane === 'BOTH') && _rightPane.get('timestamp') === start)) {
                              _context11.next = 30;
                              break;
                            }

                            _context11.next = 25;
                            return dispatch(setPaneShare('RIGHT', data.share));

                          case 25:
                            _context11.next = 27;
                            return dispatch(setPanePath('RIGHT', data.path, data.directory, data.name));

                          case 27:
                            if (!_rightPane.get('isActive')) {
                              _context11.next = 30;
                              break;
                            }

                            _context11.next = 30;
                            return dispatch((0, _reactRouterRedux.push)('/~' + data.share + ':' + data.path));

                          case 30:
                            _context11.next = 32;
                            return dispatch(paneUpdate(data));

                          case 32:
                            _context11.next = 62;
                            break;

                          case 34:
                            if (!((pane === 'LEFT' || pane === 'BOTH') && _leftPane.get('timestamp') === start)) {
                              _context11.next = 48;
                              break;
                            }

                            _context11.next = 37;
                            return dispatch(setPaneShare('LEFT', ''));

                          case 37:
                            _context11.next = 39;
                            return dispatch(setPanePath('LEFT', path));

                          case 39:
                            _context11.next = 41;
                            return dispatch(paneDeselect('LEFT'));

                          case 41:
                            _context11.next = 43;
                            return dispatch(paneSort('LEFT'));

                          case 43:
                            _context11.next = 45;
                            return dispatch(stopLoadingPane('LEFT', finish, true));

                          case 45:
                            if (!_leftPane.get('isActive')) {
                              _context11.next = 48;
                              break;
                            }

                            _context11.next = 48;
                            return dispatch((0, _reactRouterRedux.push)('/~' + share + ':' + path));

                          case 48:
                            if (!((pane === 'RIGHT' || pane === 'BOTH') && _rightPane.get('timestamp') === start)) {
                              _context11.next = 62;
                              break;
                            }

                            _context11.next = 51;
                            return dispatch(setPaneShare('RIGHT', ''));

                          case 51:
                            _context11.next = 53;
                            return dispatch(setPanePath('RIGHT', path));

                          case 53:
                            _context11.next = 55;
                            return dispatch(paneDeselect('RIGHT'));

                          case 55:
                            _context11.next = 57;
                            return dispatch(paneSort('RIGHT'));

                          case 57:
                            _context11.next = 59;
                            return dispatch(stopLoadingPane('RIGHT', finish, true));

                          case 59:
                            if (!_rightPane.get('isActive')) {
                              _context11.next = 62;
                              break;
                            }

                            _context11.next = 62;
                            return dispatch((0, _reactRouterRedux.push)('/~' + share + ':' + path));

                          case 62:

                            resolve();
                            _context11.next = 68;
                            break;

                          case 65:
                            _context11.prev = 65;
                            _context11.t0 = _context11['catch'](0);

                            reject(_context11.t0);

                          case 68:
                          case 'end':
                            return _context11.stop();
                        }
                      }
                    }, _callee11, undefined, [[0, 65]]);
                  }));

                  return function (_x25, _x26) {
                    return _ref12.apply(this, arguments);
                  };
                }());
              }));

            case 24:
            case 'end':
              return _context12.stop();
          }
        }
      }, _callee12, undefined);
    }));

    return function (_x23, _x24) {
      return _ref11.apply(this, arguments);
    };
  }();
};

var initPanes = exports.initPanes = function initPanes() {
  return function () {
    var _ref13 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee13(dispatch, getState) {
      var state, user, router, match, share, path;
      return _regenerator2.default.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              state = getState();
              user = state.get('user');
              router = state.get('router');

              if (user.get('isAuthorized')) {
                _context13.next = 5;
                break;
              }

              return _context13.abrupt('return');

            case 5:
              match = (0, _path.matchLocation)(router.getIn(['location', 'pathname']));
              share = match ? match.share : user.getIn(['shares', 0, 'name']);
              path = match ? match.path : '/';
              _context13.next = 10;
              return dispatch(paneCD('BOTH', share, path));

            case 10:
            case 'end':
              return _context13.stop();
          }
        }
      }, _callee13, undefined);
    }));

    return function (_x27, _x28) {
      return _ref13.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(64);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(65);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _variables = __webpack_require__(66);

var _variables2 = _interopRequireDefault(_variables);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactTransitionGroup = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Fade = function Fade(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties3.default)(_ref, ['children']);
  return _react2.default.createElement(
    _reactTransitionGroup.CSSTransition,
    (0, _extends3.default)({}, props, {
      timeout: parseInt(_variables2.default.fadeDuration),
      classNames: 'fade'
    }),
    children
  );
};

exports.default = Fade;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleNavbar = exports.closeNavbar = exports.openNavbar = undefined;

var _actionTypes = __webpack_require__(3);

var actions = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var openNavbar = exports.openNavbar = function openNavbar() {
  return {
    type: actions.OPEN_NAVBAR
  };
};

var closeNavbar = exports.closeNavbar = function closeNavbar() {
  return {
    type: actions.CLOSE_NAVBAR
  };
};

var toggleNavbar = exports.toggleNavbar = function toggleNavbar() {
  return {
    type: actions.TOGGLE_NAVBAR
  };
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateSignInDialog = exports.submitSignInDialog = exports.toggleSignInDialog = exports.hideSignInDialog = exports.showSignInDialog = exports.resetSignInDialog = exports.unlockSignInDialog = exports.lockSignInDialog = undefined;

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _actionTypes = __webpack_require__(3);

var actions = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lockSignInDialog = exports.lockSignInDialog = function lockSignInDialog() {
  return {
    type: actions.LOCK_SIGN_IN_DIALOG
  };
};

var unlockSignInDialog = exports.unlockSignInDialog = function unlockSignInDialog() {
  return {
    type: actions.UNLOCK_SIGN_IN_DIALOG
  };
};

var resetSignInDialog = exports.resetSignInDialog = function resetSignInDialog(values) {
  var action = { type: actions.RESET_SIGN_IN_DIALOG };
  if (values) action.values = values;
  return action;
};

var showSignInDialog = exports.showSignInDialog = function showSignInDialog() {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch, getState) {
      var signInDialog;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              signInDialog = getState().get('signInDialog');

              if (!signInDialog.get('locked')) {
                _context.next = 3;
                break;
              }

              return _context.abrupt('return');

            case 3:
              _context.next = 5;
              return dispatch(resetSignInDialog());

            case 5:
              return _context.abrupt('return', dispatch({
                type: actions.SHOW_SIGN_IN_DIALOG
              }));

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
};

var hideSignInDialog = exports.hideSignInDialog = function hideSignInDialog() {
  return function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dispatch, getState) {
      var signInDialog;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              signInDialog = getState().get('signInDialog');

              if (!signInDialog.get('locked')) {
                _context2.next = 3;
                break;
              }

              return _context2.abrupt('return');

            case 3:
              _context2.next = 5;
              return dispatch(resetSignInDialog());

            case 5:
              return _context2.abrupt('return', dispatch({
                type: actions.HIDE_SIGN_IN_DIALOG
              }));

            case 6:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var toggleSignInDialog = exports.toggleSignInDialog = function toggleSignInDialog() {
  return function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(dispatch, getState) {
      var signInDialog;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              signInDialog = getState().get('signInDialog');

              if (!signInDialog.get('locked')) {
                _context3.next = 3;
                break;
              }

              return _context3.abrupt('return');

            case 3:
              return _context3.abrupt('return', dispatch(signInDialog.get('isOpen') ? hideSignInDialog() : showSignInDialog()));

            case 4:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }();
};

var submitSignInDialog = exports.submitSignInDialog = function submitSignInDialog(submittedAt) {
  return {
    type: actions.SUBMIT_SIGN_IN_DIALOG,
    submittedAt: submittedAt || Date.now()
  };
};

var updateSignInDialog = exports.updateSignInDialog = function updateSignInDialog(data, submittedAt) {
  return {
    type: actions.UPDATE_SIGN_IN_DIALOG,
    submittedAt: submittedAt || Date.now(),
    data: data
  };
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateMkdirDialog = exports.submitMkdirDialog = exports.toggleMkdirDialog = exports.hideMkdirDialog = exports.showMkdirDialog = exports.resetMkdirDialog = exports.unlockMkdirDialog = exports.lockMkdirDialog = undefined;

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _actionTypes = __webpack_require__(3);

var actions = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lockMkdirDialog = exports.lockMkdirDialog = function lockMkdirDialog() {
  return {
    type: actions.LOCK_MKDIR_DIALOG
  };
};

var unlockMkdirDialog = exports.unlockMkdirDialog = function unlockMkdirDialog() {
  return {
    type: actions.UNLOCK_MKDIR_DIALOG
  };
};

var resetMkdirDialog = exports.resetMkdirDialog = function resetMkdirDialog(values) {
  var action = { type: actions.RESET_MKDIR_DIALOG };
  if (values) action.values = values;
  return action;
};

var showMkdirDialog = exports.showMkdirDialog = function showMkdirDialog() {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch, getState) {
      var state, mkdirDialog, leftPane, rightPane, values;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              state = getState();
              mkdirDialog = state.get('mkdirDialog');
              leftPane = state.get('leftPane');
              rightPane = state.get('rightPane');

              if (!mkdirDialog.get('locked')) {
                _context.next = 6;
                break;
              }

              return _context.abrupt('return');

            case 6:
              values = {
                share: leftPane.get('isActive') ? leftPane.get('share') : rightPane.get('share'),
                directory: leftPane.get('isActive') ? leftPane.get('directory') : rightPane.get('directory'),
                name: ''
              };

              if (!(!values.share || !values.directory)) {
                _context.next = 9;
                break;
              }

              return _context.abrupt('return');

            case 9:
              _context.next = 11;
              return dispatch(resetMkdirDialog(values));

            case 11:
              return _context.abrupt('return', dispatch({
                type: actions.SHOW_MKDIR_DIALOG
              }));

            case 12:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
};

var hideMkdirDialog = exports.hideMkdirDialog = function hideMkdirDialog() {
  return function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dispatch, getState) {
      var mkdirDialog;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              mkdirDialog = getState().get('mkdirDialog');

              if (!mkdirDialog.get('locked')) {
                _context2.next = 3;
                break;
              }

              return _context2.abrupt('return');

            case 3:
              _context2.next = 5;
              return dispatch(resetMkdirDialog());

            case 5:
              return _context2.abrupt('return', dispatch({
                type: actions.HIDE_MKDIR_DIALOG
              }));

            case 6:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var toggleMkdirDialog = exports.toggleMkdirDialog = function toggleMkdirDialog() {
  return function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(dispatch, getState) {
      var mkdirDialog;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              mkdirDialog = getState().get('mkdirDialog');

              if (!mkdirDialog.get('locked')) {
                _context3.next = 3;
                break;
              }

              return _context3.abrupt('return');

            case 3:
              return _context3.abrupt('return', dispatch(mkdirDialog.get('isOpen') ? hideMkdirDialog() : showMkdirDialog()));

            case 4:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }();
};

var submitMkdirDialog = exports.submitMkdirDialog = function submitMkdirDialog(submittedAt) {
  return {
    type: actions.SUBMIT_MKDIR_DIALOG,
    submittedAt: submittedAt || Date.now()
  };
};

var updateMkdirDialog = exports.updateMkdirDialog = function updateMkdirDialog(data, submittedAt) {
  return {
    type: actions.UPDATE_MKDIR_DIALOG,
    submittedAt: submittedAt || Date.now(),
    data: data
  };
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateRenameDialog = exports.submitRenameDialog = exports.toggleRenameDialog = exports.hideRenameDialog = exports.showRenameDialog = exports.resetRenameDialog = exports.unlockRenameDialog = exports.lockRenameDialog = undefined;

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _actionTypes = __webpack_require__(3);

var actions = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lockRenameDialog = exports.lockRenameDialog = function lockRenameDialog() {
  return {
    type: actions.LOCK_RENAME_DIALOG
  };
};

var unlockRenameDialog = exports.unlockRenameDialog = function unlockRenameDialog() {
  return {
    type: actions.UNLOCK_RENAME_DIALOG
  };
};

var resetRenameDialog = exports.resetRenameDialog = function resetRenameDialog(values) {
  var action = { type: actions.RESET_RENAME_DIALOG };
  if (values) action.values = values;
  return action;
};

var showRenameDialog = exports.showRenameDialog = function showRenameDialog() {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch, getState) {
      var state, renameDialog, leftPane, rightPane, values;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              state = getState();
              renameDialog = state.get('renameDialog');
              leftPane = state.get('leftPane');
              rightPane = state.get('rightPane');

              if (!renameDialog.get('locked')) {
                _context.next = 6;
                break;
              }

              return _context.abrupt('return');

            case 6:
              values = {
                share: leftPane.get('isActive') ? leftPane.get('share') : rightPane.get('share'),
                directory: leftPane.get('isActive') ? leftPane.get('directory') : rightPane.get('directory'),
                name: leftPane.get('isActive') ? leftPane.get('name') : rightPane.get('name'),
                newName: leftPane.get('isActive') ? leftPane.get('name') : rightPane.get('name')
              };

              if (!(!values.share || !values.directory || !values.name)) {
                _context.next = 9;
                break;
              }

              return _context.abrupt('return');

            case 9:
              _context.next = 11;
              return dispatch(resetRenameDialog(values));

            case 11:
              return _context.abrupt('return', dispatch({
                type: actions.SHOW_RENAME_DIALOG
              }));

            case 12:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
};

var hideRenameDialog = exports.hideRenameDialog = function hideRenameDialog() {
  return function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dispatch, getState) {
      var renameDialog;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              renameDialog = getState().get('renameDialog');

              if (!renameDialog.get('locked')) {
                _context2.next = 3;
                break;
              }

              return _context2.abrupt('return');

            case 3:
              _context2.next = 5;
              return dispatch(resetRenameDialog());

            case 5:
              return _context2.abrupt('return', dispatch({
                type: actions.HIDE_RENAME_DIALOG
              }));

            case 6:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var toggleRenameDialog = exports.toggleRenameDialog = function toggleRenameDialog() {
  return function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(dispatch, getState) {
      var renameDialog;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              renameDialog = getState().get('renameDialog');

              if (!renameDialog.get('locked')) {
                _context3.next = 3;
                break;
              }

              return _context3.abrupt('return');

            case 3:
              return _context3.abrupt('return', dispatch(renameDialog.get('isOpen') ? hideRenameDialog() : showRenameDialog()));

            case 4:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }();
};

var submitRenameDialog = exports.submitRenameDialog = function submitRenameDialog(submittedAt) {
  return {
    type: actions.SUBMIT_RENAME_DIALOG,
    submittedAt: submittedAt || Date.now()
  };
};

var updateRenameDialog = exports.updateRenameDialog = function updateRenameDialog(data, submittedAt) {
  return {
    type: actions.UPDATE_RENAME_DIALOG,
    submittedAt: submittedAt || Date.now(),
    data: data
  };
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stopCopyDialogFind = exports.startCopyDialogFind = exports.updateCopyDialog = exports.submitCopyDialog = exports.toggleCopyDialog = exports.hideCopyDialog = exports.showCopyDialog = exports.resetCopyDialog = exports.unlockCopyDialog = exports.lockCopyDialog = undefined;

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _actionTypes = __webpack_require__(3);

var actions = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lockCopyDialog = exports.lockCopyDialog = function lockCopyDialog() {
  return {
    type: actions.LOCK_COPY_DIALOG
  };
};

var unlockCopyDialog = exports.unlockCopyDialog = function unlockCopyDialog() {
  return {
    type: actions.UNLOCK_COPY_DIALOG
  };
};

var resetCopyDialog = exports.resetCopyDialog = function resetCopyDialog(values) {
  var action = { type: actions.RESET_COPY_DIALOG };
  if (values) action.values = values;
  return action;
};

var showCopyDialog = exports.showCopyDialog = function showCopyDialog() {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch, getState) {
      var state, copyDialog, leftPane, rightPane, values;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              state = getState();
              copyDialog = state.get('copyDialog');
              leftPane = state.get('leftPane');
              rightPane = state.get('rightPane');

              if (!copyDialog.get('locked')) {
                _context.next = 6;
                break;
              }

              return _context.abrupt('return');

            case 6:
              values = {
                srcShare: leftPane.get('isActive') ? leftPane.get('share') : rightPane.get('share'),
                srcDirectory: leftPane.get('isActive') ? leftPane.get('directory') : rightPane.get('directory'),
                srcName: leftPane.get('isActive') ? leftPane.get('name') : rightPane.get('name'),
                dstShare: leftPane.get('isActive') ? rightPane.get('share') : leftPane.get('share'),
                dstDirectory: leftPane.get('isActive') ? rightPane.get('directory') : leftPane.get('directory')
              };

              if (!(!values.srcShare || !values.srcDirectory || !values.dstShare || !values.dstDirectory)) {
                _context.next = 9;
                break;
              }

              return _context.abrupt('return');

            case 9:
              _context.next = 11;
              return dispatch(resetCopyDialog(values));

            case 11:
              return _context.abrupt('return', dispatch({
                type: actions.SHOW_COPY_DIALOG
              }));

            case 12:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
};

var hideCopyDialog = exports.hideCopyDialog = function hideCopyDialog() {
  return function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dispatch, getState) {
      var copyDialog;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              copyDialog = getState().get('copyDialog');

              if (!copyDialog.get('locked')) {
                _context2.next = 3;
                break;
              }

              return _context2.abrupt('return');

            case 3:
              _context2.next = 5;
              return dispatch(resetCopyDialog());

            case 5:
              return _context2.abrupt('return', dispatch({
                type: actions.HIDE_COPY_DIALOG
              }));

            case 6:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var toggleCopyDialog = exports.toggleCopyDialog = function toggleCopyDialog() {
  return function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(dispatch, getState) {
      var copyDialog;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              copyDialog = getState().get('copyDialog');

              if (!copyDialog.get('locked')) {
                _context3.next = 3;
                break;
              }

              return _context3.abrupt('return');

            case 3:
              return _context3.abrupt('return', dispatch(copyDialog.get('isOpen') ? hideCopyDialog() : showCopyDialog()));

            case 4:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }();
};

var submitCopyDialog = exports.submitCopyDialog = function submitCopyDialog(submittedAt) {
  return {
    type: actions.SUBMIT_COPY_DIALOG,
    submittedAt: submittedAt || Date.now()
  };
};

var updateCopyDialog = exports.updateCopyDialog = function updateCopyDialog(data, submittedAt) {
  return {
    type: actions.UPDATE_COPY_DIALOG,
    submittedAt: submittedAt || Date.now(),
    data: data
  };
};

var startCopyDialogFind = exports.startCopyDialogFind = function startCopyDialogFind() {
  return {
    type: actions.START_COPY_DIALOG_FIND
  };
};

var stopCopyDialogFind = exports.stopCopyDialogFind = function stopCopyDialogFind(nodes) {
  return {
    type: actions.STOP_COPY_DIALOG_FIND,
    nodes: nodes
  };
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stopMoveDialogFind = exports.startMoveDialogFind = exports.updateMoveDialog = exports.submitMoveDialog = exports.toggleMoveDialog = exports.hideMoveDialog = exports.showMoveDialog = exports.resetMoveDialog = exports.unlockMoveDialog = exports.lockMoveDialog = undefined;

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _actionTypes = __webpack_require__(3);

var actions = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lockMoveDialog = exports.lockMoveDialog = function lockMoveDialog() {
  return {
    type: actions.LOCK_MOVE_DIALOG
  };
};

var unlockMoveDialog = exports.unlockMoveDialog = function unlockMoveDialog() {
  return {
    type: actions.UNLOCK_MOVE_DIALOG
  };
};

var resetMoveDialog = exports.resetMoveDialog = function resetMoveDialog(values) {
  var action = { type: actions.RESET_MOVE_DIALOG };
  if (values) action.values = values;
  return action;
};

var showMoveDialog = exports.showMoveDialog = function showMoveDialog() {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch, getState) {
      var state, moveDialog, leftPane, rightPane, values;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              state = getState();
              moveDialog = state.get('moveDialog');
              leftPane = state.get('leftPane');
              rightPane = state.get('rightPane');

              if (!moveDialog.get('locked')) {
                _context.next = 6;
                break;
              }

              return _context.abrupt('return');

            case 6:
              values = {
                srcShare: leftPane.get('isActive') ? leftPane.get('share') : rightPane.get('share'),
                srcDirectory: leftPane.get('isActive') ? leftPane.get('directory') : rightPane.get('directory'),
                srcName: leftPane.get('isActive') ? leftPane.get('name') : rightPane.get('name'),
                dstShare: leftPane.get('isActive') ? rightPane.get('share') : leftPane.get('share'),
                dstDirectory: leftPane.get('isActive') ? rightPane.get('directory') : leftPane.get('directory')
              };

              if (!(!values.srcShare || !values.srcDirectory || !values.dstShare || !values.dstDirectory)) {
                _context.next = 9;
                break;
              }

              return _context.abrupt('return');

            case 9:
              _context.next = 11;
              return dispatch(resetMoveDialog(values));

            case 11:
              return _context.abrupt('return', dispatch({
                type: actions.SHOW_MOVE_DIALOG
              }));

            case 12:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
};

var hideMoveDialog = exports.hideMoveDialog = function hideMoveDialog() {
  return function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dispatch, getState) {
      var moveDialog;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              moveDialog = getState().get('moveDialog');

              if (!moveDialog.get('locked')) {
                _context2.next = 3;
                break;
              }

              return _context2.abrupt('return');

            case 3:
              _context2.next = 5;
              return dispatch(resetMoveDialog());

            case 5:
              return _context2.abrupt('return', dispatch({
                type: actions.HIDE_MOVE_DIALOG
              }));

            case 6:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var toggleMoveDialog = exports.toggleMoveDialog = function toggleMoveDialog() {
  return function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(dispatch, getState) {
      var moveDialog;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              moveDialog = getState().get('moveDialog');

              if (!moveDialog.get('locked')) {
                _context3.next = 3;
                break;
              }

              return _context3.abrupt('return');

            case 3:
              return _context3.abrupt('return', dispatch(moveDialog.get('isOpen') ? hideMoveDialog() : showMoveDialog()));

            case 4:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }();
};

var submitMoveDialog = exports.submitMoveDialog = function submitMoveDialog(submittedAt) {
  return {
    type: actions.SUBMIT_MOVE_DIALOG,
    submittedAt: submittedAt || Date.now()
  };
};

var updateMoveDialog = exports.updateMoveDialog = function updateMoveDialog(data, submittedAt) {
  return {
    type: actions.UPDATE_MOVE_DIALOG,
    submittedAt: submittedAt || Date.now(),
    data: data
  };
};

var startMoveDialogFind = exports.startMoveDialogFind = function startMoveDialogFind() {
  return {
    type: actions.START_MOVE_DIALOG_FIND
  };
};

var stopMoveDialogFind = exports.stopMoveDialogFind = function stopMoveDialogFind(nodes) {
  return {
    type: actions.STOP_MOVE_DIALOG_FIND,
    nodes: nodes
  };
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stopDeleteDialogFind = exports.startDeleteDialogFind = exports.updateDeleteDialog = exports.submitDeleteDialog = exports.toggleDeleteDialog = exports.hideDeleteDialog = exports.showDeleteDialog = exports.resetDeleteDialog = exports.unlockDeleteDialog = exports.lockDeleteDialog = undefined;

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _actionTypes = __webpack_require__(3);

var actions = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lockDeleteDialog = exports.lockDeleteDialog = function lockDeleteDialog() {
  return {
    type: actions.LOCK_DELETE_DIALOG
  };
};

var unlockDeleteDialog = exports.unlockDeleteDialog = function unlockDeleteDialog() {
  return {
    type: actions.UNLOCK_DELETE_DIALOG
  };
};

var resetDeleteDialog = exports.resetDeleteDialog = function resetDeleteDialog(values) {
  var action = { type: actions.RESET_DELETE_DIALOG };
  if (values) action.values = values;
  return action;
};

var showDeleteDialog = exports.showDeleteDialog = function showDeleteDialog() {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch, getState) {
      var state, deleteDialog, leftPane, rightPane, values;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              state = getState();
              deleteDialog = state.get('deleteDialog');
              leftPane = state.get('leftPane');
              rightPane = state.get('rightPane');

              if (!deleteDialog.get('locked')) {
                _context.next = 6;
                break;
              }

              return _context.abrupt('return');

            case 6:
              values = {
                share: leftPane.get('isActive') ? leftPane.get('share') : rightPane.get('share'),
                directory: leftPane.get('isActive') ? leftPane.get('directory') : rightPane.get('directory'),
                name: leftPane.get('isActive') ? leftPane.get('name') : rightPane.get('name')
              };

              if (!(!values.share || !values.directory)) {
                _context.next = 9;
                break;
              }

              return _context.abrupt('return');

            case 9:
              _context.next = 11;
              return dispatch(resetDeleteDialog(values));

            case 11:
              return _context.abrupt('return', dispatch({
                type: actions.SHOW_DELETE_DIALOG
              }));

            case 12:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
};

var hideDeleteDialog = exports.hideDeleteDialog = function hideDeleteDialog() {
  return function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dispatch, getState) {
      var deleteDialog;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              deleteDialog = getState().get('deleteDialog');

              if (!deleteDialog.get('locked')) {
                _context2.next = 3;
                break;
              }

              return _context2.abrupt('return');

            case 3:
              _context2.next = 5;
              return dispatch(resetDeleteDialog());

            case 5:
              return _context2.abrupt('return', dispatch({
                type: actions.HIDE_DELETE_DIALOG
              }));

            case 6:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var toggleDeleteDialog = exports.toggleDeleteDialog = function toggleDeleteDialog() {
  return function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(dispatch, getState) {
      var deleteDialog;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              deleteDialog = getState().get('deleteDialog');

              if (!deleteDialog.get('locked')) {
                _context3.next = 3;
                break;
              }

              return _context3.abrupt('return');

            case 3:
              return _context3.abrupt('return', dispatch(deleteDialog.get('isOpen') ? hideDeleteDialog() : showDeleteDialog()));

            case 4:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }();
};

var submitDeleteDialog = exports.submitDeleteDialog = function submitDeleteDialog(submittedAt) {
  return {
    type: actions.SUBMIT_DELETE_DIALOG,
    submittedAt: submittedAt || Date.now()
  };
};

var updateDeleteDialog = exports.updateDeleteDialog = function updateDeleteDialog(data, submittedAt) {
  return {
    type: actions.UPDATE_DELETE_DIALOG,
    submittedAt: submittedAt || Date.now(),
    data: data
  };
};

var startDeleteDialogFind = exports.startDeleteDialogFind = function startDeleteDialogFind() {
  return {
    type: actions.START_DELETE_DIALOG_FIND
  };
};

var stopDeleteDialogFind = exports.stopDeleteDialogFind = function stopDeleteDialogFind(nodes) {
  return {
    type: actions.STOP_DELETE_DIALOG_FIND,
    nodes: nodes
  };
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadSize = exports.clearSizes = exports.setSize = undefined;

var _promise = __webpack_require__(17);

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = __webpack_require__(15);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _actionTypes = __webpack_require__(3);

var actions = _interopRequireWildcard(_actionTypes);

var _user = __webpack_require__(16);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setSize = exports.setSize = function setSize(id, size) {
  size.timestamp = Date.now();
  return {
    type: actions.SET_SIZE,
    id: id,
    size: size
  };
};

var clearSizes = exports.clearSizes = function clearSizes() {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch, getState) {
      var sizes, keep, now, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, id;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              sizes = getState().get('sizes');
              keep = [];
              now = Date.now();
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context.prev = 6;

              for (_iterator = (0, _getIterator3.default)(sizes.keys()); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                id = _step.value;

                if (now - sizes.getIn([id, 'timestamp']) < 15 * 60 * 1000) keep.push(id);
              }

              _context.next = 14;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context['catch'](6);
              _didIteratorError = true;
              _iteratorError = _context.t0;

            case 14:
              _context.prev = 14;
              _context.prev = 15;

              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }

            case 17:
              _context.prev = 17;

              if (!_didIteratorError) {
                _context.next = 20;
                break;
              }

              throw _iteratorError;

            case 20:
              return _context.finish(17);

            case 21:
              return _context.finish(14);

            case 22:
              _context.next = 24;
              return dispatch({
                type: actions.CLEAR_SIZE,
                keep: keep
              });

            case 24:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[6, 10, 14, 22], [15,, 17, 21]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
};

var loadSize = exports.loadSize = function loadSize(share, path) {
  return function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(dispatch, getState) {
      var state, app, sizes, id, params;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              state = getState();
              app = state.get('app');
              sizes = state.get('sizes');
              id = share + ':' + path;

              if (!(sizes.has(id) && sizes.getIn([id, 'isLoading']))) {
                _context3.next = 6;
                break;
              }

              return _context3.abrupt('return');

            case 6:
              params = {
                share: share,
                path: path,
                _csrf: app.get('csrf')
              };
              _context3.next = 9;
              return dispatch(setSize(id, {
                isLoading: true,
                isForbidden: false
              }));

            case 9:
              return _context3.abrupt('return', new _promise2.default(function (resolve) {
                io.socket.get('/pane/size', params, function () {
                  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(data, response) {
                    return _regenerator2.default.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            if (!(response.statusCode === 200)) {
                              _context2.next = 12;
                              break;
                            }

                            if (!data.success) {
                              _context2.next = 6;
                              break;
                            }

                            _context2.next = 4;
                            return dispatch(setSize(id, {
                              isLoading: false,
                              isForbidden: false,
                              du: data.du
                            }));

                          case 4:
                            _context2.next = 8;
                            break;

                          case 6:
                            _context2.next = 8;
                            return dispatch(setSize(id, {
                              isLoading: false,
                              isForbidden: true
                            }));

                          case 8:
                            _context2.next = 10;
                            return dispatch(clearSizes());

                          case 10:
                            _context2.next = 14;
                            break;

                          case 12:
                            _context2.next = 14;
                            return dispatch((0, _user.signOut)());

                          case 14:

                            resolve();

                          case 15:
                          case 'end':
                            return _context2.stop();
                        }
                      }
                    }, _callee2, undefined);
                  }));

                  return function (_x5, _x6) {
                    return _ref3.apply(this, arguments);
                  };
                }());
              }));

            case 10:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setServerState = exports.initApp = exports.screenResize = exports.setAppVersion = exports.startApp = exports.disconnectApp = exports.connectApp = exports.getCSRFToken = undefined;

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(17);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _actionTypes = __webpack_require__(3);

var actions = _interopRequireWildcard(_actionTypes);

var _user = __webpack_require__(16);

var _pane = __webpack_require__(28);

var _list = __webpack_require__(40);

var _progressDialog = __webpack_require__(41);

var _path = __webpack_require__(25);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getCSRFToken = exports.getCSRFToken = function getCSRFToken() {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(dispatch) {
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt('return', new _promise2.default(function () {
                var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(resolve) {
                  var retry;
                  return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          retry = function () {
                            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                              var response;
                              return _regenerator2.default.wrap(function _callee$(_context) {
                                while (1) {
                                  switch (_context.prev = _context.next) {
                                    case 0:
                                      _context.prev = 0;
                                      _context.next = 3;
                                      return fetch('/auth/csrf', {
                                        method: 'GET',
                                        credentials: 'same-origin',
                                        headers: {
                                          'Content-Type': 'application/json',
                                          'Accept': 'application/json'
                                        }
                                      });

                                    case 3:
                                      response = _context.sent;

                                      if (!(response.status === 200)) {
                                        _context.next = 14;
                                        break;
                                      }

                                      _context.t0 = dispatch;
                                      _context.t1 = actions.SET_CSRF_TOKEN;
                                      _context.next = 9;
                                      return response.json();

                                    case 9:
                                      _context.t2 = _context.sent._csrf;
                                      _context.t3 = {
                                        type: _context.t1,
                                        token: _context.t2
                                      };
                                      _context.next = 13;
                                      return (0, _context.t0)(_context.t3);

                                    case 13:
                                      return _context.abrupt('return', resolve());

                                    case 14:
                                      _context.next = 19;
                                      break;

                                    case 16:
                                      _context.prev = 16;
                                      _context.t4 = _context['catch'](0);

                                      console.error(_context.t4);

                                    case 19:
                                      setTimeout(retry, 1000);

                                    case 20:
                                    case 'end':
                                      return _context.stop();
                                  }
                                }
                              }, _callee, undefined, [[0, 16]]);
                            }));

                            return function retry() {
                              return _ref3.apply(this, arguments);
                            };
                          }();

                          _context2.next = 3;
                          return retry();

                        case 3:
                        case 'end':
                          return _context2.stop();
                      }
                    }
                  }, _callee2, undefined);
                }));

                return function (_x2) {
                  return _ref2.apply(this, arguments);
                };
              }()));

            case 1:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

var connectApp = exports.connectApp = function connectApp() {
  var when = Date.now();
  return function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(dispatch, getState) {
      var state, app, _state, _app, leftPane, rightPane, params;

      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              state = getState();
              app = state.get('app');

              if (!(app.get('ioTimestamp') > when)) {
                _context4.next = 4;
                break;
              }

              return _context4.abrupt('return');

            case 4:

              dispatch({
                type: app.get('isConnected') ? actions.CONNECT_APP : actions.DISCONNECT_APP,
                when: when
              });
              _context4.next = 7;
              return dispatch(getCSRFToken());

            case 7:
              if (!(getState().getIn(['app', 'ioTimestamp']) !== when)) {
                _context4.next = 9;
                break;
              }

              return _context4.abrupt('return');

            case 9:
              _context4.next = 11;
              return dispatch((0, _user.updateStatus)());

            case 11:
              if (!(getState().getIn(['app', 'ioTimestamp']) !== when)) {
                _context4.next = 13;
                break;
              }

              return _context4.abrupt('return');

            case 13:
              _state = getState();
              _app = _state.get('app');
              leftPane = _state.get('leftPane');
              rightPane = _state.get('rightPane');
              params = {
                timestamp: window.__TIMESTAMP__,
                left: {
                  share: leftPane.get('share'),
                  directory: leftPane.get('directory')
                },
                right: {
                  share: rightPane.get('share'),
                  directory: rightPane.get('directory')
                },
                _csrf: _app.get('csrf')
              };
              _context4.next = 20;
              return new _promise2.default(function (resolve) {
                io.socket.post('/pane/loaded', params, function () {
                  return resolve();
                });
              });

            case 20:
              if (!(getState().getIn(['app', 'ioTimestamp']) !== when)) {
                _context4.next = 22;
                break;
              }

              return _context4.abrupt('return');

            case 22:

              dispatch({
                type: actions.CONNECT_APP,
                when: when
              });

            case 23:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined);
    }));

    return function (_x3, _x4) {
      return _ref4.apply(this, arguments);
    };
  }();
};

var disconnectApp = exports.disconnectApp = function disconnectApp() {
  var now = Date.now();
  window.__TIMESTAMP__ = now;
  return {
    type: actions.DISCONNECT_APP,
    when: now
  };
};

var startApp = exports.startApp = function startApp() {
  return function (dispatch) {
    dispatch({
      type: actions.START_APP
    });

    io.socket.on('connect', function () {
      return dispatch(connectApp());
    });
    io.socket.on('disconnect', function () {
      return dispatch(disconnectApp());
    });
    io.socket.on('update', function (data) {
      return dispatch((0, _pane.paneUpdate)(data));
    });
    io.socket.on('progress-start', function (data) {
      return dispatch((0, _progressDialog.startProgress)(data));
    });
    io.socket.on('progress-more', function (data) {
      return dispatch((0, _progressDialog.updateProgress)(data));
    });
    io.socket.on('progress-finish', function (data) {
      return dispatch((0, _progressDialog.finishProgress)(data));
    });

    if (io.socket.isConnected()) dispatch(connectApp());
  };
};

var versionTimer = null;
var setAppVersion = exports.setAppVersion = function setAppVersion(isSameVersion) {
  if (versionTimer) {
    clearTimeout(versionTimer);
    versionTimer = null;
  }

  if (!isSameVersion) versionTimer = setTimeout(function () {
    return window.location.reload(true);
  }, 60 * 1000);

  return {
    type: actions.APP_VERSION,
    isSameVersion: isSameVersion
  };
};

var screenResize = exports.screenResize = function screenResize() {
  return function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(dispatch, getState) {
      var state, app, rightPane, newSize;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              state = getState();
              app = state.get('app');
              rightPane = state.get('rightPane');
              newSize = Breakpoints.current().name;

              if (!(!app.get('isStarted') || !newSize || newSize === app.get('breakpoint'))) {
                _context5.next = 6;
                break;
              }

              return _context5.abrupt('return');

            case 6:
              if (!(newSize === 'xs')) {
                _context5.next = 14;
                break;
              }

              _context5.next = 9;
              return dispatch((0, _pane.hidePane)('RIGHT'));

            case 9:
              if (!rightPane.get('isActive')) {
                _context5.next = 12;
                break;
              }

              _context5.next = 12;
              return dispatch((0, _pane.setActivePane)('LEFT'));

            case 12:
              _context5.next = 17;
              break;

            case 14:
              if (!(app.get('prevBreakpoint') === 'xs')) {
                _context5.next = 17;
                break;
              }

              _context5.next = 17;
              return dispatch((0, _pane.showPane)('RIGHT'));

            case 17:
              return _context5.abrupt('return', dispatch({
                type: actions.SCREEN_RESIZE,
                breakpoint: newSize
              }));

            case 18:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, undefined);
    }));

    return function (_x5, _x6) {
      return _ref5.apply(this, arguments);
    };
  }();
};

var initApp = exports.initApp = function initApp(history) {
  return function () {
    var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(dispatch, getState) {
      return _regenerator2.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              if (!getState().getIn(['app', 'isStarted'])) {
                _context7.next = 2;
                break;
              }

              return _context7.abrupt('return');

            case 2:
              _context7.next = 4;
              return dispatch(startApp());

            case 4:
              _context7.next = 6;
              return dispatch(screenResize());

            case 6:
              _context7.next = 8;
              return dispatch((0, _pane.setActivePane)('LEFT'));

            case 8:

              history.listen(function () {
                var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(location) {
                  var state, user, leftPane, pane, match;
                  return _regenerator2.default.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          state = getState();
                          user = state.get('user');
                          leftPane = state.get('leftPane');

                          if (user.get('isAuthorized')) {
                            _context6.next = 5;
                            break;
                          }

                          return _context6.abrupt('return');

                        case 5:
                          pane = leftPane.get('isActive') ? 'LEFT' : 'RIGHT';
                          match = (0, _path.matchLocation)(location.pathname);

                          dispatch((0, _pane.paneCD)(pane, match ? match.share : user.getIn(['shares', 0, 'name']), match ? match.path : '/'));

                        case 8:
                        case 'end':
                          return _context6.stop();
                      }
                    }
                  }, _callee6, undefined);
                }));

                return function (_x9) {
                  return _ref7.apply(this, arguments);
                };
              }());

            case 9:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, undefined);
    }));

    return function (_x7, _x8) {
      return _ref6.apply(this, arguments);
    };
  }();
};

var setServerState = exports.setServerState = function setServerState(params) {
  return function () {
    var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(dispatch) {
      return _regenerator2.default.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return dispatch((0, _user.setUser)(true, params.login, params.locale, params.shares));

            case 2:
              _context8.next = 4;
              return dispatch((0, _pane.setPaneShare)('LEFT', params.share));

            case 4:
              _context8.next = 6;
              return dispatch((0, _pane.setPanePath)('LEFT', params.path, params.directory, params.name));

            case 6:
              _context8.next = 8;
              return dispatch((0, _pane.setPaneShare)('RIGHT', params.share));

            case 8:
              _context8.next = 10;
              return dispatch((0, _pane.setPanePath)('RIGHT', params.path, params.directory, params.name));

            case 10:
              if (!params.list) {
                _context8.next = 23;
                break;
              }

              _context8.next = 13;
              return dispatch((0, _list.setList)(params.share + ':' + params.directory, params.list));

            case 13:
              _context8.next = 15;
              return dispatch((0, _pane.paneSort)('LEFT'));

            case 15:
              _context8.next = 17;
              return dispatch((0, _pane.paneSelect)('LEFT'));

            case 17:
              _context8.next = 19;
              return dispatch((0, _pane.paneSort)('RIGHT'));

            case 19:
              _context8.next = 21;
              return dispatch((0, _pane.paneSelect)('RIGHT'));

            case 21:
              _context8.next = 27;
              break;

            case 23:
              _context8.next = 25;
              return dispatch((0, _pane.stopLoadingPane)('LEFT', 0, true));

            case 25:
              _context8.next = 27;
              return dispatch((0, _pane.stopLoadingPane)('RIGHT', 0, true));

            case 27:
            case 'end':
              return _context8.stop();
          }
        }
      }, _callee8, undefined);
    }));

    return function (_x10) {
      return _ref8.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearLists = exports.setList = undefined;

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _actionTypes = __webpack_require__(3);

var actions = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setList = exports.setList = function setList(id, list) {
  return {
    type: actions.SET_LIST,
    id: id,
    list: list
  };
};

var clearLists = exports.clearLists = function clearLists() {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch, getState) {
      var state, lists, leftPane, rightPane, leftId, rightId, keep;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              state = getState();
              lists = state.get('lists');
              leftPane = state.get('leftPane');
              rightPane = state.get('rightPane');
              leftId = void 0;

              if (leftPane.get('share') && leftPane.get('directory')) leftId = leftPane.get('share') + ':' + leftPane.get('directory');
              rightId = void 0;

              if (rightPane.get('share') && rightPane.get('directory')) rightId = rightPane.get('share') + ':' + rightPane.get('directory');

              if (!(lists.size === 0 || leftId && rightId && (leftId === rightId ? lists.size === 1 : lists.size === 2))) {
                _context.next = 10;
                break;
              }

              return _context.abrupt('return');

            case 10:
              keep = [];

              if (leftId) keep.push(leftId);
              if (rightId && rightId !== leftId) keep.push(rightId);

              _context.next = 15;
              return dispatch({
                type: actions.CLEAR_LIST,
                keep: keep
              });

            case 15:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearProgress = exports.finishProgress = exports.updateProgress = exports.startProgress = undefined;

var _actionTypes = __webpack_require__(3);

var actions = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var startProgress = exports.startProgress = function startProgress(message) {
  return {
    type: actions.START_PROGRESS,
    message: message
  };
};

var updateProgress = exports.updateProgress = function updateProgress(message) {
  return {
    type: actions.UPDATE_PROGRESS,
    message: message
  };
};

var finishProgress = exports.finishProgress = function finishProgress(message) {
  return {
    type: actions.FINISH_PROGRESS,
    message: message
  };
};

var clearProgress = exports.clearProgress = function clearProgress() {
  return {
    type: actions.CLEAR_PROGRESS
  };
};

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/array/from");

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hideFailureDialog = exports.showFailureDialog = undefined;

var _actionTypes = __webpack_require__(3);

var actions = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var showFailureDialog = exports.showFailureDialog = function showFailureDialog(messages, errors) {
  return {
    type: actions.SHOW_FAILURE_DIALOG,
    messages: messages,
    errors: errors
  };
};

var hideFailureDialog = exports.hideFailureDialog = function hideFailureDialog() {
  return {
    type: actions.HIDE_FAILURE_DIALOG
  };
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(2);

var _jsx3 = _interopRequireDefault(_jsx2);

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _immutable = __webpack_require__(0);

var _DisabledView = __webpack_require__(94);

var _DisabledView2 = _interopRequireDefault(_DisabledView);

var _LoadingView = __webpack_require__(95);

var _LoadingView2 = _interopRequireDefault(_LoadingView);

var _Header = __webpack_require__(96);

var _Header2 = _interopRequireDefault(_Header);

var _ListView = __webpack_require__(97);

var _ListView2 = _interopRequireDefault(_ListView);

var _ContentView = __webpack_require__(102);

var _ContentView2 = _interopRequireDefault(_ContentView);

var _InfoView = __webpack_require__(103);

var _InfoView2 = _interopRequireDefault(_InfoView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pane = function (_React$PureComponent) {
  (0, _inherits3.default)(Pane, _React$PureComponent);

  function Pane() {
    (0, _classCallCheck3.default)(this, Pane);
    return (0, _possibleConstructorReturn3.default)(this, (Pane.__proto__ || (0, _getPrototypeOf2.default)(Pane)).apply(this, arguments));
  }

  (0, _createClass3.default)(Pane, [{
    key: 'render',
    value: function render() {
      var view = null;
      if (this.props.isDisabled) {
        view = (0, _jsx3.default)(_DisabledView2.default, {
          isActive: this.props.isActive
        });
      } else if (this.props.isLoading) {
        view = (0, _jsx3.default)(_LoadingView2.default, {
          isActive: this.props.isActive
        });
      } else {
        if (this.props.mode === 'CONTENTS') {
          view = (0, _jsx3.default)(_ContentView2.default, {
            content: this.props.content
          });
        } else if (this.props.mode === 'INFO') {
          view = (0, _jsx3.default)(_InfoView2.default, {
            info: this.props.info
          });
        } else {
          view = (0, _jsx3.default)(_ListView2.default, {
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
            onDeleteClick: this.props.onDeleteClick
          });
        }
        view = (0, _jsx3.default)('div', {
          className: 'view rounded' + (this.props.isActive ? ' active' : '')
        }, void 0, (0, _jsx3.default)(_Header2.default, {
          which: this.props.which,
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
        }), view);
      }

      return (0, _jsx3.default)('div', {
        className: 'pane',
        onClick: this.props.onPaneClick
      }, void 0, view);
    }
  }]);
  return Pane;
}(_react2.default.PureComponent);

Pane.defaultProps = {
  content: (0, _immutable.Map)({}),
  info: (0, _immutable.Map)({})
};
exports.default = Pane;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.human = human;
function human(bytes) {
  var size = bytes;
  var suffix = 'B';
  var units = ['KB', 'MB', 'GB', 'TB'];
  var min = 1;
  for (var i = 0; i < units.length; i++) {
    min *= 1024;
    if (bytes >= min) {
      size = bytes / min;
      suffix = units[i];
    } else {
      break;
    }
  }

  return Math.round(100 * size) / 100 + ' ' + suffix;
}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _jsx2 = __webpack_require__(2);

var _jsx3 = _interopRequireDefault(_jsx2);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(47);

var _reactRedux = __webpack_require__(12);

var _createMemoryHistory = __webpack_require__(48);

var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

var _reactRouterRedux = __webpack_require__(26);

var _path = __webpack_require__(25);

var _storeFactory = __webpack_require__(49);

var _storeFactory2 = _interopRequireDefault(_storeFactory);

var _App = __webpack_require__(62);

var _App2 = _interopRequireDefault(_App);

var _app = __webpack_require__(39);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports.matchLocation = _path.matchLocation;

var _ref2 = (0, _jsx3.default)(_App2.default, {});

module.exports.render = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(params) {
    var history, store, html, state;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            history = (0, _createMemoryHistory2.default)();
            store = (0, _storeFactory2.default)(history);


            history.push(params.url);

            if (!params.isAuthorized) {
              _context.next = 6;
              break;
            }

            _context.next = 6;
            return store.dispatch((0, _app.setServerState)(params));

          case 6:
            html = (0, _server.renderToString)((0, _jsx3.default)(_reactRedux.Provider, {
              store: store
            }, void 0, (0, _jsx3.default)(_reactRouterRedux.ConnectedRouter, {
              history: history
            }, void 0, _ref2)));
            state = store.getState();
            return _context.abrupt('return', { html: html, state: state });

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("history/createMemoryHistory");

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(50);

var _immutable = __webpack_require__(0);

var _reduxImmutable = __webpack_require__(51);

var _reduxThunk = __webpack_require__(52);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reactRouterRedux = __webpack_require__(26);

var _app = __webpack_require__(53);

var _app2 = _interopRequireDefault(_app);

var _router = __webpack_require__(54);

var _router2 = _interopRequireDefault(_router);

var _user = __webpack_require__(55);

var _user2 = _interopRequireDefault(_user);

var _navbar = __webpack_require__(56);

var _navbar2 = _interopRequireDefault(_navbar);

var _progress = __webpack_require__(57);

var _progress2 = _interopRequireDefault(_progress);

var _dialogFactory = __webpack_require__(58);

var _dialogFactory2 = _interopRequireDefault(_dialogFactory);

var _failureDialog = __webpack_require__(59);

var _failureDialog2 = _interopRequireDefault(_failureDialog);

var _paneFactory = __webpack_require__(60);

var _paneFactory2 = _interopRequireDefault(_paneFactory);

var _infoListFactory = __webpack_require__(61);

var _infoListFactory2 = _interopRequireDefault(_infoListFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storeFactory = function storeFactory(history, initialState) {
  return (0, _redux.applyMiddleware)(_reduxThunk2.default, (0, _reactRouterRedux.routerMiddleware)(history))(_redux.createStore)((0, _reduxImmutable.combineReducers)({
    app: _app2.default,
    router: _router2.default,
    user: _user2.default,
    navbar: _navbar2.default,
    progress: _progress2.default,
    failureDialog: _failureDialog2.default,
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
};

exports.default = storeFactory;

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("redux-immutable");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = __webpack_require__(3);

var actions = _interopRequireWildcard(_actionTypes);

var _immutable = __webpack_require__(0);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var app = function app() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.Map)({
    ioTimestamp: 0,
    csrf: '',
    breakpoint: '',
    prevBreakpoint: '',
    isStarted: false,
    isConnected: false,
    isSameVersion: true
  });
  var action = arguments[1];

  switch (action.type) {
    case actions.START_APP:
      if (state.get('isStarted')) return state;

      return state.set('isStarted', true);
    case actions.CONNECT_APP:
      return state.withMutations(function (map) {
        map.set('isConnected', true).set('ioTimestamp', action.when);
      });
    case actions.DISCONNECT_APP:
      return state.withMutations(function (map) {
        map.set('isConnected', false).set('ioTimestamp', action.when);
      });
    case actions.APP_VERSION:
      return state.set('isSameVersion', action.isSameVersion);
    case actions.SCREEN_RESIZE:
      if (state.get('breakpoint') === action.breakpoint) return state;

      return state.withMutations(function (map) {
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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = __webpack_require__(0);

var _reactRouterRedux = __webpack_require__(26);

var router = function router() {
  return (0, _immutable.fromJS)(_reactRouterRedux.routerReducer.apply(undefined, arguments));
};

exports.default = router;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = __webpack_require__(3);

var actions = _interopRequireWildcard(_actionTypes);

var _immutable = __webpack_require__(0);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var user = function user() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.fromJS)({
    isAuthorized: false,
    login: 'anonymous',
    locale: 'en',
    shares: []
  });
  var action = arguments[1];

  switch (action.type) {
    case actions.SET_USER:
      return state.withMutations(function (map) {
        map.set('isAuthorized', action.isAuthorized || false).set('login', action.login || 'anonymous').set('locale', action.locale || state.get('locale')).set('shares', (0, _immutable.fromJS)(action.shares || []));
      });
  }

  return state;
};

exports.default = user;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = __webpack_require__(3);

var actions = _interopRequireWildcard(_actionTypes);

var _immutable = __webpack_require__(0);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var navbar = function navbar() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.Map)({
    isOpen: false
  });
  var action = arguments[1];

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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = __webpack_require__(3);

var actions = _interopRequireWildcard(_actionTypes);

var _immutable = __webpack_require__(0);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var progress = function progress() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.fromJS)({
    isStarted: false,
    isFinished: false,
    message: ''
  });
  var action = arguments[1];

  switch (action.type) {
    case actions.START_PROGRESS:
      return state.withMutations(function (map) {
        map.set('isStarted', true).set('isFinished', false).set('message', action.message);
      });
    case actions.UPDATE_PROGRESS:
      if (!action.get('message')) return state;

      return state.withMutations(function (map) {
        map.set('isStarted', true).set('isFinished', false).set('message', state.get('message') + action.message);
      });
    case actions.FINISH_PROGRESS:
      return state.withMutations(function (map) {
        map.set('isStarted', true).set('isFinished', true).set('message', state.get('message') + action.message || '');
      });
    case actions.CLEAR_PROGRESS:
      if (!state.get('isStarted')) return state;

      return state.withMutations(function (map) {
        map.set('isStarted', false).set('isFinished', false).set('message', '');
      });
  }

  return state;
};

exports.default = progress;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = __webpack_require__(3);

var actions = _interopRequireWildcard(_actionTypes);

var _immutable = __webpack_require__(0);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var dialogFactory = function dialogFactory(type) {
  var initialValues = void 0;
  var lockAction = void 0;
  var unlockAction = void 0;
  var showAction = void 0;
  var hideAction = void 0;
  var resetAction = void 0;
  var submitAction = void 0;
  var updateAction = void 0;
  var startFindAction = void 0;
  var stopFindAction = void 0;

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

  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.fromJS)({
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
    });
    var action = arguments[1];

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
        return state.withMutations(function (map) {
          map.set('errors', (0, _immutable.Map)({})).set('messages', (0, _immutable.Map)({})).setIn(['found', 'isLoading'], false).setIn(['found', 'isLoaded'], false).setIn(['found', 'nodes'], (0, _immutable.List)([]));

          if (action.values) map.set('values', (0, _immutable.fromJS)(action.values));
        });
      case submitAction:
        if (action.submittedAt <= state.get('submittedAt')) return state;

        return state.set('submittedAt', action.submittedAt);
      case updateAction:
        if (action.submittedAt < state.get('submittedAt')) return state;

        return state.withMutations(function (map) {
          map.set('submittedAt', action.submittedAt);
          if (action.data.values) {
            map.set('values', map.get('values').merge((0, _immutable.fromJS)(action.data.values)));
          }
          if (action.data.errors) {
            map.set('errors', map.get('errors').merge((0, _immutable.fromJS)(action.data.errors)).filter(function (value) {
              return value.size;
            }));
          }
          if (action.data.messages) {
            map.set('messages', (0, _immutable.fromJS)(action.data.messages).filter(function (value) {
              return value.size;
            }));
          }
        });
      case startFindAction:
        return state.withMutations(function (map) {
          map.setIn(['found', 'isLoading'], true).setIn(['found', 'isLoaded'], false).setIn(['found', 'nodes'], (0, _immutable.List)([]));
        });
      case stopFindAction:
        return state.withMutations(function (map) {
          map.setIn(['found', 'isLoading'], !action.nodes).setIn(['found', 'isLoaded'], !!action.nodes).setIn(['found', 'nodes'], (0, _immutable.fromJS)(action.nodes || []));
        });
    }

    return state;
  };
};

exports.default = dialogFactory;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = __webpack_require__(3);

var actions = _interopRequireWildcard(_actionTypes);

var _immutable = __webpack_require__(0);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var failureDialog = function failureDialog() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.fromJS)({
    isOpen: false,
    messages: {},
    errors: {}
  });
  var action = arguments[1];

  switch (action.type) {
    case actions.SHOW_FAILURE_DIALOG:
      return state.withMutations(function (map) {
        map.set('isOpen', true).set('messages', (0, _immutable.fromJS)(action.messages || {})).set('errors', (0, _immutable.fromJS)(action.errors || {}));
      });
    case actions.HIDE_FAILURE_DIALOG:
      return state.set('isOpen', false);
  }

  return state;
};

exports.default = failureDialog;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = __webpack_require__(3);

var actions = _interopRequireWildcard(_actionTypes);

var _immutable = __webpack_require__(0);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var paneFactory = function paneFactory(which) {
  var activateAction = void 0;
  var deactivateAction = void 0;
  var showAction = void 0;
  var hideAction = void 0;
  var startLoadingAction = void 0;
  var stopLoadingAction = void 0;
  var modeAction = void 0;
  var shareAction = void 0;
  var pathAction = void 0;
  var listAction = void 0;
  var sortAction = void 0;
  var selectionAction = void 0;
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

  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.fromJS)({
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
    });
    var action = arguments[1];

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
        return state.withMutations(function (map) {
          map.set('timestamp', action.timestamp).set('isLoading', true).set('isForbidden', false);
        });
      case stopLoadingAction:
        return state.withMutations(function (map) {
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

        return state.withMutations(function (map) {
          map.set('path', action.path).set('directory', action.directory).set('name', action.name);
        });
      case listAction:
        if (state.get('list').equals(action.list)) return state;

        return state.withMutations(function (map) {
          map.set('list', (0, _immutable.fromJS)(action.list)).set('selectedIndexes', (0, _immutable.List)(action.selectedIndexes || []).sort());
        });
      case sortAction:
        if (state.get('sortField') === action.field && state.get('sortDir') === action.dir) return state;

        return state.withMutations(function (map) {
          map.set('sortField', action.field).set('sortDir', action.dir);
        });
      case selectionAction:
        var selectedIndexes = (0, _immutable.List)(action.selectedIndexes).sort();
        if (state.get('selectedIndexes').equals(selectedIndexes)) return state;

        return state.set('selectedIndexes', selectedIndexes);
    }

    return state;
  };
};

exports.default = paneFactory;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = __webpack_require__(3);

var actions = _interopRequireWildcard(_actionTypes);

var _immutable = __webpack_require__(0);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var infoListFactory = function infoListFactory(type) {
  var setAction = void 0;
  var clearAction = void 0;
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

  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.Map)({});
    var action = arguments[1];

    switch (action.type) {
      case setAction:
        return state.set(action.id, (0, _immutable.fromJS)(action[type.toLowerCase()]));
      case clearAction:
        return state.filter(function (value, key) {
          return action.keep.includes(key);
        });
    }

    return state;
  };
};

exports.default = infoListFactory;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(12);

var _Screen = __webpack_require__(63);

var _Screen2 = _interopRequireDefault(_Screen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    isConnected: state.getIn(['app', 'isConnected']) && state.getIn(['app', 'isSameVersion']),
    isLeftPaneVisible: state.getIn(['leftPane', 'isVisible']),
    isRightPaneVisible: state.getIn(['rightPane', 'isVisible'])
  };
};

var App = (0, _reactRedux.connect)(mapStateToProps, null)(_Screen2.default);

exports.default = App;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(2);

var _jsx3 = _interopRequireDefault(_jsx2);

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactTransitionGroup = __webpack_require__(27);

var _fa = __webpack_require__(14);

var _Fade = __webpack_require__(29);

var _Fade2 = _interopRequireDefault(_Fade);

var _Navbar = __webpack_require__(67);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _SignInDialog = __webpack_require__(76);

var _SignInDialog2 = _interopRequireDefault(_SignInDialog);

var _ProgressDialog = __webpack_require__(78);

var _ProgressDialog2 = _interopRequireDefault(_ProgressDialog);

var _MkdirDialog = __webpack_require__(81);

var _MkdirDialog2 = _interopRequireDefault(_MkdirDialog);

var _RenameDialog = __webpack_require__(83);

var _RenameDialog2 = _interopRequireDefault(_RenameDialog);

var _CopyDialog = __webpack_require__(85);

var _CopyDialog2 = _interopRequireDefault(_CopyDialog);

var _MoveDialog = __webpack_require__(87);

var _MoveDialog2 = _interopRequireDefault(_MoveDialog);

var _DeleteDialog = __webpack_require__(89);

var _DeleteDialog2 = _interopRequireDefault(_DeleteDialog);

var _FailureDialog = __webpack_require__(91);

var _FailureDialog2 = _interopRequireDefault(_FailureDialog);

var _LeftPane = __webpack_require__(93);

var _LeftPane2 = _interopRequireDefault(_LeftPane);

var _RightPane = __webpack_require__(105);

var _RightPane2 = _interopRequireDefault(_RightPane);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)(_fa.FaCog, {
  className: 'rotating icon-text'
});

var _ref2 = (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_Navbar2.default, {}), (0, _jsx3.default)(_SignInDialog2.default, {}), (0, _jsx3.default)(_ProgressDialog2.default, {}), (0, _jsx3.default)(_MkdirDialog2.default, {}), (0, _jsx3.default)(_RenameDialog2.default, {}), (0, _jsx3.default)(_CopyDialog2.default, {}), (0, _jsx3.default)(_MoveDialog2.default, {}), (0, _jsx3.default)(_DeleteDialog2.default, {}), (0, _jsx3.default)(_FailureDialog2.default, {}));

var _ref3 = (0, _jsx3.default)(_Fade2.default, {}, void 0, (0, _jsx3.default)(_LeftPane2.default, {}));

var _ref4 = (0, _jsx3.default)(_Fade2.default, {}, void 0, (0, _jsx3.default)(_RightPane2.default, {}));

var Screen = function (_React$Component) {
  (0, _inherits3.default)(Screen, _React$Component);

  function Screen() {
    (0, _classCallCheck3.default)(this, Screen);
    return (0, _possibleConstructorReturn3.default)(this, (Screen.__proto__ || (0, _getPrototypeOf2.default)(Screen)).apply(this, arguments));
  }

  (0, _createClass3.default)(Screen, [{
    key: 'componentDidCatch',
    value: function componentDidCatch(error) {
      console.error(error);
    }
  }, {
    key: 'render',
    value: function render() {
      var overlay = null;
      if (!this.props.isConnected) {
        overlay = (0, _jsx3.default)('div', {
          className: 'page-overlay shaded'
        }, void 0, (0, _jsx3.default)('div', {
          className: 'no-connection-window rounded'
        }, void 0, _ref, '\xA0', __('not_connected_message')));
      }

      return (0, _jsx3.default)('div', {
        className: 'w-100 h-100'
      }, void 0, overlay, (0, _jsx3.default)('div', {
        className: 'w-100 h-100 d-flex flex-column'
      }, void 0, _ref2, (0, _jsx3.default)(_reactTransitionGroup.TransitionGroup, {
        className: 'pane-container'
      }, void 0, this.props.isLeftPaneVisible ? _ref3 : null, this.props.isRightPaneVisible ? _ref4 : null)));
    }
  }]);
  return Screen;
}(_react2.default.Component);

exports.default = Screen;

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/objectWithoutProperties");

/***/ }),
/* 66 */
/***/ (function(module, exports) {



/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(12);

var _navbar = __webpack_require__(30);

var _signInDialog = __webpack_require__(31);

var _mkdirDialog = __webpack_require__(32);

var _renameDialog = __webpack_require__(33);

var _copyDialog = __webpack_require__(34);

var _moveDialog = __webpack_require__(35);

var _deleteDialog = __webpack_require__(36);

var _user = __webpack_require__(16);

var _TopNavbar = __webpack_require__(75);

var _TopNavbar2 = _interopRequireDefault(_TopNavbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    isOpen: state.getIn(['navbar', 'isOpen']),
    breakpoint: state.getIn(['app', 'breakpoint']),
    isLoggedIn: state.getIn(['user', 'isAuthorized']),
    login: state.getIn(['user', 'login']),
    hasSelection: state.getIn(['leftPane', 'isActive']) && !!state.getIn(['leftPane', 'name']) || state.getIn(['rightPane', 'isActive']) && !!state.getIn(['rightPane', 'name'])
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onToggleNavbar: function onToggleNavbar() {
      return dispatch((0, _navbar.toggleNavbar)());
    },
    onMkdirCommand: function onMkdirCommand() {
      return dispatch((0, _mkdirDialog.toggleMkdirDialog)());
    },
    onRenameCommand: function onRenameCommand() {
      return dispatch((0, _renameDialog.toggleRenameDialog)());
    },
    onCopyCommand: function onCopyCommand() {
      return dispatch((0, _copyDialog.toggleCopyDialog)());
    },
    onMoveCommand: function onMoveCommand() {
      return dispatch((0, _moveDialog.toggleMoveDialog)());
    },
    onDeleteCommand: function onDeleteCommand() {
      return dispatch((0, _deleteDialog.toggleDeleteDialog)());
    },
    onSignIn: function onSignIn() {
      return dispatch((0, _signInDialog.toggleSignInDialog)());
    },
    onSignOut: function onSignOut() {
      return dispatch((0, _user.signOut)());
    }
  };
};

var Navbar = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_TopNavbar2.default);

exports.default = Navbar;

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = {"name":"webfm","version":"0.9.23","description":"Two pane file manager for the Web","keywords":["file manager","two pane","node","react","redux","sails"],"license":"MIT","author":"Ross Basarevych <basarevych@gmail.com>","repository":{"type":"git","url":"git+https://github.com/basarevych/webfm.git"},"dependencies":{"async":"~2.6.0","autoprefixer":"~8.0.0","babel-core":"~6.26.0","babel-loader":"~7.1.2","babel-plugin-transform-class-properties":"~6.24.1","babel-plugin-transform-object-rest-spread":"~6.26.0","babel-plugin-transform-runtime":"~6.23.0","babel-preset-env":"~1.6.1","babel-preset-react":"~6.24.1","babel-preset-react-optimize":"~1.0.1","babel-runtime":"~6.26.0","bootstrap":"~4.0.0","bootstrap-loader":"~2.2.0","breakpoints-js":"~1.0.5","clean-webpack-plugin":"~0.1.18","connect-redis":"~3.3.3","css-loader":"~0.28.9","cssnano":"~3.10.0","exports-loader":"~0.7.0","extract-text-webpack-plugin":"~3.0.2","file-loader":"~1.1.6","grunt":"~1.0.2","history":"~4.7.2","i18n-for-browser":"~0.9.7","ignore-loader":"~0.1.2","immutable":"~3.8.2","imports-loader":"~0.7.1","ini":"~1.3.5","isomorphic-fetch":"~2.2.1","lodash":"~4.17.5","moment-timezone":"~0.5.14","node-sass":"~4.7.2","optimize-css-assets-webpack-plugin":"~3.2.0","popper.js":"~1.12.9","postcss-loader":"~2.1.0","prop-types":"~15.6.0","raf":"~3.4.0","react":"~16.2.0","react-dom":"~16.2.0","react-icons":"~2.2.7","react-list":"~0.8.8","react-redux":"~5.0.7","react-router":"~4.2.0","react-router-redux":"^5.0.0-alpha.9","react-scroll-box":"~0.3.5","react-transition-group":"~2.2.1","reactstrap":"^5.0.0-beta","redux":"~3.7.2","redux-immutable":"~4.0.0","redux-thunk":"~2.2.0","resolve-url-loader":"~2.2.1","sails":"^1.0.0-46","sails-hook-grunt":"~3.0.2","sails-hook-orm":"^2.0.0-23","sails-hook-panic-mode":"~0.1.3","sails-hook-sockets":"~1.4.0","sails.io.js":"~1.1.13","sass-loader":"~6.0.6","socket.io-client":"2.0.3","socket.io-redis":"~4.0.1","stat-mode":"~0.2.2","style-loader":"~0.20.2","uglifyjs-webpack-plugin":"~1.2.0","url-loader":"~0.6.2","userid":"~0.3.1","webpack":"~3.11.0","webpack-node-externals":"~1.6.0"},"devDependencies":{"babel-eslint":"~8.2.1","eslint":"~4.18.0"},"scripts":{"build":"env NODE_ENV=production ./node_modules/.bin/webpack --progress","start":"env NODE_ENV=production node app.js","build:dev":"env NODE_ENV=development ./node_modules/.bin/webpack --watch --progress","start:dev":"env NODE_ENV=development ./node_modules/.bin/sails lift","lint":"node ./node_modules/eslint/bin/eslint . --max-warnings=0","debug":"node debug app.js"},"main":"app.js","engines":{"node":">=8.0.0"}}

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _i18n = __webpack_require__(70);

var _i18n2 = _interopRequireDefault(_i18n);

var _en = __webpack_require__(71);

var _en2 = _interopRequireDefault(_en);

var _i18nForBrowser = __webpack_require__(72);

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
/* 70 */
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
/* 71 */
/***/ (function(module, exports) {

module.exports = {"project_title":"WebFM","not_connected_message":"Establishing connection...","not_authorized_message":"Not signed in","forbidden_message":"No access or not found","contents_view_message":"Contents view","type_DIR_message":"This is a directory","type_SYMLINK_message":"This is a symbolic link to outside of the share","type_BINARY_message":"This is a binary data file","info_view_message":"Info view","empty_message":"Empty...","select_share_label":"Select...","read_only_label":"[read]","read_write_label":"[write]","two_dots_label":"Go up one level","info_name_label":"Name:","info_parent_label":"Parent:","info_size_bytes_label":"Size (bytes):","info_size_human_label":"Size (Human):","info_du_bytes_label":"Disk usage (bytes):","info_du_human_label":"Disk usage (Human):","info_mode_number_label":"Mode (octal):","info_mode_string_label":"Mode (string):","info_user_id_label":"Owner (ID):","info_user_name_label":"Owner (name):","info_group_id_label":"Group (ID):","info_group_name_label":"Group (name):","info_atime_label":"atime:","info_mtime_label":"mtime:","info_ctime_label":"ctime:","mkdir_command":"MkDir","rename_command":"Rename","copy_command":"Copy","move_command":"Move","delete_command":"Delete","sign_in_button":"Sign in","sign_out_button":"Sign out","cancel_button":"Cancel","submit_button":"Submit","done_button":"Done","required_field":"Required field","sign_in_title":"Sign In","login_label":"Login:","password_label":"Password:","invalid_credentials_message":"Wrong login or password","no_shares_message":"You have no shares defined in the config","user.login.E_REQUIRED":"Login is required","user.password.E_REQUIRED":"Password is required","mkdir_title":"Create directory","share_label":"Share:","directory_label":"Parent directory:","name_label":"Name:","mkdir.share.E_NOT_FOUND":"Share not found","mkdir.share.E_READ_ONLY":"No write access to this share","mkdir.directory.E_NOT_DIR":"This is not a directory","mkdir.directory.E_OUTSIDE":"Parent directory is not inside the share","mkdir.name.E_REQUIRED":"Name is required","mkdir.name.E_INVALID":"Name is invalid","mkdir.name.E_EXISTS":"Target already exists","rename_title":"Rename","new_name_label":"New name:","rename.share.E_NOT_FOUND":"Share not found","rename.share.E_READ_ONLY":"No write access to this share","rename.directory.E_NOT_DIR":"This is not a directory","rename.directory.E_OUTSIDE":"Parent directory is not inside the share","rename.name.E_NOT_FOUND":"File not found","rename.newName.E_REQUIRED":"Name is required","rename.newName.E_SAME":"New name should differ from the original","rename.newName.E_INVALID":"Name is invalid","rename.newName.E_EXISTS":"Target already exists","copy_title":"Copy","copy_start_message":"Copying...","src_share_label":"Source share:","src_directory_label":"Source parent directory:","src_name_label":"Source name:","src_name_hint":"Use wildcard symbols like <strong>*</strong> or <strong>?</strong>","src_find_button":"Search","src_find_empty":"No files found","dst_share_label":"Destination share:","dst_directory_label":"Destination parent directory:","dst_name_label":"Destination name:","copy.srcShare.E_NOT_FOUND":"Share not found","copy.srcDirectory.E_NOT_DIR":"This is not a directory","copy.srcDirectory.E_OUTSIDE":"Source directory is not inside the share","copy.srcName.E_REQUIRED":"Name is required","copy.srcName.E_INVALID":"Name is invalid","copy.dstShare.E_NOT_FOUND":"Share not found","copy.dstShare.E_READ_ONLY":"No write access to this share","copy.dstDirectory.E_NOT_DIR":"This is not a directory","copy.dstDirectory.E_OUTSIDE":"Target directory is not inside the share","copy.dstDirectory.E_SAME":"Target directory should not be the same as source","copy.result.ENOENT":"No files to copy","progress_title":"Progress","copy_success_message":"%s ==> %s","copy_failure_message":"Couldn't copy %s","move_success_message":"%s ==> %s","move_failure_message":"Couldn't move %s","delete_success_message":"Deleted %s","delete_failure_message":"Couldn't delete %s","done_message":"Done","move_title":"Move","move_start_message":"Moving...","move.srcShare.E_NOT_FOUND":"Share not found","move.srcShare.E_READ_ONLY":"No write access to this share","move.srcDirectory.E_NOT_DIR":"This is not a directory","move.srcDirectory.E_OUTSIDE":"Source directory is not inside the share","move.srcName.E_REQUIRED":"Name is required","move.srcName.E_INVALID":"Name is invalid","move.dstShare.E_NOT_FOUND":"Share not found","move.dstShare.E_READ_ONLY":"No write access to this share","move.dstDirectory.E_NOT_DIR":"This is not a directory","move.dstDirectory.E_OUTSIDE":"Target directory is not inside the share","move.dstDirectory.E_SAME":"Target directory should not be the same as source","move.result.ENOENT":"No files to move","delete_title":"Copy","delete_start_message":"Deleting...","delete.share.E_NOT_FOUND":"Share not found","delete.share.E_READ_ONLY":"No write access to this share","delete.directory.E_NOT_DIR":"This is not a directory","delete.directory.E_OUTSIDE":"Source directory is not inside the share","delete.name.E_REQUIRED":"Name is required","delete.name.E_INVALID":"Name is invalid","delete.result.ENOENT":"No files to delete","failure_title":"Failure","field_share_label":"Share:","field_directory_label":"Directory:","field_name_label":"Name:","field_srcShare_label":"Source share:","field_srcDirectory_label":"Source directory:","field_srcName_label":"Source name:","field_dstShare_label":"Destination share:","field_dstDirectory_label":"Destination directory:","field_dstName_label":"Destination name:","sort_name_hint":"Sort by name<br>(toggle direction)","sort_size_hint":"Sort by size<br>(toggle direction)","mode_list_hint":"Display list of files","mode_contents_hint":"Display contents of the selected in the other pane file","mode_info_hint":"Display info of the selected in the other pane file","toggle_pane_hint":"Toggle visibility<br>of the other pane","size_button_hint":"Calculate size<br>of this item","copy_button_hint":"Copy this item<br>to the other pane","move_button_hint":"Move this item<br>to the other pane","delete_button_hint":"Delete this item"}

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("i18n-for-browser");

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadContent = exports.clearContents = exports.setContent = undefined;

var _promise = __webpack_require__(17);

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _actionTypes = __webpack_require__(3);

var actions = _interopRequireWildcard(_actionTypes);

var _user = __webpack_require__(16);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setContent = exports.setContent = function setContent(id, content) {
  return {
    type: actions.SET_CONTENT,
    id: id,
    content: content
  };
};

var clearContents = exports.clearContents = function clearContents() {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch, getState) {
      var state, contents, leftPane, rightPane, leftId, rightId, keep;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              state = getState();
              contents = state.get('contents');
              leftPane = state.get('leftPane');
              rightPane = state.get('rightPane');
              leftId = void 0;

              if (leftPane.get('share') && leftPane.get('path')) leftId = leftPane.get('share') + ':' + leftPane.get('path');
              rightId = void 0;

              if (rightPane.get('share') && rightPane.get('path')) rightId = rightPane.get('share') + ':' + rightPane.get('path');

              if (!(contents.size === 0 || leftId && rightId && (leftId === rightId ? contents.size === 1 : contents.size === 2))) {
                _context.next = 10;
                break;
              }

              return _context.abrupt('return');

            case 10:
              keep = [];

              if (leftId) keep.push(leftId);
              if (rightId && rightId !== leftId) keep.push(rightId);

              _context.next = 15;
              return dispatch({
                type: actions.CLEAR_CONTENT,
                keep: keep
              });

            case 15:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
};

var loadContent = exports.loadContent = function loadContent(pane) {
  return function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(dispatch, getState) {
      var state, app, contents, leftPane, rightPane, id, share, path, params;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              state = getState();
              app = state.get('app');
              contents = state.get('contents');
              leftPane = state.get('leftPane');
              rightPane = state.get('rightPane');
              id = void 0;
              share = void 0;
              path = void 0;

              if (pane === 'LEFT' && leftPane.get('share') && leftPane.get('name')) {
                share = leftPane.get('share');
                path = leftPane.get('path');
                id = share + ':' + path;
              } else if (pane === 'RIGHT' && rightPane.get('share') && rightPane.get('name')) {
                share = rightPane.get('share');
                path = rightPane.get('path');
                id = share + ':' + path;
              }

              if (!(!id || contents.has(id))) {
                _context3.next = 11;
                break;
              }

              return _context3.abrupt('return');

            case 11:
              params = {
                share: share,
                path: path,
                _csrf: app.get('csrf')
              };
              _context3.next = 14;
              return dispatch(setContent(id, {
                isLoading: true,
                isForbidden: false
              }));

            case 14:
              return _context3.abrupt('return', new _promise2.default(function (resolve) {
                io.socket.get('/pane/content', params, function () {
                  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(data, response) {
                    return _regenerator2.default.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            if (!(response.statusCode === 200)) {
                              _context2.next = 12;
                              break;
                            }

                            if (!data.success) {
                              _context2.next = 6;
                              break;
                            }

                            _context2.next = 4;
                            return dispatch(setContent(id, {
                              isLoading: false,
                              isForbidden: false,
                              type: data.type,
                              mime: data.mime,
                              base64: data.base64
                            }));

                          case 4:
                            _context2.next = 8;
                            break;

                          case 6:
                            _context2.next = 8;
                            return dispatch(setContent(id, {
                              isLoading: false,
                              isForbidden: true
                            }));

                          case 8:
                            _context2.next = 10;
                            return dispatch(clearContents());

                          case 10:
                            _context2.next = 14;
                            break;

                          case 12:
                            _context2.next = 14;
                            return dispatch((0, _user.signOut)());

                          case 14:

                            resolve();

                          case 15:
                          case 'end':
                            return _context2.stop();
                        }
                      }
                    }, _callee2, undefined);
                  }));

                  return function (_x5, _x6) {
                    return _ref3.apply(this, arguments);
                  };
                }());
              }));

            case 15:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadInfo = exports.clearInfos = exports.setInfo = undefined;

var _promise = __webpack_require__(17);

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(11);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _actionTypes = __webpack_require__(3);

var actions = _interopRequireWildcard(_actionTypes);

var _size = __webpack_require__(37);

var _user = __webpack_require__(16);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setInfo = exports.setInfo = function setInfo(id, info) {
  return {
    type: actions.SET_INFO,
    id: id,
    info: info
  };
};

var clearInfos = exports.clearInfos = function clearInfos() {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch, getState) {
      var state, infos, leftPane, rightPane, leftId, rightId, keep;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              state = getState();
              infos = state.get('infos');
              leftPane = state.get('leftPane');
              rightPane = state.get('rightPane');
              leftId = void 0;

              if (leftPane.get('share') && leftPane.get('name')) leftId = leftPane.get('share') + ':' + leftPane.get('path');
              rightId = void 0;

              if (rightPane.get('share') && rightPane.get('name')) rightId = rightPane.get('share') + ':' + rightPane.get('path');

              if (!(infos.size === 0 || leftId && rightId && (leftId === rightId ? infos.size === 1 : infos.size === 2))) {
                _context.next = 10;
                break;
              }

              return _context.abrupt('return');

            case 10:
              keep = [];

              if (leftId) keep.push(leftId);
              if (rightId && rightId !== leftId) keep.push(rightId);

              _context.next = 15;
              return dispatch({
                type: actions.CLEAR_INFO,
                keep: keep
              });

            case 15:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
};

var loadInfo = exports.loadInfo = function loadInfo(pane) {
  return function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(dispatch, getState) {
      var state, app, infos, leftPane, rightPane, id, share, path, params;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              state = getState();
              app = state.get('app');
              infos = state.get('infos');
              leftPane = state.get('leftPane');
              rightPane = state.get('rightPane');
              id = void 0;
              share = void 0;
              path = void 0;

              if (pane === 'LEFT' && leftPane.get('share') && leftPane.get('name')) {
                share = leftPane.get('share');
                path = leftPane.get('path');
                id = share + ':' + path;
              } else if (pane === 'RIGHT' && rightPane.get('share') && rightPane.get('name')) {
                share = rightPane.get('share');
                path = rightPane.get('path');
                id = share + ':' + path;
              }

              if (!(!id || infos.has(id))) {
                _context3.next = 11;
                break;
              }

              return _context3.abrupt('return');

            case 11:
              params = {
                share: share,
                path: path,
                _csrf: app.get('csrf')
              };
              _context3.next = 14;
              return dispatch(setInfo(id, {
                isLoading: true,
                isForbidden: false
              }));

            case 14:
              _context3.next = 16;
              return dispatch((0, _size.setSize)(id, {
                isLoading: true,
                isForbidden: false
              }));

            case 16:
              return _context3.abrupt('return', new _promise2.default(function (resolve) {
                io.socket.get('/pane/info', params, function () {
                  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(data, response) {
                    return _regenerator2.default.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            if (!(response.statusCode === 200)) {
                              _context2.next = 18;
                              break;
                            }

                            if (!data.success) {
                              _context2.next = 8;
                              break;
                            }

                            _context2.next = 4;
                            return dispatch(setInfo(id, {
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

                          case 4:
                            _context2.next = 6;
                            return dispatch((0, _size.setSize)(id, {
                              isLoading: false,
                              isForbidden: false,
                              du: data.du
                            }));

                          case 6:
                            _context2.next = 12;
                            break;

                          case 8:
                            _context2.next = 10;
                            return dispatch(setInfo(id, {
                              isLoading: false,
                              isForbidden: true
                            }));

                          case 10:
                            _context2.next = 12;
                            return dispatch((0, _size.setSize)(id, {
                              isLoading: false,
                              isForbidden: true
                            }));

                          case 12:
                            _context2.next = 14;
                            return dispatch(clearInfos());

                          case 14:
                            _context2.next = 16;
                            return dispatch((0, _size.clearSizes)());

                          case 16:
                            _context2.next = 20;
                            break;

                          case 18:
                            _context2.next = 20;
                            return dispatch((0, _user.signOut)());

                          case 20:

                            resolve();

                          case 21:
                          case 'end':
                            return _context2.stop();
                        }
                      }
                    }, _callee2, undefined);
                  }));

                  return function (_x5, _x6) {
                    return _ref3.apply(this, arguments);
                  };
                }());
              }));

            case 17:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(2);

var _jsx3 = _interopRequireDefault(_jsx2);

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _fa = __webpack_require__(14);

var _reactstrap = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)(_fa.FaUser, {
  className: 'icon-text'
});

var TopNavbar = function (_React$PureComponent) {
  (0, _inherits3.default)(TopNavbar, _React$PureComponent);

  function TopNavbar(props) {
    (0, _classCallCheck3.default)(this, TopNavbar);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TopNavbar.__proto__ || (0, _getPrototypeOf2.default)(TopNavbar)).call(this, props));

    _this.state = { isAuthDropdownOpen: false };

    _this.handleAuthDropdownToggle = _this.handleAuthDropdownToggle.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(TopNavbar, [{
    key: 'handleAuthDropdownToggle',
    value: function handleAuthDropdownToggle() {
      this.setState({ isAuthDropdownOpen: !this.state.isAuthDropdownOpen });
    }
  }, {
    key: 'render',
    value: function render() {
      var commands = null;
      var signing = null;
      if (this.props.isLoggedIn) {
        commands = (0, _jsx3.default)(_reactstrap.Nav, {
          navbar: true
        }, void 0, (0, _jsx3.default)(_reactstrap.NavItem, {}, void 0, (0, _jsx3.default)(_reactstrap.NavLink, {
          className: 'link',
          onClick: this.props.onMkdirCommand
        }, void 0, __('mkdir_command'))), (0, _jsx3.default)(_reactstrap.NavItem, {}, void 0, (0, _jsx3.default)(_reactstrap.NavLink, {
          className: 'link',
          onClick: this.props.onRenameCommand,
          disabled: !this.props.hasSelection
        }, void 0, __('rename_command'))), (0, _jsx3.default)(_reactstrap.NavItem, {}, void 0, (0, _jsx3.default)(_reactstrap.NavLink, {
          className: 'link',
          onClick: this.props.onCopyCommand
        }, void 0, __('copy_command'))), (0, _jsx3.default)(_reactstrap.NavItem, {}, void 0, (0, _jsx3.default)(_reactstrap.NavLink, {
          className: 'link',
          onClick: this.props.onMoveCommand
        }, void 0, __('move_command'))), (0, _jsx3.default)(_reactstrap.NavItem, {}, void 0, (0, _jsx3.default)(_reactstrap.NavLink, {
          className: 'link',
          onClick: this.props.onDeleteCommand
        }, void 0, __('delete_command'))));
        signing = (0, _jsx3.default)(_reactstrap.Nav, {
          className: 'ml-auto',
          navbar: true
        }, void 0, (0, _jsx3.default)(_reactstrap.NavItem, {}, void 0, (0, _jsx3.default)(_reactstrap.Dropdown, {
          isOpen: this.state.isAuthDropdownOpen,
          toggle: this.handleAuthDropdownToggle
        }, void 0, (0, _jsx3.default)(_reactstrap.DropdownToggle, {
          caret: true,
          nav: true
        }, void 0, _ref, ' ', this.props.login), (0, _jsx3.default)(_reactstrap.DropdownMenu, {
          right: this.props.breakpoint !== 'xs'
        }, void 0, (0, _jsx3.default)(_reactstrap.DropdownItem, {
          onClick: this.props.onSignOut
        }, void 0, __('sign_out_button'))))));
      } else {
        signing = (0, _jsx3.default)(_reactstrap.Nav, {
          className: 'ml-auto',
          navbar: true
        }, void 0, (0, _jsx3.default)(_reactstrap.NavItem, {}, void 0, (0, _jsx3.default)(_reactstrap.NavLink, {
          className: 'link',
          onClick: this.props.onSignIn
        }, void 0, __('sign_in_button'))));
      }

      return (0, _jsx3.default)(_reactstrap.Navbar, {
        dark: true,
        expand: 'sm'
      }, void 0, (0, _jsx3.default)(_reactstrap.NavbarToggler, {
        onClick: this.props.onToggleNavbar
      }), (0, _jsx3.default)(_reactstrap.NavbarBrand, {
        href: '/'
      }, void 0, __('project_title')), (0, _jsx3.default)(_reactstrap.Collapse, {
        isOpen: this.props.isOpen,
        navbar: true
      }, void 0, commands, signing));
    }
  }]);
  return TopNavbar;
}(_react2.default.PureComponent);

exports.default = TopNavbar;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(12);

var _signInDialog = __webpack_require__(31);

var _user = __webpack_require__(16);

var _SignInModal = __webpack_require__(77);

var _SignInModal2 = _interopRequireDefault(_SignInModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    isOpen: state.getIn(['signInDialog', 'isOpen']),
    isLocked: state.getIn(['signInDialog', 'locked']) > 0,
    values: state.getIn(['signInDialog', 'values']),
    messages: state.getIn(['signInDialog', 'messages']),
    errors: state.getIn(['signInDialog', 'errors'])
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onToggle: function onToggle() {
      return dispatch((0, _signInDialog.toggleSignInDialog)());
    },
    onInput: function onInput(values) {
      return dispatch((0, _signInDialog.updateSignInDialog)({ values: values }));
    },
    onSubmit: function onSubmit(when, validate) {
      return dispatch((0, _user.signIn)(when, validate));
    }
  };
};

var SignInDialog = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_SignInModal2.default);

exports.default = SignInDialog;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(2);

var _jsx3 = _interopRequireDefault(_jsx2);

var _defineProperty2 = __webpack_require__(22);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _immutable = __webpack_require__(0);

var _reactstrap = __webpack_require__(13);

var _RequiredFieldLabel = __webpack_require__(23);

var _RequiredFieldLabel2 = _interopRequireDefault(_RequiredFieldLabel);

var _FormMessages = __webpack_require__(18);

var _FormMessages2 = _interopRequireDefault(_FormMessages);

var _FieldErrors = __webpack_require__(24);

var _FieldErrors2 = _interopRequireDefault(_FieldErrors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)(_RequiredFieldLabel2.default, {});

var _ref2 = (0, _jsx3.default)(_RequiredFieldLabel2.default, {});

var SignInModal = function (_React$PureComponent) {
  (0, _inherits3.default)(SignInModal, _React$PureComponent);

  function SignInModal(props) {
    (0, _classCallCheck3.default)(this, SignInModal);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SignInModal.__proto__ || (0, _getPrototypeOf2.default)(SignInModal)).call(this, props));

    _this.state = { ignoreBlur: true };

    _this.handleInput = _this.handleInput.bind(_this);
    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.handleBlur = _this.handleBlur.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(SignInModal, [{
    key: 'handleInput',
    value: function handleInput(event) {
      if (this.props.isLocked) return;

      this.props.onInput((0, _defineProperty3.default)({}, event.target.name, event.target.value));
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress(event) {
      var _this2 = this;

      if (this.props.isLocked || event.charCode !== 13) // enter
        return;

      switch (event.target.name) {
        case 'login':
          if (this.passwordInput) setTimeout(function () {
            return _this2.passwordInput.focus();
          }, 0);
          break;
        case 'password':
          this.handleSubmit();
          break;
      }
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus() {
      if (this.props.isLocked) return;

      this.setState({ ignoreBlur: false });
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur(event) {
      var _this3 = this;

      if (this.props.isLocked || this.state.ignoreBlur) return;

      var submittedAt = Date.now();
      var field = event.target.name;

      setTimeout(function () {
        if (_this3.props.isLocked || _this3.state.ignoreBlur) return;

        _this3.props.onSubmit(submittedAt, field);
      }, 250);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit() {
      if (this.props.isLocked) return;

      this.setState({ ignoreBlur: true });
      this.props.onSubmit(Date.now());
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this4 = this;

      if (this.props.isLocked) {
        if (nextProps.isLocked) return;

        switch (nextProps.errors.keys().next().value) {
          case 'login':
            if (this.loginInput) setTimeout(function () {
              return _this4.loginInput.focus();
            }, 0);
            break;
          case 'password':
            if (this.passwordInput) setTimeout(function () {
              return _this4.passwordInput.focus();
            }, 0);
            break;
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      return (0, _jsx3.default)(_reactstrap.Modal, {
        isOpen: this.props.isOpen,
        toggle: this.props.onToggle,
        autoFocus: true,
        backdrop: 'static',
        fade: true
      }, void 0, (0, _jsx3.default)(_reactstrap.ModalHeader, {
        toggle: this.props.onToggle
      }, void 0, __('sign_in_title')), (0, _jsx3.default)(_reactstrap.ModalBody, {}, void 0, (0, _jsx3.default)(_reactstrap.Form, {}, void 0, (0, _jsx3.default)(_FormMessages2.default, {
        messages: this.props.messages
      }), (0, _jsx3.default)(_reactstrap.FormGroup, {
        row: true
      }, void 0, (0, _jsx3.default)(_reactstrap.Label, {
        'for': 'signInLogin',
        sm: 4,
        className: 'text-sm-right'
      }, void 0, __('login_label'), _ref), (0, _jsx3.default)(_reactstrap.Col, {
        sm: 8
      }, void 0, (0, _jsx3.default)(_reactstrap.Input, {
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
        innerRef: function innerRef(input) {
          _this5.loginInput = input;
        }
      }), (0, _jsx3.default)(_FieldErrors2.default, {
        errors: this.props.errors.get('login')
      }))), (0, _jsx3.default)(_reactstrap.FormGroup, {
        row: true
      }, void 0, (0, _jsx3.default)(_reactstrap.Label, {
        'for': 'signInPassword',
        sm: 4,
        className: 'text-sm-right'
      }, void 0, __('password_label'), _ref2), (0, _jsx3.default)(_reactstrap.Col, {
        sm: 8
      }, void 0, (0, _jsx3.default)(_reactstrap.Input, {
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
        innerRef: function innerRef(input) {
          _this5.passwordInput = input;
        }
      }), (0, _jsx3.default)(_FieldErrors2.default, {
        errors: this.props.errors.get('password')
      }))))), (0, _jsx3.default)(_reactstrap.ModalFooter, {}, void 0, (0, _jsx3.default)(_reactstrap.Button, {
        color: 'secondary',
        disabled: this.props.isLocked,
        onClick: this.props.onToggle
      }, void 0, __('cancel_button')), '\xA0', (0, _jsx3.default)(_reactstrap.Button, {
        color: 'primary',
        disabled: this.props.isLocked,
        onClick: this.handleSubmit
      }, void 0, __('submit_button'))));
    }
  }]);
  return SignInModal;
}(_react2.default.PureComponent);

exports.default = SignInModal;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(12);

var _progressDialog = __webpack_require__(41);

var _ProgressModal = __webpack_require__(79);

var _ProgressModal2 = _interopRequireDefault(_ProgressModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    isStarted: state.getIn(['progress', 'isStarted']),
    isFinished: state.getIn(['progress', 'isFinished']),
    message: state.getIn(['progress', 'message'])
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onDoneClick: function onDoneClick() {
      return dispatch((0, _progressDialog.clearProgress)());
    }
  };
};

var ProgressDialog = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_ProgressModal2.default);

exports.default = ProgressDialog;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(2);

var _jsx3 = _interopRequireDefault(_jsx2);

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactstrap = __webpack_require__(13);

var _reactScrollBox = __webpack_require__(19);

var _ScrollViewport = __webpack_require__(20);

var _ScrollViewport2 = _interopRequireDefault(_ScrollViewport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)('br', {});

var _ref2 = (0, _jsx3.default)('br', {});

var ProgressModal = function (_React$Component) {
  (0, _inherits3.default)(ProgressModal, _React$Component);

  function ProgressModal(props) {
    (0, _classCallCheck3.default)(this, ProgressModal);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ProgressModal.__proto__ || (0, _getPrototypeOf2.default)(ProgressModal)).call(this, props));

    _this.state = { progress: 0 };
    return _this;
  }

  (0, _createClass3.default)(ProgressModal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.timer = setInterval(function () {
        return _this2.setState({ progress: _this2.state.progress >= 100 ? 0 : _this2.state.progress + 10 });
      }, 500);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.props.message !== nextProps.message || this.props.isFinished !== nextProps.isFinished || !this.props.isFinished && this.state.progress !== nextState.progress;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.viewport) this.viewport.scrollDown();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return (0, _jsx3.default)(_reactstrap.Modal, {
        isOpen: this.props.isStarted,
        size: 'lg',
        backdrop: 'static',
        fade: true,
        toggle: function toggle() {}
      }, void 0, (0, _jsx3.default)(_reactstrap.ModalHeader, {}, void 0, __('progress_title')), (0, _jsx3.default)(_reactstrap.ModalBody, {}, void 0, !this.props.isStarted || this.props.isFinished ? (0, _jsx3.default)(_reactstrap.Progress, {
        color: 'primary',
        barClassName: 'text-dark',
        value: 100
      }, void 0, __('done_message')) : (0, _jsx3.default)(_reactstrap.Progress, {
        color: 'warning',
        barClassName: 'text-light',
        animated: true,
        value: this.state.progress
      }), _ref, (0, _jsx3.default)('div', {
        className: 'progress-widget'
      }, void 0, (0, _jsx3.default)('div', {
        className: 'scroll-wrapper'
      }, void 0, (0, _jsx3.default)(_reactScrollBox.GenericScrollBox, {
        permitHandleDragInterruption: false
      }, void 0, _react2.default.createElement(
        _ScrollViewport2.default,
        { classes: 'text-content condensed', reactList: false, ref: function ref(el) {
            _this3.viewport = el;
          } },
        this.props.message,
        _ref2
      ))))), (0, _jsx3.default)(_reactstrap.ModalFooter, {}, void 0, (0, _jsx3.default)(_reactstrap.Button, {
        color: this.props.isFinished ? 'primary' : 'secondary',
        disabled: !this.props.isFinished,
        onClick: this.props.onDoneClick
      }, void 0, __('done_button'))));
    }
  }]);
  return ProgressModal;
}(_react2.default.Component);

exports.default = ProgressModal;

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(12);

var _mkdirDialog = __webpack_require__(32);

var _commands = __webpack_require__(21);

var _MkdirModal = __webpack_require__(82);

var _MkdirModal2 = _interopRequireDefault(_MkdirModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    isOpen: state.getIn(['mkdirDialog', 'isOpen']),
    isLocked: state.getIn(['mkdirDialog', 'locked']) > 0,
    values: state.getIn(['mkdirDialog', 'values']),
    messages: state.getIn(['mkdirDialog', 'messages']),
    errors: state.getIn(['mkdirDialog', 'errors'])
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onToggle: function onToggle() {
      return dispatch((0, _mkdirDialog.toggleMkdirDialog)());
    },
    onInput: function onInput(values) {
      return dispatch((0, _mkdirDialog.updateMkdirDialog)({ values: values }));
    },
    onSubmit: function onSubmit(when, validate) {
      return dispatch((0, _commands.mkdir)(when, validate));
    }
  };
};

var MkdirDialog = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_MkdirModal2.default);

exports.default = MkdirDialog;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(2);

var _jsx3 = _interopRequireDefault(_jsx2);

var _defineProperty2 = __webpack_require__(22);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _immutable = __webpack_require__(0);

var _reactstrap = __webpack_require__(13);

var _RequiredFieldLabel = __webpack_require__(23);

var _RequiredFieldLabel2 = _interopRequireDefault(_RequiredFieldLabel);

var _FormMessages = __webpack_require__(18);

var _FormMessages2 = _interopRequireDefault(_FormMessages);

var _FieldErrors = __webpack_require__(24);

var _FieldErrors2 = _interopRequireDefault(_FieldErrors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)(_RequiredFieldLabel2.default, {});

var MkdirModal = function (_React$PureComponent) {
  (0, _inherits3.default)(MkdirModal, _React$PureComponent);

  function MkdirModal(props) {
    (0, _classCallCheck3.default)(this, MkdirModal);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MkdirModal.__proto__ || (0, _getPrototypeOf2.default)(MkdirModal)).call(this, props));

    _this.state = { ignoreBlur: true };

    _this.handleInput = _this.handleInput.bind(_this);
    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.handleBlur = _this.handleBlur.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(MkdirModal, [{
    key: 'handleInput',
    value: function handleInput(event) {
      if (this.props.isLocked) return;

      this.props.onInput((0, _defineProperty3.default)({}, event.target.name, event.target.value));
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress(event) {
      var _this2 = this;

      if (this.props.isLocked || event.charCode !== 13) // enter
        return;

      switch (event.target.name) {
        case 'share':
          if (this.directoryInput) setTimeout(function () {
            return _this2.directoryInput.focus();
          }, 0);
          break;
        case 'directory':
          if (this.nameInput) setTimeout(function () {
            return _this2.nameInput.focus();
          }, 0);
          break;
        case 'name':
          this.handleSubmit();
          break;
      }
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus() {
      if (this.props.isLocked) return;

      this.setState({ ignoreBlur: false });
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur(event) {
      var _this3 = this;

      if (this.props.isLocked || this.state.ignoreBlur) return;

      var submittedAt = Date.now();
      var field = event.target.name;

      setTimeout(function () {
        if (_this3.props.isLocked || _this3.state.ignoreBlur) return;

        _this3.props.onSubmit(submittedAt, field);
      }, 250);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit() {
      if (this.props.isLocked) return;

      this.setState({ ignoreBlur: true });
      this.props.onSubmit(Date.now());
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this4 = this;

      if (this.props.isLocked) {
        if (nextProps.isLocked) return;

        switch (nextProps.errors.keys().next().value) {
          case 'share':
            if (this.shareInput) setTimeout(function () {
              return _this4.shareInput.focus();
            }, 0);
            break;
          case 'directory':
            if (this.directoryInput) setTimeout(function () {
              return _this4.directoryInput.focus();
            }, 0);
            break;
          case 'name':
            if (this.nameInput) setTimeout(function () {
              return _this4.nameInput.focus();
            }, 0);
            break;
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      return (0, _jsx3.default)(_reactstrap.Modal, {
        isOpen: this.props.isOpen,
        toggle: this.props.onToggle,
        autoFocus: true,
        backdrop: 'static',
        fade: true
      }, void 0, (0, _jsx3.default)(_reactstrap.ModalHeader, {
        toggle: this.props.onToggle
      }, void 0, __('mkdir_title')), (0, _jsx3.default)(_reactstrap.ModalBody, {}, void 0, (0, _jsx3.default)(_reactstrap.Form, {}, void 0, (0, _jsx3.default)(_FormMessages2.default, {
        messages: this.props.messages
      }), (0, _jsx3.default)(_reactstrap.FormGroup, {
        row: true
      }, void 0, (0, _jsx3.default)(_reactstrap.Label, {
        'for': 'mkdirShare',
        sm: 4,
        className: 'text-sm-right'
      }, void 0, __('share_label')), (0, _jsx3.default)(_reactstrap.Col, {
        sm: 8
      }, void 0, (0, _jsx3.default)(_reactstrap.Input, {
        type: 'text',
        name: 'share',
        id: 'mkdirShare',
        disabled: true,
        valid: !this.props.errors.has('share') && undefined,
        value: this.props.values.get('share'),
        onKeyPress: this.handleKeyPress,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        innerRef: function innerRef(input) {
          _this5.shareInput = input;
        }
      }), (0, _jsx3.default)(_FieldErrors2.default, {
        errors: this.props.errors.get('share')
      }))), (0, _jsx3.default)(_reactstrap.FormGroup, {
        row: true
      }, void 0, (0, _jsx3.default)(_reactstrap.Label, {
        'for': 'mkdirDirectory',
        sm: 4,
        className: 'text-sm-right'
      }, void 0, __('directory_label')), (0, _jsx3.default)(_reactstrap.Col, {
        sm: 8
      }, void 0, (0, _jsx3.default)(_reactstrap.Input, {
        type: 'text',
        name: 'directory',
        id: 'mkdirDirectory',
        disabled: true,
        valid: !this.props.errors.has('directory') && undefined,
        value: this.props.values.get('directory'),
        onKeyPress: this.handleKeyPress,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        innerRef: function innerRef(input) {
          _this5.directoryInput = input;
        }
      }), (0, _jsx3.default)(_FieldErrors2.default, {
        errors: this.props.errors.get('directory')
      }))), (0, _jsx3.default)(_reactstrap.FormGroup, {
        row: true
      }, void 0, (0, _jsx3.default)(_reactstrap.Label, {
        'for': 'mkdirName',
        sm: 4,
        className: 'text-sm-right'
      }, void 0, __('name_label'), _ref), (0, _jsx3.default)(_reactstrap.Col, {
        sm: 8
      }, void 0, (0, _jsx3.default)(_reactstrap.Input, {
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
        innerRef: function innerRef(input) {
          _this5.nameInput = input;
        }
      }), (0, _jsx3.default)(_FieldErrors2.default, {
        errors: this.props.errors.get('name')
      }))))), (0, _jsx3.default)(_reactstrap.ModalFooter, {}, void 0, (0, _jsx3.default)(_reactstrap.Button, {
        color: 'secondary',
        disabled: this.props.isLocked,
        onClick: this.props.onToggle
      }, void 0, __('cancel_button')), '\xA0', (0, _jsx3.default)(_reactstrap.Button, {
        color: 'primary',
        disabled: this.props.isLocked,
        onClick: this.handleSubmit
      }, void 0, __('submit_button'))));
    }
  }]);
  return MkdirModal;
}(_react2.default.PureComponent);

exports.default = MkdirModal;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(12);

var _renameDialog = __webpack_require__(33);

var _commands = __webpack_require__(21);

var _RenameModal = __webpack_require__(84);

var _RenameModal2 = _interopRequireDefault(_RenameModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    isOpen: state.getIn(['renameDialog', 'isOpen']),
    isLocked: state.getIn(['renameDialog', 'locked']) > 0,
    values: state.getIn(['renameDialog', 'values']),
    messages: state.getIn(['renameDialog', 'messages']),
    errors: state.getIn(['renameDialog', 'errors'])
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onToggle: function onToggle() {
      return dispatch((0, _renameDialog.toggleRenameDialog)());
    },
    onInput: function onInput(values) {
      return dispatch((0, _renameDialog.updateRenameDialog)({ values: values }));
    },
    onSubmit: function onSubmit(when, validate) {
      return dispatch((0, _commands.rename)(when, validate));
    }
  };
};

var RenameDialog = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_RenameModal2.default);

exports.default = RenameDialog;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(2);

var _jsx3 = _interopRequireDefault(_jsx2);

var _defineProperty2 = __webpack_require__(22);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _immutable = __webpack_require__(0);

var _reactstrap = __webpack_require__(13);

var _RequiredFieldLabel = __webpack_require__(23);

var _RequiredFieldLabel2 = _interopRequireDefault(_RequiredFieldLabel);

var _FormMessages = __webpack_require__(18);

var _FormMessages2 = _interopRequireDefault(_FormMessages);

var _FieldErrors = __webpack_require__(24);

var _FieldErrors2 = _interopRequireDefault(_FieldErrors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)(_RequiredFieldLabel2.default, {});

var RenameModal = function (_React$PureComponent) {
  (0, _inherits3.default)(RenameModal, _React$PureComponent);

  function RenameModal(props) {
    (0, _classCallCheck3.default)(this, RenameModal);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RenameModal.__proto__ || (0, _getPrototypeOf2.default)(RenameModal)).call(this, props));

    _this.state = { ignoreBlur: true };

    _this.handleInput = _this.handleInput.bind(_this);
    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.handleBlur = _this.handleBlur.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(RenameModal, [{
    key: 'handleInput',
    value: function handleInput(event) {
      if (this.props.isLocked) return;

      this.props.onInput((0, _defineProperty3.default)({}, event.target.name, event.target.value));
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress(event) {
      var _this2 = this;

      if (this.props.isLocked || event.charCode !== 13) // enter
        return;

      switch (event.target.name) {
        case 'share':
          if (this.directoryInput) setTimeout(function () {
            return _this2.directoryInput.focus();
          }, 0);
          break;
        case 'directory':
          if (this.nameInput) setTimeout(function () {
            return _this2.nameInput.focus();
          }, 0);
          break;
        case 'name':
          if (this.newNameInput) setTimeout(function () {
            return _this2.newNameInput.focus();
          }, 0);
          break;
        case 'newName':
          this.handleSubmit();
          break;
      }
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus() {
      if (this.props.isLocked) return;

      this.setState({ ignoreBlur: false });
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur(event) {
      var _this3 = this;

      if (this.props.isLocked || this.state.ignoreBlur) return;

      var submittedAt = Date.now();
      var field = event.target.name;

      setTimeout(function () {
        if (_this3.props.isLocked || _this3.state.ignoreBlur) return;

        _this3.props.onSubmit(submittedAt, field);
      }, 250);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit() {
      if (this.props.isLocked) return;

      this.setState({ ignoreBlur: true });
      this.props.onSubmit(Date.now());
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this4 = this;

      if (this.props.isLocked) {
        if (nextProps.isLocked) return;

        switch (nextProps.errors.keys().next().value) {
          case 'share':
            if (this.shareInput) setTimeout(function () {
              return _this4.shareInput.focus();
            }, 0);
            break;
          case 'directory':
            if (this.directoryInput) setTimeout(function () {
              return _this4.directoryInput.focus();
            }, 0);
            break;
          case 'name':
            if (this.nameInput) setTimeout(function () {
              return _this4.nameInput.focus();
            }, 0);
            break;
          case 'newName':
            if (this.newNameInput) setTimeout(function () {
              return _this4.newNameInput.focus();
            }, 0);
            break;
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      return (0, _jsx3.default)(_reactstrap.Modal, {
        isOpen: this.props.isOpen,
        toggle: this.props.onToggle,
        autoFocus: true,
        backdrop: 'static',
        fade: true
      }, void 0, (0, _jsx3.default)(_reactstrap.ModalHeader, {
        toggle: this.props.onToggle
      }, void 0, __('rename_title')), (0, _jsx3.default)(_reactstrap.ModalBody, {}, void 0, (0, _jsx3.default)(_reactstrap.Form, {}, void 0, (0, _jsx3.default)(_FormMessages2.default, {
        messages: this.props.messages
      }), (0, _jsx3.default)(_reactstrap.FormGroup, {
        row: true
      }, void 0, (0, _jsx3.default)(_reactstrap.Label, {
        'for': 'renameShare',
        sm: 4,
        className: 'text-sm-right'
      }, void 0, __('share_label')), (0, _jsx3.default)(_reactstrap.Col, {
        sm: 8
      }, void 0, (0, _jsx3.default)(_reactstrap.Input, {
        type: 'text',
        name: 'share',
        id: 'renameShare',
        disabled: true,
        valid: !this.props.errors.has('share') && undefined,
        value: this.props.values.get('share'),
        onKeyPress: this.handleKeyPress,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        innerRef: function innerRef(input) {
          _this5.shareInput = input;
        }
      }), (0, _jsx3.default)(_FieldErrors2.default, {
        errors: this.props.errors.get('share')
      }))), (0, _jsx3.default)(_reactstrap.FormGroup, {
        row: true
      }, void 0, (0, _jsx3.default)(_reactstrap.Label, {
        'for': 'renameDirectory',
        sm: 4,
        className: 'text-sm-right'
      }, void 0, __('directory_label')), (0, _jsx3.default)(_reactstrap.Col, {
        sm: 8
      }, void 0, (0, _jsx3.default)(_reactstrap.Input, {
        type: 'text',
        name: 'directory',
        id: 'renameDirectory',
        disabled: true,
        valid: !this.props.errors.has('directory') && undefined,
        value: this.props.values.get('directory'),
        onKeyPress: this.handleKeyPress,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        innerRef: function innerRef(input) {
          _this5.directoryInput = input;
        }
      }), (0, _jsx3.default)(_FieldErrors2.default, {
        errors: this.props.errors.get('directory')
      }))), (0, _jsx3.default)(_reactstrap.FormGroup, {
        row: true
      }, void 0, (0, _jsx3.default)(_reactstrap.Label, {
        'for': 'renameName',
        sm: 4,
        className: 'text-sm-right'
      }, void 0, __('name_label')), (0, _jsx3.default)(_reactstrap.Col, {
        sm: 8
      }, void 0, (0, _jsx3.default)(_reactstrap.Input, {
        type: 'text',
        name: 'name',
        id: 'renameName',
        disabled: true,
        valid: !this.props.errors.has('name') && undefined,
        value: this.props.values.get('name'),
        onKeyPress: this.handleKeyPress,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        innerRef: function innerRef(input) {
          _this5.nameInput = input;
        }
      }), (0, _jsx3.default)(_FieldErrors2.default, {
        errors: this.props.errors.get('name')
      }))), (0, _jsx3.default)(_reactstrap.FormGroup, {
        row: true
      }, void 0, (0, _jsx3.default)(_reactstrap.Label, {
        'for': 'renameNewName',
        sm: 4,
        className: 'text-sm-right'
      }, void 0, __('new_name_label'), _ref), (0, _jsx3.default)(_reactstrap.Col, {
        sm: 8
      }, void 0, (0, _jsx3.default)(_reactstrap.Input, {
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
        innerRef: function innerRef(input) {
          _this5.newNameInput = input;
        }
      }), (0, _jsx3.default)(_FieldErrors2.default, {
        errors: this.props.errors.get('newName')
      }))))), (0, _jsx3.default)(_reactstrap.ModalFooter, {}, void 0, (0, _jsx3.default)(_reactstrap.Button, {
        color: 'secondary',
        disabled: this.props.isLocked,
        onClick: this.props.onToggle
      }, void 0, __('cancel_button')), '\xA0', (0, _jsx3.default)(_reactstrap.Button, {
        color: 'primary',
        disabled: this.props.isLocked,
        onClick: this.handleSubmit
      }, void 0, __('submit_button'))));
    }
  }]);
  return RenameModal;
}(_react2.default.PureComponent);

exports.default = RenameModal;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(12);

var _copyDialog = __webpack_require__(34);

var _commands = __webpack_require__(21);

var _CopyModal = __webpack_require__(86);

var _CopyModal2 = _interopRequireDefault(_CopyModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    isOpen: state.getIn(['copyDialog', 'isOpen']),
    isLocked: state.getIn(['copyDialog', 'locked']) > 0,
    values: state.getIn(['copyDialog', 'values']),
    messages: state.getIn(['copyDialog', 'messages']),
    errors: state.getIn(['copyDialog', 'errors']),
    found: state.getIn(['copyDialog', 'found'])
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onToggle: function onToggle() {
      return dispatch((0, _copyDialog.toggleCopyDialog)());
    },
    onInput: function onInput(values) {
      return dispatch((0, _copyDialog.updateCopyDialog)({ values: values }));
    },
    onSubmit: function onSubmit(when, validate) {
      return dispatch((0, _commands.copy)(when, validate));
    },
    onFind: function onFind() {
      return dispatch((0, _commands.find)('COPY'));
    }
  };
};

var CopyDialog = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_CopyModal2.default);

exports.default = CopyDialog;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = __webpack_require__(15);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _jsx2 = __webpack_require__(2);

var _jsx3 = _interopRequireDefault(_jsx2);

var _defineProperty2 = __webpack_require__(22);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _immutable = __webpack_require__(0);

var _reactstrap = __webpack_require__(13);

var _fa = __webpack_require__(14);

var _reactScrollBox = __webpack_require__(19);

var _RequiredFieldLabel = __webpack_require__(23);

var _RequiredFieldLabel2 = _interopRequireDefault(_RequiredFieldLabel);

var _FormMessages = __webpack_require__(18);

var _FormMessages2 = _interopRequireDefault(_FormMessages);

var _FieldErrors = __webpack_require__(24);

var _FieldErrors2 = _interopRequireDefault(_FieldErrors);

var _ScrollViewport = __webpack_require__(20);

var _ScrollViewport2 = _interopRequireDefault(_ScrollViewport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)('br', {});

var _ref2 = (0, _jsx3.default)(_fa.FaFolderO, {});

var _ref3 = (0, _jsx3.default)(_fa.FaFileO, {});

var _ref4 = (0, _jsx3.default)('div', {
  className: 'found-nodes'
}, void 0, (0, _jsx3.default)('div', {
  className: 'processing'
}, void 0, (0, _jsx3.default)(_fa.FaCog, {
  className: 'rotating'
})));

var _ref5 = (0, _jsx3.default)(_RequiredFieldLabel2.default, {});

var CopyModal = function (_React$PureComponent) {
  (0, _inherits3.default)(CopyModal, _React$PureComponent);

  function CopyModal(props) {
    (0, _classCallCheck3.default)(this, CopyModal);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CopyModal.__proto__ || (0, _getPrototypeOf2.default)(CopyModal)).call(this, props));

    _this.state = { ignoreBlur: true };

    _this.handleInput = _this.handleInput.bind(_this);
    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.handleBlur = _this.handleBlur.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(CopyModal, [{
    key: 'handleInput',
    value: function handleInput(event) {
      if (this.props.isLocked) return;

      this.props.onInput((0, _defineProperty3.default)({}, event.target.name, event.target.value));
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress(event) {
      var _this2 = this;

      if (this.props.isLocked || event.charCode !== 13) // enter
        return;

      switch (event.target.name) {
        case 'srcShare':
          if (this.srcDirectoryInput) setTimeout(function () {
            return _this2.srcDirectoryInput.focus();
          }, 0);
          break;
        case 'srcDirectory':
          if (this.srcNameInput) setTimeout(function () {
            return _this2.srcNameInput.focus();
          }, 0);
          break;
        case 'srcName':
          if (this.dstShareInput) setTimeout(function () {
            return _this2.dstShareInput.focus();
          }, 0);
          break;
        case 'dstShare':
          if (this.dstDirectoryInput) setTimeout(function () {
            return _this2.dstDirectoryInput.focus();
          }, 0);
          break;
        case 'dstDirectory':
          this.handleSubmit();
          break;
      }
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus() {
      if (this.props.isLocked) return;

      this.setState({ ignoreBlur: false });
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur(event) {
      var _this3 = this;

      if (this.props.isLocked || this.state.ignoreBlur) return;

      var submittedAt = Date.now();
      var field = event.target.name;

      setTimeout(function () {
        if (_this3.props.isLocked || _this3.state.ignoreBlur) return;

        _this3.props.onSubmit(submittedAt, field);
      }, 250);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit() {
      if (this.props.isLocked) return;

      this.setState({ ignoreBlur: true });
      this.props.onSubmit(Date.now());
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this4 = this;

      if (this.props.isLocked) {
        if (nextProps.isLocked) return;

        switch (nextProps.errors.keys().next().value) {
          case 'srcShare':
            if (this.srcShareInput) setTimeout(function () {
              return _this4.srcShareInput.focus();
            }, 250);
            break;
          case 'srcDirectory':
            if (this.srcDirectoryInput) setTimeout(function () {
              return _this4.srcDirectoryInput.focus();
            }, 250);
            break;
          case 'srcName':
            if (this.srcNameInput) setTimeout(function () {
              return _this4.srcNameInput.focus();
            }, 250);
            break;
          case 'dstShare':
            if (this.dstShareInput) setTimeout(function () {
              return _this4.dstShareInput.focus();
            }, 250);
            break;
          case 'dstDirectory':
            if (this.dstDirectoryInput) setTimeout(function () {
              return _this4.dstDirectoryInput.focus();
            }, 250);
            break;
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var find = null;
      if (!this.props.errors.has('srcName')) {
        if (this.props.found.get('isLoaded')) {
          find = [];
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = (0, _getIterator3.default)(this.props.found.get('nodes')), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var node = _step.value;

              var name = node.get('name');
              find.push(node.get('isDirectory') ? (0, _jsx3.default)('div', {}, name, (0, _jsx3.default)('strong', {}, void 0, _ref2, ' ', name)) : (0, _jsx3.default)('div', {}, name, _ref3, ' ', name));
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          find = (0, _jsx3.default)('div', {
            className: 'found-nodes'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'scroll-wrapper'
          }, void 0, (0, _jsx3.default)(_reactScrollBox.GenericScrollBox, {
            permitHandleDragInterruption: false,
            outsetScrollBarX: true,
            outsetScrollBarY: true
          }, void 0, (0, _jsx3.default)(_ScrollViewport2.default, {
            classes: 'text-content condensed'
          }, void 0, find.length ? find : (0, _jsx3.default)('em', {}, void 0, __('src_find_empty')), _ref))));
        } else if (this.props.found.get('isLoading')) {
          find = _ref4;
        } else {
          find = (0, _jsx3.default)(_reactstrap.FormText, {
            color: 'muted',
            dangerouslySetInnerHTML: { __html: __('src_name_hint') }
          });
        }
      }

      return (0, _jsx3.default)(_reactstrap.Modal, {
        isOpen: this.props.isOpen,
        toggle: this.props.onToggle,
        autoFocus: true,
        backdrop: 'static',
        fade: true
      }, void 0, (0, _jsx3.default)(_reactstrap.ModalHeader, {
        toggle: this.props.onToggle
      }, void 0, __('copy_title')), (0, _jsx3.default)(_reactstrap.ModalBody, {}, void 0, (0, _jsx3.default)(_reactstrap.Form, {}, void 0, (0, _jsx3.default)(_FormMessages2.default, {
        messages: this.props.messages
      }), (0, _jsx3.default)(_reactstrap.FormGroup, {
        row: true
      }, void 0, (0, _jsx3.default)(_reactstrap.Label, {
        'for': 'copySrcShare',
        sm: 4,
        className: 'text-sm-right'
      }, void 0, __('src_share_label')), (0, _jsx3.default)(_reactstrap.Col, {
        sm: 8
      }, void 0, (0, _jsx3.default)(_reactstrap.Input, {
        type: 'text',
        name: 'srcShare',
        id: 'copySrcShare',
        disabled: true,
        valid: !this.props.errors.has('srcShare') && undefined,
        value: this.props.values.get('srcShare'),
        onKeyPress: this.handleKeyPress,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        innerRef: function innerRef(input) {
          _this5.srcShareInput = input;
        }
      }), (0, _jsx3.default)(_FieldErrors2.default, {
        errors: this.props.errors.get('srcShare')
      }))), (0, _jsx3.default)(_reactstrap.FormGroup, {
        row: true
      }, void 0, (0, _jsx3.default)(_reactstrap.Label, {
        'for': 'copySrcDirectory',
        sm: 4,
        className: 'text-sm-right'
      }, void 0, __('src_directory_label')), (0, _jsx3.default)(_reactstrap.Col, {
        sm: 8
      }, void 0, (0, _jsx3.default)(_reactstrap.Input, {
        type: 'text',
        name: 'srcDirectory',
        id: 'copySrcDirectory',
        disabled: true,
        valid: !this.props.errors.has('srcDirectory') && undefined,
        value: this.props.values.get('srcDirectory'),
        onKeyPress: this.handleKeyPress,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        innerRef: function innerRef(input) {
          _this5.srcDirectoryInput = input;
        }
      }), (0, _jsx3.default)(_FieldErrors2.default, {
        errors: this.props.errors.get('srcDirectory')
      }))), (0, _jsx3.default)(_reactstrap.FormGroup, {
        row: true
      }, void 0, (0, _jsx3.default)(_reactstrap.Label, {
        'for': 'copySrcName',
        sm: 4,
        className: 'text-sm-right'
      }, void 0, __('src_name_label'), _ref5), (0, _jsx3.default)(_reactstrap.Col, {
        sm: 8
      }, void 0, (0, _jsx3.default)(_reactstrap.InputGroup, {}, void 0, (0, _jsx3.default)(_reactstrap.Input, {
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
        innerRef: function innerRef(input) {
          _this5.srcNameInput = input;
        }
      }), (0, _jsx3.default)(_reactstrap.InputGroupAddon, {
        addonType: 'append'
      }, void 0, (0, _jsx3.default)(_reactstrap.Button, {
        color: 'secondary',
        disabled: this.props.isLocked,
        onClick: this.props.onFind
      }, void 0, __('src_find_button'))), (0, _jsx3.default)(_FieldErrors2.default, {
        errors: this.props.errors.get('srcName')
      })), find)), (0, _jsx3.default)(_reactstrap.FormGroup, {
        row: true
      }, void 0, (0, _jsx3.default)(_reactstrap.Label, {
        'for': 'copyDstShare',
        sm: 4,
        className: 'text-sm-right'
      }, void 0, __('dst_share_label')), (0, _jsx3.default)(_reactstrap.Col, {
        sm: 8
      }, void 0, (0, _jsx3.default)(_reactstrap.Input, {
        type: 'text',
        name: 'dstShare',
        id: 'copyDstShare',
        disabled: true,
        valid: !this.props.errors.has('dstShare') && undefined,
        value: this.props.values.get('dstShare'),
        onKeyPress: this.handleKeyPress,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        innerRef: function innerRef(input) {
          _this5.dstShareInput = input;
        }
      }), (0, _jsx3.default)(_FieldErrors2.default, {
        errors: this.props.errors.get('dstShare')
      }))), (0, _jsx3.default)(_reactstrap.FormGroup, {
        row: true
      }, void 0, (0, _jsx3.default)(_reactstrap.Label, {
        'for': 'copyDstDirectory',
        sm: 4,
        className: 'text-sm-right'
      }, void 0, __('dst_directory_label')), (0, _jsx3.default)(_reactstrap.Col, {
        sm: 8
      }, void 0, (0, _jsx3.default)(_reactstrap.Input, {
        type: 'text',
        name: 'dstDirectory',
        id: 'copyDstDirectory',
        disabled: true,
        valid: !this.props.errors.has('dstDirectory') && undefined,
        value: this.props.values.get('dstDirectory'),
        onKeyPress: this.handleKeyPress,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        innerRef: function innerRef(input) {
          _this5.dstDirectoryInput = input;
        }
      }), (0, _jsx3.default)(_FieldErrors2.default, {
        errors: this.props.errors.get('dstDirectory')
      }))))), (0, _jsx3.default)(_reactstrap.ModalFooter, {}, void 0, (0, _jsx3.default)(_reactstrap.Button, {
        color: 'secondary',
        disabled: this.props.isLocked,
        onClick: this.props.onToggle
      }, void 0, __('cancel_button')), '\xA0', (0, _jsx3.default)(_reactstrap.Button, {
        color: 'primary',
        disabled: this.props.isLocked,
        onClick: this.handleSubmit
      }, void 0, __('submit_button'))));
    }
  }]);
  return CopyModal;
}(_react2.default.PureComponent);

exports.default = CopyModal;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(12);

var _moveDialog = __webpack_require__(35);

var _commands = __webpack_require__(21);

var _MoveModal = __webpack_require__(88);

var _MoveModal2 = _interopRequireDefault(_MoveModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    isOpen: state.getIn(['moveDialog', 'isOpen']),
    isLocked: state.getIn(['moveDialog', 'locked']) > 0,
    values: state.getIn(['moveDialog', 'values']),
    messages: state.getIn(['moveDialog', 'messages']),
    errors: state.getIn(['moveDialog', 'errors']),
    found: state.getIn(['moveDialog', 'found'])
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onToggle: function onToggle() {
      return dispatch((0, _moveDialog.toggleMoveDialog)());
    },
    onInput: function onInput(values) {
      return dispatch((0, _moveDialog.updateMoveDialog)({ values: values }));
    },
    onSubmit: function onSubmit(when, validate) {
      return dispatch((0, _commands.move)(when, validate));
    },
    onFind: function onFind() {
      return dispatch((0, _commands.find)('MOVE'));
    }
  };
};

var MoveDialog = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_MoveModal2.default);

exports.default = MoveDialog;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = __webpack_require__(15);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _jsx2 = __webpack_require__(2);

var _jsx3 = _interopRequireDefault(_jsx2);

var _defineProperty2 = __webpack_require__(22);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _immutable = __webpack_require__(0);

var _reactstrap = __webpack_require__(13);

var _fa = __webpack_require__(14);

var _reactScrollBox = __webpack_require__(19);

var _RequiredFieldLabel = __webpack_require__(23);

var _RequiredFieldLabel2 = _interopRequireDefault(_RequiredFieldLabel);

var _FormMessages = __webpack_require__(18);

var _FormMessages2 = _interopRequireDefault(_FormMessages);

var _FieldErrors = __webpack_require__(24);

var _FieldErrors2 = _interopRequireDefault(_FieldErrors);

var _ScrollViewport = __webpack_require__(20);

var _ScrollViewport2 = _interopRequireDefault(_ScrollViewport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)('br', {});

var _ref2 = (0, _jsx3.default)(_fa.FaFolderO, {});

var _ref3 = (0, _jsx3.default)(_fa.FaFileO, {});

var _ref4 = (0, _jsx3.default)('div', {
  className: 'found-nodes'
}, void 0, (0, _jsx3.default)('div', {
  className: 'processing'
}, void 0, (0, _jsx3.default)(_fa.FaCog, {
  className: 'rotating'
})));

var _ref5 = (0, _jsx3.default)(_RequiredFieldLabel2.default, {});

var MoveModal = function (_React$PureComponent) {
  (0, _inherits3.default)(MoveModal, _React$PureComponent);

  function MoveModal(props) {
    (0, _classCallCheck3.default)(this, MoveModal);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MoveModal.__proto__ || (0, _getPrototypeOf2.default)(MoveModal)).call(this, props));

    _this.state = { ignoreBlur: true };

    _this.handleInput = _this.handleInput.bind(_this);
    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.handleBlur = _this.handleBlur.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(MoveModal, [{
    key: 'handleInput',
    value: function handleInput(event) {
      if (this.props.isLocked) return;

      this.props.onInput((0, _defineProperty3.default)({}, event.target.name, event.target.value));
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress(event) {
      var _this2 = this;

      if (this.props.isLocked || event.charCode !== 13) // enter
        return;

      switch (event.target.name) {
        case 'srcShare':
          if (this.srcDirectoryInput) setTimeout(function () {
            return _this2.srcDirectoryInput.focus();
          }, 0);
          break;
        case 'srcDirectory':
          if (this.srcNameInput) setTimeout(function () {
            return _this2.srcNameInput.focus();
          }, 0);
          break;
        case 'srcName':
          if (this.dstShareInput) setTimeout(function () {
            return _this2.dstShareInput.focus();
          }, 0);
          break;
        case 'dstShare':
          if (this.dstDirectoryInput) setTimeout(function () {
            return _this2.dstDirectoryInput.focus();
          }, 0);
          break;
        case 'dstDirectory':
          this.handleSubmit();
          break;
      }
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus() {
      if (this.props.isLocked) return;

      this.setState({ ignoreBlur: false });
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur(event) {
      var _this3 = this;

      if (this.props.isLocked || this.state.ignoreBlur) return;

      var submittedAt = Date.now();
      var field = event.target.name;

      setTimeout(function () {
        if (_this3.props.isLocked || _this3.state.ignoreBlur) return;

        _this3.props.onSubmit(submittedAt, field);
      }, 250);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit() {
      if (this.props.isLocked) return;

      this.setState({ ignoreBlur: true });
      this.props.onSubmit(Date.now());
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this4 = this;

      if (this.props.isLocked) {
        if (nextProps.isLocked) return;

        switch (nextProps.errors.keys().next().value) {
          case 'srcShare':
            if (this.srcShareInput) setTimeout(function () {
              return _this4.srcShareInput.focus();
            }, 250);
            break;
          case 'srcDirectory':
            if (this.srcDirectoryInput) setTimeout(function () {
              return _this4.srcDirectoryInput.focus();
            }, 250);
            break;
          case 'srcName':
            if (this.srcNameInput) setTimeout(function () {
              return _this4.srcNameInput.focus();
            }, 250);
            break;
          case 'dstShare':
            if (this.dstShareInput) setTimeout(function () {
              return _this4.dstShareInput.focus();
            }, 250);
            break;
          case 'dstDirectory':
            if (this.dstDirectoryInput) setTimeout(function () {
              return _this4.dstDirectoryInput.focus();
            }, 250);
            break;
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var find = null;
      if (!this.props.errors.has('srcName')) {
        if (this.props.found.get('isLoaded')) {
          find = [];
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = (0, _getIterator3.default)(this.props.found.get('nodes')), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var node = _step.value;

              var name = node.get('name');
              find.push(node.get('isDirectory') ? (0, _jsx3.default)('div', {}, name, (0, _jsx3.default)('strong', {}, void 0, _ref2, ' ', name)) : (0, _jsx3.default)('div', {}, name, _ref3, ' ', name));
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          find = (0, _jsx3.default)('div', {
            className: 'found-nodes'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'scroll-wrapper'
          }, void 0, (0, _jsx3.default)(_reactScrollBox.GenericScrollBox, {
            permitHandleDragInterruption: false,
            outsetScrollBarX: true,
            outsetScrollBarY: true
          }, void 0, (0, _jsx3.default)(_ScrollViewport2.default, {
            classes: 'text-content condensed'
          }, void 0, find.length ? find : (0, _jsx3.default)('em', {}, void 0, __('src_find_empty')), _ref))));
        } else if (this.props.found.get('isLoading')) {
          find = _ref4;
        } else {
          find = (0, _jsx3.default)(_reactstrap.FormText, {
            color: 'muted',
            dangerouslySetInnerHTML: { __html: __('src_name_hint') }
          });
        }
      }

      return (0, _jsx3.default)(_reactstrap.Modal, {
        isOpen: this.props.isOpen,
        toggle: this.props.onToggle,
        autoFocus: true,
        backdrop: 'static',
        fade: true
      }, void 0, (0, _jsx3.default)(_reactstrap.ModalHeader, {
        toggle: this.props.onToggle
      }, void 0, __('move_title')), (0, _jsx3.default)(_reactstrap.ModalBody, {}, void 0, (0, _jsx3.default)(_reactstrap.Form, {}, void 0, (0, _jsx3.default)(_FormMessages2.default, {
        messages: this.props.messages
      }), (0, _jsx3.default)(_reactstrap.FormGroup, {
        row: true
      }, void 0, (0, _jsx3.default)(_reactstrap.Label, {
        'for': 'moveSrcShare',
        sm: 4,
        className: 'text-sm-right'
      }, void 0, __('src_share_label')), (0, _jsx3.default)(_reactstrap.Col, {
        sm: 8
      }, void 0, (0, _jsx3.default)(_reactstrap.Input, {
        type: 'text',
        name: 'srcShare',
        id: 'moveSrcShare',
        disabled: true,
        valid: !this.props.errors.has('srcShare') && undefined,
        value: this.props.values.get('srcShare'),
        onKeyPress: this.handleKeyPress,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        innerRef: function innerRef(input) {
          _this5.srcShareInput = input;
        }
      }), (0, _jsx3.default)(_FieldErrors2.default, {
        errors: this.props.errors.get('srcShare')
      }))), (0, _jsx3.default)(_reactstrap.FormGroup, {
        row: true
      }, void 0, (0, _jsx3.default)(_reactstrap.Label, {
        'for': 'moveSrcDirectory',
        sm: 4,
        className: 'text-sm-right'
      }, void 0, __('src_directory_label')), (0, _jsx3.default)(_reactstrap.Col, {
        sm: 8
      }, void 0, (0, _jsx3.default)(_reactstrap.Input, {
        type: 'text',
        name: 'srcDirectory',
        id: 'moveSrcDirectory',
        disabled: true,
        valid: !this.props.errors.has('srcDirectory') && undefined,
        value: this.props.values.get('srcDirectory'),
        onKeyPress: this.handleKeyPress,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        innerRef: function innerRef(input) {
          _this5.srcDirectoryInput = input;
        }
      }), (0, _jsx3.default)(_FieldErrors2.default, {
        errors: this.props.errors.get('srcDirectory')
      }))), (0, _jsx3.default)(_reactstrap.FormGroup, {
        row: true
      }, void 0, (0, _jsx3.default)(_reactstrap.Label, {
        'for': 'moveSrcName',
        sm: 4,
        className: 'text-sm-right'
      }, void 0, __('src_name_label'), _ref5), (0, _jsx3.default)(_reactstrap.Col, {
        sm: 8
      }, void 0, (0, _jsx3.default)(_reactstrap.InputGroup, {}, void 0, (0, _jsx3.default)(_reactstrap.Input, {
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
        innerRef: function innerRef(input) {
          _this5.srcNameInput = input;
        }
      }), (0, _jsx3.default)(_reactstrap.InputGroupAddon, {
        addonType: 'append'
      }, void 0, (0, _jsx3.default)(_reactstrap.Button, {
        color: 'secondary',
        disabled: this.props.isLocked,
        onClick: this.props.onFind
      }, void 0, __('src_find_button'))), (0, _jsx3.default)(_FieldErrors2.default, {
        errors: this.props.errors.get('srcName')
      })), find)), (0, _jsx3.default)(_reactstrap.FormGroup, {
        row: true
      }, void 0, (0, _jsx3.default)(_reactstrap.Label, {
        'for': 'moveDstShare',
        sm: 4,
        className: 'text-sm-right'
      }, void 0, __('dst_share_label')), (0, _jsx3.default)(_reactstrap.Col, {
        sm: 8
      }, void 0, (0, _jsx3.default)(_reactstrap.Input, {
        type: 'text',
        name: 'dstShare',
        id: 'moveDstShare',
        disabled: true,
        valid: !this.props.errors.has('dstShare') && undefined,
        value: this.props.values.get('dstShare'),
        onKeyPress: this.handleKeyPress,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        innerRef: function innerRef(input) {
          _this5.dstShareInput = input;
        }
      }), (0, _jsx3.default)(_FieldErrors2.default, {
        errors: this.props.errors.get('dstShare')
      }))), (0, _jsx3.default)(_reactstrap.FormGroup, {
        row: true
      }, void 0, (0, _jsx3.default)(_reactstrap.Label, {
        'for': 'moveDstDirectory',
        sm: 4,
        className: 'text-sm-right'
      }, void 0, __('dst_directory_label')), (0, _jsx3.default)(_reactstrap.Col, {
        sm: 8
      }, void 0, (0, _jsx3.default)(_reactstrap.Input, {
        type: 'text',
        name: 'dstDirectory',
        id: 'moveDstDirectory',
        disabled: true,
        valid: !this.props.errors.has('dstDirectory') && undefined,
        value: this.props.values.get('dstDirectory'),
        onKeyPress: this.handleKeyPress,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        innerRef: function innerRef(input) {
          _this5.dstDirectoryInput = input;
        }
      }), (0, _jsx3.default)(_FieldErrors2.default, {
        errors: this.props.errors.get('dstDirectory')
      }))))), (0, _jsx3.default)(_reactstrap.ModalFooter, {}, void 0, (0, _jsx3.default)(_reactstrap.Button, {
        color: 'secondary',
        disabled: this.props.isLocked,
        onClick: this.props.onToggle
      }, void 0, __('cancel_button')), '\xA0', (0, _jsx3.default)(_reactstrap.Button, {
        color: 'primary',
        disabled: this.props.isLocked,
        onClick: this.handleSubmit
      }, void 0, __('submit_button'))));
    }
  }]);
  return MoveModal;
}(_react2.default.PureComponent);

exports.default = MoveModal;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(12);

var _deleteDialog = __webpack_require__(36);

var _commands = __webpack_require__(21);

var _DeleteModal = __webpack_require__(90);

var _DeleteModal2 = _interopRequireDefault(_DeleteModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    isOpen: state.getIn(['deleteDialog', 'isOpen']),
    isLocked: state.getIn(['deleteDialog', 'locked']) > 0,
    values: state.getIn(['deleteDialog', 'values']),
    messages: state.getIn(['deleteDialog', 'messages']),
    errors: state.getIn(['deleteDialog', 'errors']),
    found: state.getIn(['deleteDialog', 'found'])
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onToggle: function onToggle() {
      return dispatch((0, _deleteDialog.toggleDeleteDialog)());
    },
    onInput: function onInput(values) {
      return dispatch((0, _deleteDialog.updateDeleteDialog)({ values: values }));
    },
    onSubmit: function onSubmit(when, validate) {
      return dispatch((0, _commands.del)(when, validate));
    },
    onFind: function onFind() {
      return dispatch((0, _commands.find)('DELETE'));
    }
  };
};

var DeleteDialog = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_DeleteModal2.default);

exports.default = DeleteDialog;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = __webpack_require__(15);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _jsx2 = __webpack_require__(2);

var _jsx3 = _interopRequireDefault(_jsx2);

var _defineProperty2 = __webpack_require__(22);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _immutable = __webpack_require__(0);

var _reactstrap = __webpack_require__(13);

var _fa = __webpack_require__(14);

var _reactScrollBox = __webpack_require__(19);

var _RequiredFieldLabel = __webpack_require__(23);

var _RequiredFieldLabel2 = _interopRequireDefault(_RequiredFieldLabel);

var _FormMessages = __webpack_require__(18);

var _FormMessages2 = _interopRequireDefault(_FormMessages);

var _FieldErrors = __webpack_require__(24);

var _FieldErrors2 = _interopRequireDefault(_FieldErrors);

var _ScrollViewport = __webpack_require__(20);

var _ScrollViewport2 = _interopRequireDefault(_ScrollViewport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)('br', {});

var _ref2 = (0, _jsx3.default)(_fa.FaFolderO, {});

var _ref3 = (0, _jsx3.default)(_fa.FaFileO, {});

var _ref4 = (0, _jsx3.default)('div', {
  className: 'found-nodes'
}, void 0, (0, _jsx3.default)('div', {
  className: 'processing'
}, void 0, (0, _jsx3.default)(_fa.FaCog, {
  className: 'rotating'
})));

var _ref5 = (0, _jsx3.default)(_RequiredFieldLabel2.default, {});

var DeleteModal = function (_React$PureComponent) {
  (0, _inherits3.default)(DeleteModal, _React$PureComponent);

  function DeleteModal(props) {
    (0, _classCallCheck3.default)(this, DeleteModal);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DeleteModal.__proto__ || (0, _getPrototypeOf2.default)(DeleteModal)).call(this, props));

    _this.state = { ignoreBlur: true };

    _this.handleInput = _this.handleInput.bind(_this);
    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.handleBlur = _this.handleBlur.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(DeleteModal, [{
    key: 'handleInput',
    value: function handleInput(event) {
      if (this.props.isLocked) return;

      this.props.onInput((0, _defineProperty3.default)({}, event.target.name, event.target.value));
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress(event) {
      var _this2 = this;

      if (this.props.isLocked || event.charCode !== 13) // enter
        return;

      switch (event.target.name) {
        case 'share':
          if (this.directoryInput) setTimeout(function () {
            return _this2.directoryInput.focus();
          }, 0);
          break;
        case 'directory':
          if (this.nameInput) setTimeout(function () {
            return _this2.nameInput.focus();
          }, 0);
          break;
        case 'name':
          this.handleSubmit();
          break;
      }
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus() {
      if (this.props.isLocked) return;

      this.setState({ ignoreBlur: false });
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur(event) {
      var _this3 = this;

      if (this.props.isLocked || this.state.ignoreBlur) return;

      var submittedAt = Date.now();
      var field = event.target.name;

      setTimeout(function () {
        if (_this3.props.isLocked || _this3.state.ignoreBlur) return;

        _this3.props.onSubmit(submittedAt, field);
      }, 250);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit() {
      if (this.props.isLocked) return;

      this.setState({ ignoreBlur: true });
      this.props.onSubmit(Date.now());
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this4 = this;

      if (this.props.isLocked) {
        if (nextProps.isLocked) return;

        switch (nextProps.errors.keys().next().value) {
          case 'share':
            if (this.shareInput) setTimeout(function () {
              return _this4.shareInput.focus();
            }, 250);
            break;
          case 'directory':
            if (this.directoryInput) setTimeout(function () {
              return _this4.directoryInput.focus();
            }, 250);
            break;
          case 'name':
            if (this.nameInput) setTimeout(function () {
              return _this4.nameInput.focus();
            }, 250);
            break;
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var find = null;
      if (!this.props.errors.has('name')) {
        if (this.props.found.get('isLoaded')) {
          find = [];
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = (0, _getIterator3.default)(this.props.found.get('nodes')), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var node = _step.value;

              var name = node.get('name');
              find.push(node.get('isDirectory') ? (0, _jsx3.default)('div', {}, name, (0, _jsx3.default)('strong', {}, void 0, _ref2, ' ', name)) : (0, _jsx3.default)('div', {}, name, _ref3, ' ', name));
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          find = (0, _jsx3.default)('div', {
            className: 'found-nodes'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'scroll-wrapper'
          }, void 0, (0, _jsx3.default)(_reactScrollBox.GenericScrollBox, {
            permitHandleDragInterruption: false,
            outsetScrollBarX: true,
            outsetScrollBarY: true
          }, void 0, (0, _jsx3.default)(_ScrollViewport2.default, {
            classes: 'text-content condensed'
          }, void 0, find.length ? find : (0, _jsx3.default)('em', {}, void 0, __('src_find_empty')), _ref))));
        } else if (this.props.found.get('isLoading')) {
          find = _ref4;
        } else {
          find = (0, _jsx3.default)(_reactstrap.FormText, {
            color: 'muted',
            dangerouslySetInnerHTML: { __html: __('src_name_hint') }
          });
        }
      }

      return (0, _jsx3.default)(_reactstrap.Modal, {
        isOpen: this.props.isOpen,
        toggle: this.props.onToggle,
        autoFocus: true,
        backdrop: 'static',
        fade: true
      }, void 0, (0, _jsx3.default)(_reactstrap.ModalHeader, {
        toggle: this.props.onToggle
      }, void 0, __('delete_title')), (0, _jsx3.default)(_reactstrap.ModalBody, {}, void 0, (0, _jsx3.default)(_reactstrap.Form, {}, void 0, (0, _jsx3.default)(_FormMessages2.default, {
        messages: this.props.messages
      }), (0, _jsx3.default)(_reactstrap.FormGroup, {
        row: true
      }, void 0, (0, _jsx3.default)(_reactstrap.Label, {
        'for': 'deleteShare',
        sm: 4,
        className: 'text-sm-right'
      }, void 0, __('share_label')), (0, _jsx3.default)(_reactstrap.Col, {
        sm: 8
      }, void 0, (0, _jsx3.default)(_reactstrap.Input, {
        type: 'text',
        name: 'share',
        id: 'deleteShare',
        disabled: true,
        valid: !this.props.errors.has('share') && undefined,
        value: this.props.values.get('share'),
        onKeyPress: this.handleKeyPress,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        innerRef: function innerRef(input) {
          _this5.shareInput = input;
        }
      }), (0, _jsx3.default)(_FieldErrors2.default, {
        errors: this.props.errors.get('share')
      }))), (0, _jsx3.default)(_reactstrap.FormGroup, {
        row: true
      }, void 0, (0, _jsx3.default)(_reactstrap.Label, {
        'for': 'deleteDirectory',
        sm: 4,
        className: 'text-sm-right'
      }, void 0, __('directory_label')), (0, _jsx3.default)(_reactstrap.Col, {
        sm: 8
      }, void 0, (0, _jsx3.default)(_reactstrap.Input, {
        type: 'text',
        name: 'directory',
        id: 'deleteDirectory',
        disabled: true,
        valid: !this.props.errors.has('directory') && undefined,
        value: this.props.values.get('directory'),
        onKeyPress: this.handleKeyPress,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        innerRef: function innerRef(input) {
          _this5.directoryInput = input;
        }
      }), (0, _jsx3.default)(_FieldErrors2.default, {
        errors: this.props.errors.get('directory')
      }))), (0, _jsx3.default)(_reactstrap.FormGroup, {
        row: true
      }, void 0, (0, _jsx3.default)(_reactstrap.Label, {
        'for': 'deleteName',
        sm: 4,
        className: 'text-sm-right'
      }, void 0, __('name_label'), _ref5), (0, _jsx3.default)(_reactstrap.Col, {
        sm: 8
      }, void 0, (0, _jsx3.default)(_reactstrap.InputGroup, {}, void 0, (0, _jsx3.default)(_reactstrap.Input, {
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
        innerRef: function innerRef(input) {
          _this5.nameInput = input;
        }
      }), (0, _jsx3.default)(_reactstrap.InputGroupAddon, {
        addonType: 'append'
      }, void 0, (0, _jsx3.default)(_reactstrap.Button, {
        color: 'secondary',
        disabled: this.props.isLocked,
        onClick: this.props.onFind
      }, void 0, __('src_find_button'))), (0, _jsx3.default)(_FieldErrors2.default, {
        errors: this.props.errors.get('name')
      })), find)))), (0, _jsx3.default)(_reactstrap.ModalFooter, {}, void 0, (0, _jsx3.default)(_reactstrap.Button, {
        color: 'secondary',
        disabled: this.props.isLocked,
        onClick: this.props.onToggle
      }, void 0, __('cancel_button')), '\xA0', (0, _jsx3.default)(_reactstrap.Button, {
        color: 'primary',
        disabled: this.props.isLocked,
        onClick: this.handleSubmit
      }, void 0, __('submit_button'))));
    }
  }]);
  return DeleteModal;
}(_react2.default.PureComponent);

exports.default = DeleteModal;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(12);

var _failureDialog = __webpack_require__(43);

var _FailureModal = __webpack_require__(92);

var _FailureModal2 = _interopRequireDefault(_FailureModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    isOpen: state.getIn(['failureDialog', 'isOpen']),
    messages: state.getIn(['failureDialog', 'messages']),
    errors: state.getIn(['failureDialog', 'errors'])
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onDoneClick: function onDoneClick() {
      return dispatch((0, _failureDialog.hideFailureDialog)());
    }
  };
};

var FailureDialog = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_FailureModal2.default);

exports.default = FailureDialog;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = __webpack_require__(15);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _jsx2 = __webpack_require__(2);

var _jsx3 = _interopRequireDefault(_jsx2);

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _immutable = __webpack_require__(0);

var _reactstrap = __webpack_require__(13);

var _FormMessages = __webpack_require__(18);

var _FormMessages2 = _interopRequireDefault(_FormMessages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FailureModal = function (_React$PureComponent) {
  (0, _inherits3.default)(FailureModal, _React$PureComponent);

  function FailureModal() {
    (0, _classCallCheck3.default)(this, FailureModal);
    return (0, _possibleConstructorReturn3.default)(this, (FailureModal.__proto__ || (0, _getPrototypeOf2.default)(FailureModal)).apply(this, arguments));
  }

  (0, _createClass3.default)(FailureModal, [{
    key: 'render',
    value: function render() {
      var list = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(this.props.errors.keys()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var key = _step.value;

          var items = [];
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = (0, _getIterator3.default)(this.props.errors.get(key).keys()), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var code = _step2.value;

              items.push((0, _jsx3.default)('p', {}, code, this.props.errors.getIn([key, code, 'message'])));
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          list.push((0, _jsx3.default)('dl', {
            className: 'row'
          }, key, (0, _jsx3.default)('dt', {
            className: 'col-sm-4 text-sm-right'
          }, void 0, __('field_' + key + '_label')), (0, _jsx3.default)('dd', {
            className: 'col-sm-8'
          }, void 0, items)));
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return (0, _jsx3.default)(_reactstrap.Modal, {
        isOpen: this.props.isOpen,
        size: 'lg',
        backdrop: 'static',
        fade: true,
        toggle: this.props.onDoneClick
      }, void 0, (0, _jsx3.default)(_reactstrap.ModalHeader, {}, void 0, __('failure_title')), (0, _jsx3.default)(_reactstrap.ModalBody, {}, void 0, (0, _jsx3.default)(_FormMessages2.default, {
        messages: this.props.messages
      }), list), (0, _jsx3.default)(_reactstrap.ModalFooter, {}, void 0, (0, _jsx3.default)(_reactstrap.Button, {
        color: 'primary',
        onClick: this.props.onDoneClick
      }, void 0, __('done_button'))));
    }
  }]);
  return FailureModal;
}(_react2.default.PureComponent);

exports.default = FailureModal;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(12);

var _pane = __webpack_require__(28);

var _size = __webpack_require__(37);

var _Pane = __webpack_require__(44);

var _Pane2 = _interopRequireDefault(_Pane);

var _commands = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  var selectedId = void 0;
  if (state.getIn(['rightPane', 'share']) && state.getIn(['rightPane', 'name'])) selectedId = state.getIn(['rightPane', 'share']) + ':' + state.getIn(['rightPane', 'path']);

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
    isOtherVisible: state.getIn(['rightPane', 'isVisible'])
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onPaneClick: function onPaneClick() {
      return dispatch((0, _pane.setActivePane)('LEFT'));
    },
    onSetShare: function onSetShare(share) {
      return dispatch((0, _pane.paneCD)('LEFT', share, '/'));
    },
    onSetSort: function onSetSort(field, dir) {
      return dispatch((0, _pane.paneSort)('LEFT', field, dir));
    },
    onChangeDirectory: function onChangeDirectory(directory) {
      return dispatch((0, _pane.paneCD)('LEFT', null, directory === '/' ? '/' : directory + '/'));
    },
    onNodeClick: function onNodeClick(node) {
      return dispatch((0, _pane.paneSelect)('LEFT', node));
    },
    onNodeShiftClick: function onNodeShiftClick(node) {
      return dispatch((0, _pane.paneSelectRange)('LEFT', node));
    },
    onNodeControlClick: function onNodeControlClick(node) {
      return dispatch((0, _pane.paneToggleSelect)('LEFT', node));
    },
    onSizeClick: function onSizeClick(share, path) {
      return dispatch((0, _size.loadSize)(share, path));
    },
    onToggleOther: function onToggleOther() {
      return dispatch((0, _pane.togglePane)('RIGHT'));
    },
    onSetMode: function onSetMode(mode) {
      return dispatch((0, _pane.setPaneMode)('LEFT', mode));
    },
    onCopyClick: function onCopyClick(name) {
      return dispatch((0, _commands.fastCopy)('LEFT', name));
    },
    onMoveClick: function onMoveClick(name) {
      return dispatch((0, _commands.fastMove)('LEFT', name));
    },
    onDeleteClick: function onDeleteClick(name) {
      return dispatch((0, _commands.fastDel)('LEFT', name));
    }
  };
};

var LeftPane = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Pane2.default);

exports.default = LeftPane;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(2);

var _jsx3 = _interopRequireDefault(_jsx2);

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DisabledView = function (_React$PureComponent) {
  (0, _inherits3.default)(DisabledView, _React$PureComponent);

  function DisabledView() {
    (0, _classCallCheck3.default)(this, DisabledView);
    return (0, _possibleConstructorReturn3.default)(this, (DisabledView.__proto__ || (0, _getPrototypeOf2.default)(DisabledView)).apply(this, arguments));
  }

  (0, _createClass3.default)(DisabledView, [{
    key: 'render',
    value: function render() {
      return (0, _jsx3.default)('div', {
        className: 'view rounded' + (this.props.isActive ? ' active' : '')
      }, void 0, (0, _jsx3.default)('div', {
        className: 'body disabled'
      }, void 0, __('not_authorized_message')));
    }
  }]);
  return DisabledView;
}(_react2.default.PureComponent);

exports.default = DisabledView;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(2);

var _jsx3 = _interopRequireDefault(_jsx2);

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _fa = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)('div', {
  className: 'body disabled'
}, void 0, (0, _jsx3.default)('h1', {}, void 0, (0, _jsx3.default)(_fa.FaCog, {
  className: 'rotating'
})));

var LoadingView = function (_React$PureComponent) {
  (0, _inherits3.default)(LoadingView, _React$PureComponent);

  function LoadingView() {
    (0, _classCallCheck3.default)(this, LoadingView);
    return (0, _possibleConstructorReturn3.default)(this, (LoadingView.__proto__ || (0, _getPrototypeOf2.default)(LoadingView)).apply(this, arguments));
  }

  (0, _createClass3.default)(LoadingView, [{
    key: 'render',
    value: function render() {
      return (0, _jsx3.default)('div', {
        className: 'view rounded' + (this.props.isActive ? ' active' : '')
      }, void 0, _ref);
    }
  }]);
  return LoadingView;
}(_react2.default.PureComponent);

exports.default = LoadingView;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = __webpack_require__(15);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _jsx2 = __webpack_require__(2);

var _jsx3 = _interopRequireDefault(_jsx2);

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _immutable = __webpack_require__(0);

var _fa = __webpack_require__(14);

var _reactstrap = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)(_fa.FaSortAlphaAsc, {});

var _ref2 = (0, _jsx3.default)(_fa.FaSortAlphaDesc, {});

var _ref3 = (0, _jsx3.default)(_fa.FaSortAlphaAsc, {});

var _ref4 = (0, _jsx3.default)(_fa.FaSortAmountAsc, {});

var _ref5 = (0, _jsx3.default)(_fa.FaSortAmountDesc, {});

var _ref6 = (0, _jsx3.default)(_fa.FaSortAmountAsc, {});

var _ref7 = (0, _jsx3.default)(_fa.FaFolderOpenO, {});

var _ref8 = (0, _jsx3.default)(_fa.FaFileTextO, {});

var _ref9 = (0, _jsx3.default)(_fa.FaAlignLeft, {});

var _ref10 = (0, _jsx3.default)(_fa.FaToggleOn, {});

var _ref11 = (0, _jsx3.default)(_fa.FaToggleOff, {});

var _ref12 = (0, _jsx3.default)(_fa.FaBars, {});

var Header = function (_React$PureComponent) {
  (0, _inherits3.default)(Header, _React$PureComponent);

  function Header(props) {
    (0, _classCallCheck3.default)(this, Header);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call(this, props));

    _this.state = {
      isShareDropdownOpen: false,
      isMenuOpen: false,
      isSortNameTooltipOpen: false,
      isSortSizeTooltipOpen: false,
      isModeListTooltipOpen: false,
      isModeContentsTooltipOpen: false,
      isModeInfoTooltipOpen: false,
      isPaneTooltipOpen: false
    };

    _this.toggleMenu = _this.toggleMenu.bind(_this);
    _this.toggleShareDropdown = _this.toggleShareDropdown.bind(_this);
    _this.toggleSortNameTooltip = _this.toggleSortNameTooltip.bind(_this);
    _this.toggleSortSizeTooltip = _this.toggleSortSizeTooltip.bind(_this);
    _this.toggleModeListTooltip = _this.toggleModeListTooltip.bind(_this);
    _this.toggleModeContentsTooltip = _this.toggleModeContentsTooltip.bind(_this);
    _this.toggleModeInfoTooltip = _this.toggleModeInfoTooltip.bind(_this);
    _this.togglePaneTooltip = _this.togglePaneTooltip.bind(_this);
    _this.toggleNameSort = _this.toggleNameSort.bind(_this);
    _this.toggleSizeSort = _this.toggleSizeSort.bind(_this);
    _this.setListMode = _this.setListMode.bind(_this);
    _this.setContentsMode = _this.setContentsMode.bind(_this);
    _this.setInfoMode = _this.setInfoMode.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Header, [{
    key: 'toggleMenu',
    value: function toggleMenu() {
      this.setState({ isMenuOpen: !this.state.isMenuOpen });
    }
  }, {
    key: 'toggleShareDropdown',
    value: function toggleShareDropdown() {
      this.setState({ isShareDropdownOpen: !this.state.isShareDropdownOpen });
    }
  }, {
    key: 'toggleSortNameTooltip',
    value: function toggleSortNameTooltip() {
      this.setState({ isSortNameTooltipOpen: !this.state.isSortNameTooltipOpen });
    }
  }, {
    key: 'toggleSortSizeTooltip',
    value: function toggleSortSizeTooltip() {
      this.setState({ isSortSizeTooltipOpen: !this.state.isSortSizeTooltipOpen });
    }
  }, {
    key: 'toggleModeListTooltip',
    value: function toggleModeListTooltip() {
      this.setState({ isModeListTooltipOpen: !this.state.isModeListTooltipOpen });
    }
  }, {
    key: 'toggleModeContentsTooltip',
    value: function toggleModeContentsTooltip() {
      this.setState({ isModeContentsTooltipOpen: !this.state.isModeContentsTooltipOpen });
    }
  }, {
    key: 'toggleModeInfoTooltip',
    value: function toggleModeInfoTooltip() {
      this.setState({ isModeInfoTooltipOpen: !this.state.isModeInfoTooltipOpen });
    }
  }, {
    key: 'togglePaneTooltip',
    value: function togglePaneTooltip() {
      this.setState({ isPaneTooltipOpen: !this.state.isPaneTooltipOpen });
    }
  }, {
    key: 'toggleNameSort',
    value: function toggleNameSort() {
      this.props.onSetSort('NAME', this.props.sortField === 'NAME' ? this.props.sortDir === 'ASC' ? 'DESC' : 'ASC' : 'ASC');
    }
  }, {
    key: 'toggleSizeSort',
    value: function toggleSizeSort() {
      this.props.onSetSort('SIZE', this.props.sortField === 'SIZE' ? this.props.sortDir === 'ASC' ? 'DESC' : 'ASC' : 'ASC');
    }
  }, {
    key: 'setListMode',
    value: function setListMode() {
      this.props.onSetMode('LIST');
    }
  }, {
    key: 'setContentsMode',
    value: function setContentsMode() {
      this.props.onSetMode('CONTENTS');
    }
  }, {
    key: 'setInfoMode',
    value: function setInfoMode() {
      this.props.onSetMode('INFO');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var share = null;
      if (this.props.mode === 'LIST') {
        var selectedShare = null;
        if (this.props.directory) selectedShare = (0, _jsx3.default)('span', {}, void 0, this.props.share);else selectedShare = __('select_share_label');

        var shares = null;
        if (this.props.shares.size) {
          shares = [];

          var _loop = function _loop(_share) {
            var name = _share.get('name');
            shares.push((0, _jsx3.default)(_reactstrap.DropdownItem, {
              onClick: function onClick() {
                return _this2.props.onSetShare(name);
              }
            }, name, name + ' ' + (_share.isReadOnly ? __('read_only_label') : __('read_write_label'))));
          };

          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = (0, _getIterator3.default)(this.props.shares), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var _share = _step.value;

              _loop(_share);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          shares = (0, _jsx3.default)(_reactstrap.DropdownMenu, {}, void 0, shares);
        }

        share = (0, _jsx3.default)(_reactstrap.Dropdown, {
          color: 'secondary',
          size: 'sm',
          isOpen: this.state.isShareDropdownOpen,
          toggle: this.toggleShareDropdown
        }, void 0, (0, _jsx3.default)(_reactstrap.DropdownToggle, {
          caret: true
        }, void 0, (0, _jsx3.default)('div', {
          className: 'fit-width'
        }, void 0, selectedShare)), shares);
      }

      var path = null;
      if (this.props.mode === 'LIST') {
        if (this.props.directory && this.props.breakpoint !== 'xs' && !(this.props.breakpoint === 'sm' && this.props.isOtherVisible)) path = this.props.directory;
      } else {
        path = this.props.otherPath;
      }

      var sorting = null;
      if (this.props.mode === 'LIST' && this.props.directory) {
        sorting = (0, _jsx3.default)('span', {}, void 0, (0, _jsx3.default)(_reactstrap.ButtonGroup, {}, void 0, (0, _jsx3.default)(_reactstrap.Button, {
          id: this.props.which + '-btn-sort-name',
          size: 'sm',
          color: this.props.sortField === 'NAME' ? 'primary' : 'secondary',
          onClick: this.toggleNameSort
        }, void 0, this.props.sortField === 'NAME' ? this.props.sortDir === 'ASC' ? _ref : _ref2 : _ref3), _react2.default.createElement(_reactstrap.Tooltip, {
          placement: 'bottom',
          target: this.props.which + '-btn-sort-name',
          isOpen: this.sortNameTooltip && this.state.isSortNameTooltipOpen,
          toggle: this.toggleSortNameTooltip,
          ref: function ref(el) {
            _this2.sortNameTooltip = el;
          },
          dangerouslySetInnerHTML: { __html: __('sort_name_hint') }
        }), (0, _jsx3.default)(_reactstrap.Button, {
          id: this.props.which + '-btn-sort-size',
          size: 'sm',
          color: this.props.sortField === 'SIZE' ? 'primary' : 'secondary',
          onClick: this.toggleSizeSort
        }, void 0, this.props.sortField === 'SIZE' ? this.props.sortDir === 'ASC' ? _ref4 : _ref5 : _ref6), _react2.default.createElement(_reactstrap.Tooltip, {
          placement: 'bottom',
          target: this.props.which + '-btn-sort-size',
          isOpen: this.sortSizeTooltip && this.state.isSortSizeTooltipOpen,
          toggle: this.toggleSortSizeTooltip,
          ref: function ref(el) {
            _this2.sortSizeTooltip = el;
          },
          dangerouslySetInnerHTML: { __html: __('sort_size_hint') }
        })), '\xA0');
      }

      var modes = (0, _jsx3.default)('span', {}, void 0, (0, _jsx3.default)(_reactstrap.ButtonGroup, {}, void 0, (0, _jsx3.default)(_reactstrap.Button, {
        id: this.props.which + '-btn-mode-list',
        size: 'sm',
        color: this.props.mode === 'LIST' ? 'primary' : 'secondary',
        onClick: this.setListMode
      }, void 0, _ref7), _react2.default.createElement(_reactstrap.Tooltip, {
        placement: 'bottom',
        target: this.props.which + '-btn-mode-list',
        isOpen: this.modeListTooltip && this.state.isModeListTooltipOpen,
        toggle: this.toggleModeListTooltip,
        ref: function ref(el) {
          _this2.modeListTooltip = el;
        },
        dangerouslySetInnerHTML: { __html: __('mode_list_hint') }
      }), (0, _jsx3.default)(_reactstrap.Button, {
        id: this.props.which + '-btn-mode-contents',
        size: 'sm',
        color: this.props.mode === 'CONTENTS' ? 'primary' : 'secondary',
        onClick: this.setContentsMode
      }, void 0, _ref8), _react2.default.createElement(_reactstrap.Tooltip, {
        placement: 'bottom',
        target: this.props.which + '-btn-mode-contents',
        isOpen: this.modeContentsTooltip && this.state.isModeContentsTooltipOpen,
        toggle: this.toggleModeContentsTooltip,
        ref: function ref(el) {
          _this2.modeContentsTooltip = el;
        },
        dangerouslySetInnerHTML: { __html: __('mode_contents_hint') }
      }), (0, _jsx3.default)(_reactstrap.Button, {
        id: this.props.which + '-btn-mode-info',
        size: 'sm',
        color: this.props.mode === 'INFO' ? 'primary' : 'secondary',
        onClick: this.setInfoMode
      }, void 0, _ref9), _react2.default.createElement(_reactstrap.Tooltip, {
        placement: 'bottom',
        target: this.props.which + '-btn-mode-info',
        isOpen: this.modeInfoTooltip && this.state.isModeInfoTooltipOpen,
        toggle: this.toggleModeInfoTooltip,
        ref: function ref(el) {
          _this2.modeInfoTooltip = el;
        },
        dangerouslySetInnerHTML: { __html: __('mode_info_hint') }
      })), '\xA0');

      var tools = (0, _jsx3.default)('span', {}, void 0, sorting, modes, (0, _jsx3.default)(_reactstrap.Button, {
        id: this.props.which + '-btn-toggle-pane',
        size: 'sm',
        color: 'secondary',
        onClick: this.props.onToggleOther
      }, void 0, this.props.isOtherVisible ? _ref10 : _ref11), _react2.default.createElement(_reactstrap.Tooltip, {
        placement: 'bottom',
        target: this.props.which + '-btn-toggle-pane',
        isOpen: this.paneTooltip && this.state.isPaneTooltipOpen,
        toggle: this.togglePaneTooltip,
        ref: function ref(el) {
          _this2.paneTooltip = el;
        },
        dangerouslySetInnerHTML: { __html: __('toggle_pane_hint') }
      }));
      if (this.props.breakpoint === 'xs' || this.props.breakpoint === 'sm' && this.props.isOtherVisible) {
        tools = (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_reactstrap.Button, {
          size: 'sm',
          color: 'secondary',
          onClick: this.toggleMenu
        }, void 0, _ref12), this.state.isMenuOpen && (0, _jsx3.default)('div', {
          className: 'submenu rounded'
        }, void 0, tools));
      }

      return (0, _jsx3.default)('div', {
        className: 'header'
      }, void 0, (0, _jsx3.default)('div', {
        className: 'share'
      }, void 0, share), (0, _jsx3.default)('div', {
        className: 'path'
      }, void 0, path), (0, _jsx3.default)('div', {
        className: 'tools'
      }, void 0, tools));
    }
  }]);
  return Header;
}(_react2.default.PureComponent);

exports.default = Header;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(2);

var _jsx3 = _interopRequireDefault(_jsx2);

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _immutable = __webpack_require__(0);

var _ListComponent = __webpack_require__(98);

var _ListComponent2 = _interopRequireDefault(_ListComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListView = function (_React$PureComponent) {
  (0, _inherits3.default)(ListView, _React$PureComponent);

  function ListView() {
    (0, _classCallCheck3.default)(this, ListView);
    return (0, _possibleConstructorReturn3.default)(this, (ListView.__proto__ || (0, _getPrototypeOf2.default)(ListView)).apply(this, arguments));
  }

  (0, _createClass3.default)(ListView, [{
    key: 'render',
    value: function render() {
      var bodyClass = void 0;
      var listing = void 0;
      if (this.props.isForbidden) {
        bodyClass = 'body disabled';
        listing = __('forbidden_message');
      } else if (!this.props.list.size) {
        bodyClass = 'body disabled';
        listing = __('empty_message');
      } else {
        bodyClass = 'body';
        listing = (0, _jsx3.default)(_ListComponent2.default, {
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
          onDeleteClick: this.props.onDeleteClick
        });
      }

      return (0, _jsx3.default)('div', {
        className: bodyClass
      }, void 0, listing);
    }
  }]);
  return ListView;
}(_react2.default.PureComponent);

exports.default = ListView;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = __webpack_require__(99);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _jsx2 = __webpack_require__(2);

var _jsx3 = _interopRequireDefault(_jsx2);

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _immutable = __webpack_require__(0);

var _reactScrollBox = __webpack_require__(19);

var _reactList = __webpack_require__(100);

var _reactList2 = _interopRequireDefault(_reactList);

var _ScrollViewport = __webpack_require__(20);

var _ScrollViewport2 = _interopRequireDefault(_ScrollViewport);

var _ListItem = __webpack_require__(101);

var _ListItem2 = _interopRequireDefault(_ListItem);

var _path = __webpack_require__(25);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListComponent = function (_React$PureComponent) {
  (0, _inherits3.default)(ListComponent, _React$PureComponent);

  function ListComponent(props) {
    (0, _classCallCheck3.default)(this, ListComponent);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ListComponent.__proto__ || (0, _getPrototypeOf2.default)(ListComponent)).call(this, props));

    _this.state = { initialIndex: 0 };

    _this.renderItem = _this.renderItem.bind(_this);
    _this.renderTable = _this.renderTable.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(ListComponent, [{
    key: 'renderItem',
    value: function renderItem(index, key) {
      var _this2 = this;

      var node = this.props.list.get(index);
      return (0, _jsx3.default)(_ListItem2.default, {
        which: this.props.which,
        node: node,
        size: this.props.sizes.get(this.props.share + ':' + node.get('path')),
        index: index,
        isSelected: this.props.selectedIndexes.includes(index),
        onChangeDirectory: this.props.onChangeDirectory,
        onNodeClick: this.props.onNodeClick,
        onNodeShiftClick: this.props.onNodeShiftClick,
        onNodeControlClick: this.props.onNodeControlClick,
        onSizeClick: function onSizeClick() {
          return _this2.props.onSizeClick(_this2.props.share, node.get('path'));
        },
        onCopyClick: this.props.onCopyClick,
        onMoveClick: this.props.onMoveClick,
        onDeleteClick: this.props.onDeleteClick
      }, key);
    }
  }, {
    key: 'renderTable',
    value: function renderTable(items, ref) {
      return _react2.default.createElement(
        'div',
        { className: 'listing', ref: ref },
        items
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      setTimeout(function () {
        return window.dispatchEvent(new Event('resize'));
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.list && nextProps.share === this.props.share && nextProps.directory === this.props.directory) {
        var _list$getVisibleRange = this.list.getVisibleRange(),
            _list$getVisibleRange2 = (0, _slicedToArray3.default)(_list$getVisibleRange, 1),
            first = _list$getVisibleRange2[0];

        this.setState({ initialIndex: first || 0 });
      } else {
        this.setState({ initialIndex: 0 });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return (0, _jsx3.default)('div', {
        className: 'scroll-wrapper'
      }, void 0, (0, _jsx3.default)(_reactScrollBox.GenericScrollBox, {
        permitHandleDragInterruption: false
      }, void 0, (0, _jsx3.default)(_ScrollViewport2.default, {
        reactList: true
      }, void 0, _react2.default.createElement(_reactList2.default, {
        length: this.props.list.size,
        minSize: 100,
        initialIndex: this.state.initialIndex,
        itemRenderer: this.renderItem,
        itemsRenderer: this.renderTable,
        type: 'uniform',
        useTranslate3d: true,
        ref: function ref(el) {
          _this3.list = el;
        }
      }))));
    }
  }]);
  return ListComponent;
}(_react2.default.PureComponent);

exports.default = ListComponent;

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = require("react-list");

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(2);

var _jsx3 = _interopRequireDefault(_jsx2);

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _immutable = __webpack_require__(0);

var _fa = __webpack_require__(14);

var _reactstrap = __webpack_require__(13);

var _path = __webpack_require__(25);

var _size = __webpack_require__(45);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)(_fa.FaFolderO, {});

var _ref2 = (0, _jsx3.default)(_fa.FaFileO, {});

var _ref3 = (0, _jsx3.default)(_fa.FaCog, {
  className: 'rotating'
});

var _ref4 = (0, _jsx3.default)(_fa.FaBalanceScale, {});

var _ref5 = (0, _jsx3.default)(_fa.FaCopy, {});

var _ref6 = (0, _jsx3.default)(_fa.FaCut, {});

var _ref7 = (0, _jsx3.default)(_fa.FaTrash, {});

var ListItem = function (_React$PureComponent) {
  (0, _inherits3.default)(ListItem, _React$PureComponent);

  function ListItem(props) {
    (0, _classCallCheck3.default)(this, ListItem);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ListItem.__proto__ || (0, _getPrototypeOf2.default)(ListItem)).call(this, props));

    _this.state = {
      isHovered: false,
      isSizeTooltipOpen: false,
      isCopyTooltipOpen: false,
      isMoveTooltipOpen: false,
      isDeleteTooltipOpen: false
    };

    _this.toggleSizeTooltip = _this.toggleSizeTooltip.bind(_this);
    _this.toggleCopyTooltip = _this.toggleCopyTooltip.bind(_this);
    _this.toggleMoveTooltip = _this.toggleMoveTooltip.bind(_this);
    _this.toggleDeleteTooltip = _this.toggleDeleteTooltip.bind(_this);
    _this.handleEnter = _this.handleEnter.bind(_this);
    _this.handleLeave = _this.handleLeave.bind(_this);
    _this.handleNameClick = _this.handleNameClick.bind(_this);
    _this.handleItemClick = _this.handleItemClick.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(ListItem, [{
    key: 'toggleSizeTooltip',
    value: function toggleSizeTooltip() {
      this.setState({ isSizeTooltipOpen: !this.state.isSizeTooltipOpen });
    }
  }, {
    key: 'toggleCopyTooltip',
    value: function toggleCopyTooltip() {
      this.setState({ isCopyTooltipOpen: !this.state.isCopyTooltipOpen });
    }
  }, {
    key: 'toggleMoveTooltip',
    value: function toggleMoveTooltip() {
      this.setState({ isMoveTooltipOpen: !this.state.isMoveTooltipOpen });
    }
  }, {
    key: 'toggleDeleteTooltip',
    value: function toggleDeleteTooltip() {
      this.setState({ isDeleteTooltipOpen: !this.state.isDeleteTooltipOpen });
    }
  }, {
    key: 'handleEnter',
    value: function handleEnter() {
      this.setState({ isHovered: true });
    }
  }, {
    key: 'handleLeave',
    value: function handleLeave() {
      this.setState({ isHovered: false });
    }
  }, {
    key: 'handleNameClick',
    value: function handleNameClick(e) {
      e.stopPropagation();
      this.props.onChangeDirectory((0, _path.join)(this.props.node.get('directory'), this.props.node.get('name')));
    }
  }, {
    key: 'handleItemClick',
    value: function handleItemClick(e) {
      if (this.props.node.get('name') === '..') return;

      if (e.shiftKey) this.props.onNodeShiftClick(this.props.index);else if (e.ctrlKey) this.props.onNodeControlClick(this.props.index);else this.props.onNodeClick(this.props.index);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var icon = this.props.node.get('isDirectory') ? _ref : _ref2;

      var name = (0, _jsx3.default)('span', {}, void 0, icon, ' ', this.props.node.get('name'), this.props.node.get('target') && ' ⇨ ' + this.props.node.get('target'));
      if (this.props.node.get('isDirectory')) {
        name = (0, _jsx3.default)('a', {
          className: 'link',
          onClick: this.handleNameClick
        }, void 0, (0, _jsx3.default)('strong', {}, void 0, name));
      }

      var size = void 0;
      if (this.props.node.get('isDirectory')) {
        if (this.props.size.size && !this.props.size.get('isForbidden')) size = this.props.size.get('isLoading') ? _ref3 : (0, _size.human)(this.props.size.get('du'));else size = _ref4;

        size = (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_reactstrap.Button, {
          id: this.props.which + '-btn-size-' + this.props.index,
          size: 'sm',
          color: this.props.isSelected ? 'primary' : 'secondary',
          onClick: this.props.onSizeClick
        }, void 0, size), _react2.default.createElement(_reactstrap.Tooltip, {
          placement: 'bottom',
          target: this.props.which + '-btn-size-' + this.props.index,
          isOpen: this.sizeTooltip && this.state.isSizeTooltipOpen,
          toggle: this.toggleSizeTooltip,
          ref: function ref(el) {
            _this2.sizeTooltip = el;
          },
          dangerouslySetInnerHTML: { __html: __('size_button_hint') }
        }));
      } else {
        size = (0, _size.human)(this.props.node.get('size'));
      }

      var aux = null;
      if (this.props.node.get('name') === '..') {
        aux = (0, _jsx3.default)('div', {
          className: 'wrapper'
        }, void 0, (0, _jsx3.default)('div', {
          className: 'size'
        }, void 0, (0, _jsx3.default)('em', {}, void 0, __('two_dots_label'))));
      } else {
        aux = (0, _jsx3.default)('div', {
          className: 'wrapper'
        }, void 0, (0, _jsx3.default)('div', {
          className: 'size'
        }, void 0, size), (0, _jsx3.default)('div', {
          className: 'tools'
        }, void 0, (0, _jsx3.default)(_reactstrap.Button, {
          id: this.props.which + '-btn-copy-' + this.props.index,
          size: 'sm',
          color: this.props.isSelected ? 'primary' : 'secondary',
          onClick: function onClick() {
            return _this2.props.onCopyClick(_this2.props.node.get('name'));
          }
        }, void 0, _ref5), _react2.default.createElement(_reactstrap.Tooltip, {
          placement: 'bottom',
          target: this.props.which + '-btn-copy-' + this.props.index,
          isOpen: this.copyTooltip && this.state.isCopyTooltipOpen,
          toggle: this.toggleCopyTooltip,
          ref: function ref(el) {
            _this2.copyTooltip = el;
          },
          dangerouslySetInnerHTML: { __html: __('copy_button_hint') }
        }), ' ', (0, _jsx3.default)(_reactstrap.Button, {
          id: this.props.which + '-btn-move-' + this.props.index,
          size: 'sm',
          color: this.props.isSelected ? 'primary' : 'secondary',
          onClick: function onClick() {
            return _this2.props.onMoveClick(_this2.props.node.get('name'));
          }
        }, void 0, _ref6), _react2.default.createElement(_reactstrap.Tooltip, {
          placement: 'bottom',
          target: this.props.which + '-btn-move-' + this.props.index,
          isOpen: this.moveTooltip && this.state.isMoveTooltipOpen,
          toggle: this.toggleMoveTooltip,
          ref: function ref(el) {
            _this2.moveTooltip = el;
          },
          dangerouslySetInnerHTML: { __html: __('move_button_hint') }
        }), ' ', (0, _jsx3.default)(_reactstrap.Button, {
          id: this.props.which + '-btn-delete-' + this.props.index,
          size: 'sm',
          color: this.props.isSelected ? 'primary' : 'secondary',
          onClick: function onClick() {
            return _this2.props.onDeleteClick(_this2.props.node.get('name'));
          }
        }, void 0, _ref7), _react2.default.createElement(_reactstrap.Tooltip, {
          placement: 'bottom',
          target: this.props.which + '-btn-delete-' + this.props.index,
          isOpen: this.deleteTooltip && this.state.isDeleteTooltipOpen,
          toggle: this.toggleDeleteTooltip,
          ref: function ref(el) {
            _this2.deleteTooltip = el;
          },
          dangerouslySetInnerHTML: { __html: __('delete_button_hint') }
        })));
      }

      return (0, _jsx3.default)('div', {
        className: 'listing-item' + (this.props.isSelected ? ' selected' : '') + (this.state.isHovered ? ' hovered' : this.props.index % 2 ? ' odd' : ' even'),
        onMouseEnter: this.handleEnter,
        onMouseLeave: this.handleLeave,
        onClick: this.handleItemClick
      }, void 0, (0, _jsx3.default)('div', {
        className: 'name'
      }, void 0, (0, _jsx3.default)('div', {
        className: 'fit-width'
      }, void 0, name)), (0, _jsx3.default)('div', {
        className: 'info'
      }, void 0, aux));
    }
  }]);
  return ListItem;
}(_react2.default.PureComponent);

ListItem.defaultProps = {
  size: (0, _immutable.Map)({})
};
exports.default = ListItem;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(2);

var _jsx3 = _interopRequireDefault(_jsx2);

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _immutable = __webpack_require__(0);

var _reactScrollBox = __webpack_require__(19);

var _fa = __webpack_require__(14);

var _ScrollViewport = __webpack_require__(20);

var _ScrollViewport2 = _interopRequireDefault(_ScrollViewport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)('h1', {}, void 0, (0, _jsx3.default)(_fa.FaCog, {
  className: 'rotating'
}));

var _ref2 = (0, _jsx3.default)('br', {});

var ContentView = function (_React$PureComponent) {
  (0, _inherits3.default)(ContentView, _React$PureComponent);

  function ContentView() {
    (0, _classCallCheck3.default)(this, ContentView);
    return (0, _possibleConstructorReturn3.default)(this, (ContentView.__proto__ || (0, _getPrototypeOf2.default)(ContentView)).apply(this, arguments));
  }

  (0, _createClass3.default)(ContentView, [{
    key: 'render',
    value: function render() {
      var bodyClass = 'body disabled';
      var body = void 0;
      if (!this.props.content.size) {
        body = __('contents_view_message');
      } else {
        if (this.props.content.get('isLoading')) {
          body = _ref;
        } else if (this.props.content.get('isForbidden')) {
          body = __('forbidden_message');
        } else if (this.props.content.get('type') !== 'TEXT') {
          body = __('type_' + this.props.content.get('type') + '_message');
        } else {
          body = (0, _jsx3.default)('div', {
            className: 'scroll-wrapper'
          }, void 0, (0, _jsx3.default)(_reactScrollBox.GenericScrollBox, {
            permitHandleDragInterruption: false
          }, void 0, (0, _jsx3.default)(_ScrollViewport2.default, {
            classes: 'text-content',
            reactList: false
          }, void 0, this.props.content.has('base64') && atob(this.props.content.get('base64')), _ref2)));
          bodyClass = 'body';
        }
      }

      return (0, _jsx3.default)('div', {
        className: bodyClass
      }, void 0, body);
    }
  }]);
  return ContentView;
}(_react2.default.PureComponent);

ContentView.defaultProps = {
  content: (0, _immutable.Map)({})
};
exports.default = ContentView;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(2);

var _jsx3 = _interopRequireDefault(_jsx2);

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _immutable = __webpack_require__(0);

var _reactScrollBox = __webpack_require__(19);

var _fa = __webpack_require__(14);

var _momentTimezone = __webpack_require__(104);

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

var _ScrollViewport = __webpack_require__(20);

var _ScrollViewport2 = _interopRequireDefault(_ScrollViewport);

var _size = __webpack_require__(45);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)('h1', {}, void 0, (0, _jsx3.default)(_fa.FaCog, {
  className: 'rotating'
}));

var _ref2 = (0, _jsx3.default)('br', {});

var InfoView = function (_React$PureComponent) {
  (0, _inherits3.default)(InfoView, _React$PureComponent);

  function InfoView() {
    (0, _classCallCheck3.default)(this, InfoView);
    return (0, _possibleConstructorReturn3.default)(this, (InfoView.__proto__ || (0, _getPrototypeOf2.default)(InfoView)).apply(this, arguments));
  }

  (0, _createClass3.default)(InfoView, [{
    key: 'render',
    value: function render() {
      var bodyClass = 'body disabled';
      var body = void 0;
      if (!this.props.info.size) {
        body = __('info_view_message');
      } else {
        if (this.props.info.get('isLoading')) {
          body = _ref;
        } else if (this.props.info.get('isForbidden')) {
          body = __('forbidden_message');
        } else {
          body = (0, _jsx3.default)('div', {
            className: 'scroll-wrapper'
          }, void 0, (0, _jsx3.default)(_reactScrollBox.GenericScrollBox, {
            permitHandleDragInterruption: false
          }, void 0, (0, _jsx3.default)(_ScrollViewport2.default, {
            reactList: false
          }, void 0, (0, _jsx3.default)('div', {
            className: 'listing'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'listing-item odd'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'info'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'wrapper'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'data'
          }, void 0, __('info_name_label')))), (0, _jsx3.default)('div', {
            className: 'name'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'fit-width fixed-margin'
          }, void 0, (0, _jsx3.default)('strong', {}, void 0, this.props.info.get('name'))))), (0, _jsx3.default)('div', {
            className: 'listing-item even'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'info'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'wrapper'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'data'
          }, void 0, __('info_parent_label')))), (0, _jsx3.default)('div', {
            className: 'name'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'fit-width fixed-margin'
          }, void 0, (0, _jsx3.default)('strong', {}, void 0, this.props.info.get('parent'))))), (0, _jsx3.default)('div', {
            className: 'listing-item odd'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'info'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'wrapper'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'data'
          }, void 0, __('info_size_bytes_label')))), (0, _jsx3.default)('div', {
            className: 'name'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'fit-width fixed-margin'
          }, void 0, (0, _jsx3.default)('strong', {}, void 0, this.props.info.get('size'))))), (0, _jsx3.default)('div', {
            className: 'listing-item even'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'info'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'wrapper'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'data'
          }, void 0, __('info_size_human_label')))), (0, _jsx3.default)('div', {
            className: 'name'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'fit-width fixed-margin'
          }, void 0, (0, _jsx3.default)('strong', {}, void 0, (0, _size.human)(this.props.info.get('size')))))), (0, _jsx3.default)('div', {
            className: 'listing-item odd'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'info'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'wrapper'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'data'
          }, void 0, __('info_du_bytes_label')))), (0, _jsx3.default)('div', {
            className: 'name'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'fit-width fixed-margin'
          }, void 0, (0, _jsx3.default)('strong', {}, void 0, this.props.info.get('du'))))), (0, _jsx3.default)('div', {
            className: 'listing-item even'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'info'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'wrapper'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'data'
          }, void 0, __('info_du_human_label')))), (0, _jsx3.default)('div', {
            className: 'name'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'fit-width fixed-margin'
          }, void 0, (0, _jsx3.default)('strong', {}, void 0, (0, _size.human)(this.props.info.get('du')))))), (0, _jsx3.default)('div', {
            className: 'listing-item odd'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'info'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'wrapper'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'data'
          }, void 0, __('info_mode_number_label')))), (0, _jsx3.default)('div', {
            className: 'name'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'fit-width fixed-margin'
          }, void 0, (0, _jsx3.default)('strong', {}, void 0, this.props.info.get('modeNumber').toString(8))))), (0, _jsx3.default)('div', {
            className: 'listing-item even'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'info'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'wrapper'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'data'
          }, void 0, __('info_mode_string_label')))), (0, _jsx3.default)('div', {
            className: 'name'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'fit-width fixed-margin'
          }, void 0, (0, _jsx3.default)('strong', {}, void 0, this.props.info.get('modeString'))))), (0, _jsx3.default)('div', {
            className: 'listing-item odd'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'info'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'wrapper'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'data'
          }, void 0, __('info_user_id_label')))), (0, _jsx3.default)('div', {
            className: 'name'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'fit-width fixed-margin'
          }, void 0, (0, _jsx3.default)('strong', {}, void 0, this.props.info.get('userId'))))), (0, _jsx3.default)('div', {
            className: 'listing-item even'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'info'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'wrapper'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'data'
          }, void 0, __('info_user_name_label')))), (0, _jsx3.default)('div', {
            className: 'name'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'fit-width fixed-margin'
          }, void 0, (0, _jsx3.default)('strong', {}, void 0, this.props.info.get('userName'))))), (0, _jsx3.default)('div', {
            className: 'listing-item odd'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'info'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'wrapper'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'data'
          }, void 0, __('info_group_id_label')))), (0, _jsx3.default)('div', {
            className: 'name'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'fit-width fixed-margin'
          }, void 0, (0, _jsx3.default)('strong', {}, void 0, this.props.info.get('groupId'))))), (0, _jsx3.default)('div', {
            className: 'listing-item even'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'info'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'wrapper'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'data'
          }, void 0, __('info_group_name_label')))), (0, _jsx3.default)('div', {
            className: 'name'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'fit-width fixed-margin'
          }, void 0, (0, _jsx3.default)('strong', {}, void 0, this.props.info.get('groupName'))))), (0, _jsx3.default)('div', {
            className: 'listing-item odd'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'info'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'wrapper'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'data'
          }, void 0, __('info_atime_label')))), (0, _jsx3.default)('div', {
            className: 'name'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'fit-width fixed-margin'
          }, void 0, (0, _jsx3.default)('strong', {}, void 0, (0, _momentTimezone2.default)(this.props.info.get('atime')).format('YYYY-MM-DD HH:mm:ss'))))), (0, _jsx3.default)('div', {
            className: 'listing-item even'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'info'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'wrapper'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'data'
          }, void 0, __('info_mtime_label')))), (0, _jsx3.default)('div', {
            className: 'name'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'fit-width fixed-margin'
          }, void 0, (0, _jsx3.default)('strong', {}, void 0, (0, _momentTimezone2.default)(this.props.info.get('mtime')).format('YYYY-MM-DD HH:mm:ss'))))), (0, _jsx3.default)('div', {
            className: 'listing-item odd'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'info'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'wrapper'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'data'
          }, void 0, __('info_ctime_label')))), (0, _jsx3.default)('div', {
            className: 'name'
          }, void 0, (0, _jsx3.default)('div', {
            className: 'fit-width fixed-margin'
          }, void 0, (0, _jsx3.default)('strong', {}, void 0, (0, _momentTimezone2.default)(this.props.info.get('ctime')).format('YYYY-MM-DD HH:mm:ss')))))), _ref2)));
          bodyClass = 'body';
        }
      }

      return (0, _jsx3.default)('div', {
        className: bodyClass
      }, void 0, body);
    }
  }]);
  return InfoView;
}(_react2.default.PureComponent);

InfoView.defaultProps = {
  info: (0, _immutable.Map)({})
};
exports.default = InfoView;

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = require("moment-timezone");

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(12);

var _pane = __webpack_require__(28);

var _size = __webpack_require__(37);

var _Pane = __webpack_require__(44);

var _Pane2 = _interopRequireDefault(_Pane);

var _commands = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  var selectedId = void 0;
  if (state.getIn(['leftPane', 'share']) && state.getIn(['leftPane', 'name'])) selectedId = state.getIn(['leftPane', 'share']) + ':' + state.getIn(['leftPane', 'path']);

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
    isOtherVisible: state.getIn(['leftPane', 'isVisible'])
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onPaneClick: function onPaneClick() {
      return dispatch((0, _pane.setActivePane)('RIGHT'));
    },
    onSetShare: function onSetShare(share) {
      return dispatch((0, _pane.paneCD)('RIGHT', share, '/'));
    },
    onSetSort: function onSetSort(field, dir) {
      return dispatch((0, _pane.paneSort)('RIGHT', field, dir));
    },
    onChangeDirectory: function onChangeDirectory(directory) {
      return dispatch((0, _pane.paneCD)('RIGHT', null, directory === '/' ? '/' : directory + '/'));
    },
    onNodeClick: function onNodeClick(node) {
      return dispatch((0, _pane.paneSelect)('RIGHT', node));
    },
    onNodeShiftClick: function onNodeShiftClick(node) {
      return dispatch((0, _pane.paneSelectRange)('RIGHT', node));
    },
    onNodeControlClick: function onNodeControlClick(node) {
      return dispatch((0, _pane.paneToggleSelect)('RIGHT', node));
    },
    onSizeClick: function onSizeClick(share, path) {
      return dispatch((0, _size.loadSize)(share, path));
    },
    onToggleOther: function onToggleOther() {
      return dispatch((0, _pane.togglePane)('LEFT'));
    },
    onSetMode: function onSetMode(mode) {
      return dispatch((0, _pane.setPaneMode)('RIGHT', mode));
    },
    onCopyClick: function onCopyClick(name) {
      return dispatch((0, _commands.fastCopy)('RIGHT', name));
    },
    onMoveClick: function onMoveClick(name) {
      return dispatch((0, _commands.fastMove)('RIGHT', name));
    },
    onDeleteClick: function onDeleteClick(name) {
      return dispatch((0, _commands.fastDel)('RIGHT', name));
    }
  };
};

var RightPane = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Pane2.default);

exports.default = RightPane;

/***/ })
/******/ ]);