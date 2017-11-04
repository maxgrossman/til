#!/usr/bin/env node

var til = require('commander');
var init = require('./bin/init');

// main program

til
  .version('0.0.1')
  .option('-i, --init', 'initialize your .tilrc')
  .option('-n, --name', 'name of thing you learned')
  .option('-c, --category', 'category to which the thing you learned belongs')
  .parse(process.argv);

// init
if (til.init) { init(); }
