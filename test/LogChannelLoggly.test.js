'use strict';
// babel-polyfill is needed to use ES6 syntax like async / await
import 'babel-polyfill';
import { assert } from 'chai';
const expect = require('chai').expect;
const axios = require('axios');

import Multilogger from '../src/MultiloggerModule';
import LogChannelConsole from '../src/LogChannelConsole';
import LogChannelLoggly from '../src/LogChannelLoggly';
import LogEvent from '../src/LogEvent';

/**
 * Test LogChannelLoggly
 */
const desc = `Test LogChannelLoggly`;
let logger = new Multilogger();
let logChannelLoggly = new LogChannelLoggly();

  
describe(`${desc} class basics`, () => {
  
  it('Name of MultiloggerModule instance should be MultiloggerModule', () => {
    assert(logger.name, 'MultiloggerModule');
  });
  
  it('logger has no channel with name LogChannelLoggly', () => {
      expect(logger.hasChannel('LogChannelLoggly')).to.be.false;
  });
  
  it('Name of LogChannel instance should be LogChannelLoggly', () => {
    assert(logChannelLoggly.name, 'LogChannelLoggly');
  });
  
  it('LogChannelLoggly could be initialized (process.env.LOGGLY_TOKEN)', () => {
    expect(logChannelLoggly.isInitialized).to.be.true;
  });
  
  it('add logChannelLoggly to logger', () => {
      logger.addChannel(logChannelLoggly);
      assert(logger.hasChannel('LogChannelLoggly'), true);
  });
});


describe(`${desc} send log events to Loggly`, () => {
    
    it('send a basic log event to Loggly', async () => {
        let result = await logger.log('Log some data for testing channel logChannelLoggly with await');
        expect(result).to.equal('OK');
    });
    
    
});


