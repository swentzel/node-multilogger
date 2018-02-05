

export default class LogChannelLoggly {
  constructor(params) {
    this.name = 'LogChannelLoggly';
    
    // configure channel
    if (typeof params === 'object' && params !== null) {
      this.verbose = params.verbose;
    } else {
      this.verbose = false;
    }
    
    
    
  }
  
  
  /**
   * writeLogEvent
   */
  writeLogEvent(event) {
    const label = `[${event.level}]`;
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
  }
}
