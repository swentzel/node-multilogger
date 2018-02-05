import LogChannelConsole from '../src/LogChannelConsole';
import LogEvent from '../src/LogEvent';

/**
 * Use ES6 export syntax
 * http://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules
 */

export default class Multilogger {
  constructor() {
    this.name = 'MultiloggerModule';
    
    // create channels
    this.channels = [];
    this.addChannel(new LogChannelConsole());
  }
  
  /**
   * addChannel
   * 
   */
  addChannel(channel) {
    this.channels.push(channel);
  }
  
  /**
   * log
   * 
   */
  log(data) {
    return this.info(data);
  }
  
  /**
   * trace
   * 
   */
  trace(data) {
    const event = new LogEvent({ level: 'TRACE', data });
    this.writeLogEvent(event);
    return event;
  }
  
  /**
   * debug
   * 
   */
  debug(data) {
    const event = new LogEvent({ level: 'DEBUG', data });
    this.writeLogEvent(event);
    return event;
  }
  
  /**
   * info
   * 
   */
  info(data) {
    const event = new LogEvent({ level: 'INFO', data });
    this.writeLogEvent(event);
    return event;
  }
  
  /**
   * warn
   * 
   */
  warn(data) {
    const event = new LogEvent({ level: 'WARN', data });
    this.writeLogEvent(event);
    return event;
  }
  
  /**
   * error
   * 
   */
  error(data) {
    const event = new LogEvent({ level: 'ERROR', data });
    this.writeLogEvent(event);
    return event;
  }
  
  /**
   * writeLogEvent
   */
  writeLogEvent(event) {
    for (let i = 0; i < this.channels.length; i++) {
      this.channels[i].writeLogEvent(event);   
    }
  }
}
