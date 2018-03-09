'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LogChannelConsole = require('./LogChannelConsole');

var _LogChannelConsole2 = _interopRequireDefault(_LogChannelConsole);

var _LogEvent = require('./LogEvent');

var _LogEvent2 = _interopRequireDefault(_LogEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Use ES6 export syntax
 * http://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules
 */

var Multilogger = function () {
  function Multilogger(params) {
    _classCallCheck(this, Multilogger);

    this.name = 'MultiloggerModule';

    // configure logger
    if ((typeof params === 'undefined' ? 'undefined' : _typeof(params)) === 'object' && params !== null) {
      this.verbose = params.verbose;
    } else {
      this.verbose = false;
    }

    // create channels
    this.channels = [];
    this.addChannel(new _LogChannelConsole2.default(params));
  }

  /**
   * addChannel
   * 
   */


  _createClass(Multilogger, [{
    key: 'addChannel',
    value: function addChannel(channel) {
      this.channels.push(channel);
    }

    /**
     * hasChannel
     * @params { string } channelName - Name of the channel
     * @return { boolean } Return true, if channel is attached to Multilogger
     */

  }, {
    key: 'hasChannel',
    value: function hasChannel(channelName) {
      var hasChannel = false;
      // check name of all channels
      for (var i = 0; i < this.channels.length; i++) {
        if (this.channels[i].name === channelName) {
          hasChannel = true;
        }
      }

      return hasChannel;
    }

    /**
     * log
     * 
     */

  }, {
    key: 'log',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.info(data);

              case 2:
                return _context.abrupt('return', _context.sent);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function log(_x) {
        return _ref.apply(this, arguments);
      }

      return log;
    }()

    /**
     * trace
     * 
     */

  }, {
    key: 'trace',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
        var event;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event = new _LogEvent2.default({ level: 'TRACE', data: data });
                _context2.next = 3;
                return this.writeLogEvent(event);

              case 3:
                return _context2.abrupt('return', _context2.sent);

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function trace(_x2) {
        return _ref2.apply(this, arguments);
      }

      return trace;
    }()

    /**
     * debug
     * 
     */

  }, {
    key: 'debug',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(data) {
        var event;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                event = new _LogEvent2.default({ level: 'DEBUG', data: data });
                _context3.next = 3;
                return this.writeLogEvent(event);

              case 3:
                return _context3.abrupt('return', _context3.sent);

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function debug(_x3) {
        return _ref3.apply(this, arguments);
      }

      return debug;
    }()

    /**
     * info
     * 
     */

  }, {
    key: 'info',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(data) {
        var event;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                event = new _LogEvent2.default({ level: 'INFO', data: data });
                _context4.next = 3;
                return this.writeLogEvent(event);

              case 3:
                return _context4.abrupt('return', _context4.sent);

              case 4:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function info(_x4) {
        return _ref4.apply(this, arguments);
      }

      return info;
    }()

    /**
     * warn
     * 
     */

  }, {
    key: 'warn',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(data) {
        var event;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                event = new _LogEvent2.default({ level: 'WARN', data: data });
                _context5.next = 3;
                return this.writeLogEvent(event);

              case 3:
                return _context5.abrupt('return', _context5.sent);

              case 4:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function warn(_x5) {
        return _ref5.apply(this, arguments);
      }

      return warn;
    }()

    /**
     * error
     * 
     */

  }, {
    key: 'error',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(data) {
        var event;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                event = new _LogEvent2.default({ level: 'ERROR', data: data });
                _context6.next = 3;
                return this.writeLogEvent(event);

              case 3:
                return _context6.abrupt('return', _context6.sent);

              case 4:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function error(_x6) {
        return _ref6.apply(this, arguments);
      }

      return error;
    }()

    /**
     * writeLogEvent
     */

  }, {
    key: 'writeLogEvent',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(event) {
        var result, i;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                result = 'OK';
                // write event into every channel

                i = 0;

              case 2:
                if (!(i < this.channels.length)) {
                  _context7.next = 9;
                  break;
                }

                _context7.next = 5;
                return this.channels[i].writeLogEvent(event);

              case 5:
                result = _context7.sent;

              case 6:
                i++;
                _context7.next = 2;
                break;

              case 9:
                return _context7.abrupt('return', result);

              case 10:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function writeLogEvent(_x7) {
        return _ref7.apply(this, arguments);
      }

      return writeLogEvent;
    }()
  }]);

  return Multilogger;
}();

exports.default = Multilogger;
module.exports = exports['default'];