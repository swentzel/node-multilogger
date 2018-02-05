let Multilogger = require('../lib/MultiloggerModule');

// create Multilogger 
let logger = new Multilogger();

// run logging on default channel (console) for all levels
logger.log('Multilogger created for testing');
logger.trace('Multilogger message on level TRACE');
logger.debug('Multilogger message on level DEBUG');
logger.info('Multilogger message on level INFO');
logger.warn('Multilogger message on level WARN');
logger.error('Multilogger message on level ERROR');

// log Array
logger.info(['Volvo', 'Chrysler', 'Seat']);

// log Object
logger.info({ fruits: ['Apple', 'Banana', 'Berry'], vegetables: ['Tomato', 'Beans']});

