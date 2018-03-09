'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var axios = require('axios');

var LogChannelLoggly = function () {
  function LogChannelLoggly(params) {
    _classCallCheck(this, LogChannelLoggly);

    this.name = 'LogChannelLoggly';
    this.isInitialized = false;
    this.process = {};

    // configure channel
    if ((typeof params === 'undefined' ? 'undefined' : _typeof(params)) === 'object' && params !== null) {
      this.verbose = params.verbose;
    } else {
      this.verbose = false;
    }

    // Loggly API-Key
    if (typeof process.env.LOGGLY_TOKEN === 'string') {
      this.logglyToken = process.env.LOGGLY_TOKEN;
      this.isInitialized = true;
    }

    this.getProcessInfo();
  }

  /**
   * writeLogEvent
   */


  _createClass(LogChannelLoggly, [{
    key: 'writeLogEvent',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
        var label, message, returnStatus, postRequest;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                label = '[' + event.level + ']';
                message = ' ' + event.message;
                returnStatus = 'NOK';

                // Performing a POST request

                _context.next = 5;
                return axios.post('http://logs-01.loggly.com/inputs/' + this.logglyToken + '/tag/http/', { label: label, message: message, process: this.process });

              case 5:
                postRequest = _context.sent;


                if (postRequest.status === 200) {
                  returnStatus = 'OK';
                } else {
                  returnStatus = postRequest.status;
                }

                return _context.abrupt('return', returnStatus);

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function writeLogEvent(_x) {
        return _ref.apply(this, arguments);
      }

      return writeLogEvent;
    }()

    /**
     * getProcessInfo()
     */

  }, {
    key: 'getProcessInfo',
    value: function getProcessInfo() {
      var hostname = process.env.HOSTNAME;
      var port = process.env.PORT;
      var user = process.env.USER;
      var pwd = process.env.PWD;
      var lang = process.env.LANG;

      this.process = {
        hostname: hostname,
        port: port,
        user: user,
        pwd: pwd,
        lang: lang
      };
    }
  }]);

  return LogChannelLoggly;
}();

exports.default = LogChannelLoggly;
module.exports = exports['default'];