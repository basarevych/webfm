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
/******/ 	return __webpack_require__(__webpack_require__.s = 45);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/jsx");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/keys");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/get-iterator");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-icons/lib/fa");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/defineProperty");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signIn = exports.signOut = exports.updateStatus = exports.setUser = undefined;

var _stringify = __webpack_require__(38);

var _stringify2 = _interopRequireDefault(_stringify);

var _regenerator = __webpack_require__(8);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(18);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(9);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _package = __webpack_require__(69);

var _package2 = _interopRequireDefault(_package);

var _i18n = __webpack_require__(70);

var _i18n2 = _interopRequireDefault(_i18n);

var _app = __webpack_require__(39);

var _pane = __webpack_require__(27);

var _signInDialog = __webpack_require__(31);

var _navbar = __webpack_require__(30);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setUser = exports.setUser = function setUser(isAuthorized, login, locale, shares) {
  return {
    type: 'SET_USER',
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
                              var _getState, user;

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
                                      _getState = getState(), user = _getState.user;


                                      if (_i18n2.default.getLocale() !== user.locale) _i18n2.default.setLocale(user.locale);
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
      var _getState2, app;

      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _getState2 = getState(), app = _getState2.app;
              _context4.next = 3;
              return new _promise2.default(function (resolve) {
                io.socket.post('/auth/sign-out', { _csrf: app.csrf }, function () {
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
      var _getState3, app, signInDialog;

      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _getState3 = getState(), app = _getState3.app, signInDialog = _getState3.signInDialog;

              if (!(signInDialog.submittedAt >= when)) {
                _context6.next = 3;
                break;
              }

              return _context6.abrupt('return');

            case 3:
              if (validate) {
                _context6.next = 6;
                break;
              }

              _context6.next = 6;
              return dispatch((0, _signInDialog.lockSignInDialog)());

            case 6:
              _context6.next = 8;
              return dispatch((0, _signInDialog.submitSignInDialog)(when));

            case 8:
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
                              login: signInDialog.values.login,
                              password: signInDialog.values.password,
                              _validate: validate,
                              _csrf: app.csrf
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
                            values: data.values,
                            messages: data.messages,
                            errors: data.errors
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

            case 9:
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
/* 18 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/promise");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _keys = __webpack_require__(10);

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactTransitionGroup = __webpack_require__(26);

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

      var codes = (0, _keys2.default)(this.props.messages || {});
      return (0, _jsx3.default)(_reactTransitionGroup.TransitionGroup, {}, void 0, codes.map(function (code) {
        return (0, _jsx3.default)(_Fade2.default, {}, code, (0, _jsx3.default)('div', {
          className: mapTypeToClass(_this2.props.messages[code].type),
          role: 'alert',
          dangerouslySetInnerHTML: { __html: _this2.props.messages[code].message }
        }));
      }));
    }
  }]);
  return FormMessages;
}(_react2.default.PureComponent);

exports.default = FormMessages;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-scroll-box");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _reactDom = __webpack_require__(81);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.find = exports.fastDel = exports.del = exports.fastMove = exports.move = exports.fastCopy = exports.copy = exports.rename = exports.mkdir = undefined;

var _getIterator2 = __webpack_require__(13);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _keys = __webpack_require__(10);

var _keys2 = _interopRequireDefault(_keys);

var _regenerator = __webpack_require__(8);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = __webpack_require__(38);

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = __webpack_require__(18);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(9);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _navbar = __webpack_require__(30);

var _mkdirDialog = __webpack_require__(32);

var _renameDialog = __webpack_require__(33);

var _copyDialog = __webpack_require__(34);

var _moveDialog = __webpack_require__(35);

var _deleteDialog = __webpack_require__(36);

var _failureDialog = __webpack_require__(42);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mkdir = exports.mkdir = function mkdir(when, validate) {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dispatch, getState) {
      var _getState, app, mkdirDialog;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _getState = getState(), app = _getState.app, mkdirDialog = _getState.mkdirDialog;

              if (!(mkdirDialog.submittedAt >= when)) {
                _context2.next = 3;
                break;
              }

              return _context2.abrupt('return');

            case 3:
              if (validate) {
                _context2.next = 6;
                break;
              }

              _context2.next = 6;
              return dispatch((0, _mkdirDialog.lockMkdirDialog)());

            case 6:
              _context2.next = 8;
              return dispatch((0, _mkdirDialog.submitMkdirDialog)(when));

            case 8:
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
                              share: mkdirDialog.values.share,
                              directory: mkdirDialog.values.directory,
                              name: mkdirDialog.values.name,
                              _validate: validate,
                              _csrf: app.csrf
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
                            values: data.values,
                            messages: data.messages,
                            errors: data.errors
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

            case 9:
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
      var _getState2, app, renameDialog;

      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _getState2 = getState(), app = _getState2.app, renameDialog = _getState2.renameDialog;

              if (!(renameDialog.submittedAt >= when)) {
                _context4.next = 3;
                break;
              }

              return _context4.abrupt('return');

            case 3:
              if (validate) {
                _context4.next = 6;
                break;
              }

              _context4.next = 6;
              return dispatch((0, _renameDialog.lockRenameDialog)());

            case 6:
              _context4.next = 8;
              return dispatch((0, _renameDialog.submitRenameDialog)(when));

            case 8:
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
                              share: renameDialog.values.share,
                              directory: renameDialog.values.directory,
                              name: renameDialog.values.name,
                              newName: renameDialog.values.newName,
                              _validate: validate,
                              _csrf: app.csrf
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
                            values: data.values,
                            messages: data.messages,
                            errors: data.errors
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

            case 9:
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
      var _getState3, app, copyDialog;

      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _getState3 = getState(), app = _getState3.app, copyDialog = _getState3.copyDialog;

              if (!(copyDialog.submittedAt >= when)) {
                _context6.next = 3;
                break;
              }

              return _context6.abrupt('return');

            case 3:
              if (validate) {
                _context6.next = 6;
                break;
              }

              _context6.next = 6;
              return dispatch((0, _copyDialog.lockCopyDialog)());

            case 6:
              _context6.next = 8;
              return dispatch((0, _copyDialog.submitCopyDialog)(when));

            case 8:
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
                              srcShare: copyDialog.values.srcShare,
                              srcDirectory: copyDialog.values.srcDirectory,
                              srcName: copyDialog.values.srcName,
                              dstShare: copyDialog.values.dstShare,
                              dstDirectory: copyDialog.values.dstDirectory,
                              _validate: validate,
                              _csrf: app.csrf
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
                            values: data.values,
                            messages: data.messages,
                            errors: data.errors
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

            case 9:
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
      var _getState4, app, leftPane, rightPane;

      return _regenerator2.default.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _getState4 = getState(), app = _getState4.app, leftPane = _getState4.leftPane, rightPane = _getState4.rightPane;
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
                              srcShare: pane === 'LEFT' ? leftPane.share : rightPane.share,
                              srcDirectory: pane === 'LEFT' ? leftPane.directory : rightPane.directory,
                              srcName: name,
                              dstShare: pane === 'LEFT' ? rightPane.share : leftPane.share,
                              dstDirectory: pane === 'LEFT' ? rightPane.directory : leftPane.directory,
                              _fast: true,
                              _csrf: app.csrf
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

            case 2:
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
      var _getState5, app, moveDialog;

      return _regenerator2.default.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _getState5 = getState(), app = _getState5.app, moveDialog = _getState5.moveDialog;

              if (!(moveDialog.submittedAt >= when)) {
                _context10.next = 3;
                break;
              }

              return _context10.abrupt('return');

            case 3:
              if (validate) {
                _context10.next = 6;
                break;
              }

              _context10.next = 6;
              return dispatch((0, _moveDialog.lockMoveDialog)());

            case 6:
              _context10.next = 8;
              return dispatch((0, _moveDialog.submitMoveDialog)(when));

            case 8:
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
                              srcShare: moveDialog.values.srcShare,
                              srcDirectory: moveDialog.values.srcDirectory,
                              srcName: moveDialog.values.srcName,
                              dstShare: moveDialog.values.dstShare,
                              dstDirectory: moveDialog.values.dstDirectory,
                              _validate: validate,
                              _csrf: app.csrf
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
                            values: data.values,
                            messages: data.messages,
                            errors: data.errors
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

            case 9:
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
      var _getState6, app, leftPane, rightPane;

      return _regenerator2.default.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              _getState6 = getState(), app = _getState6.app, leftPane = _getState6.leftPane, rightPane = _getState6.rightPane;
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
                              srcShare: pane === 'LEFT' ? leftPane.share : rightPane.share,
                              srcDirectory: pane === 'LEFT' ? leftPane.directory : rightPane.directory,
                              srcName: name,
                              dstShare: pane === 'LEFT' ? rightPane.share : leftPane.share,
                              dstDirectory: pane === 'LEFT' ? rightPane.directory : leftPane.directory,
                              _fast: true,
                              _csrf: app.csrf
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

            case 2:
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
      var _getState7, app, deleteDialog;

      return _regenerator2.default.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              _getState7 = getState(), app = _getState7.app, deleteDialog = _getState7.deleteDialog;

              if (!(deleteDialog.submittedAt >= when)) {
                _context14.next = 3;
                break;
              }

              return _context14.abrupt('return');

            case 3:
              if (validate) {
                _context14.next = 6;
                break;
              }

              _context14.next = 6;
              return dispatch((0, _deleteDialog.lockDeleteDialog)());

            case 6:
              _context14.next = 8;
              return dispatch((0, _deleteDialog.submitDeleteDialog)(when));

            case 8:
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
                              share: deleteDialog.values.share,
                              directory: deleteDialog.values.directory,
                              name: deleteDialog.values.name,
                              _validate: validate,
                              _csrf: app.csrf
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
                            values: data.values,
                            messages: data.messages,
                            errors: data.errors
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

            case 9:
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
      var _getState8, app, leftPane, rightPane;

      return _regenerator2.default.wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              _getState8 = getState(), app = _getState8.app, leftPane = _getState8.leftPane, rightPane = _getState8.rightPane;
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
                              share: pane === 'LEFT' ? leftPane.share : rightPane.share,
                              directory: pane === 'LEFT' ? leftPane.directory : rightPane.directory,
                              name: name,
                              _fast: true,
                              _csrf: app.csrf
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

            case 2:
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
      var _getState9, app, copyDialog, moveDialog, deleteDialog, share, directory, name;

      return _regenerator2.default.wrap(function _callee18$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              _getState9 = getState(), app = _getState9.app, copyDialog = _getState9.copyDialog, moveDialog = _getState9.moveDialog, deleteDialog = _getState9.deleteDialog;

              if (!(what === 'COPY' && copyDialog.locked)) {
                _context18.next = 3;
                break;
              }

              return _context18.abrupt('return');

            case 3:
              if (!(what === 'MOVE' && moveDialog.locked)) {
                _context18.next = 5;
                break;
              }

              return _context18.abrupt('return');

            case 5:
              if (!(what === 'DELETE' && deleteDialog.locked)) {
                _context18.next = 7;
                break;
              }

              return _context18.abrupt('return');

            case 7:
              share = void 0;
              directory = void 0;
              name = void 0;
              _context18.t0 = what;
              _context18.next = _context18.t0 === 'COPY' ? 13 : _context18.t0 === 'MOVE' ? 28 : _context18.t0 === 'DELETE' ? 43 : 58;
              break;

            case 13:
              share = copyDialog.values.srcShare;
              directory = copyDialog.values.srcDirectory;
              name = copyDialog.values.srcName;
              _context18.next = 18;
              return dispatch((0, _copyDialog.lockCopyDialog)());

            case 18:
              _context18.next = 20;
              return dispatch(copy(Date.now(), 'srcName'));

            case 20:
              copyDialog = getState().copyDialog;

              if (!(copyDialog.errors.srcName && (0, _keys2.default)(copyDialog.errors.srcName).length)) {
                _context18.next = 25;
                break;
              }

              _context18.next = 24;
              return dispatch((0, _copyDialog.unlockCopyDialog)());

            case 24:
              return _context18.abrupt('return', _context18.sent);

            case 25:
              _context18.next = 27;
              return dispatch((0, _copyDialog.startCopyDialogFind)());

            case 27:
              return _context18.abrupt('break', 58);

            case 28:
              share = moveDialog.values.srcShare;
              directory = moveDialog.values.srcDirectory;
              name = moveDialog.values.srcName;
              _context18.next = 33;
              return dispatch((0, _moveDialog.lockMoveDialog)());

            case 33:
              _context18.next = 35;
              return dispatch(move(Date.now(), 'srcName'));

            case 35:
              moveDialog = getState().moveDialog;

              if (!(moveDialog.errors.srcName && (0, _keys2.default)(moveDialog.errors.srcName).length)) {
                _context18.next = 40;
                break;
              }

              _context18.next = 39;
              return dispatch((0, _moveDialog.unlockMoveDialog)());

            case 39:
              return _context18.abrupt('return', _context18.sent);

            case 40:
              _context18.next = 42;
              return dispatch((0, _moveDialog.startMoveDialogFind)());

            case 42:
              return _context18.abrupt('break', 58);

            case 43:
              share = deleteDialog.values.share;
              directory = deleteDialog.values.directory;
              name = deleteDialog.values.name;
              _context18.next = 48;
              return dispatch((0, _deleteDialog.lockDeleteDialog)());

            case 48:
              _context18.next = 50;
              return dispatch(copy(Date.now(), 'name'));

            case 50:
              deleteDialog = getState().deleteDialog;

              if (!(deleteDialog.errors.name && (0, _keys2.default)(deleteDialog.errors.name).length)) {
                _context18.next = 55;
                break;
              }

              _context18.next = 54;
              return dispatch((0, _deleteDialog.unlockDeleteDialog)());

            case 54:
              return _context18.abrupt('return', _context18.sent);

            case 55:
              _context18.next = 57;
              return dispatch((0, _deleteDialog.startDeleteDialogFind)());

            case 57:
              return _context18.abrupt('break', 58);

            case 58:
              return _context18.abrupt('return', new _promise2.default(function () {
                var _ref18 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee17(resolve) {
                  var response, data, directories, files, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, node, nodes;

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
                              _csrf: app.csrf
                            })
                          });

                        case 3:
                          response = _context17.sent;

                          if (!(response.status === 200)) {
                            _context17.next = 51;
                            break;
                          }

                          _context17.next = 7;
                          return response.json();

                        case 7:
                          data = _context17.sent;
                          directories = [];
                          files = [];
                          _iteratorNormalCompletion = true;
                          _didIteratorError = false;
                          _iteratorError = undefined;
                          _context17.prev = 13;

                          for (_iterator = (0, _getIterator3.default)(data.nodes); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            node = _step.value;

                            if (node.isDirectory) directories.push(node);else files.push(node);
                          }
                          _context17.next = 21;
                          break;

                        case 17:
                          _context17.prev = 17;
                          _context17.t0 = _context17['catch'](13);
                          _didIteratorError = true;
                          _iteratorError = _context17.t0;

                        case 21:
                          _context17.prev = 21;
                          _context17.prev = 22;

                          if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                          }

                        case 24:
                          _context17.prev = 24;

                          if (!_didIteratorError) {
                            _context17.next = 27;
                            break;
                          }

                          throw _iteratorError;

                        case 27:
                          return _context17.finish(24);

                        case 28:
                          return _context17.finish(21);

                        case 29:
                          directories.sort(function (a, b) {
                            return a.name.localeCompare(b.name);
                          });
                          files.sort(function (a, b) {
                            return a.name.localeCompare(b.name);
                          });
                          nodes = directories.concat(files);
                          _context17.t1 = what;
                          _context17.next = _context17.t1 === 'COPY' ? 35 : _context17.t1 === 'MOVE' ? 40 : _context17.t1 === 'DELETE' ? 45 : 50;
                          break;

                        case 35:
                          _context17.next = 37;
                          return dispatch((0, _copyDialog.stopCopyDialogFind)(nodes));

                        case 37:
                          _context17.next = 39;
                          return dispatch((0, _copyDialog.unlockCopyDialog)());

                        case 39:
                          return _context17.abrupt('break', 50);

                        case 40:
                          _context17.next = 42;
                          return dispatch((0, _moveDialog.stopMoveDialogFind)(nodes));

                        case 42:
                          _context17.next = 44;
                          return dispatch((0, _moveDialog.unlockMoveDialog)());

                        case 44:
                          return _context17.abrupt('break', 50);

                        case 45:
                          _context17.next = 47;
                          return dispatch((0, _deleteDialog.stopDeleteDialogFind)(nodes));

                        case 47:
                          _context17.next = 49;
                          return dispatch((0, _deleteDialog.unlockDeleteDialog)());

                        case 49:
                          return _context17.abrupt('break', 50);

                        case 50:
                          return _context17.abrupt('return', resolve());

                        case 51:
                          _context17.next = 56;
                          break;

                        case 53:
                          _context17.prev = 53;
                          _context17.t2 = _context17['catch'](0);

                          console.error(_context17.t2);

                        case 56:
                          _context17.t3 = what;
                          _context17.next = _context17.t3 === 'COPY' ? 59 : _context17.t3 === 'MOVE' ? 64 : _context17.t3 === 'DELETE' ? 69 : 74;
                          break;

                        case 59:
                          _context17.next = 61;
                          return dispatch((0, _copyDialog.stopCopyDialogFind)(false));

                        case 61:
                          _context17.next = 63;
                          return dispatch((0, _copyDialog.unlockCopyDialog)());

                        case 63:
                          return _context17.abrupt('break', 74);

                        case 64:
                          _context17.next = 66;
                          return dispatch((0, _moveDialog.stopMoveDialogFind)(false));

                        case 66:
                          _context17.next = 68;
                          return dispatch((0, _moveDialog.unlockMoveDialog)());

                        case 68:
                          return _context17.abrupt('break', 74);

                        case 69:
                          _context17.next = 71;
                          return dispatch((0, _deleteDialog.stopDeleteDialogFind)(false));

                        case 71:
                          _context17.next = 73;
                          return dispatch((0, _deleteDialog.unlockDeleteDialog)());

                        case 73:
                          return _context17.abrupt('break', 74);

                        case 74:

                          resolve();

                        case 75:
                        case 'end':
                          return _context17.stop();
                      }
                    }
                  }, _callee17, undefined, [[0, 53], [13, 17, 21, 29], [22,, 24, 28]]);
                }));

                return function (_x27) {
                  return _ref18.apply(this, arguments);
                };
              }()));

            case 59:
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
/* 23 */
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _keys = __webpack_require__(10);

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactstrap = __webpack_require__(14);

var _reactTransitionGroup = __webpack_require__(26);

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

      var codes = (0, _keys2.default)(this.props.errors || {});
      return (0, _jsx3.default)(_reactstrap.FormFeedback, {}, void 0, (0, _jsx3.default)(_reactTransitionGroup.TransitionGroup, {}, void 0, codes.map(function (code) {
        return (0, _jsx3.default)(_Fade2.default, {}, code, (0, _jsx3.default)('div', {
          dangerouslySetInnerHTML: { __html: _this2.props.errors[code].message }
        }));
      })));
    }
  }]);
  return FieldErrors;
}(_react2.default.PureComponent);

exports.default = FieldErrors;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initPanes = exports.paneCD = exports.paneUpdate = exports.paneToggleSelect = exports.paneSelectRange = exports.paneSelect = exports.paneDeselect = exports.paneSort = exports.setPaneIndex = exports.setPanePath = exports.setPaneShare = exports.setPaneMode = exports.stopLoadingPane = exports.startLoadingPane = exports.togglePane = exports.hidePane = exports.showPane = exports.setActivePane = undefined;

var _promise = __webpack_require__(18);

var _promise2 = _interopRequireDefault(_promise);

var _getIterator2 = __webpack_require__(13);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _regenerator = __webpack_require__(8);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(9);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _reactRouterRedux = __webpack_require__(28);

var _list = __webpack_require__(40);

var _content = __webpack_require__(74);

var _info = __webpack_require__(75);

var _user = __webpack_require__(17);

var _path = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setActivePane = exports.setActivePane = function setActivePane(pane) {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch, getState) {
      var _getState, user, leftPane, rightPane, share, path;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _getState = getState(), user = _getState.user, leftPane = _getState.leftPane, rightPane = _getState.rightPane;

              if (!(pane === 'LEFT' && leftPane.isActive)) {
                _context.next = 3;
                break;
              }

              return _context.abrupt('return');

            case 3:
              if (!(pane === 'RIGHT' && rightPane.isActive)) {
                _context.next = 5;
                break;
              }

              return _context.abrupt('return');

            case 5:
              _context.next = 7;
              return dispatch({
                type: 'DEACTIVATE_' + (pane === 'LEFT' ? 'RIGHT' : 'LEFT') + '_PANE'
              });

            case 7:
              _context.next = 9;
              return dispatch({
                type: 'ACTIVATE_' + pane + '_PANE'
              });

            case 9:
              share = pane === 'LEFT' ? leftPane.share : rightPane.share;
              path = pane === 'LEFT' ? leftPane.path : rightPane.path;

              if (!user.isAuthorized) {
                _context.next = 14;
                break;
              }

              _context.next = 14;
              return dispatch((0, _reactRouterRedux.push)('/~' + share + ':' + path));

            case 14:
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
    type: 'SHOW_' + pane + '_PANE'
  };
};

var hidePane = exports.hidePane = function hidePane(pane) {
  return {
    type: 'HIDE_' + pane + '_PANE'
  };
};

var togglePane = exports.togglePane = function togglePane(pane) {
  return function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dispatch, getState) {
      var _getState2, leftPane, rightPane, isVisible;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _getState2 = getState(), leftPane = _getState2.leftPane, rightPane = _getState2.rightPane;
              isVisible = pane === 'LEFT' ? leftPane.isVisible : rightPane.isVisible;

              dispatch(isVisible ? hidePane(pane) : showPane(pane));
              if (isVisible) dispatch(setActivePane(pane === 'LEFT' ? 'RIGHT' : 'LEFT'));

            case 4:
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
    type: 'START_' + pane + '_PANE_LOADING',
    timestamp: timestamp
  };
};

var stopLoadingPane = exports.stopLoadingPane = function stopLoadingPane(pane, timestamp) {
  var isForbidden = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  return {
    type: 'STOP_' + pane + '_PANE_LOADING',
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
                type: 'SET_' + pane + '_PANE_MODE',
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
    type: 'SET_' + pane + '_PANE_SHARE',
    share: share
  };
};

var setPanePath = exports.setPanePath = function setPanePath(pane, path) {
  var directory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var name = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

  return {
    type: 'SET_' + pane + '_PANE_PATH',
    path: path,
    directory: directory,
    name: name
  };
};

var setPaneIndex = exports.setPaneIndex = function setPaneIndex(pane, index) {
  return function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(dispatch, getState) {
      var _getState3, leftPane, rightPane, share, path, directory, name, item, _item;

      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _getState3 = getState(), leftPane = _getState3.leftPane, rightPane = _getState3.rightPane;
              share = void 0;
              path = void 0;
              directory = void 0;
              name = void 0;


              if (pane === 'LEFT') {
                if (leftPane.isActive) share = leftPane.share;

                if (index === -1) {
                  if (leftPane.name !== '') {
                    path = leftPane.directory === '/' ? '/' : leftPane.directory + '/';
                    directory = leftPane.directory;
                    name = '';
                  }
                } else {
                  item = leftPane.list[index];

                  if (item) {
                    path = (0, _path.join)(leftPane.directory, item.name);
                    directory = leftPane.directory;
                    name = item.name;
                  }
                }
              } else {
                if (rightPane.isActive) share = rightPane.share;

                if (index === -1) {
                  if (rightPane.name !== '') {
                    path = rightPane.directory === '/' ? '/' : rightPane.directory + '/';
                    directory = rightPane.directory;
                    name = '';
                  }
                } else {
                  _item = rightPane.list[index];

                  if (_item) {
                    path = (0, _path.join)(rightPane.directory, _item.name);
                    directory = rightPane.directory;
                    name = _item.name;
                  }
                }
              }

              if (!(path && directory && name)) {
                _context4.next = 12;
                break;
              }

              _context4.next = 9;
              return dispatch(setPanePath(pane, path, directory, name));

            case 9:
              if (!share) {
                _context4.next = 12;
                break;
              }

              _context4.next = 12;
              return dispatch((0, _reactRouterRedux.push)('/~' + share + ':' + path));

            case 12:
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

    var id = void 0;
    if (pane === 'LEFT' && state.leftPane.share && state.leftPane.directory) id = state.leftPane.share + ':' + state.leftPane.directory;else if (pane === 'RIGHT' && state.rightPane.share && state.rightPane.directory) id = state.rightPane.share + ':' + state.rightPane.directory;

    if (field && dir) {
      dispatch({
        type: 'SET_' + pane + '_PANE_SORT',
        field: field,
        dir: dir
      });
    } else {
      field = pane === 'LEFT' ? state.leftPane.sortField : state.rightPane.sortField;
      dir = pane === 'LEFT' ? state.leftPane.sortDir : state.rightPane.sortDir;
    }

    if (!id) {
      return dispatch({
        type: 'SET_' + pane + '_PANE_LIST',
        list: [],
        selectedIndexes: []
      });
    }

    var selectedIds = [];
    var sorted = pane === 'LEFT' ? state.leftPane.list : state.rightPane.list;
    var selected = pane === 'LEFT' ? state.leftPane.selectedIndexes : state.rightPane.selectedIndexes;
    for (var i = 0; i < sorted.length; i++) {
      if (selected.includes(i)) selectedIds.push(sorted[i].id);
    }

    var parent = null;
    var directories = [];
    var files = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = (0, _getIterator3.default)(state.lists[id] || []), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;

        if (item.isDirectory) {
          if (item.name === '..') parent = item;else directories.push(item);
        } else {
          files.push(item);
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
      for (var _i = 0; _i < list.length; _i++) {
        if (selectedIds.includes(list[_i].id)) selectedIndexes.push(_i);
      }
    }

    dispatch({
      type: 'SET_' + pane + '_PANE_LIST',
      list: list,
      selectedIndexes: selectedIndexes
    });
  };
};

var paneDeselect = exports.paneDeselect = function paneDeselect(pane) {
  return {
    type: 'SET_' + pane + '_PANE_SELECTION',
    selectedIndexes: []
  };
};

var paneSelect = exports.paneSelect = function paneSelect(pane, index) {
  return function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(dispatch, getState) {
      var _getState4, leftPane, rightPane, list, i;

      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _getState4 = getState(), leftPane = _getState4.leftPane, rightPane = _getState4.rightPane;

              if (!_.isUndefined(index)) {
                _context5.next = 14;
                break;
              }

              list = pane === 'LEFT' ? leftPane.list : rightPane.list;

              index = -1;
              i = 0;

            case 5:
              if (!(i < list.length)) {
                _context5.next = 12;
                break;
              }

              if (!(list[i].name === (pane === 'LEFT' ? leftPane.name : rightPane.name))) {
                _context5.next = 9;
                break;
              }

              index = i;
              return _context5.abrupt('break', 12);

            case 9:
              i++;
              _context5.next = 5;
              break;

            case 12:
              _context5.next = 16;
              break;

            case 14:
              _context5.next = 16;
              return dispatch(setPaneIndex(pane, index));

            case 16:

              dispatch({
                type: 'SET_' + pane + '_PANE_SELECTION',
                selectedIndexes: index === -1 ? [] : [index]
              });

              if (!(index === -1)) {
                _context5.next = 19;
                break;
              }

              return _context5.abrupt('return');

            case 19:

              if (pane === 'LEFT' && rightPane.mode === 'CONTENTS' || pane === 'RIGHT' && leftPane.mode === 'CONTENTS') dispatch((0, _content.loadContent)(pane));
              if (pane === 'LEFT' && rightPane.mode === 'INFO' || pane === 'RIGHT' && leftPane.mode === 'INFO') dispatch((0, _info.loadInfo)(pane));

            case 21:
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
      var _getState5, leftPane, rightPane, selectedIndexes, length, min, max, prev, i, next, _i2, _i3;

      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _getState5 = getState(), leftPane = _getState5.leftPane, rightPane = _getState5.rightPane;
              selectedIndexes = pane === 'LEFT' ? leftPane.selectedIndexes.slice() : rightPane.selectedIndexes.slice();
              length = pane === 'LEFT' ? leftPane.list.length : rightPane.list.length;
              min = -1;
              max = -1;
              prev = -1;
              i = index - 1;

            case 7:
              if (!(i >= 0)) {
                _context6.next = 14;
                break;
              }

              if (!selectedIndexes.includes(i)) {
                _context6.next = 11;
                break;
              }

              prev = i;
              return _context6.abrupt('break', 14);

            case 11:
              i--;
              _context6.next = 7;
              break;

            case 14:
              if (!(prev === -1)) {
                _context6.next = 27;
                break;
              }

              next = -1;
              _i2 = index + 1;

            case 17:
              if (!(_i2 < length)) {
                _context6.next = 24;
                break;
              }

              if (!selectedIndexes.includes(_i2)) {
                _context6.next = 21;
                break;
              }

              next = _i2;
              return _context6.abrupt('break', 24);

            case 21:
              _i2++;
              _context6.next = 17;
              break;

            case 24:
              if (next !== -1) {
                min = index;
                max = next - 1;
              }
              _context6.next = 29;
              break;

            case 27:
              min = prev + 1;
              max = index;

            case 29:
              if (!(min !== -1 && max !== -1)) {
                _context6.next = 36;
                break;
              }

              for (_i3 = min; _i3 <= max; _i3++) {
                selectedIndexes.push(_i3);
              }dispatch({
                type: 'SET_' + pane + '_PANE_SELECTION',
                selectedIndexes: selectedIndexes
              });

              _context6.next = 34;
              return dispatch(setPaneIndex(pane, index));

            case 34:

              if (pane === 'LEFT' && rightPane.mode === 'CONTENTS' || pane === 'RIGHT' && leftPane.mode === 'CONTENTS') dispatch((0, _content.loadContent)(pane));
              if (pane === 'LEFT' && rightPane.mode === 'INFO' || pane === 'RIGHT' && leftPane.mode === 'INFO') dispatch((0, _info.loadInfo)(pane));

            case 36:
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
      var _getState6, leftPane, rightPane, selectedIndexes, indexOfIndex;

      return _regenerator2.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _getState6 = getState(), leftPane = _getState6.leftPane, rightPane = _getState6.rightPane;
              selectedIndexes = pane === 'LEFT' ? leftPane.selectedIndexes.slice() : rightPane.selectedIndexes.slice();
              indexOfIndex = selectedIndexes.indexOf(index);

              if (!(indexOfIndex === -1)) {
                _context7.next = 9;
                break;
              }

              selectedIndexes.push(index);
              _context7.next = 7;
              return dispatch(setPaneIndex(pane, index));

            case 7:
              _context7.next = 12;
              break;

            case 9:
              selectedIndexes.splice(indexOfIndex, 1);
              _context7.next = 12;
              return dispatch(setPaneIndex(pane, -1));

            case 12:

              dispatch({
                type: 'SET_' + pane + '_PANE_SELECTION',
                selectedIndexes: selectedIndexes
              });

              if (pane === 'LEFT' && rightPane.mode === 'CONTENTS' || pane === 'RIGHT' && leftPane.mode === 'CONTENTS') dispatch((0, _content.loadContent)(pane));
              if (pane === 'LEFT' && rightPane.mode === 'INFO' || pane === 'RIGHT' && leftPane.mode === 'INFO') dispatch((0, _info.loadInfo)(pane));

            case 15:
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
      var _getState7, leftPane, rightPane, now, left, right;

      return _regenerator2.default.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _getState7 = getState(), leftPane = _getState7.leftPane, rightPane = _getState7.rightPane;
              now = Date.now();
              _context10.next = 4;
              return dispatch((0, _list.setList)(data.share + ':' + data.directory, data.list || []));

            case 4:
              left = new _promise2.default(function () {
                var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(resolve, reject) {
                  var found, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, item, newPath;

                  return _regenerator2.default.wrap(function _callee8$(_context8) {
                    while (1) {
                      switch (_context8.prev = _context8.next) {
                        case 0:
                          _context8.prev = 0;

                          if (!(leftPane.share === data.share && leftPane.directory === data.directory)) {
                            _context8.next = 48;
                            break;
                          }

                          _context8.next = 4;
                          return dispatch(paneDeselect('LEFT'));

                        case 4:
                          _context8.next = 6;
                          return dispatch(paneSort('LEFT'));

                        case 6:
                          if (!leftPane.name) {
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

                          if (!(item.name === leftPane.name)) {
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
                          if (!leftPane.isActive) {
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

                          if (!(rightPane.share === data.share && rightPane.directory === data.directory)) {
                            _context9.next = 48;
                            break;
                          }

                          _context9.next = 4;
                          return dispatch(paneDeselect('RIGHT'));

                        case 4:
                          _context9.next = 6;
                          return dispatch(paneSort('RIGHT'));

                        case 6:
                          if (!rightPane.name) {
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

                          if (!(item.name === rightPane.name)) {
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
                          if (!rightPane.isActive) {
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
              _context10.next = 8;
              return _promise2.default.all([left, right]);

            case 8:
              _context10.next = 10;
              return dispatch((0, _list.clearLists)());

            case 10:
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
      var _getState8, app, user, leftPane, rightPane, params, start;

      return _regenerator2.default.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              _getState8 = getState(), app = _getState8.app, user = _getState8.user, leftPane = _getState8.leftPane, rightPane = _getState8.rightPane;

              if (user.isAuthorized) {
                _context12.next = 3;
                break;
              }

              return _context12.abrupt('return');

            case 3:

              if (!share) share = pane !== 'RIGHT' ? leftPane.share : rightPane.share;
              if (!path) path = pane !== 'RIGHT' ? leftPane.path : rightPane.path;

              if (!(pane === 'LEFT' && leftPane.share === share && leftPane.path === path)) {
                _context12.next = 7;
                break;
              }

              return _context12.abrupt('return');

            case 7:
              if (!(pane === 'RIGHT' && rightPane.share === share && rightPane.path === path)) {
                _context12.next = 9;
                break;
              }

              return _context12.abrupt('return');

            case 9:
              if (!(pane === 'BOTH' && leftPane.share === rightPane.share === share && leftPane.path === rightPane.path === path)) {
                _context12.next = 11;
                break;
              }

              return _context12.abrupt('return');

            case 11:
              params = {
                pane: pane,
                share: share,
                path: path,
                _csrf: app.csrf
              };
              start = Date.now();

              if (!((pane === 'LEFT' || pane === 'BOTH') && leftPane.timestamp < start)) {
                _context12.next = 16;
                break;
              }

              _context12.next = 16;
              return dispatch(startLoadingPane('LEFT', start));

            case 16:
              if (!((pane === 'RIGHT' || pane === 'BOTH') && rightPane.timestamp < start)) {
                _context12.next = 19;
                break;
              }

              _context12.next = 19;
              return dispatch(startLoadingPane('RIGHT', start));

            case 19:
              return _context12.abrupt('return', new _promise2.default(function (resolve, reject) {
                io.socket.post('/pane/cd', params, function () {
                  var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee11(data, response) {
                    var finish, _getState9, _leftPane, _rightPane;

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
                            _getState9 = getState(), _leftPane = _getState9.leftPane, _rightPane = _getState9.rightPane;

                            if (!data.success) {
                              _context11.next = 32;
                              break;
                            }

                            if (!((pane === 'LEFT' || pane === 'BOTH') && _leftPane.timestamp === start)) {
                              _context11.next = 20;
                              break;
                            }

                            _context11.next = 15;
                            return dispatch(setPaneShare('LEFT', data.share));

                          case 15:
                            _context11.next = 17;
                            return dispatch(setPanePath('LEFT', data.path, data.directory, data.name));

                          case 17:
                            if (!_leftPane.isActive) {
                              _context11.next = 20;
                              break;
                            }

                            _context11.next = 20;
                            return dispatch((0, _reactRouterRedux.push)('/~' + data.share + ':' + data.path));

                          case 20:
                            if (!((pane === 'RIGHT' || pane === 'BOTH') && _rightPane.timestamp === start)) {
                              _context11.next = 28;
                              break;
                            }

                            _context11.next = 23;
                            return dispatch(setPaneShare('RIGHT', data.share));

                          case 23:
                            _context11.next = 25;
                            return dispatch(setPanePath('RIGHT', data.path, data.directory, data.name));

                          case 25:
                            if (!_rightPane.isActive) {
                              _context11.next = 28;
                              break;
                            }

                            _context11.next = 28;
                            return dispatch((0, _reactRouterRedux.push)('/~' + data.share + ':' + data.path));

                          case 28:
                            _context11.next = 30;
                            return dispatch(paneUpdate(data));

                          case 30:
                            _context11.next = 60;
                            break;

                          case 32:
                            if (!((pane === 'LEFT' || pane === 'BOTH') && _leftPane.timestamp === start)) {
                              _context11.next = 46;
                              break;
                            }

                            _context11.next = 35;
                            return dispatch(setPaneShare('LEFT', ''));

                          case 35:
                            _context11.next = 37;
                            return dispatch(setPanePath('LEFT', path));

                          case 37:
                            _context11.next = 39;
                            return dispatch(paneDeselect('LEFT'));

                          case 39:
                            _context11.next = 41;
                            return dispatch(paneSort('LEFT'));

                          case 41:
                            _context11.next = 43;
                            return dispatch(stopLoadingPane('LEFT', finish, true));

                          case 43:
                            if (!_leftPane.isActive) {
                              _context11.next = 46;
                              break;
                            }

                            _context11.next = 46;
                            return dispatch((0, _reactRouterRedux.push)('/~' + share + ':' + path));

                          case 46:
                            if (!((pane === 'RIGHT' || pane === 'BOTH') && _rightPane.timestamp === start)) {
                              _context11.next = 60;
                              break;
                            }

                            _context11.next = 49;
                            return dispatch(setPaneShare('RIGHT', ''));

                          case 49:
                            _context11.next = 51;
                            return dispatch(setPanePath('RIGHT', path));

                          case 51:
                            _context11.next = 53;
                            return dispatch(paneDeselect('RIGHT'));

                          case 53:
                            _context11.next = 55;
                            return dispatch(paneSort('RIGHT'));

                          case 55:
                            _context11.next = 57;
                            return dispatch(stopLoadingPane('RIGHT', finish, true));

                          case 57:
                            if (!_rightPane.isActive) {
                              _context11.next = 60;
                              break;
                            }

                            _context11.next = 60;
                            return dispatch((0, _reactRouterRedux.push)('/~' + share + ':' + path));

                          case 60:

                            resolve();
                            _context11.next = 66;
                            break;

                          case 63:
                            _context11.prev = 63;
                            _context11.t0 = _context11['catch'](0);

                            reject(_context11.t0);

                          case 66:
                          case 'end':
                            return _context11.stop();
                        }
                      }
                    }, _callee11, undefined, [[0, 63]]);
                  }));

                  return function (_x25, _x26) {
                    return _ref12.apply(this, arguments);
                  };
                }());
              }));

            case 20:
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
      var _getState10, user, router, match, share, path;

      return _regenerator2.default.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              _getState10 = getState(), user = _getState10.user, router = _getState10.router;

              if (user.isAuthorized) {
                _context13.next = 3;
                break;
              }

              return _context13.abrupt('return');

            case 3:
              match = (0, _path.matchLocation)(router.location.pathname);
              share = match ? match.share : user.shares[0].name;
              path = match ? match.path : '/';
              _context13.next = 8;
              return dispatch(paneCD('BOTH', share, path));

            case 8:
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
/* 28 */
/***/ (function(module, exports) {

module.exports = require("react-router-redux");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(12);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(66);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _variables = __webpack_require__(67);

var _variables2 = _interopRequireDefault(_variables);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactTransitionGroup = __webpack_require__(26);

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
var openNavbar = exports.openNavbar = function openNavbar() {
  return {
    type: 'OPEN_NAVBAR'
  };
};

var closeNavbar = exports.closeNavbar = function closeNavbar() {
  return {
    type: 'CLOSE_NAVBAR'
  };
};

var toggleNavbar = exports.toggleNavbar = function toggleNavbar() {
  return {
    type: 'TOGGLE_NAVBAR'
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

var _regenerator = __webpack_require__(8);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(9);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lockSignInDialog = exports.lockSignInDialog = function lockSignInDialog() {
  return {
    type: 'LOCK_SIGN_IN_DIALOG'
  };
};

var unlockSignInDialog = exports.unlockSignInDialog = function unlockSignInDialog() {
  return {
    type: 'UNLOCK_SIGN_IN_DIALOG'
  };
};

var resetSignInDialog = exports.resetSignInDialog = function resetSignInDialog(values) {
  var action = { type: 'RESET_SIGN_IN_DIALOG' };
  if (values) action.values = values;
  return action;
};

var showSignInDialog = exports.showSignInDialog = function showSignInDialog() {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch, getState) {
      var _getState, signInDialog;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _getState = getState(), signInDialog = _getState.signInDialog;

              if (!signInDialog.locked) {
                _context.next = 3;
                break;
              }

              return _context.abrupt('return');

            case 3:
              _context.next = 5;
              return dispatch(resetSignInDialog());

            case 5:
              return _context.abrupt('return', dispatch({
                type: 'SHOW_SIGN_IN_DIALOG'
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
      var _getState2, signInDialog;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _getState2 = getState(), signInDialog = _getState2.signInDialog;

              if (!signInDialog.locked) {
                _context2.next = 3;
                break;
              }

              return _context2.abrupt('return');

            case 3:
              _context2.next = 5;
              return dispatch(resetSignInDialog());

            case 5:
              return _context2.abrupt('return', dispatch({
                type: 'HIDE_SIGN_IN_DIALOG'
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
      var _getState3, signInDialog;

      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _getState3 = getState(), signInDialog = _getState3.signInDialog;

              if (!signInDialog.locked) {
                _context3.next = 3;
                break;
              }

              return _context3.abrupt('return');

            case 3:
              return _context3.abrupt('return', dispatch(signInDialog.isOpen ? hideSignInDialog() : showSignInDialog()));

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
    type: 'SUBMIT_SIGN_IN_DIALOG',
    submittedAt: submittedAt || Date.now()
  };
};

var updateSignInDialog = exports.updateSignInDialog = function updateSignInDialog(data, submittedAt) {
  return {
    type: 'UPDATE_SIGN_IN_DIALOG',
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

var _regenerator = __webpack_require__(8);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(9);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lockMkdirDialog = exports.lockMkdirDialog = function lockMkdirDialog() {
  return {
    type: 'LOCK_MKDIR_DIALOG'
  };
};

var unlockMkdirDialog = exports.unlockMkdirDialog = function unlockMkdirDialog() {
  return {
    type: 'UNLOCK_MKDIR_DIALOG'
  };
};

var resetMkdirDialog = exports.resetMkdirDialog = function resetMkdirDialog(values) {
  var action = { type: 'RESET_MKDIR_DIALOG' };
  if (values) action.values = values;
  return action;
};

var showMkdirDialog = exports.showMkdirDialog = function showMkdirDialog() {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch, getState) {
      var _getState, mkdirDialog, leftPane, rightPane, values;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _getState = getState(), mkdirDialog = _getState.mkdirDialog, leftPane = _getState.leftPane, rightPane = _getState.rightPane;

              if (!mkdirDialog.locked) {
                _context.next = 3;
                break;
              }

              return _context.abrupt('return');

            case 3:
              values = {
                share: leftPane.isActive ? leftPane.share : rightPane.share,
                directory: leftPane.isActive ? leftPane.directory : rightPane.directory,
                name: ''
              };

              if (!(!values.share || !values.directory)) {
                _context.next = 6;
                break;
              }

              return _context.abrupt('return');

            case 6:
              _context.next = 8;
              return dispatch(resetMkdirDialog(values));

            case 8:
              return _context.abrupt('return', dispatch({
                type: 'SHOW_MKDIR_DIALOG'
              }));

            case 9:
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
      var _getState2, mkdirDialog;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _getState2 = getState(), mkdirDialog = _getState2.mkdirDialog;

              if (!mkdirDialog.locked) {
                _context2.next = 3;
                break;
              }

              return _context2.abrupt('return');

            case 3:
              _context2.next = 5;
              return dispatch(resetMkdirDialog());

            case 5:
              return _context2.abrupt('return', dispatch({
                type: 'HIDE_MKDIR_DIALOG'
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
      var _getState3, mkdirDialog;

      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _getState3 = getState(), mkdirDialog = _getState3.mkdirDialog;

              if (!mkdirDialog.locked) {
                _context3.next = 3;
                break;
              }

              return _context3.abrupt('return');

            case 3:
              return _context3.abrupt('return', dispatch(mkdirDialog.isOpen ? hideMkdirDialog() : showMkdirDialog()));

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
    type: 'SUBMIT_MKDIR_DIALOG',
    submittedAt: submittedAt || Date.now()
  };
};

var updateMkdirDialog = exports.updateMkdirDialog = function updateMkdirDialog(data, submittedAt) {
  return {
    type: 'UPDATE_MKDIR_DIALOG',
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

var _regenerator = __webpack_require__(8);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(9);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lockRenameDialog = exports.lockRenameDialog = function lockRenameDialog() {
  return {
    type: 'LOCK_RENAME_DIALOG'
  };
};

var unlockRenameDialog = exports.unlockRenameDialog = function unlockRenameDialog() {
  return {
    type: 'UNLOCK_RENAME_DIALOG'
  };
};

var resetRenameDialog = exports.resetRenameDialog = function resetRenameDialog(values) {
  var action = { type: 'RESET_RENAME_DIALOG' };
  if (values) action.values = values;
  return action;
};

var showRenameDialog = exports.showRenameDialog = function showRenameDialog() {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch, getState) {
      var _getState, renameDialog, leftPane, rightPane, values;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _getState = getState(), renameDialog = _getState.renameDialog, leftPane = _getState.leftPane, rightPane = _getState.rightPane;

              if (!renameDialog.locked) {
                _context.next = 3;
                break;
              }

              return _context.abrupt('return');

            case 3:
              values = {
                share: leftPane.isActive ? leftPane.share : rightPane.share,
                directory: leftPane.isActive ? leftPane.directory : rightPane.directory,
                name: leftPane.isActive ? leftPane.name : rightPane.name,
                newName: leftPane.isActive ? leftPane.name : rightPane.name
              };

              if (!(!values.share || !values.directory || !values.name)) {
                _context.next = 6;
                break;
              }

              return _context.abrupt('return');

            case 6:
              _context.next = 8;
              return dispatch(resetRenameDialog(values));

            case 8:
              return _context.abrupt('return', dispatch({
                type: 'SHOW_RENAME_DIALOG'
              }));

            case 9:
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
      var _getState2, renameDialog;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _getState2 = getState(), renameDialog = _getState2.renameDialog;

              if (!renameDialog.locked) {
                _context2.next = 3;
                break;
              }

              return _context2.abrupt('return');

            case 3:
              _context2.next = 5;
              return dispatch(resetRenameDialog());

            case 5:
              return _context2.abrupt('return', dispatch({
                type: 'HIDE_RENAME_DIALOG'
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
      var _getState3, renameDialog;

      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _getState3 = getState(), renameDialog = _getState3.renameDialog;

              if (!renameDialog.locked) {
                _context3.next = 3;
                break;
              }

              return _context3.abrupt('return');

            case 3:
              return _context3.abrupt('return', dispatch(renameDialog.isOpen ? hideRenameDialog() : showRenameDialog()));

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
    type: 'SUBMIT_RENAME_DIALOG',
    submittedAt: submittedAt || Date.now()
  };
};

var updateRenameDialog = exports.updateRenameDialog = function updateRenameDialog(data, submittedAt) {
  return {
    type: 'UPDATE_RENAME_DIALOG',
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

var _regenerator = __webpack_require__(8);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(9);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lockCopyDialog = exports.lockCopyDialog = function lockCopyDialog() {
  return {
    type: 'LOCK_COPY_DIALOG'
  };
};

var unlockCopyDialog = exports.unlockCopyDialog = function unlockCopyDialog() {
  return {
    type: 'UNLOCK_COPY_DIALOG'
  };
};

var resetCopyDialog = exports.resetCopyDialog = function resetCopyDialog(values) {
  var action = { type: 'RESET_COPY_DIALOG' };
  if (values) action.values = values;
  return action;
};

var showCopyDialog = exports.showCopyDialog = function showCopyDialog() {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch, getState) {
      var _getState, copyDialog, leftPane, rightPane, values;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _getState = getState(), copyDialog = _getState.copyDialog, leftPane = _getState.leftPane, rightPane = _getState.rightPane;

              if (!copyDialog.locked) {
                _context.next = 3;
                break;
              }

              return _context.abrupt('return');

            case 3:
              values = {
                srcShare: leftPane.isActive ? leftPane.share : rightPane.share,
                srcDirectory: leftPane.isActive ? leftPane.directory : rightPane.directory,
                srcName: leftPane.isActive ? leftPane.name : rightPane.name,
                dstShare: leftPane.isActive ? rightPane.share : leftPane.share,
                dstDirectory: leftPane.isActive ? rightPane.directory : leftPane.directory
              };

              if (!(!values.srcShare || !values.srcDirectory || !values.dstShare || !values.dstDirectory)) {
                _context.next = 6;
                break;
              }

              return _context.abrupt('return');

            case 6:
              _context.next = 8;
              return dispatch(resetCopyDialog(values));

            case 8:
              return _context.abrupt('return', dispatch({
                type: 'SHOW_COPY_DIALOG'
              }));

            case 9:
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
      var _getState2, copyDialog;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _getState2 = getState(), copyDialog = _getState2.copyDialog;

              if (!copyDialog.locked) {
                _context2.next = 3;
                break;
              }

              return _context2.abrupt('return');

            case 3:
              _context2.next = 5;
              return dispatch(resetCopyDialog());

            case 5:
              return _context2.abrupt('return', dispatch({
                type: 'HIDE_COPY_DIALOG'
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
      var _getState3, copyDialog;

      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _getState3 = getState(), copyDialog = _getState3.copyDialog;

              if (!copyDialog.locked) {
                _context3.next = 3;
                break;
              }

              return _context3.abrupt('return');

            case 3:
              return _context3.abrupt('return', dispatch(copyDialog.isOpen ? hideCopyDialog() : showCopyDialog()));

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
    type: 'SUBMIT_COPY_DIALOG',
    submittedAt: submittedAt || Date.now()
  };
};

var updateCopyDialog = exports.updateCopyDialog = function updateCopyDialog(data, submittedAt) {
  return {
    type: 'UPDATE_COPY_DIALOG',
    submittedAt: submittedAt || Date.now(),
    data: data
  };
};

var startCopyDialogFind = exports.startCopyDialogFind = function startCopyDialogFind() {
  return {
    type: 'START_COPY_DIALOG_FIND'
  };
};

var stopCopyDialogFind = exports.stopCopyDialogFind = function stopCopyDialogFind(nodes) {
  return {
    type: 'STOP_COPY_DIALOG_FIND',
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

var _regenerator = __webpack_require__(8);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(9);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lockMoveDialog = exports.lockMoveDialog = function lockMoveDialog() {
  return {
    type: 'LOCK_MOVE_DIALOG'
  };
};

var unlockMoveDialog = exports.unlockMoveDialog = function unlockMoveDialog() {
  return {
    type: 'UNLOCK_MOVE_DIALOG'
  };
};

var resetMoveDialog = exports.resetMoveDialog = function resetMoveDialog(values) {
  var action = { type: 'RESET_MOVE_DIALOG' };
  if (values) action.values = values;
  return action;
};

var showMoveDialog = exports.showMoveDialog = function showMoveDialog() {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch, getState) {
      var _getState, moveDialog, leftPane, rightPane, values;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _getState = getState(), moveDialog = _getState.moveDialog, leftPane = _getState.leftPane, rightPane = _getState.rightPane;

              if (!moveDialog.locked) {
                _context.next = 3;
                break;
              }

              return _context.abrupt('return');

            case 3:
              values = {
                srcShare: leftPane.isActive ? leftPane.share : rightPane.share,
                srcDirectory: leftPane.isActive ? leftPane.directory : rightPane.directory,
                srcName: leftPane.isActive ? leftPane.name : rightPane.name,
                dstShare: leftPane.isActive ? rightPane.share : leftPane.share,
                dstDirectory: leftPane.isActive ? rightPane.directory : leftPane.directory
              };

              if (!(!values.srcShare || !values.srcDirectory || !values.dstShare || !values.dstDirectory)) {
                _context.next = 6;
                break;
              }

              return _context.abrupt('return');

            case 6:
              _context.next = 8;
              return dispatch(resetMoveDialog(values));

            case 8:
              return _context.abrupt('return', dispatch({
                type: 'SHOW_MOVE_DIALOG'
              }));

            case 9:
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
      var _getState2, moveDialog;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _getState2 = getState(), moveDialog = _getState2.moveDialog;

              if (!moveDialog.locked) {
                _context2.next = 3;
                break;
              }

              return _context2.abrupt('return');

            case 3:
              _context2.next = 5;
              return dispatch(resetMoveDialog());

            case 5:
              return _context2.abrupt('return', dispatch({
                type: 'HIDE_MOVE_DIALOG'
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
      var _getState3, moveDialog;

      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _getState3 = getState(), moveDialog = _getState3.moveDialog;

              if (!moveDialog.locked) {
                _context3.next = 3;
                break;
              }

              return _context3.abrupt('return');

            case 3:
              return _context3.abrupt('return', dispatch(moveDialog.isOpen ? hideMoveDialog() : showMoveDialog()));

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
    type: 'SUBMIT_MOVE_DIALOG',
    submittedAt: submittedAt || Date.now()
  };
};

var updateMoveDialog = exports.updateMoveDialog = function updateMoveDialog(data, submittedAt) {
  return {
    type: 'UPDATE_MOVE_DIALOG',
    submittedAt: submittedAt || Date.now(),
    data: data
  };
};

var startMoveDialogFind = exports.startMoveDialogFind = function startMoveDialogFind() {
  return {
    type: 'START_MOVE_DIALOG_FIND'
  };
};

var stopMoveDialogFind = exports.stopMoveDialogFind = function stopMoveDialogFind(nodes) {
  return {
    type: 'STOP_MOVE_DIALOG_FIND',
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

var _regenerator = __webpack_require__(8);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(9);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lockDeleteDialog = exports.lockDeleteDialog = function lockDeleteDialog() {
  return {
    type: 'LOCK_DELETE_DIALOG'
  };
};

var unlockDeleteDialog = exports.unlockDeleteDialog = function unlockDeleteDialog() {
  return {
    type: 'UNLOCK_DELETE_DIALOG'
  };
};

var resetDeleteDialog = exports.resetDeleteDialog = function resetDeleteDialog(values) {
  var action = { type: 'RESET_DELETE_DIALOG' };
  if (values) action.values = values;
  return action;
};

var showDeleteDialog = exports.showDeleteDialog = function showDeleteDialog() {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch, getState) {
      var _getState, deleteDialog, leftPane, rightPane, values;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _getState = getState(), deleteDialog = _getState.deleteDialog, leftPane = _getState.leftPane, rightPane = _getState.rightPane;

              if (!deleteDialog.locked) {
                _context.next = 3;
                break;
              }

              return _context.abrupt('return');

            case 3:
              values = {
                share: leftPane.isActive ? leftPane.share : rightPane.share,
                directory: leftPane.isActive ? leftPane.directory : rightPane.directory,
                name: leftPane.isActive ? leftPane.name : rightPane.name
              };

              if (!(!values.share || !values.directory)) {
                _context.next = 6;
                break;
              }

              return _context.abrupt('return');

            case 6:
              _context.next = 8;
              return dispatch(resetDeleteDialog(values));

            case 8:
              return _context.abrupt('return', dispatch({
                type: 'SHOW_DELETE_DIALOG'
              }));

            case 9:
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
      var _getState2, deleteDialog;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _getState2 = getState(), deleteDialog = _getState2.deleteDialog;

              if (!deleteDialog.locked) {
                _context2.next = 3;
                break;
              }

              return _context2.abrupt('return');

            case 3:
              _context2.next = 5;
              return dispatch(resetDeleteDialog());

            case 5:
              return _context2.abrupt('return', dispatch({
                type: 'HIDE_DELETE_DIALOG'
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
      var _getState3, deleteDialog;

      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _getState3 = getState(), deleteDialog = _getState3.deleteDialog;

              if (!deleteDialog.locked) {
                _context3.next = 3;
                break;
              }

              return _context3.abrupt('return');

            case 3:
              return _context3.abrupt('return', dispatch(deleteDialog.isOpen ? hideDeleteDialog() : showDeleteDialog()));

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
    type: 'SUBMIT_DELETE_DIALOG',
    submittedAt: submittedAt || Date.now()
  };
};

var updateDeleteDialog = exports.updateDeleteDialog = function updateDeleteDialog(data, submittedAt) {
  return {
    type: 'UPDATE_DELETE_DIALOG',
    submittedAt: submittedAt || Date.now(),
    data: data
  };
};

var startDeleteDialogFind = exports.startDeleteDialogFind = function startDeleteDialogFind() {
  return {
    type: 'START_DELETE_DIALOG_FIND'
  };
};

var stopDeleteDialogFind = exports.stopDeleteDialogFind = function stopDeleteDialogFind(nodes) {
  return {
    type: 'STOP_DELETE_DIALOG_FIND',
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

var _promise = __webpack_require__(18);

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = __webpack_require__(8);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _keys = __webpack_require__(10);

var _keys2 = _interopRequireDefault(_keys);

var _getIterator2 = __webpack_require__(13);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _asyncToGenerator2 = __webpack_require__(9);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _user = __webpack_require__(17);

var _path = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setSize = exports.setSize = function setSize(id, size) {
  size.timestamp = Date.now();
  return {
    type: 'SET_SIZE',
    id: id,
    size: size
  };
};

var clearSizes = exports.clearSizes = function clearSizes() {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch, getState) {
      var _getState, sizes, keep, now, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, id;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _getState = getState(), sizes = _getState.sizes;
              keep = [];
              now = Date.now();
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context.prev = 6;

              for (_iterator = (0, _getIterator3.default)((0, _keys2.default)(sizes)); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                id = _step.value;

                if (now - sizes[id].timestamp < 15 * 60 * 1000) keep.push(id);
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
                type: 'CLEAR_SIZE',
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
      var _getState2, app, sizes, id, params;

      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _getState2 = getState(), app = _getState2.app, sizes = _getState2.sizes;
              id = share + ':' + path;

              if (!(sizes[id] && sizes[id].isLoading)) {
                _context3.next = 4;
                break;
              }

              return _context3.abrupt('return');

            case 4:
              params = {
                share: share,
                path: path,
                _csrf: app.csrf
              };
              _context3.next = 7;
              return dispatch(setSize(id, {
                isLoading: true,
                isForbidden: false
              }));

            case 7:
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

            case 8:
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

var _regenerator = __webpack_require__(8);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(18);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(9);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _user = __webpack_require__(17);

var _pane = __webpack_require__(27);

var _list = __webpack_require__(40);

var _progressDialog = __webpack_require__(41);

var _path = __webpack_require__(23);

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
                                        _context.next = 13;
                                        break;
                                      }

                                      _context.t0 = dispatch;
                                      _context.next = 8;
                                      return response.json();

                                    case 8:
                                      _context.t1 = _context.sent._csrf;
                                      _context.t2 = {
                                        type: 'SET_CSRF_TOKEN',
                                        token: _context.t1
                                      };
                                      _context.next = 12;
                                      return (0, _context.t0)(_context.t2);

                                    case 12:
                                      return _context.abrupt('return', resolve());

                                    case 13:
                                      _context.next = 18;
                                      break;

                                    case 15:
                                      _context.prev = 15;
                                      _context.t3 = _context['catch'](0);

                                      console.error(_context.t3);

                                    case 18:
                                      setTimeout(retry, 1000);

                                    case 19:
                                    case 'end':
                                      return _context.stop();
                                  }
                                }
                              }, _callee, undefined, [[0, 15]]);
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
      var _getState, app, _getState2, _app, _getState3, _app2, _getState4, _app3, leftPane, rightPane, params, _getState5, _app4;

      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _getState = getState(), app = _getState.app;

              if (!(app.ioTimestamp > when)) {
                _context4.next = 3;
                break;
              }

              return _context4.abrupt('return');

            case 3:

              dispatch({
                type: app.isConnected ? 'CONNECT_APP' : 'DISCONNECT_APP',
                when: when
              });
              _context4.next = 6;
              return dispatch(getCSRFToken());

            case 6:
              _getState2 = getState(), _app = _getState2.app;

              if (!(_app.ioTimestamp !== when)) {
                _context4.next = 9;
                break;
              }

              return _context4.abrupt('return');

            case 9:
              _context4.next = 11;
              return dispatch((0, _user.updateStatus)());

            case 11:
              _getState3 = getState(), _app2 = _getState3.app;

              if (!(_app2.ioTimestamp !== when)) {
                _context4.next = 14;
                break;
              }

              return _context4.abrupt('return');

            case 14:
              _getState4 = getState(), _app3 = _getState4.app, leftPane = _getState4.leftPane, rightPane = _getState4.rightPane;
              params = {
                timestamp: window.__TIMESTAMP__,
                left: {
                  share: leftPane.share,
                  directory: leftPane.directory
                },
                right: {
                  share: rightPane.share,
                  directory: rightPane.directory
                },
                _csrf: _app3.csrf
              };
              _context4.next = 18;
              return new _promise2.default(function (resolve) {
                io.socket.post('/pane/loaded', params, function () {
                  return resolve();
                });
              });

            case 18:
              _getState5 = getState(), _app4 = _getState5.app;

              if (!(_app4.ioTimestamp !== when)) {
                _context4.next = 21;
                break;
              }

              return _context4.abrupt('return');

            case 21:

              dispatch({
                type: 'CONNECT_APP',
                when: when
              });

            case 22:
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
    type: 'DISCONNECT_APP',
    when: now
  };
};

var startApp = exports.startApp = function startApp() {
  return function (dispatch) {
    dispatch({
      type: 'START_APP'
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
    type: 'APP_VERSION',
    isSameVersion: isSameVersion
  };
};

var screenResize = exports.screenResize = function screenResize() {
  return function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(dispatch, getState) {
      var _getState6, app, rightPane, newSize;

      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _getState6 = getState(), app = _getState6.app, rightPane = _getState6.rightPane;
              newSize = Breakpoints.current().name;

              if (!(!app.isStarted || !newSize || newSize === app.breakpoint)) {
                _context5.next = 4;
                break;
              }

              return _context5.abrupt('return');

            case 4:
              if (!(newSize === 'xs')) {
                _context5.next = 12;
                break;
              }

              _context5.next = 7;
              return dispatch((0, _pane.hidePane)('RIGHT'));

            case 7:
              if (!rightPane.isActive) {
                _context5.next = 10;
                break;
              }

              _context5.next = 10;
              return dispatch((0, _pane.setActivePane)('LEFT'));

            case 10:
              _context5.next = 15;
              break;

            case 12:
              if (!(app.prevBreakpoint === 'xs')) {
                _context5.next = 15;
                break;
              }

              _context5.next = 15;
              return dispatch((0, _pane.showPane)('RIGHT'));

            case 15:
              return _context5.abrupt('return', dispatch({
                type: 'SCREEN_RESIZE',
                breakpoint: newSize
              }));

            case 16:
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
      var _getState7, app;

      return _regenerator2.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _getState7 = getState(), app = _getState7.app;

              if (!app.isStarted) {
                _context7.next = 3;
                break;
              }

              return _context7.abrupt('return');

            case 3:
              _context7.next = 5;
              return dispatch(startApp());

            case 5:
              _context7.next = 7;
              return dispatch(screenResize());

            case 7:
              _context7.next = 9;
              return dispatch((0, _pane.setActivePane)('LEFT'));

            case 9:

              history.listen(function () {
                var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(location) {
                  var _getState8, user, leftPane, pane, match;

                  return _regenerator2.default.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          _getState8 = getState(), user = _getState8.user, leftPane = _getState8.leftPane;

                          if (user.isAuthorized) {
                            _context6.next = 3;
                            break;
                          }

                          return _context6.abrupt('return');

                        case 3:
                          pane = leftPane.isActive ? 'LEFT' : 'RIGHT';
                          match = (0, _path.matchLocation)(location.pathname);

                          dispatch((0, _pane.paneCD)(pane, match ? match.share : user.shares[0].name, match ? match.path : '/'));

                        case 6:
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

            case 10:
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

var _regenerator = __webpack_require__(8);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _keys = __webpack_require__(10);

var _keys2 = _interopRequireDefault(_keys);

var _asyncToGenerator2 = __webpack_require__(9);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setList = exports.setList = function setList(id, list) {
  return {
    type: 'SET_LIST',
    id: id,
    list: list
  };
};

var clearLists = exports.clearLists = function clearLists() {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch, getState) {
      var _getState, lists, leftPane, rightPane, leftId, rightId, keep;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _getState = getState(), lists = _getState.lists, leftPane = _getState.leftPane, rightPane = _getState.rightPane;
              leftId = void 0;

              if (leftPane.share && leftPane.directory) leftId = leftPane.share + ':' + leftPane.directory;
              rightId = void 0;

              if (rightPane.share && rightPane.directory) rightId = rightPane.share + ':' + rightPane.directory;

              if (!((0, _keys2.default)(lists).length === 0 || leftId && rightId && (leftId === rightId ? (0, _keys2.default)(lists).length === 1 : (0, _keys2.default)(lists).length === 2))) {
                _context.next = 7;
                break;
              }

              return _context.abrupt('return');

            case 7:
              keep = [];

              if (leftId) keep.push(leftId);
              if (rightId && rightId !== leftId) keep.push(rightId);

              _context.next = 12;
              return dispatch({
                type: 'CLEAR_LIST',
                keep: keep
              });

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

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var startProgress = exports.startProgress = function startProgress(message) {
  return {
    type: 'START_PROGRESS',
    message: message
  };
};

var updateProgress = exports.updateProgress = function updateProgress(message) {
  return {
    type: 'UPDATE_PROGRESS',
    message: message
  };
};

var finishProgress = exports.finishProgress = function finishProgress(message) {
  return {
    type: 'FINISH_PROGRESS',
    message: message
  };
};

var clearProgress = exports.clearProgress = function clearProgress() {
  return {
    type: 'CLEAR_PROGRESS'
  };
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var showFailureDialog = exports.showFailureDialog = function showFailureDialog(messages, errors) {
  return {
    type: 'SHOW_FAILURE_DIALOG',
    messages: messages,
    errors: errors
  };
};

var hideFailureDialog = exports.hideFailureDialog = function hideFailureDialog() {
  return {
    type: 'HIDE_FAILURE_DIALOG'
  };
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DisabledView = __webpack_require__(95);

var _DisabledView2 = _interopRequireDefault(_DisabledView);

var _LoadingView = __webpack_require__(96);

var _LoadingView2 = _interopRequireDefault(_LoadingView);

var _Header = __webpack_require__(97);

var _Header2 = _interopRequireDefault(_Header);

var _ListView = __webpack_require__(98);

var _ListView2 = _interopRequireDefault(_ListView);

var _ContentView = __webpack_require__(103);

var _ContentView2 = _interopRequireDefault(_ContentView);

var _InfoView = __webpack_require__(104);

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

exports.default = Pane;

/***/ }),
/* 44 */
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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(8);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _asyncToGenerator2 = __webpack_require__(9);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(46);

var _reactRedux = __webpack_require__(11);

var _createMemoryHistory = __webpack_require__(47);

var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

var _reactRouterRedux = __webpack_require__(28);

var _path = __webpack_require__(23);

var _storeFactory = __webpack_require__(48);

var _storeFactory2 = _interopRequireDefault(_storeFactory);

var _App = __webpack_require__(64);

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
/* 46 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("history/createMemoryHistory");

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(49);

var _reduxThunk = __webpack_require__(50);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reactRouterRedux = __webpack_require__(28);

var _app = __webpack_require__(51);

var _app2 = _interopRequireDefault(_app);

var _user = __webpack_require__(52);

var _user2 = _interopRequireDefault(_user);

var _navbar = __webpack_require__(53);

var _navbar2 = _interopRequireDefault(_navbar);

var _progress = __webpack_require__(54);

var _progress2 = _interopRequireDefault(_progress);

var _signInDialog = __webpack_require__(55);

var _signInDialog2 = _interopRequireDefault(_signInDialog);

var _mkdirDialog = __webpack_require__(56);

var _mkdirDialog2 = _interopRequireDefault(_mkdirDialog);

var _renameDialog = __webpack_require__(57);

var _renameDialog2 = _interopRequireDefault(_renameDialog);

var _copyDialog = __webpack_require__(58);

var _copyDialog2 = _interopRequireDefault(_copyDialog);

var _moveDialog = __webpack_require__(59);

var _moveDialog2 = _interopRequireDefault(_moveDialog);

var _deleteDialog = __webpack_require__(60);

var _deleteDialog2 = _interopRequireDefault(_deleteDialog);

var _failureDialog = __webpack_require__(61);

var _failureDialog2 = _interopRequireDefault(_failureDialog);

var _paneFactory = __webpack_require__(62);

var _paneFactory2 = _interopRequireDefault(_paneFactory);

var _infoListFactory = __webpack_require__(63);

var _infoListFactory2 = _interopRequireDefault(_infoListFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storeFactory = function storeFactory(history, initialState) {
  return (0, _redux.applyMiddleware)(_reduxThunk2.default, (0, _reactRouterRedux.routerMiddleware)(history))(_redux.createStore)((0, _redux.combineReducers)({
    router: _reactRouterRedux.routerReducer,
    app: _app2.default,
    user: _user2.default,
    navbar: _navbar2.default,
    progress: _progress2.default,
    signInDialog: _signInDialog2.default,
    mkdirDialog: _mkdirDialog2.default,
    renameDialog: _renameDialog2.default,
    copyDialog: _copyDialog2.default,
    moveDialog: _moveDialog2.default,
    deleteDialog: _deleteDialog2.default,
    failureDialog: _failureDialog2.default,
    leftPane: (0, _paneFactory2.default)('LEFT'),
    rightPane: (0, _paneFactory2.default)('RIGHT'),
    lists: (0, _infoListFactory2.default)('list'),
    contents: (0, _infoListFactory2.default)('content'),
    infos: (0, _infoListFactory2.default)('info'),
    sizes: (0, _infoListFactory2.default)('size')
  }), initialState);
};

exports.default = storeFactory;

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(12);

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = function app() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    ioTimestamp: 0,
    csrf: '',
    breakpoint: '',
    prevBreakpoint: '',
    isStarted: false,
    isConnected: false,
    isSameVersion: true
  };
  var action = arguments[1];

  switch (action.type) {
    case 'START_APP':
      if (state.isStarted) return state;

      return (0, _extends3.default)({}, state, {
        isStarted: true
      });
    case 'CONNECT_APP':
      return (0, _extends3.default)({}, state, {
        isConnected: true,
        ioTimestamp: action.when
      });
    case 'DISCONNECT_APP':
      return (0, _extends3.default)({}, state, {
        isConnected: false,
        ioTimestamp: action.when
      });
    case 'APP_VERSION':
      return (0, _extends3.default)({}, state, {
        isSameVersion: action.isSameVersion
      });
    case 'SCREEN_RESIZE':
      if (state.breakpoint === action.breakpoint) return state;

      var prevBreakpoint = state.breakpoint || action.breakpoint;

      return (0, _extends3.default)({}, state, {
        breakpoint: action.breakpoint,
        prevBreakpoint: prevBreakpoint
      });
    case 'SET_CSRF_TOKEN':
      if (state.csrf === action.token) return state;

      return (0, _extends3.default)({}, state, {
        csrf: action.token
      });
  }

  return state;
};

exports.default = app;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var user = function user() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isAuthorized: false,
    login: 'anonymous',
    locale: 'en',
    shares: []
  };
  var action = arguments[1];

  switch (action.type) {
    case 'SET_USER':
      return _.cloneDeep({
        isAuthorized: action.isAuthorized || false,
        login: action.login || 'anonymous',
        locale: action.locale || state.locale,
        shares: action.shares || []
      });
  }

  return state;
};

exports.default = user;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(12);

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var navbar = function navbar() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isOpen: false
  };
  var action = arguments[1];

  switch (action.type) {
    case 'OPEN_NAVBAR':
      if (state.isOpen) return state;

      return (0, _extends3.default)({}, state, {
        isOpen: true
      });
    case 'CLOSE_NAVBAR':
      if (!state.isOpen) return state;

      return (0, _extends3.default)({}, state, {
        isOpen: false
      });
    case 'TOGGLE_NAVBAR':
      return (0, _extends3.default)({}, state, {
        isOpen: !state.isOpen
      });
  }

  return state;
};

exports.default = navbar;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var progress = function progress() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isStarted: false,
    isFinished: false,
    message: ''
  };
  var action = arguments[1];

  switch (action.type) {
    case 'START_PROGRESS':
      return {
        isStarted: true,
        isFinished: false,
        message: action.message
      };
    case 'UPDATE_PROGRESS':
      if (!action.message) return state;

      return {
        isStarted: true,
        isFinished: false,
        message: state.message + action.message
      };
    case 'FINISH_PROGRESS':
      return {
        isStarted: true,
        isFinished: true,
        message: state.message + action.message || ''
      };
    case 'CLEAR_PROGRESS':
      if (!state.isStarted) return state;

      return {
        isStarted: false,
        isFinished: false,
        message: ''
      };
  }

  return state;
};

exports.default = progress;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(12);

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var signInDialog = function signInDialog() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    submittedAt: 0,
    isOpen: false,
    locked: 0,
    values: {
      login: '',
      password: ''
    },
    messages: {},
    errors: {}
  };
  var action = arguments[1];

  var newState = void 0;
  switch (action.type) {
    case 'LOCK_SIGN_IN_DIALOG':
      return _.cloneDeep((0, _extends3.default)({}, state, {
        locked: state.locked + 1
      }));
    case 'UNLOCK_SIGN_IN_DIALOG':
      if (state.locked === 0) return state;

      return _.cloneDeep((0, _extends3.default)({}, state, {
        locked: state.locked - 1
      }));
    case 'SHOW_SIGN_IN_DIALOG':
      if (state.isOpen) return state;

      newState = _.cloneDeep((0, _extends3.default)({}, state, {
        isOpen: true
      }));
      newState.values.password = '';
      return newState;
    case 'HIDE_SIGN_IN_DIALOG':
      if (!state.isOpen) return state;

      newState = _.cloneDeep((0, _extends3.default)({}, state, {
        isOpen: false
      }));
      newState.values.password = '';
      return newState;
    case 'RESET_SIGN_IN_DIALOG':
      newState = _.cloneDeep((0, _extends3.default)({}, state, {
        errors: {},
        messages: {}
      }));

      if (action.values) newState.values = _.cloneDeep(action.values);

      return _.cloneDeep(newState);
    case 'SUBMIT_SIGN_IN_DIALOG':
      if (action.submittedAt <= state.submittedAt) return state;

      return _.cloneDeep((0, _extends3.default)({}, state, {
        submittedAt: action.submittedAt
      }));
    case 'UPDATE_SIGN_IN_DIALOG':
      if (action.submittedAt < state.submittedAt) return state;

      newState = _.cloneDeep((0, _extends3.default)({}, state, {
        submittedAt: action.submittedAt
      }));

      if (action.data.values) {
        newState.values = _.cloneDeep((0, _extends3.default)({}, state.values, action.data.values));
      }
      if (action.data.errors) {
        newState.errors = _.cloneDeep((0, _extends3.default)({}, state.errors, action.data.errors));
      }
      if (action.data.messages) newState.messages = _.cloneDeep(action.data.messages);

      return newState;
  }

  return state;
};

exports.default = signInDialog;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(12);

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mkdirDialog = function mkdirDialog() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    submittedAt: 0,
    isOpen: false,
    locked: 0,
    values: {
      share: '',
      directory: '',
      name: ''
    },
    messages: {},
    errors: {}
  };
  var action = arguments[1];

  var newState = void 0;
  switch (action.type) {
    case 'LOCK_MKDIR_DIALOG':
      return _.cloneDeep((0, _extends3.default)({}, state, {
        locked: state.locked + 1
      }));
    case 'UNLOCK_MKDIR_DIALOG':
      if (state.locked === 0) return state;

      return _.cloneDeep((0, _extends3.default)({}, state, {
        locked: state.locked - 1
      }));
    case 'SHOW_MKDIR_DIALOG':
      if (state.isOpen) return state;

      return _.cloneDeep((0, _extends3.default)({}, state, {
        isOpen: true
      }));
    case 'HIDE_MKDIR_DIALOG':
      if (!state.isOpen) return state;

      return _.cloneDeep((0, _extends3.default)({}, state, {
        isOpen: false
      }));
    case 'RESET_MKDIR_DIALOG':
      newState = _.cloneDeep((0, _extends3.default)({}, state, {
        errors: {},
        messages: {}
      }));

      if (action.values) newState.values = _.cloneDeep(action.values);

      return newState;
    case 'SUBMIT_MKDIR_DIALOG':
      if (action.submittedAt <= state.submittedAt) return state;

      return _.cloneDeep((0, _extends3.default)({}, state, {
        submittedAt: action.submittedAt
      }));
    case 'UPDATE_MKDIR_DIALOG':
      if (action.submittedAt < state.submittedAt) return state;

      newState = _.cloneDeep((0, _extends3.default)({}, state, {
        submittedAt: action.submittedAt
      }));

      if (action.data.values) {
        newState.values = _.cloneDeep((0, _extends3.default)({}, state.values, action.data.values));
      }
      if (action.data.errors) {
        newState.errors = _.cloneDeep((0, _extends3.default)({}, state.errors, action.data.errors));
      }
      if (action.data.messages) newState.messages = _.cloneDeep(action.data.messages);

      return newState;
  }

  return state;
};

exports.default = mkdirDialog;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(12);

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renameDialog = function renameDialog() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    submittedAt: 0,
    isOpen: false,
    locked: 0,
    values: {
      share: '',
      directory: '',
      name: '',
      newName: ''
    },
    messages: {},
    errors: {}
  };
  var action = arguments[1];

  var newState = void 0;
  switch (action.type) {
    case 'LOCK_RENAME_DIALOG':
      return _.cloneDeep((0, _extends3.default)({}, state, {
        locked: state.locked + 1
      }));
    case 'UNLOCK_RENAME_DIALOG':
      if (state.locked === 0) return state;

      return _.cloneDeep((0, _extends3.default)({}, state, {
        locked: state.locked - 1
      }));
    case 'SHOW_RENAME_DIALOG':
      if (state.isOpen) return state;

      return _.cloneDeep((0, _extends3.default)({}, state, {
        isOpen: true
      }));
    case 'HIDE_RENAME_DIALOG':
      if (!state.isOpen) return state;

      return _.cloneDeep((0, _extends3.default)({}, state, {
        isOpen: false
      }));
    case 'RESET_RENAME_DIALOG':
      newState = _.cloneDeep((0, _extends3.default)({}, state, {
        errors: {},
        messages: {}
      }));

      if (action.values) newState.values = _.cloneDeep(action.values);

      return newState;
    case 'SUBMIT_RENAME_DIALOG':
      if (action.submittedAt <= state.submittedAt) return state;

      return _.cloneDeep((0, _extends3.default)({}, state, {
        submittedAt: action.submittedAt
      }));
    case 'UPDATE_RENAME_DIALOG':
      if (action.submittedAt < state.submittedAt) return state;

      newState = _.cloneDeep((0, _extends3.default)({}, state, {
        submittedAt: action.submittedAt
      }));

      if (action.data.values) {
        newState.values = _.cloneDeep((0, _extends3.default)({}, state.values, action.data.values));
      }
      if (action.data.errors) {
        newState.errors = _.cloneDeep((0, _extends3.default)({}, state.errors, action.data.errors));
      }
      if (action.data.messages) newState.messages = _.cloneDeep(action.data.messages);

      return newState;
  }

  return state;
};

exports.default = renameDialog;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(12);

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var copyDialog = function copyDialog() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    submittedAt: 0,
    isOpen: false,
    locked: 0,
    values: {
      srcShare: '',
      srcDirectory: '',
      srcName: '',
      dstShare: '',
      dstDirectory: ''
    },
    messages: {},
    errors: {},
    found: {
      isLoading: false,
      isLoaded: false,
      nodes: []
    }
  };
  var action = arguments[1];

  var newState = void 0;
  switch (action.type) {
    case 'LOCK_COPY_DIALOG':
      return _.cloneDeep((0, _extends3.default)({}, state, {
        locked: state.locked + 1
      }));
    case 'UNLOCK_COPY_DIALOG':
      if (state.locked === 0) return state;

      return _.cloneDeep((0, _extends3.default)({}, state, {
        locked: state.locked - 1
      }));
    case 'SHOW_COPY_DIALOG':
      if (state.isOpen) return state;

      return _.cloneDeep((0, _extends3.default)({}, state, {
        isOpen: true
      }));
    case 'HIDE_COPY_DIALOG':
      if (!state.isOpen) return state;

      return _.cloneDeep((0, _extends3.default)({}, state, {
        isOpen: false
      }));
    case 'RESET_COPY_DIALOG':
      newState = _.cloneDeep((0, _extends3.default)({}, state, {
        errors: {},
        messages: {},
        found: {
          isLoading: false,
          isLoaded: false,
          nodes: []
        }
      }));

      if (action.values) newState.values = _.cloneDeep(action.values);

      return newState;
    case 'SUBMIT_COPY_DIALOG':
      if (action.submittedAt <= state.submittedAt) return state;

      return _.cloneDeep((0, _extends3.default)({}, state, {
        submittedAt: action.submittedAt
      }));
    case 'UPDATE_COPY_DIALOG':
      if (action.submittedAt < state.submittedAt) return state;

      newState = _.cloneDeep((0, _extends3.default)({}, state, {
        submittedAt: action.submittedAt
      }));

      if (action.data.values) {
        newState.values = _.cloneDeep((0, _extends3.default)({}, state.values, action.data.values));
      }
      if (action.data.errors) {
        newState.errors = _.cloneDeep((0, _extends3.default)({}, state.errors, action.data.errors));
      }
      if (action.data.messages) newState.messages = _.cloneDeep(action.data.messages);

      return newState;
    case 'START_COPY_DIALOG_FIND':
      newState = _.cloneDeep(state);
      newState.found.isLoading = true;
      newState.found.isLoaded = false;
      newState.found.nodes = [];
      return newState;
    case 'STOP_COPY_DIALOG_FIND':
      newState = _.cloneDeep(state);
      if (action.nodes) {
        newState.found.isLoading = false;
        newState.found.isLoaded = true;
        newState.found.nodes = _.cloneDeep(action.nodes);
      } else {
        newState.found.isLoading = false;
        newState.found.isLoaded = false;
        newState.found.nodes = [];
      }
      return newState;
  }

  return state;
};

exports.default = copyDialog;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(12);

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moveDialog = function moveDialog() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    submittedAt: 0,
    isOpen: false,
    locked: 0,
    values: {
      srcShare: '',
      srcDirectory: '',
      srcName: '',
      dstShare: '',
      dstDirectory: ''
    },
    messages: {},
    errors: {},
    found: {
      isLoading: false,
      isLoaded: false,
      nodes: []
    }
  };
  var action = arguments[1];

  var newState = void 0;
  switch (action.type) {
    case 'LOCK_MOVE_DIALOG':
      return _.cloneDeep((0, _extends3.default)({}, state, {
        locked: state.locked + 1
      }));
    case 'UNLOCK_MOVE_DIALOG':
      if (state.locked === 0) return state;

      return _.cloneDeep((0, _extends3.default)({}, state, {
        locked: state.locked - 1
      }));
    case 'SHOW_MOVE_DIALOG':
      if (state.isOpen) return state;

      return _.cloneDeep((0, _extends3.default)({}, state, {
        isOpen: true
      }));
    case 'HIDE_MOVE_DIALOG':
      if (!state.isOpen) return state;

      return _.cloneDeep((0, _extends3.default)({}, state, {
        isOpen: false
      }));
    case 'RESET_MOVE_DIALOG':
      newState = _.cloneDeep((0, _extends3.default)({}, state, {
        errors: {},
        messages: {},
        found: {
          isLoading: false,
          isLoaded: false,
          nodes: []
        }
      }));

      if (action.values) newState.values = _.cloneDeep(action.values);

      return newState;
    case 'SUBMIT_MOVE_DIALOG':
      if (action.submittedAt <= state.submittedAt) return state;

      return _.cloneDeep((0, _extends3.default)({}, state, {
        submittedAt: action.submittedAt
      }));
    case 'UPDATE_MOVE_DIALOG':
      if (action.submittedAt < state.submittedAt) return state;

      newState = _.cloneDeep((0, _extends3.default)({}, state, {
        submittedAt: action.submittedAt
      }));

      if (action.data.values) {
        newState.values = _.cloneDeep((0, _extends3.default)({}, state.values, action.data.values));
      }
      if (action.data.errors) {
        newState.errors = _.cloneDeep((0, _extends3.default)({}, state.errors, action.data.errors));
      }
      if (action.data.messages) newState.messages = _.cloneDeep(action.data.messages);

      return newState;
    case 'START_MOVE_DIALOG_FIND':
      newState = _.cloneDeep(state);
      newState.found.isLoading = true;
      newState.found.isLoaded = false;
      newState.found.nodes = [];
      return newState;
    case 'STOP_MOVE_DIALOG_FIND':
      newState = _.cloneDeep(state);
      if (action.nodes) {
        newState.found.isLoading = false;
        newState.found.isLoaded = true;
        newState.found.nodes = _.cloneDeep(action.nodes);
      } else {
        newState.found.isLoading = false;
        newState.found.isLoaded = false;
        newState.found.nodes = [];
      }
      return newState;
  }

  return state;
};

exports.default = moveDialog;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(12);

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var deleteDialog = function deleteDialog() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    submittedAt: 0,
    isOpen: false,
    locked: 0,
    values: {
      share: '',
      directory: '',
      name: ''
    },
    messages: {},
    errors: {},
    found: {
      isLoading: false,
      isLoaded: false,
      nodes: []
    }
  };
  var action = arguments[1];

  var newState = void 0;
  switch (action.type) {
    case 'LOCK_DELETE_DIALOG':
      return _.cloneDeep((0, _extends3.default)({}, state, {
        locked: state.locked + 1
      }));
    case 'UNLOCK_DELETE_DIALOG':
      if (state.locked === 0) return state;

      return _.cloneDeep((0, _extends3.default)({}, state, {
        locked: state.locked - 1
      }));
    case 'SHOW_DELETE_DIALOG':
      if (state.isOpen) return state;

      return _.cloneDeep((0, _extends3.default)({}, state, {
        isOpen: true
      }));
    case 'HIDE_DELETE_DIALOG':
      if (!state.isOpen) return state;

      return _.cloneDeep((0, _extends3.default)({}, state, {
        isOpen: false
      }));
    case 'RESET_DELETE_DIALOG':
      newState = _.cloneDeep((0, _extends3.default)({}, state, {
        errors: {},
        messages: {},
        found: {
          isLoading: false,
          isLoaded: false,
          nodes: []
        }
      }));

      if (action.values) newState.values = _.cloneDeep(action.values);

      return newState;
    case 'SUBMIT_DELETE_DIALOG':
      if (action.submittedAt <= state.submittedAt) return state;

      return _.cloneDeep((0, _extends3.default)({}, state, {
        submittedAt: action.submittedAt
      }));
    case 'UPDATE_DELETE_DIALOG':
      if (action.submittedAt < state.submittedAt) return state;

      newState = _.cloneDeep((0, _extends3.default)({}, state, {
        submittedAt: action.submittedAt
      }));

      if (action.data.values) {
        newState.values = _.cloneDeep((0, _extends3.default)({}, state.values, action.data.values));
      }
      if (action.data.errors) {
        newState.errors = _.cloneDeep((0, _extends3.default)({}, state.errors, action.data.errors));
      }
      if (action.data.messages) newState.messages = _.cloneDeep(action.data.messages);

      return newState;
    case 'START_DELETE_DIALOG_FIND':
      newState = _.cloneDeep(state);
      newState.found.isLoading = true;
      newState.found.isLoaded = false;
      newState.found.nodes = [];
      return newState;
    case 'STOP_DELETE_DIALOG_FIND':
      newState = _.cloneDeep(state);
      if (action.nodes) {
        newState.found.isLoading = false;
        newState.found.isLoaded = true;
        newState.found.nodes = _.cloneDeep(action.nodes);
      } else {
        newState.found.isLoading = false;
        newState.found.isLoaded = false;
        newState.found.nodes = [];
      }
      return newState;
  }

  return state;
};

exports.default = deleteDialog;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(12);

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var failureDialog = function failureDialog() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isOpen: false,
    messages: {},
    errors: {}
  };
  var action = arguments[1];

  switch (action.type) {
    case 'SHOW_FAILURE_DIALOG':
      return _.cloneDeep({
        isOpen: true,
        messages: action.messages,
        errors: action.errors
      });
    case 'HIDE_FAILURE_DIALOG':
      return _.cloneDeep((0, _extends3.default)({}, state, {
        isOpen: false
      }));
  }

  return state;
};

exports.default = failureDialog;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(12);

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var paneFactory = function paneFactory(which) {
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
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
    };
    var action = arguments[1];

    switch (action.type) {
      case 'ACTIVATE_' + which + '_PANE':
        if (state.isActive) return state;

        return _.cloneDeep((0, _extends3.default)({}, state, {
          isActive: true
        }));
      case 'DEACTIVATE_' + which + '_PANE':
        if (!state.isActive) return state;

        return _.cloneDeep((0, _extends3.default)({}, state, {
          isActive: false
        }));
      case 'SHOW_' + which + '_PANE':
        if (state.isVisible) return state;

        return _.cloneDeep((0, _extends3.default)({}, state, {
          isVisible: true
        }));
      case 'HIDE_' + which + '_PANE':
        if (!state.isVisible) return state;

        return _.cloneDeep((0, _extends3.default)({}, state, {
          isVisible: false
        }));
      case 'START_' + which + '_PANE_LOADING':
        return _.cloneDeep((0, _extends3.default)({}, state, {
          timestamp: action.timestamp,
          isLoading: true,
          isForbidden: false
        }));
      case 'STOP_' + which + '_PANE_LOADING':
        return _.cloneDeep((0, _extends3.default)({}, state, {
          timestamp: action.timestamp,
          isLoading: false,
          isForbidden: action.isForbidden
        }));
      case 'SET_' + which + '_PANE_MODE':
        if (state.mode === action.mode) return state;

        return _.cloneDeep((0, _extends3.default)({}, state, {
          mode: action.mode
        }));
      case 'SET_' + which + '_PANE_SHARE':
        if (state.share === action.share) return state;

        return _.cloneDeep((0, _extends3.default)({}, state, {
          share: action.share
        }));
      case 'SET_' + which + '_PANE_PATH':
        if (state.path === action.path && state.directory === action.directory && state.name === action.name) return state;

        return _.cloneDeep((0, _extends3.default)({}, state, {
          path: action.path,
          directory: action.directory,
          name: action.name
        }));
      case 'SET_' + which + '_PANE_LIST':
        if (_.isEqual(state.list, action.list)) return state;

        return _.cloneDeep((0, _extends3.default)({}, state, {
          list: action.list,
          selectedIndexes: action.selectedIndexes || []
        }));
      case 'SET_' + which + '_PANE_SORT':
        if (state.sortField === action.field && state.sortDir === action.dir) return state;

        return _.cloneDeep((0, _extends3.default)({}, state, {
          sortField: action.field,
          sortDir: action.dir
        }));
      case 'SET_' + which + '_PANE_SELECTION':
        var selectedIndexes = action.selectedIndexes.slice().sort();
        if (_.isEqual(state.selectedIndexes, selectedIndexes)) return state;

        return _.cloneDeep((0, _extends3.default)({}, state, {
          selectedIndexes: selectedIndexes
        }));
    }

    return state;
  };
};

exports.default = paneFactory;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(10);

var _keys2 = _interopRequireDefault(_keys);

var _getIterator2 = __webpack_require__(13);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _defineProperty2 = __webpack_require__(16);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = __webpack_require__(12);

var _extends4 = _interopRequireDefault(_extends3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var infoListFactory = function infoListFactory(type) {
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    switch (action.type) {
      case 'SET_' + type.toUpperCase():
        return _.cloneDeep((0, _extends4.default)({}, state, (0, _defineProperty3.default)({}, action.id, action[type])));
      case 'CLEAR_' + type.toUpperCase():
        var newState = {};
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = (0, _getIterator3.default)((0, _keys2.default)(state)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var key = _step.value;

            if (action.keep.includes(key)) newState[key] = _.cloneDeep(state[key]);
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

        return newState;
    }

    return state;
  };
};

exports.default = infoListFactory;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(11);

var _Screen = __webpack_require__(65);

var _Screen2 = _interopRequireDefault(_Screen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    isConnected: state.app.isConnected && state.app.isSameVersion,
    isLeftPaneVisible: state.leftPane.isVisible,
    isRightPaneVisible: state.rightPane.isVisible
  };
};

var App = (0, _reactRedux.connect)(mapStateToProps, null)(_Screen2.default);

exports.default = App;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactTransitionGroup = __webpack_require__(26);

var _fa = __webpack_require__(15);

var _Fade = __webpack_require__(29);

var _Fade2 = _interopRequireDefault(_Fade);

var _Navbar = __webpack_require__(68);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _SignInDialog = __webpack_require__(77);

var _SignInDialog2 = _interopRequireDefault(_SignInDialog);

var _ProgressDialog = __webpack_require__(79);

var _ProgressDialog2 = _interopRequireDefault(_ProgressDialog);

var _MkdirDialog = __webpack_require__(82);

var _MkdirDialog2 = _interopRequireDefault(_MkdirDialog);

var _RenameDialog = __webpack_require__(84);

var _RenameDialog2 = _interopRequireDefault(_RenameDialog);

var _CopyDialog = __webpack_require__(86);

var _CopyDialog2 = _interopRequireDefault(_CopyDialog);

var _MoveDialog = __webpack_require__(88);

var _MoveDialog2 = _interopRequireDefault(_MoveDialog);

var _DeleteDialog = __webpack_require__(90);

var _DeleteDialog2 = _interopRequireDefault(_DeleteDialog);

var _FailureDialog = __webpack_require__(92);

var _FailureDialog2 = _interopRequireDefault(_FailureDialog);

var _LeftPane = __webpack_require__(94);

var _LeftPane2 = _interopRequireDefault(_LeftPane);

var _RightPane = __webpack_require__(106);

var _RightPane2 = _interopRequireDefault(_RightPane);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)(_fa.FaCog, {
  className: 'rotating icon-text'
});

var _ref2 = (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_Navbar2.default, {}), (0, _jsx3.default)(_SignInDialog2.default, {}), (0, _jsx3.default)(_ProgressDialog2.default, {}), (0, _jsx3.default)(_MkdirDialog2.default, {}), (0, _jsx3.default)(_RenameDialog2.default, {}), (0, _jsx3.default)(_CopyDialog2.default, {}), (0, _jsx3.default)(_MoveDialog2.default, {}), (0, _jsx3.default)(_DeleteDialog2.default, {}), (0, _jsx3.default)(_FailureDialog2.default, {}));

var _ref3 = (0, _jsx3.default)(_Fade2.default, {}, void 0, (0, _jsx3.default)(_LeftPane2.default, {}));

var _ref4 = (0, _jsx3.default)(_Fade2.default, {}, void 0, (0, _jsx3.default)(_RightPane2.default, {}));

function Screen(props) {
  var overlay = null;
  if (!props.isConnected) {
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
  }, void 0, props.isLeftPaneVisible ? _ref3 : null, props.isRightPaneVisible ? _ref4 : null)));
}

exports.default = Screen;

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/objectWithoutProperties");

/***/ }),
/* 67 */
/***/ (function(module, exports) {



/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(11);

var _navbar = __webpack_require__(30);

var _signInDialog = __webpack_require__(31);

var _mkdirDialog = __webpack_require__(32);

var _renameDialog = __webpack_require__(33);

var _copyDialog = __webpack_require__(34);

var _moveDialog = __webpack_require__(35);

var _deleteDialog = __webpack_require__(36);

var _user = __webpack_require__(17);

var _TopNavbar = __webpack_require__(76);

var _TopNavbar2 = _interopRequireDefault(_TopNavbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    isOpen: state.navbar.isOpen,
    breakpoint: state.app.breakpoint,
    isLoggedIn: state.user.isAuthorized,
    login: state.user.login,
    hasSelection: state.leftPane.isActive && !!state.leftPane.name || state.rightPane.isActive && !!state.rightPane.name
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
/* 69 */
/***/ (function(module, exports) {

module.exports = {"name":"webfm","version":"0.9.23","description":"Two pane file manager for the Web","keywords":["file manager","two pane","node","react","redux","sails"],"license":"MIT","author":"Ross Basarevych <basarevych@gmail.com>","repository":{"type":"git","url":"git+https://github.com/basarevych/webfm.git"},"dependencies":{"async":"~2.6.0","autoprefixer":"~8.0.0","babel-core":"~6.26.0","babel-loader":"~7.1.2","babel-plugin-transform-class-properties":"~6.24.1","babel-plugin-transform-object-rest-spread":"~6.26.0","babel-plugin-transform-runtime":"~6.23.0","babel-preset-env":"~1.6.1","babel-preset-react":"~6.24.1","babel-preset-react-optimize":"~1.0.1","babel-runtime":"~6.26.0","bootstrap":"~4.0.0","bootstrap-loader":"~2.2.0","breakpoints-js":"~1.0.5","clean-webpack-plugin":"~0.1.18","connect-redis":"~3.3.3","css-loader":"~0.28.9","cssnano":"~3.10.0","exports-loader":"~0.7.0","extract-text-webpack-plugin":"~3.0.2","file-loader":"~1.1.6","grunt":"~1.0.2","history":"~4.7.2","i18n-for-browser":"~0.9.7","ignore-loader":"~0.1.2","imports-loader":"~0.7.1","ini":"~1.3.5","isomorphic-fetch":"~2.2.1","lodash":"~4.17.5","moment-timezone":"~0.5.14","node-sass":"~4.7.2","optimize-css-assets-webpack-plugin":"~3.2.0","popper.js":"~1.12.9","postcss-loader":"~2.1.0","prop-types":"~15.6.0","raf":"~3.4.0","react":"~16.2.0","react-dom":"~16.2.0","react-icons":"~2.2.7","react-list":"~0.8.8","react-redux":"~5.0.6","react-router":"~4.2.0","react-router-redux":"^5.0.0-alpha.9","react-scroll-box":"~0.3.5","react-transition-group":"~2.2.1","reactstrap":"^5.0.0-beta","redux":"~3.7.2","redux-thunk":"~2.2.0","resolve-url-loader":"~2.2.1","sails":"^1.0.0-46","sails-hook-grunt":"~3.0.2","sails-hook-orm":"^2.0.0-23","sails-hook-panic-mode":"~0.1.3","sails-hook-sockets":"~1.4.0","sails.io.js":"~1.1.13","sass-loader":"~6.0.6","socket.io-client":"2.0.3","socket.io-redis":"~4.0.1","stat-mode":"~0.2.2","style-loader":"~0.20.1","uglifyjs-webpack-plugin":"~1.1.8","url-loader":"~0.6.2","userid":"~0.3.1","webpack":"~3.11.0","webpack-node-externals":"~1.6.0"},"devDependencies":{"babel-eslint":"~8.2.1","eslint":"~4.17.0"},"scripts":{"build":"env NODE_ENV=production ./node_modules/.bin/webpack --progress","start":"env NODE_ENV=production node app.js","build:dev":"env NODE_ENV=development ./node_modules/.bin/webpack --watch --progress","start:dev":"env NODE_ENV=development ./node_modules/.bin/sails lift","lint":"node ./node_modules/eslint/bin/eslint . --max-warnings=0","debug":"node debug app.js"},"main":"app.js","engines":{"node":">=8.0.0"}}

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _i18n = __webpack_require__(71);

var _i18n2 = _interopRequireDefault(_i18n);

var _en = __webpack_require__(72);

var _en2 = _interopRequireDefault(_en);

var _i18nForBrowser = __webpack_require__(73);

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
/* 71 */
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
/* 72 */
/***/ (function(module, exports) {

module.exports = {"project_title":"WebFM","not_connected_message":"Establishing connection...","not_authorized_message":"Not signed in","forbidden_message":"No access or not found","contents_view_message":"Contents view","type_DIR_message":"This is a directory","type_SYMLINK_message":"This is a symbolic link to outside of the share","type_BINARY_message":"This is a binary data file","info_view_message":"Info view","empty_message":"Empty...","select_share_label":"Select...","read_only_label":"[read]","read_write_label":"[write]","two_dots_label":"Go up one level","info_name_label":"Name:","info_parent_label":"Parent:","info_size_bytes_label":"Size (bytes):","info_size_human_label":"Size (Human):","info_du_bytes_label":"Disk usage (bytes):","info_du_human_label":"Disk usage (Human):","info_mode_number_label":"Mode (octal):","info_mode_string_label":"Mode (string):","info_user_id_label":"Owner (ID):","info_user_name_label":"Owner (name):","info_group_id_label":"Group (ID):","info_group_name_label":"Group (name):","info_atime_label":"atime:","info_mtime_label":"mtime:","info_ctime_label":"ctime:","mkdir_command":"MkDir","rename_command":"Rename","copy_command":"Copy","move_command":"Move","delete_command":"Delete","sign_in_button":"Sign in","sign_out_button":"Sign out","cancel_button":"Cancel","submit_button":"Submit","done_button":"Done","required_field":"Required field","sign_in_title":"Sign In","login_label":"Login:","password_label":"Password:","invalid_credentials_message":"Wrong login or password","no_shares_message":"You have no shares defined in the config","user.login.E_REQUIRED":"Login is required","user.password.E_REQUIRED":"Password is required","mkdir_title":"Create directory","share_label":"Share:","directory_label":"Parent directory:","name_label":"Name:","mkdir.share.E_NOT_FOUND":"Share not found","mkdir.share.E_READ_ONLY":"No write access to this share","mkdir.directory.E_NOT_DIR":"This is not a directory","mkdir.directory.E_OUTSIDE":"Parent directory is not inside the share","mkdir.name.E_REQUIRED":"Name is required","mkdir.name.E_INVALID":"Name is invalid","mkdir.name.E_EXISTS":"Target already exists","rename_title":"Rename","new_name_label":"New name:","rename.share.E_NOT_FOUND":"Share not found","rename.share.E_READ_ONLY":"No write access to this share","rename.directory.E_NOT_DIR":"This is not a directory","rename.directory.E_OUTSIDE":"Parent directory is not inside the share","rename.name.E_NOT_FOUND":"File not found","rename.newName.E_REQUIRED":"Name is required","rename.newName.E_SAME":"New name should differ from the original","rename.newName.E_INVALID":"Name is invalid","rename.newName.E_EXISTS":"Target already exists","copy_title":"Copy","copy_start_message":"Copying...","src_share_label":"Source share:","src_directory_label":"Source parent directory:","src_name_label":"Source name:","src_name_hint":"Use wildcard symbols like <strong>*</strong> or <strong>?</strong>","src_find_button":"Test","dst_share_label":"Destination share:","dst_directory_label":"Destination parent directory:","dst_name_label":"Destination name:","copy.srcShare.E_NOT_FOUND":"Share not found","copy.srcDirectory.E_NOT_DIR":"This is not a directory","copy.srcDirectory.E_OUTSIDE":"Source directory is not inside the share","copy.srcName.E_REQUIRED":"Name is required","copy.srcName.E_INVALID":"Name is invalid","copy.dstShare.E_NOT_FOUND":"Share not found","copy.dstShare.E_READ_ONLY":"No write access to this share","copy.dstDirectory.E_NOT_DIR":"This is not a directory","copy.dstDirectory.E_OUTSIDE":"Target directory is not inside the share","copy.dstDirectory.E_SAME":"Target directory should not be the same as source","progress_title":"Progress","copy_success_message":"%s ==> %s","copy_failure_message":"Couldn't copy %s","move_success_message":"%s ==> %s","move_failure_message":"Couldn't move %s","delete_success_message":"Deleted %s","delete_failure_message":"Couldn't delete %s","done_message":"Done","move_title":"Move","move_start_message":"Moving...","move.srcShare.E_NOT_FOUND":"Share not found","move.srcShare.E_READ_ONLY":"No write access to this share","move.srcDirectory.E_NOT_DIR":"This is not a directory","move.srcDirectory.E_OUTSIDE":"Source directory is not inside the share","move.srcName.E_REQUIRED":"Name is required","move.srcName.E_INVALID":"Name is invalid","move.dstShare.E_NOT_FOUND":"Share not found","move.dstShare.E_READ_ONLY":"No write access to this share","move.dstDirectory.E_NOT_DIR":"This is not a directory","move.dstDirectory.E_OUTSIDE":"Target directory is not inside the share","move.dstDirectory.E_SAME":"Target directory should not be the same as source","delete_title":"Copy","delete_start_message":"Deleting...","delete.share.E_NOT_FOUND":"Share not found","delete.share.E_READ_ONLY":"No write access to this share","delete.directory.E_NOT_DIR":"This is not a directory","delete.directory.E_OUTSIDE":"Source directory is not inside the share","delete.name.E_REQUIRED":"Name is required","delete.name.E_INVALID":"Name is invalid","failure_title":"Failure","field_share_label":"Share:","field_directory_label":"Directory:","field_name_label":"Name:","field_srcShare_label":"Source share:","field_srcDirectory_label":"Source directory:","field_srcName_label":"Source name:","field_dstShare_label":"Destination share:","field_dstDirectory_label":"Destination directory:","field_dstName_label":"Destination name:","sort_name_hint":"Sort by name<br>(toggle direction)","sort_size_hint":"Sort by size<br>(toggle direction)","mode_list_hint":"Display list of files","mode_contents_hint":"Display contents of the selected in the other pane file","mode_info_hint":"Display info of the selected in the other pane file","toggle_pane_hint":"Toggle visibility<br>of the other pane","size_button_hint":"Calculate size<br>of this item","copy_button_hint":"Copy this item<br>to the other pane","move_button_hint":"Move this item<br>to the other pane","delete_button_hint":"Delete this item"}

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("i18n-for-browser");

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadContent = exports.clearContents = exports.setContent = undefined;

var _promise = __webpack_require__(18);

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = __webpack_require__(8);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _keys = __webpack_require__(10);

var _keys2 = _interopRequireDefault(_keys);

var _asyncToGenerator2 = __webpack_require__(9);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _user = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setContent = exports.setContent = function setContent(id, content) {
  return {
    type: 'SET_CONTENT',
    id: id,
    content: content
  };
};

var clearContents = exports.clearContents = function clearContents() {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch, getState) {
      var _getState, contents, leftPane, rightPane, leftId, rightId, keep;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _getState = getState(), contents = _getState.contents, leftPane = _getState.leftPane, rightPane = _getState.rightPane;
              leftId = void 0;

              if (leftPane.share && leftPane.path) leftId = leftPane.share + ':' + leftPane.path;
              rightId = void 0;

              if (rightPane.share && rightPane.path) rightId = rightPane.share + ':' + rightPane.path;

              if (!((0, _keys2.default)(contents).length === 0 || leftId && rightId && (leftId === rightId ? (0, _keys2.default)(contents).length === 1 : (0, _keys2.default)(contents).length === 2))) {
                _context.next = 7;
                break;
              }

              return _context.abrupt('return');

            case 7:
              keep = [];

              if (leftId) keep.push(leftId);
              if (rightId && rightId !== leftId) keep.push(rightId);

              _context.next = 12;
              return dispatch({
                type: 'CLEAR_CONTENT',
                keep: keep
              });

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

var loadContent = exports.loadContent = function loadContent(pane) {
  return function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(dispatch, getState) {
      var _getState2, app, contents, leftPane, rightPane, id, share, path, params;

      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _getState2 = getState(), app = _getState2.app, contents = _getState2.contents, leftPane = _getState2.leftPane, rightPane = _getState2.rightPane;
              id = void 0;
              share = void 0;
              path = void 0;

              if (pane === 'LEFT' && leftPane.share && leftPane.name) {
                share = leftPane.share;
                path = leftPane.path;
                id = share + ':' + path;
              } else if (pane === 'RIGHT' && rightPane.share && rightPane.name) {
                share = rightPane.share;
                path = rightPane.path;
                id = share + ':' + path;
              }

              if (!(!id || contents[id])) {
                _context3.next = 7;
                break;
              }

              return _context3.abrupt('return');

            case 7:
              params = {
                share: share,
                path: path,
                _csrf: app.csrf
              };
              _context3.next = 10;
              return dispatch(setContent(id, {
                isLoading: true,
                isForbidden: false
              }));

            case 10:
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

            case 11:
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
exports.loadInfo = exports.clearInfos = exports.setInfo = undefined;

var _promise = __webpack_require__(18);

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = __webpack_require__(8);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _keys = __webpack_require__(10);

var _keys2 = _interopRequireDefault(_keys);

var _asyncToGenerator2 = __webpack_require__(9);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _size = __webpack_require__(37);

var _user = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setInfo = exports.setInfo = function setInfo(id, info) {
  return {
    type: 'SET_INFO',
    id: id,
    info: info
  };
};

var clearInfos = exports.clearInfos = function clearInfos() {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch, getState) {
      var _getState, infos, leftPane, rightPane, leftId, rightId, keep;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _getState = getState(), infos = _getState.infos, leftPane = _getState.leftPane, rightPane = _getState.rightPane;
              leftId = void 0;

              if (leftPane.share && leftPane.path) leftId = leftPane.share + ':' + leftPane.path;
              rightId = void 0;

              if (rightPane.share && rightPane.path) rightId = rightPane.share + ':' + rightPane.path;

              if (!((0, _keys2.default)(infos).length === 0 || leftId && rightId && (leftId === rightId ? (0, _keys2.default)(infos).length === 1 : (0, _keys2.default)(infos).length === 2))) {
                _context.next = 7;
                break;
              }

              return _context.abrupt('return');

            case 7:
              keep = [];

              if (leftId) keep.push(leftId);
              if (rightId && rightId !== leftId) keep.push(rightId);

              _context.next = 12;
              return dispatch({
                type: 'CLEAR_INFO',
                keep: keep
              });

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

var loadInfo = exports.loadInfo = function loadInfo(pane) {
  return function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(dispatch, getState) {
      var _getState2, app, infos, leftPane, rightPane, id, share, path, params;

      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _getState2 = getState(), app = _getState2.app, infos = _getState2.infos, leftPane = _getState2.leftPane, rightPane = _getState2.rightPane;
              id = void 0;
              share = void 0;
              path = void 0;

              if (pane === 'LEFT' && leftPane.share && leftPane.name) {
                share = leftPane.share;
                path = leftPane.path;
                id = share + ':' + path;
              } else if (pane === 'RIGHT' && rightPane.share && rightPane.name) {
                share = rightPane.share;
                path = rightPane.path;
                id = share + ':' + path;
              }

              if (!(!id || infos[id])) {
                _context3.next = 7;
                break;
              }

              return _context3.abrupt('return');

            case 7:
              params = {
                share: share,
                path: path,
                _csrf: app.csrf
              };
              _context3.next = 10;
              return dispatch(setInfo(id, {
                isLoading: true,
                isForbidden: false
              }));

            case 10:
              _context3.next = 12;
              return dispatch((0, _size.setSize)(id, {
                isLoading: true,
                isForbidden: false
              }));

            case 12:
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

            case 13:
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
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _fa = __webpack_require__(15);

var _reactstrap = __webpack_require__(14);

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
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(11);

var _signInDialog = __webpack_require__(31);

var _user = __webpack_require__(17);

var _SignInModal = __webpack_require__(78);

var _SignInModal2 = _interopRequireDefault(_SignInModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    isOpen: state.signInDialog.isOpen,
    isLocked: state.signInDialog.locked > 0,
    values: state.signInDialog.values,
    messages: state.signInDialog.messages,
    errors: state.signInDialog.errors
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
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _keys = __webpack_require__(10);

var _keys2 = _interopRequireDefault(_keys);

var _getIterator2 = __webpack_require__(13);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _defineProperty2 = __webpack_require__(16);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactstrap = __webpack_require__(14);

var _RequiredFieldLabel = __webpack_require__(24);

var _RequiredFieldLabel2 = _interopRequireDefault(_RequiredFieldLabel);

var _FormMessages = __webpack_require__(19);

var _FormMessages2 = _interopRequireDefault(_FormMessages);

var _FieldErrors = __webpack_require__(25);

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

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = (0, _getIterator3.default)((0, _keys2.default)(nextProps.errors)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var key = _step.value;

            if (!(0, _keys2.default)(nextProps.errors[key]).length) continue;

            switch (key) {
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
            break;
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
        valid: (!this.props.errors.login || !(0, _keys2.default)(this.props.errors.login).length) && undefined,
        value: this.props.values.login,
        onChange: this.handleInput,
        onKeyPress: this.handleKeyPress,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        innerRef: function innerRef(input) {
          _this5.loginInput = input;
        }
      }), (0, _jsx3.default)(_FieldErrors2.default, {
        errors: this.props.errors.login
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
        valid: (!this.props.errors.password || !(0, _keys2.default)(this.props.errors.password).length) && undefined,
        value: this.props.values.password,
        onChange: this.handleInput,
        onKeyPress: this.handleKeyPress,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        innerRef: function innerRef(input) {
          _this5.passwordInput = input;
        }
      }), (0, _jsx3.default)(_FieldErrors2.default, {
        errors: this.props.errors.password
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
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(11);

var _progressDialog = __webpack_require__(41);

var _ProgressModal = __webpack_require__(80);

var _ProgressModal2 = _interopRequireDefault(_ProgressModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    isStarted: state.progress.isStarted,
    isFinished: state.progress.isFinished,
    message: state.progress.message
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
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactstrap = __webpack_require__(14);

var _reactScrollBox = __webpack_require__(20);

var _ScrollViewport = __webpack_require__(21);

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
      }, void 0, (0, _jsx3.default)(_reactstrap.ModalHeader, {}, void 0, __('progress_title')), (0, _jsx3.default)(_reactstrap.ModalBody, {}, void 0, this.props.isFinished ? (0, _jsx3.default)(_reactstrap.Progress, {
        color: 'primary',
        value: 100
      }, void 0, __('done_message')) : (0, _jsx3.default)(_reactstrap.Progress, {
        color: 'warning',
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
/* 81 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(11);

var _mkdirDialog = __webpack_require__(32);

var _commands = __webpack_require__(22);

var _MkdirModal = __webpack_require__(83);

var _MkdirModal2 = _interopRequireDefault(_MkdirModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    isOpen: state.mkdirDialog.isOpen,
    isLocked: state.mkdirDialog.locked > 0,
    values: state.mkdirDialog.values,
    messages: state.mkdirDialog.messages,
    errors: state.mkdirDialog.errors
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
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _keys = __webpack_require__(10);

var _keys2 = _interopRequireDefault(_keys);

var _getIterator2 = __webpack_require__(13);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _defineProperty2 = __webpack_require__(16);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactstrap = __webpack_require__(14);

var _RequiredFieldLabel = __webpack_require__(24);

var _RequiredFieldLabel2 = _interopRequireDefault(_RequiredFieldLabel);

var _FormMessages = __webpack_require__(19);

var _FormMessages2 = _interopRequireDefault(_FormMessages);

var _FieldErrors = __webpack_require__(25);

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

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = (0, _getIterator3.default)((0, _keys2.default)(nextProps.errors)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var key = _step.value;

            if (!(0, _keys2.default)(nextProps.errors[key]).length) continue;

            switch (key) {
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
            break;
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
        valid: (!this.props.errors.share || !(0, _keys2.default)(this.props.errors.share).length) && undefined,
        value: this.props.values.share,
        onKeyPress: this.handleKeyPress,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        innerRef: function innerRef(input) {
          _this5.shareInput = input;
        }
      }), (0, _jsx3.default)(_FieldErrors2.default, {
        errors: this.props.errors.share
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
        valid: (!this.props.errors.directory || !(0, _keys2.default)(this.props.errors.directory).length) && undefined,
        value: this.props.values.directory,
        onKeyPress: this.handleKeyPress,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        innerRef: function innerRef(input) {
          _this5.directoryInput = input;
        }
      }), (0, _jsx3.default)(_FieldErrors2.default, {
        errors: this.props.errors.directory
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
        valid: (!this.props.errors.name || !(0, _keys2.default)(this.props.errors.name).length) && undefined,
        value: this.props.values.name,
        onChange: this.handleInput,
        onKeyPress: this.handleKeyPress,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        innerRef: function innerRef(input) {
          _this5.nameInput = input;
        }
      }), (0, _jsx3.default)(_FieldErrors2.default, {
        errors: this.props.errors.name
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
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(11);

var _renameDialog = __webpack_require__(33);

var _commands = __webpack_require__(22);

var _RenameModal = __webpack_require__(85);

var _RenameModal2 = _interopRequireDefault(_RenameModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    isOpen: state.renameDialog.isOpen,
    isLocked: state.renameDialog.locked > 0,
    values: state.renameDialog.values,
    messages: state.renameDialog.messages,
    errors: state.renameDialog.errors
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
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _keys = __webpack_require__(10);

var _keys2 = _interopRequireDefault(_keys);

var _getIterator2 = __webpack_require__(13);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _defineProperty2 = __webpack_require__(16);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactstrap = __webpack_require__(14);

var _RequiredFieldLabel = __webpack_require__(24);

var _RequiredFieldLabel2 = _interopRequireDefault(_RequiredFieldLabel);

var _FormMessages = __webpack_require__(19);

var _FormMessages2 = _interopRequireDefault(_FormMessages);

var _FieldErrors = __webpack_require__(25);

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

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = (0, _getIterator3.default)((0, _keys2.default)(nextProps.errors)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var key = _step.value;

            if (!(0, _keys2.default)(nextProps.errors[key]).length) continue;

            switch (key) {
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
            break;
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
        valid: (!this.props.errors.share || !(0, _keys2.default)(this.props.errors.share).length) && undefined,
        value: this.props.values.share,
        onKeyPress: this.handleKeyPress,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        innerRef: function innerRef(input) {
          _this5.shareInput = input;
        }
      }), (0, _jsx3.default)(_FieldErrors2.default, {
        errors: this.props.errors.share
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
        valid: (!this.props.errors.directory || !(0, _keys2.default)(this.props.errors.directory).length) && undefined,
        value: this.props.values.directory,
        onKeyPress: this.handleKeyPress,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        innerRef: function innerRef(input) {
          _this5.directoryInput = input;
        }
      }), (0, _jsx3.default)(_FieldErrors2.default, {
        errors: this.props.errors.directory
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
        valid: (!this.props.errors.name || !(0, _keys2.default)(this.props.errors.name).length) && undefined,
        value: this.props.values.name,
        onKeyPress: this.handleKeyPress,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        innerRef: function innerRef(input) {
          _this5.nameInput = input;
        }
      }), (0, _jsx3.default)(_FieldErrors2.default, {
        errors: this.props.errors.name
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
        valid: (!this.props.errors.newName || !(0, _keys2.default)(this.props.errors.newName).length) && undefined,
        value: this.props.values.newName,
        onChange: this.handleInput,
        onKeyPress: this.handleKeyPress,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        innerRef: function innerRef(input) {
          _this5.newNameInput = input;
        }
      }), (0, _jsx3.default)(_FieldErrors2.default, {
        errors: this.props.errors.newName
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
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(11);

var _copyDialog = __webpack_require__(34);

var _commands = __webpack_require__(22);

var _CopyModal = __webpack_require__(87);

var _CopyModal2 = _interopRequireDefault(_CopyModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    isOpen: state.copyDialog.isOpen,
    isLocked: state.copyDialog.locked > 0,
    values: state.copyDialog.values,
    messages: state.copyDialog.messages,
    errors: state.copyDialog.errors,
    found: state.copyDialog.found
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
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _keys = __webpack_require__(10);

var _keys2 = _interopRequireDefault(_keys);

var _getIterator2 = __webpack_require__(13);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _defineProperty2 = __webpack_require__(16);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactstrap = __webpack_require__(14);

var _fa = __webpack_require__(15);

var _reactScrollBox = __webpack_require__(20);

var _RequiredFieldLabel = __webpack_require__(24);

var _RequiredFieldLabel2 = _interopRequireDefault(_RequiredFieldLabel);

var _FormMessages = __webpack_require__(19);

var _FormMessages2 = _interopRequireDefault(_FormMessages);

var _FieldErrors = __webpack_require__(25);

var _FieldErrors2 = _interopRequireDefault(_FieldErrors);

var _ScrollViewport = __webpack_require__(21);

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

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = (0, _getIterator3.default)((0, _keys2.default)(nextProps.errors)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var key = _step.value;

            if (!(0, _keys2.default)(nextProps.errors[key]).length) continue;

            switch (key) {
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
            break;
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
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var find = null;
      if (!this.props.errors.srcName || !(0, _keys2.default)(this.props.errors.srcName).length) {
        if (this.props.found.isLoaded) {
          find = [];
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = (0, _getIterator3.default)(this.props.found.nodes), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var node = _step2.value;

              find.push(node.isDirectory ? (0, _jsx3.default)('div', {}, node.name, (0, _jsx3.default)('strong', {}, void 0, _ref2, ' ', node.name)) : (0, _jsx3.default)('div', {}, node.name, _ref3, ' ', node.name));
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
          }, void 0, find, _ref))));
        } else if (this.props.found.isLoading) {
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
        valid: (!this.props.errors.srcShare || !(0, _keys2.default)(this.props.errors.srcShare).length) && undefined,
        value: this.props.values.srcShare,
        onKeyPress: this.handleKeyPress,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        innerRef: function innerRef(input) {
          _this5.srcShareInput = input;
        }
      }), (0, _jsx3.default)(_FieldErrors2.default, {
        errors: this.props.errors.srcShare
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
        valid: (!this.props.errors.srcDirectory || !(0, _keys2.default)(this.props.errors.srcDirectory).length) && undefined,
        value: this.props.values.srcDirectory,
        onKeyPress: this.handleKeyPress,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        innerRef: function innerRef(input) {
          _this5.srcDirectoryInput = input;
        }
      }), (0, _jsx3.default)(_FieldErrors2.default, {
        errors: this.props.errors.srcDirectory
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
        valid: (!this.props.errors.srcName || !(0, _keys2.default)(this.props.errors.srcName).length) && undefined,
        value: this.props.values.srcName,
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
        errors: this.props.errors.srcName
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
        valid: (!this.props.errors.dstShare || !(0, _keys2.default)(this.props.errors.dstShare).length) && undefined,
        value: this.props.values.dstShare,
        onKeyPress: this.handleKeyPress,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        innerRef: function innerRef(input) {
          _this5.dstShareInput = input;
        }
      }), (0, _jsx3.default)(_FieldErrors2.default, {
        errors: this.props.errors.dstShare
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
        valid: (!this.props.errors.dstDirectory || !(0, _keys2.default)(this.props.errors.dstDirectory).length) && undefined,
        value: this.props.values.dstDirectory,
        onKeyPress: this.handleKeyPress,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        innerRef: function innerRef(input) {
          _this5.dstDirectoryInput = input;
        }
      }), (0, _jsx3.default)(_FieldErrors2.default, {
        errors: this.props.errors.dstDirectory
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
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(11);

var _moveDialog = __webpack_require__(35);

var _commands = __webpack_require__(22);

var _MoveModal = __webpack_require__(89);

var _MoveModal2 = _interopRequireDefault(_MoveModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    isOpen: state.moveDialog.isOpen,
    isLocked: state.moveDialog.locked > 0,
    values: state.moveDialog.values,
    messages: state.moveDialog.messages,
    errors: state.moveDialog.errors,
    found: state.moveDialog.found
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
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _keys = __webpack_require__(10);

var _keys2 = _interopRequireDefault(_keys);

var _getIterator2 = __webpack_require__(13);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _defineProperty2 = __webpack_require__(16);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactstrap = __webpack_require__(14);

var _fa = __webpack_require__(15);

var _reactScrollBox = __webpack_require__(20);

var _RequiredFieldLabel = __webpack_require__(24);

var _RequiredFieldLabel2 = _interopRequireDefault(_RequiredFieldLabel);

var _FormMessages = __webpack_require__(19);

var _FormMessages2 = _interopRequireDefault(_FormMessages);

var _FieldErrors = __webpack_require__(25);

var _FieldErrors2 = _interopRequireDefault(_FieldErrors);

var _ScrollViewport = __webpack_require__(21);

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

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = (0, _getIterator3.default)((0, _keys2.default)(nextProps.errors)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var key = _step.value;

            if (!(0, _keys2.default)(nextProps.errors[key]).length) continue;

            switch (key) {
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
            break;
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
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var find = null;
      if (!this.props.errors.srcName || !(0, _keys2.default)(this.props.errors.srcName).length) {
        if (this.props.found.isLoaded) {
          find = [];
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = (0, _getIterator3.default)(this.props.found.nodes), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var node = _step2.value;

              find.push(node.isDirectory ? (0, _jsx3.default)('div', {}, node.name, (0, _jsx3.default)('strong', {}, void 0, _ref2, ' ', node.name)) : (0, _jsx3.default)('div', {}, node.name, _ref3, ' ', node.name));
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
          }, void 0, find, _ref))));
        } else if (this.props.found.isLoading) {
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
        valid: (!this.props.errors.srcShare || !(0, _keys2.default)(this.props.errors.srcShare).length) && undefined,
        value: this.props.values.srcShare,
        onKeyPress: this.handleKeyPress,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        innerRef: function innerRef(input) {
          _this5.srcShareInput = input;
        }
      }), (0, _jsx3.default)(_FieldErrors2.default, {
        errors: this.props.errors.srcShare
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
        valid: (!this.props.errors.srcDirectory || !(0, _keys2.default)(this.props.errors.srcDirectory).length) && undefined,
        value: this.props.values.srcDirectory,
        onKeyPress: this.handleKeyPress,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        innerRef: function innerRef(input) {
          _this5.srcDirectoryInput = input;
        }
      }), (0, _jsx3.default)(_FieldErrors2.default, {
        errors: this.props.errors.srcDirectory
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
        valid: (!this.props.errors.srcName || !(0, _keys2.default)(this.props.errors.srcName).length) && undefined,
        value: this.props.values.srcName,
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
        errors: this.props.errors.srcName
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
        valid: (!this.props.errors.dstShare || !(0, _keys2.default)(this.props.errors.dstShare).length) && undefined,
        value: this.props.values.dstShare,
        onKeyPress: this.handleKeyPress,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        innerRef: function innerRef(input) {
          _this5.dstShareInput = input;
        }
      }), (0, _jsx3.default)(_FieldErrors2.default, {
        errors: this.props.errors.dstShare
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
        valid: (!this.props.errors.dstDirectory || !(0, _keys2.default)(this.props.errors.dstDirectory).length) && undefined,
        value: this.props.values.dstDirectory,
        onKeyPress: this.handleKeyPress,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        innerRef: function innerRef(input) {
          _this5.dstDirectoryInput = input;
        }
      }), (0, _jsx3.default)(_FieldErrors2.default, {
        errors: this.props.errors.dstDirectory
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
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(11);

var _deleteDialog = __webpack_require__(36);

var _commands = __webpack_require__(22);

var _DeleteModal = __webpack_require__(91);

var _DeleteModal2 = _interopRequireDefault(_DeleteModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    isOpen: state.deleteDialog.isOpen,
    isLocked: state.deleteDialog.locked > 0,
    values: state.deleteDialog.values,
    messages: state.deleteDialog.messages,
    errors: state.deleteDialog.errors,
    found: state.deleteDialog.found
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
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _keys = __webpack_require__(10);

var _keys2 = _interopRequireDefault(_keys);

var _getIterator2 = __webpack_require__(13);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _defineProperty2 = __webpack_require__(16);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactstrap = __webpack_require__(14);

var _fa = __webpack_require__(15);

var _reactScrollBox = __webpack_require__(20);

var _RequiredFieldLabel = __webpack_require__(24);

var _RequiredFieldLabel2 = _interopRequireDefault(_RequiredFieldLabel);

var _FormMessages = __webpack_require__(19);

var _FormMessages2 = _interopRequireDefault(_FormMessages);

var _FieldErrors = __webpack_require__(25);

var _FieldErrors2 = _interopRequireDefault(_FieldErrors);

var _ScrollViewport = __webpack_require__(21);

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

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = (0, _getIterator3.default)((0, _keys2.default)(nextProps.errors)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var key = _step.value;

            if (!(0, _keys2.default)(nextProps.errors[key]).length) continue;

            switch (key) {
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
            break;
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
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var find = null;
      if (!this.props.errors.name || !(0, _keys2.default)(this.props.errors.name).length) {
        if (this.props.found.isLoaded) {
          find = [];
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = (0, _getIterator3.default)(this.props.found.nodes), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var node = _step2.value;

              find.push(node.isDirectory ? (0, _jsx3.default)('div', {}, node.name, (0, _jsx3.default)('strong', {}, void 0, _ref2, ' ', node.name)) : (0, _jsx3.default)('div', {}, node.name, _ref3, ' ', node.name));
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
          }, void 0, find, _ref))));
        } else if (this.props.found.isLoading) {
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
        valid: (!this.props.errors.share || !(0, _keys2.default)(this.props.errors.share).length) && undefined,
        value: this.props.values.share,
        onKeyPress: this.handleKeyPress,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        innerRef: function innerRef(input) {
          _this5.shareInput = input;
        }
      }), (0, _jsx3.default)(_FieldErrors2.default, {
        errors: this.props.errors.share
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
        valid: (!this.props.errors.directory || !(0, _keys2.default)(this.props.errors.directory).length) && undefined,
        value: this.props.values.directory,
        onKeyPress: this.handleKeyPress,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        innerRef: function innerRef(input) {
          _this5.directoryInput = input;
        }
      }), (0, _jsx3.default)(_FieldErrors2.default, {
        errors: this.props.errors.directory
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
        valid: (!this.props.errors.name || !(0, _keys2.default)(this.props.errors.name).length) && undefined,
        value: this.props.values.name,
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
        errors: this.props.errors.name
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
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(11);

var _failureDialog = __webpack_require__(42);

var _FailureModal = __webpack_require__(93);

var _FailureModal2 = _interopRequireDefault(_FailureModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    isOpen: state.failureDialog.isOpen,
    messages: state.failureDialog.messages,
    errors: state.failureDialog.errors
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
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(10);

var _keys2 = _interopRequireDefault(_keys);

var _getIterator2 = __webpack_require__(13);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactstrap = __webpack_require__(14);

var _FormMessages = __webpack_require__(19);

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
        for (var _iterator = (0, _getIterator3.default)((0, _keys2.default)(this.props.errors)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var key = _step.value;

          var items = [];
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = (0, _getIterator3.default)((0, _keys2.default)(this.props.errors[key])), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var code = _step2.value;

              items.push((0, _jsx3.default)('p', {}, code, this.props.errors[key][code].message));
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
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(11);

var _pane = __webpack_require__(27);

var _size = __webpack_require__(37);

var _Pane = __webpack_require__(43);

var _Pane2 = _interopRequireDefault(_Pane);

var _commands = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  var selectedId = void 0;
  if (state.rightPane.share && state.rightPane.name) selectedId = state.rightPane.share + ':' + state.rightPane.path;

  return {
    which: 'LEFT',
    breakpoint: state.app.breakpoint,
    mode: state.leftPane.mode,
    otherPath: state.rightPane.path,
    shares: state.user.shares,
    share: state.leftPane.share,
    directory: state.leftPane.directory,
    list: state.leftPane.list,
    sizes: state.sizes,
    selectedIndexes: state.leftPane.selectedIndexes,
    sortField: state.leftPane.sortField,
    sortDir: state.leftPane.sortDir,
    content: selectedId && state.contents[selectedId],
    info: selectedId && state.infos[selectedId],
    isActive: state.leftPane.isActive,
    isDisabled: !state.user.isAuthorized,
    isLoading: state.leftPane.isLoading,
    isForbidden: state.leftPane.isForbidden,
    isOtherVisible: state.rightPane.isVisible
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
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

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
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _fa = __webpack_require__(15);

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
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = __webpack_require__(13);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _fa = __webpack_require__(15);

var _reactstrap = __webpack_require__(14);

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
      var newDir = void 0;
      if (this.props.sortField === 'NAME') newDir = this.props.sortDir === 'ASC' ? 'DESC' : 'ASC';else newDir = 'ASC';

      this.props.onSetSort('NAME', newDir);
    }
  }, {
    key: 'toggleSizeSort',
    value: function toggleSizeSort() {
      var newDir = void 0;
      if (this.props.sortField === 'SIZE') newDir = this.props.sortDir === 'ASC' ? 'DESC' : 'ASC';else newDir = 'ASC';

      this.props.onSetSort('SIZE', newDir);
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
        if (this.props.shares.length) {
          shares = [];

          var _loop = function _loop(_share) {
            shares.push((0, _jsx3.default)(_reactstrap.DropdownItem, {
              onClick: function onClick() {
                return _this2.props.onSetShare(_share.name);
              }
            }, _share.name, _share.name + ' ' + (_share.isReadOnly ? __('read_only_label') : __('read_write_label'))));
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
        }, void 0, _ref12), (0, _jsx3.default)('div', {
          className: 'submenu rounded ' + (this.state.isMenuOpen ? 'd-block' : 'd-none')
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
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ListComponent = __webpack_require__(99);

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
      } else if (!this.props.list.length) {
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
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = __webpack_require__(100);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactScrollBox = __webpack_require__(20);

var _reactList = __webpack_require__(101);

var _reactList2 = _interopRequireDefault(_reactList);

var _ScrollViewport = __webpack_require__(21);

var _ScrollViewport2 = _interopRequireDefault(_ScrollViewport);

var _ListItem = __webpack_require__(102);

var _ListItem2 = _interopRequireDefault(_ListItem);

var _path = __webpack_require__(23);

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

      var node = this.props.list[index];
      return (0, _jsx3.default)(_ListItem2.default, {
        which: this.props.which,
        node: node,
        size: this.props.sizes[this.props.share + ':' + node.path],
        index: index,
        isSelected: this.props.selectedIndexes.includes(index),
        onChangeDirectory: this.props.onChangeDirectory,
        onNodeClick: this.props.onNodeClick,
        onNodeShiftClick: this.props.onNodeShiftClick,
        onNodeControlClick: this.props.onNodeControlClick,
        onSizeClick: function onSizeClick() {
          return _this2.props.onSizeClick(_this2.props.share, node.path);
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
        length: this.props.list.length,
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
/* 100 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = require("react-list");

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _fa = __webpack_require__(15);

var _reactstrap = __webpack_require__(14);

var _path = __webpack_require__(23);

var _size = __webpack_require__(44);

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
      this.props.onChangeDirectory((0, _path.join)(this.props.node.directory, this.props.node.name));
    }
  }, {
    key: 'handleItemClick',
    value: function handleItemClick(e) {
      if (this.props.node.name === '..') return;

      if (e.shiftKey) this.props.onNodeShiftClick(this.props.index);else if (e.ctrlKey) this.props.onNodeControlClick(this.props.index);else this.props.onNodeClick(this.props.index);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var icon = void 0;
      if (this.props.node.isDirectory) icon = _ref;else icon = _ref2;

      var name = (0, _jsx3.default)('span', {}, void 0, icon, ' ', this.props.node.name, this.props.node.target && ' ⇨ ' + this.props.node.target);
      if (this.props.node.isDirectory) {
        name = (0, _jsx3.default)('a', {
          className: 'link',
          onClick: this.handleNameClick
        }, void 0, (0, _jsx3.default)('strong', {}, void 0, name));
      }

      var size = void 0;
      if (this.props.node.isDirectory) {
        if (this.props.size && !this.props.size.isForbidden) {
          if (this.props.size.isLoading) size = _ref3;else size = (0, _size.human)(this.props.size.du);
        } else {
          size = _ref4;
        }

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
        size = (0, _size.human)(this.props.node.size);
      }

      var aux = null;
      if (this.props.node.name === '..') {
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
            return _this2.props.onCopyClick(_this2.props.node.name);
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
            return _this2.props.onMoveClick(_this2.props.node.name);
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
            return _this2.props.onDeleteClick(_this2.props.node.name);
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

exports.default = ListItem;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactScrollBox = __webpack_require__(20);

var _fa = __webpack_require__(15);

var _ScrollViewport = __webpack_require__(21);

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
      if (!this.props.content) {
        body = __('contents_view_message');
      } else {
        if (this.props.content.isLoading) {
          body = _ref;
        } else if (this.props.content.isForbidden) {
          body = __('forbidden_message');
        } else if (this.props.content.type !== 'TEXT') {
          body = __('type_' + this.props.content.type + '_message');
        } else {
          body = (0, _jsx3.default)('div', {
            className: 'scroll-wrapper'
          }, void 0, (0, _jsx3.default)(_reactScrollBox.GenericScrollBox, {
            permitHandleDragInterruption: false
          }, void 0, (0, _jsx3.default)(_ScrollViewport2.default, {
            classes: 'text-content',
            reactList: false
          }, void 0, this.props.content.base64 && atob(this.props.content.base64), _ref2)));
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

exports.default = ContentView;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(5);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactScrollBox = __webpack_require__(20);

var _fa = __webpack_require__(15);

var _momentTimezone = __webpack_require__(105);

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

var _ScrollViewport = __webpack_require__(21);

var _ScrollViewport2 = _interopRequireDefault(_ScrollViewport);

var _size = __webpack_require__(44);

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
      if (!this.props.info) {
        body = __('info_view_message');
      } else {
        if (this.props.info.isLoading) {
          body = _ref;
        } else if (this.props.info.isForbidden) {
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
          }, void 0, (0, _jsx3.default)('strong', {}, void 0, this.props.info.name)))), (0, _jsx3.default)('div', {
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
          }, void 0, (0, _jsx3.default)('strong', {}, void 0, this.props.info.parent)))), (0, _jsx3.default)('div', {
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
          }, void 0, (0, _jsx3.default)('strong', {}, void 0, this.props.info.size)))), (0, _jsx3.default)('div', {
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
          }, void 0, (0, _jsx3.default)('strong', {}, void 0, (0, _size.human)(this.props.info.size))))), (0, _jsx3.default)('div', {
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
          }, void 0, (0, _jsx3.default)('strong', {}, void 0, this.props.info.du)))), (0, _jsx3.default)('div', {
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
          }, void 0, (0, _jsx3.default)('strong', {}, void 0, (0, _size.human)(this.props.info.du))))), (0, _jsx3.default)('div', {
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
          }, void 0, (0, _jsx3.default)('strong', {}, void 0, this.props.info.modeNumber.toString(8))))), (0, _jsx3.default)('div', {
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
          }, void 0, (0, _jsx3.default)('strong', {}, void 0, this.props.info.modeString)))), (0, _jsx3.default)('div', {
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
          }, void 0, (0, _jsx3.default)('strong', {}, void 0, this.props.info.userId)))), (0, _jsx3.default)('div', {
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
          }, void 0, (0, _jsx3.default)('strong', {}, void 0, this.props.info.userName)))), (0, _jsx3.default)('div', {
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
          }, void 0, (0, _jsx3.default)('strong', {}, void 0, this.props.info.groupId)))), (0, _jsx3.default)('div', {
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
          }, void 0, (0, _jsx3.default)('strong', {}, void 0, this.props.info.groupName)))), (0, _jsx3.default)('div', {
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
          }, void 0, (0, _jsx3.default)('strong', {}, void 0, (0, _momentTimezone2.default)(this.props.info.atime).format('YYYY-MM-DD HH:mm:ss'))))), (0, _jsx3.default)('div', {
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
          }, void 0, (0, _jsx3.default)('strong', {}, void 0, (0, _momentTimezone2.default)(this.props.info.mtime).format('YYYY-MM-DD HH:mm:ss'))))), (0, _jsx3.default)('div', {
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
          }, void 0, (0, _jsx3.default)('strong', {}, void 0, (0, _momentTimezone2.default)(this.props.info.ctime).format('YYYY-MM-DD HH:mm:ss')))))), _ref2)));
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

exports.default = InfoView;

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = require("moment-timezone");

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(11);

var _pane = __webpack_require__(27);

var _size = __webpack_require__(37);

var _Pane = __webpack_require__(43);

var _Pane2 = _interopRequireDefault(_Pane);

var _commands = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  var selectedId = void 0;
  if (state.leftPane.share && state.leftPane.name) selectedId = state.leftPane.share + ':' + state.leftPane.path;

  return {
    which: 'RIGHT',
    breakpoint: state.app.breakpoint,
    mode: state.rightPane.mode,
    otherPath: state.leftPane.path,
    shares: state.user.shares,
    share: state.rightPane.share,
    directory: state.rightPane.directory,
    list: state.rightPane.list,
    sizes: state.sizes,
    selectedIndexes: state.rightPane.selectedIndexes,
    sortField: state.leftPane.sortField,
    sortDir: state.leftPane.sortDir,
    content: selectedId && state.contents[selectedId],
    info: selectedId && state.infos[selectedId],
    isActive: state.rightPane.isActive,
    isDisabled: !state.user.isAuthorized,
    isLoading: state.rightPane.isLoading,
    isForbidden: state.rightPane.isForbidden,
    isOtherVisible: state.leftPane.isVisible
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