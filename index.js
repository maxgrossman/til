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
  .option('-t, --title <t>', 'name of thing you learned')
  .option('-c, --category <c>', 'category to which the thing you learned belongs')
  .option('-u --update', 'decision to update existing knowledge nugget')
  .parse(process.argv);

// init
if (til.init) { init(); }
// categorize
if (til.category && til.title) {
  categorize(til.category, til.title, til.args.join(' '), til.update);
} else {
  if (til.title) { noCategory(); }
  if (til.category) { noTitle(); }
}
