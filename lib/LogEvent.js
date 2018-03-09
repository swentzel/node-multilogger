'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Use ES6 export syntax
 * http://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules
 *
 * Levels:
 * trace (0)
 * debug (1)
 * info (2)
 * warn (3)
 * error (4)
 */

var LogEvent = function LogEvent(params) {
  _classCallCheck(this, LogEvent);

  this.name = 'LogEvent';

  // default log level: INFO
  this.level = 'INFO';

  if (typeof params === 'undefined') {
    // this event doesn't make sense
  } else if (typeof params === 'string') {
    this.message = params;
  } else if ((typeof params === 'undefined' ? 'undefined' : _typeof(params)) === 'object' && params !== null) {
    if (typeof params.level === 'string') {
      this.level = params.level;
    }
    if (typeof params.data === 'undefined') {
      this.message = JSON.stringify(params);
    } else if (typeof params.data === 'string') {
      this.message = params.data;
    } else if (_typeof(params.data) === 'object') {
      this.message = JSON.stringify(params.data);
    }
  }
};

exports.default = LogEvent;
module.exports = exports['default'];