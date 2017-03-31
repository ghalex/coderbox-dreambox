(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Application = function Application(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    'div',
    { className: 'application' },
    children
  );
};

exports.default = Application;

},{"react":"react"}],2:[function(require,module,exports){
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

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var _pages = require('./pages');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Pages */


/** Routing */
document.startApp = function (container) {
  var store = (0, _store2.default)();
  var history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.hashHistory, store);

  _reactDom2.default.render(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouter.Router,
      { history: history },
      _react2.default.createElement(_reactRouter.Redirect, { from: '/', to: 'landingpage' }),
      _react2.default.createElement(
        _reactRouter.Route,
        { path: '/', component: _app2.default },
        _react2.default.createElement(_reactRouter.Route, { path: '/landingpage', component: _pages.LandingPage })
      )
    )
  ), container);
};

/** Start app */


/** Store */
document.startApp(document.getElementById('app'));

},{"./app":1,"./pages":4,"./store":6,"react":"react","react-dom":"react-dom","react-redux":"react-redux","react-router":"react-router","react-router-redux":"react-router-redux"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LandingPage = function LandingPage() {
  return _react2.default.createElement(
    'div',
    { className: 'page' },
    _react2.default.createElement(
      'section',
      { className: 'header' },
      _react2.default.createElement(
        'div',
        { className: 'content' },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h1',
            { className: 'elegantshadow' },
            'Dreambox'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Let customers buy your products directly within other mobile apps.'
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('img', { src: '/build/box3.png' })
        )
      ),
      _react2.default.createElement(
        'svg',
        { id: 'header-curve-shadow', width: '100%', height: '100', viewBox: '50 20 50 80', preserveAspectRatio: 'none' },
        _react2.default.createElement('path', { d: 'M0,100 C15,100 35,50 50,50 L50,50 C65,50 85,100 100,100 Z' })
      ),
      _react2.default.createElement(
        'svg',
        { id: 'header-curve', width: '100%', height: '100', viewBox: '50 20 50 80', preserveAspectRatio: 'none' },
        _react2.default.createElement('path', { fill: '#FFF', d: 'M0,100 C15,100 35,50 50,50 L50,50 C65,50 85,100 100,100 Z' })
      )
    )
  );
};

exports.default = LandingPage;

},{"react":"react"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LandingPage = undefined;

var _LandingPage = require('./LandingPage');

var _LandingPage2 = _interopRequireDefault(_LandingPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.LandingPage = _LandingPage2.default;

},{"./LandingPage":3}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reactRouterRedux = require('react-router-redux');

exports.default = (0, _redux.combineReducers)({
  'routing': _reactRouterRedux.routerReducer
});

},{"react-router-redux":"react-router-redux","redux":"redux"}],6:[function(require,module,exports){
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

},{"./rootReducer":5,"redux":"redux","redux-thunk":"redux-thunk"}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGFwcC5qcyIsInNyY1xcaW5kZXguanMiLCJzcmNcXHBhZ2VzXFxMYW5kaW5nUGFnZS5qcyIsInNyY1xccGFnZXNcXGluZGV4LmpzIiwic3JjXFxyb290UmVkdWNlci5qcyIsInNyY1xcc3RvcmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUNBQTs7Ozs7O0FBRUEsSUFBTSxjQUFjLFNBQWQsV0FBYyxPQUFrQjtBQUFBLE1BQWYsUUFBZSxRQUFmLFFBQWU7O0FBQ3BDLFNBQ0U7QUFBQTtBQUFBLE1BQUssV0FBVSxhQUFmO0FBQ0c7QUFESCxHQURGO0FBS0QsQ0FORDs7a0JBUWUsVzs7Ozs7QUNWZjs7OztBQUNBOztBQUNBOzs7O0FBR0E7Ozs7QUFHQTs7QUFDQTs7QUFHQTs7OztBQUNBOzs7O0FBRkE7OztBQUpBO0FBUUEsU0FBUyxRQUFULEdBQW9CLFVBQVUsU0FBVixFQUFxQjtBQUN2QyxNQUFNLFFBQVEsc0JBQWQ7QUFDQSxNQUFNLFVBQVUsc0VBQWtDLEtBQWxDLENBQWhCOztBQUVBLHFCQUFTLE1BQVQsQ0FDRTtBQUFBO0FBQUEsTUFBVSxPQUFPLEtBQWpCO0FBQ0U7QUFBQTtBQUFBLFFBQVEsU0FBUyxPQUFqQjtBQUNFLDZEQUFVLE1BQUssR0FBZixFQUFtQixJQUFHLGFBQXRCLEdBREY7QUFFRTtBQUFBO0FBQUEsVUFBTyxNQUFLLEdBQVosRUFBZ0Isd0JBQWhCO0FBQ0UsNERBQU8sTUFBSyxjQUFaLEVBQTJCLDZCQUEzQjtBQURGO0FBRkY7QUFERixHQURGLEVBU0UsU0FURjtBQVdELENBZkQ7O0FBaUJBOzs7QUE1QkE7QUE2QkEsU0FBUyxRQUFULENBQWtCLFNBQVMsY0FBVCxDQUF3QixLQUF4QixDQUFsQjs7Ozs7Ozs7O0FDakNBOzs7Ozs7QUFFQSxJQUFNLGNBQWMsU0FBZCxXQUFjLEdBQU07QUFDeEIsU0FDRTtBQUFBO0FBQUEsTUFBSyxXQUFVLE1BQWY7QUFDRTtBQUFBO0FBQUEsUUFBUyxXQUFVLFFBQW5CO0FBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxTQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQUksV0FBVSxlQUFkO0FBQUE7QUFBQSxXQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGLFNBREY7QUFLRTtBQUFBO0FBQUE7QUFDRSxpREFBSyxLQUFJLGlCQUFUO0FBREY7QUFMRixPQURGO0FBVUU7QUFBQTtBQUFBLFVBQUssSUFBRyxxQkFBUixFQUE4QixPQUFNLE1BQXBDLEVBQTJDLFFBQU8sS0FBbEQsRUFBd0QsU0FBUSxhQUFoRSxFQUE4RSxxQkFBb0IsTUFBbEc7QUFBeUcsZ0RBQU0sR0FBRSwyREFBUjtBQUF6RyxPQVZGO0FBV0U7QUFBQTtBQUFBLFVBQUssSUFBRyxjQUFSLEVBQXVCLE9BQU0sTUFBN0IsRUFBb0MsUUFBTyxLQUEzQyxFQUFpRCxTQUFRLGFBQXpELEVBQXVFLHFCQUFvQixNQUEzRjtBQUFrRyxnREFBTSxNQUFLLE1BQVgsRUFBa0IsR0FBRSwyREFBcEI7QUFBbEc7QUFYRjtBQURGLEdBREY7QUFpQkQsQ0FsQkQ7O2tCQW9CZSxXOzs7Ozs7Ozs7O0FDdEJmOzs7Ozs7UUFHRSxXOzs7Ozs7Ozs7QUNIRjs7QUFDQTs7a0JBRWUsNEJBQWdCO0FBQzdCO0FBRDZCLENBQWhCLEM7Ozs7Ozs7OztrQkNHQSxZQUFZO0FBQ3pCLE1BQUksYUFBYSxpREFBakI7QUFDQSxNQUFJLFFBQVEsK0NBQXlCLFlBQXpCLEVBQXVDLFVBQXZDLENBQVo7O0FBRUEsU0FBTyxLQUFQO0FBQ0QsQzs7QUFYRDs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNLGVBQWUsRUFBckIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgQXBwbGljYXRpb24gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdhcHBsaWNhdGlvbic+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwbGljYXRpb25cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5cbi8qKiBTdG9yZSAqL1xuaW1wb3J0IGNyZWF0ZVN0b3JlIGZyb20gJy4vc3RvcmUnXG5cbi8qKiBSb3V0aW5nICovXG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlLCBSZWRpcmVjdCwgaGFzaEhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgeyBzeW5jSGlzdG9yeVdpdGhTdG9yZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCdcblxuLyoqIFBhZ2VzICovXG5pbXBvcnQgQXBwbGljYXRpb24gZnJvbSAnYXBwJ1xuaW1wb3J0IHsgTGFuZGluZ1BhZ2UgfSBmcm9tICdwYWdlcydcblxuZG9jdW1lbnQuc3RhcnRBcHAgPSBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoKVxuICBjb25zdCBoaXN0b3J5ID0gc3luY0hpc3RvcnlXaXRoU3RvcmUoaGFzaEhpc3RvcnksIHN0b3JlKVxuXG4gIFJlYWN0RE9NLnJlbmRlcihcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIDxSb3V0ZXIgaGlzdG9yeT17aGlzdG9yeX0+XG4gICAgICAgIDxSZWRpcmVjdCBmcm9tPScvJyB0bz0nbGFuZGluZ3BhZ2UnIC8+XG4gICAgICAgIDxSb3V0ZSBwYXRoPScvJyBjb21wb25lbnQ9e0FwcGxpY2F0aW9ufT5cbiAgICAgICAgICA8Um91dGUgcGF0aD0nL2xhbmRpbmdwYWdlJyBjb21wb25lbnQ9e0xhbmRpbmdQYWdlfSAvPlxuICAgICAgICA8L1JvdXRlPlxuICAgICAgPC9Sb3V0ZXI+XG4gICAgPC9Qcm92aWRlcj4sXG4gICAgY29udGFpbmVyXG4gIClcbn1cblxuLyoqIFN0YXJ0IGFwcCAqL1xuZG9jdW1lbnQuc3RhcnRBcHAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBMYW5kaW5nUGFnZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0ncGFnZSc+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2hlYWRlcic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImVsZWdhbnRzaGFkb3dcIj5EcmVhbWJveDwvaDE+XG4gICAgICAgICAgICA8cD5MZXQgY3VzdG9tZXJzIGJ1eSB5b3VyIHByb2R1Y3RzIGRpcmVjdGx5IHdpdGhpbiBvdGhlciBtb2JpbGUgYXBwcy48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbWcgc3JjPScvYnVpbGQvYm94My5wbmcnIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3ZnIGlkPSdoZWFkZXItY3VydmUtc2hhZG93JyB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAnIHZpZXdCb3g9JzUwIDIwIDUwIDgwJyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSdub25lJz48cGF0aCBkPSdNMCwxMDAgQzE1LDEwMCAzNSw1MCA1MCw1MCBMNTAsNTAgQzY1LDUwIDg1LDEwMCAxMDAsMTAwIFonIC8+PC9zdmc+XG4gICAgICAgIDxzdmcgaWQ9J2hlYWRlci1jdXJ2ZScgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJyB2aWV3Qm94PSc1MCAyMCA1MCA4MCcgcHJlc2VydmVBc3BlY3RSYXRpbz0nbm9uZSc+PHBhdGggZmlsbD0nI0ZGRicgZD0nTTAsMTAwIEMxNSwxMDAgMzUsNTAgNTAsNTAgTDUwLDUwIEM2NSw1MCA4NSwxMDAgMTAwLDEwMCBaJyAvPjwvc3ZnPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExhbmRpbmdQYWdlXG4iLCJpbXBvcnQgTGFuZGluZ1BhZ2UgZnJvbSAnLi9MYW5kaW5nUGFnZSdcblxuZXhwb3J0IHtcbiAgTGFuZGluZ1BhZ2Vcbn1cbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHsgcm91dGVyUmVkdWNlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCdcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgJ3JvdXRpbmcnOiByb3V0ZXJSZWR1Y2VyXG59KVxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tICdyZWR1eC10aHVuaydcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuL3Jvb3RSZWR1Y2VyJ1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7fVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIGxldCBtaWRkbGV3YXJlID0gYXBwbHlNaWRkbGV3YXJlKHRodW5rTWlkZGxld2FyZSlcbiAgbGV0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgbWlkZGxld2FyZSlcblxuICByZXR1cm4gc3RvcmVcbn1cbiJdfQ==
