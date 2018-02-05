'use strict';
require("babel-register");  // require babel to be able to write ES6 syntax also in test cases

var ex1 = require('./example1');

module.exports ={
  ex1: ex1,
};
