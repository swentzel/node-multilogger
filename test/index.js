require("babel-core/register");
require("babel-polyfill");

import { assert } from 'chai';
import Multilogger from '../src/MultiloggerModule';
import LogChannelConsole from '../src/LogChannelConsole';
import LogEvent from '../src/LogEvent';


// create test data
let strMessage = 'Test plain string log message';
let objMessage = {
  'someKey': 'here is some value',
  'fruits': ['Appel', 'Banana', 'Berry']
};


// create Multilogger 
let logger = new Multilogger();

// run logging on default channel (console) for all levels
logger.log('Multilogger created for testing');
logger.trace('Multilogger message on level TRACE');
logger.debug('Multilogger message on level DEBUG');
logger.info('Multilogger message on level INFO');
logger.warn('Multilogger message on level WARN');
logger.error('Multilogger message on level ERROR');



describe('Basic test of Multilogger Module.', () => {
  
  it('Name of MultiloggerModule instance should be MultiloggerModule', () => {
    let logger = new Multilogger();
    assert(logger.name, 'MultiloggerModule');
  });
  
  it('create a plain string log event without level (defaults to INFO)', () => {
    let event = new LogEvent(strMessage);
    
    assert(event.message, strMessage);
    assert(event.level, 'INFO');
    
  });
  
  it('create a plain string log event with level "WARN"', () => {
    let event = new LogEvent({ level: 'WARN', data: strMessage });
    
    assert(event.message, strMessage);
    assert(event.level, 'WARN');
    
  });
  
  it('create a log event object without level (defaults to INFO)', () => {
    let event = new LogEvent(objMessage);
    
    assert(event.message, JSON.stringify(objMessage));
    assert(event.level, 'INFO');
    
  });
  
  it('create a log event object with level "ERROR"', () => {
    let event = new LogEvent({ level: 'ERROR', data: objMessage });
    
    assert(event.message, JSON.stringify(objMessage));
    assert(event.level, 'ERROR');
    
  });
  
});



// test LogChannelLoggly
require('./LogChannelLoggly.test');