'use strict';
const axios = require('axios');

export default class LogChannelLoggly {
  constructor(params) {
    this.name = 'LogChannelLoggly';
    this.isInitialized = false;
    this.process = {};
    
    // configure channel
    if (typeof params === 'object' && params !== null) {
      this.verbose = params.verbose;
    } else {
      this.verbose = false;
    }
    
    // Loggly API-Key
    if(typeof process.env.LOGGLY_TOKEN === 'string') {
      this.logglyToken = process.env.LOGGLY_TOKEN;
      this.isInitialized = true;
    }
    
    this.getProcessInfo();
    
  }
  
  
  /**
   * writeLogEvent
   */
  async writeLogEvent(event) {
    const label = `[${event.level}]`;
    const message = ` ${event.message}`;
    
    // Performing a POST request
    let postRequest = await axios.post(`http://logs-01.loggly.com/inputs/${this.logglyToken}/tag/http/`, { label: label, message: message, process: this.process });
    
    if(postRequest.status === 200) {
      return 'OK';
    } else {
      return postRequest.status;  
    }
  }
  
  /**
   * getProcessInfo()
   */
  getProcessInfo() {
    let hostname = process.env.HOSTNAME;
    let port = process.env.PORT;
    let user = process.env.USER;
    let pwd = process.env.PWD;
    let lang = process.env.LANG;
    
    
    this.process = {
      hostname: hostname,
      port: port,
      user: user,
      pwd: pwd,
      lang: lang
    }
  }
}
