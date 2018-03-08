import LogChannelConsole from './LogChannelConsole';
import LogEvent from './LogEvent';

/**
 * Use ES6 export syntax
 * http://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules
 */

export default class Multilogger {
  constructor(params) {
    this.name = 'MultiloggerModule';
    
    // configure logger
    if (typeof params === 'object' && params !== null) {
      this.verbose = params.verbose;
    } else {
      this.verbose = false;
    }
    
    // create channels
    this.channels = [];
    this.addChannel(new LogChannelConsole(params));
    
    
  }
  
  /**
   * addChannel
   * 
   */
  addChannel(channel) {
    this.channels.push(channel);
  }
  
  /**
   * hasChannel
   * @params { string } channelName - Name of the channel
   * @return { boolean } Return true, if channel is attached to Multilogger
   */
  hasChannel(channelName) {
    let hasChannel = false;
    // check name of all channels
    for (let i = 0; i < this.channels.length; i++) {
      if(this.channels[i].name === channelName) {
        hasChannel = true;
      }   
    }
    
    return hasChannel;
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
    // write event into every channel
    for (let i = 0; i < this.channels.length; i++) {
      this.channels[i].writeLogEvent(event);   
    }
  }
}
