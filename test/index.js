import { assert } from 'chai';
import Multilogger from '../src/multiloggerModule';

describe('Basic test of Multilogger Module.', () => {
  it('MultiloggerModule should be available', () => {
    let logger = new Multilogger();
    assert(logger.name, 'MultiloggerModule');
  });
});
