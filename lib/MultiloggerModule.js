'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LogChannelConsole = require('./LogChannelConsole');

var _LogChannelConsole2 = _interopRequireDefault(_LogChannelConsole);

var _LogEvent = require('./LogEvent');

var _LogEvent2 = _interopRequireDefault(_LogEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Use ES6 export syntax
 * http://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules
 */

var Multilogger = function () {
  function Multilogger() {
    _classCallCheck(this, Multilogger);

    this.name = 'MultiloggerModule';

    // create channels
    this.channels = [];
    this.addChannel(new _LogChannelConsole2.default());
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
     * log
     * 
     */

  }, {
    key: 'log',
    value: function log(data) {
      return this.info(data);
    }

    /**
     * trace
     * 
     */

  }, {
    key: 'trace',
    value: function trace(data) {
      var event = new _LogEvent2.default({ level: 'TRACE', data: data });
      this.writeLogEvent(event);
      return event;
    }

    /**
     * debug
     * 
     */

  }, {
    key: 'debug',
    value: function debug(data) {
      var event = new _LogEvent2.default({ level: 'DEBUG', data: data });
      this.writeLogEvent(event);
      return event;
    }

    /**
     * info
     * 
     */

  }, {
    key: 'info',
    value: function info(data) {
      var event = new _LogEvent2.default({ level: 'INFO', data: data });
      this.writeLogEvent(event);
      return event;
    }

    /**
     * warn
     * 
     */

  }, {
    key: 'warn',
    value: function warn(data) {
      var event = new _LogEvent2.default({ level: 'WARN', data: data });
      this.writeLogEvent(event);
      return event;
    }

    /**
     * error
     * 
     */

  }, {
    key: 'error',
    value: function error(data) {
      var event = new _LogEvent2.default({ level: 'ERROR', data: data });
      this.writeLogEvent(event);
      return event;
    }

    /**
     * writeLogEvent
     */

  }, {
    key: 'writeLogEvent',
    value: function writeLogEvent(event) {
      for (var i = 0; i < this.channels.length; i++) {
        this.channels[i].writeLogEvent(event);
      }
    }
  }]);

  return Multilogger;
}();

exports.default = Multilogger;
module.exports = exports['default'];