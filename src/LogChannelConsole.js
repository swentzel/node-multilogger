/**
 * Use ES6 export syntax
 * http://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules
 */

export default class LogChannelConsole {
  constructor(params) {
    this.name = 'LogChannelConsole';
    
    // configure channel
    if (typeof params === 'object' && params !== null) {
      this.verbose = params.verbose;
    } else {
      this.verbose = false;
    }
    
    
    
    this.consoleColors = {
      reset: '\x1b[0m',
      bright: '\x1b[1m',
      dim: '\x1b[2m',
      underscore: '\x1b[4m',
      blink: '\x1b[5m',
      reverse: '\x1b[7m',
      hidden: '\x1b[8m',
      // foreground colors
      fgBlack: '\x1b[30m',
      fgRed: '\x1b[31m',
      fgGreen: '\x1b[32m',
      fgYellow: '\x1b[33m',
      fgBlue: '\x1b[34m',
      fgMagenta: '\x1b[35m',
      fgCyan: '\x1b[36m',
      fgWhite: '\x1b[37m',
      // background colors
      bgBlack: '\x1b[40m',
      bgRed: '\x1b[41m',
      bgGreen: '\x1b[42m',
      bgYellow: '\x1b[43m',
      bgBlue: '\x1b[44m',
      bgMagenta: '\x1b[45m',
      bgCyan: '\x1b[46m',
      bgWhite: '\x1b[47m',
    };
  }
  
  
  /**
   * writeLogEvent
   */
  writeLogEvent(event) {
    const label = `[CONSOLE][${event.level}]`;
    const message = ` ${event.message}`;
    
    if (event.level === 'TRACE') {
      console.log(this.consoleColors.bgWhite + label + this.consoleColors.reset + message);  
    } else if (event.level === 'DEBUG') {
      console.log(this.consoleColors.fgCyan + label + this.consoleColors.reset + message);
    } else if (event.level === 'WARN') {
      console.log(this.consoleColors.fgRed + label + this.consoleColors.reset + message);
    } else if (event.level === 'ERROR') {
      console.log(this.consoleColors.fgWhite + this.consoleColors.bgRed + label + this.consoleColors.reset + message);
    } else {
      // default, goes also for INFO
      console.log(this.consoleColors.fgYellow + label + this.consoleColors.reset + message);
    }
    
    return "OK";
  }
}
