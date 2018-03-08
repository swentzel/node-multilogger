'use strict';

const axios = require('axios');



export default class LogChannelLoggly {
  constructor(params) {
    this.name = 'LogChannelLoggly';
    this.isInitialized = false;
    
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
    
  }
  
  
  /**
   * writeLogEvent
   */
  writeLogEvent(event) {
    const label = `[LOGGLY][${event.level}]`;
    const message = ` ${event.message}`;
    
    // Performing a POST request
    let postRequest = axios.post(`http://logs-01.loggly.com/inputs/${this.logglyToken}/tag/http/`, { label: label, message: message });
    postRequest.then(function(response){
        console.log('axios call successful');
        console.log(response);
      });
    postRequest.catch(function (error) {
        console.log(error);
    });
    
    return postRequest;
  }
}
