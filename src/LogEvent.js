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

export default class LogEvent {
  constructor(params) {
    this.name = 'LogEvent';
    
    // default log level: INFO
    this.level = 'INFO';
    
    
    if (typeof params === 'undefined') {
      // this event doesn't make sense
    } else if (typeof params === 'string') {
      this.message = params;
    } else if (typeof params === 'object' && params !== null) {
      if (typeof params.level === 'string') {
        this.level = params.level;
      }
      if (typeof params.data === 'undefined') {
        this.message = JSON.stringify(params);
      } else if (typeof params.data === 'string') {
        this.message = params.data;
      } else if (typeof params.data === 'object') {
        this.message = JSON.stringify(params.data);
      }
    }
  }
}
