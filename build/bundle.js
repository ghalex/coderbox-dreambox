(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

var _reactRouter = require('react-router');

var _reactRouterRedux = require('react-router-redux');

var _pages = require('./pages');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Store */
document.startApp = function (container) {
  var store = (0, _store2.default)();
  var history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.hashHistory, store);

  _reactDom2.default.render(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouter.Router,
      { history: history },
      _react2.default.createElement(_reactRouter.Route, { path: '/', component: _pages.HomePage })
    )
  ), container);
};

/** Start app */


/** Pages */


/** Routing */
document.startApp(document.getElementById('app'));

},{"./pages":3,"./store":5,"react":"react","react-dom":"react-dom","react-redux":"react-redux","react-router":"react-router","react-router-redux":"react-router-redux"}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomePage = function HomePage() {
  return _react2.default.createElement(
    'div',
    { className: 'page' },
    'Homepage'
  );
};

exports.default = HomePage;

},{"react":"react"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomePage = undefined;

var _HomePage = require('./HomePage');

var _HomePage2 = _interopRequireDefault(_HomePage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.HomePage = _HomePage2.default;

},{"./HomePage":2}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reactRouterRedux = require('react-router-redux');

exports.default = (0, _redux.combineReducers)({
  'routing': _reactRouterRedux.routerReducer
});

},{"react-router-redux":"react-router-redux","redux":"redux"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var middleware = (0, _redux.applyMiddleware)(_reduxThunk2.default);
  var store = (0, _redux.createStore)(_rootReducer2.default, initialState, middleware);

  return store;
};

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _rootReducer = require('./rootReducer');

var _rootReducer2 = _interopRequireDefault(_rootReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {};

},{"./rootReducer":4,"redux":"redux","redux-thunk":"redux-thunk"}]},{},[1]);
