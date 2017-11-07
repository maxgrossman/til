#!/usr/bin/env node

var til = require('commander');
var init = require('./bin/init');
var categorize = require('./bin/categorize');
var noCategory = require('./utils').noCategory;
var noTitle = require('./utils').noTitle;

// main program

til
  .version('0.0.1')
  .option('-i, --init', 'initialize your .tilrc')
  .option('-t, --title', 'name of thing you learned')
  .option('-c, --category', 'category to which the thing you learned belongs')
  .parse(process.argv);

// init
if (til.init) { init(); }
// categorize
if (til.category && til.title) { categorize(til.category, til.title); } else {
  if (til.title) { noCategory(); }
  if (til.category) { noTitle(); }
}