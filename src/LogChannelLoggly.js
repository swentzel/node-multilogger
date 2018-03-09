
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
    if (typeof process.env.LOGGLY_TOKEN === 'string') {
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
    let returnStatus = 'NOK';
    
    // Performing a POST request
    const postRequest = await axios.post(`http://logs-01.loggly.com/inputs/${this.logglyToken}/tag/http/`, { label: label, message: message, process: this.process });
    
    if (postRequest.status === 200) {
      returnStatus = 'OK';
    } else {
      returnStatus = postRequest.status;  
    }
    
    return returnStatus;
  }
  
  /**
   * getProcessInfo()
   */
  getProcessInfo() {
    const hostname = process.env.HOSTNAME;
    const port = process.env.PORT;
    const user = process.env.USER;
    const pwd = process.env.PWD;
    const lang = process.env.LANG;
    
    
    this.process = {
      hostname: hostname,
      port: port,
      user: user,
      pwd: pwd,
      lang: lang,
    };
  }
}
