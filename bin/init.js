var prompt = require('prompt');
var colors = require('colors/safe');
var writeFile = require('fs').writeFile;
var parseInitPrompt = require('../utils').parseInitPrompt;

/**
 * @func init
 * prompts user with info to init .tilrc, then writes it
 */
module.exports = () => {
  prompt.message = colors.rainbow('');
  prompt.start();
  prompt.get({
    properties: {
      categories: {
        description: colors.white('Categories for what you learn'),
        message: colors.red('categories must be comma delimited, like: node, bash, python'),
        pattern: /,/,
        type: 'string'
      }
    }
  }, (err, res) => {
    if (err) { throw new Error('Error building .tilrc'); }
    // add categories
    const tilrc = parseInitPrompt(res.categories);
    // write to file
    writeFile('./.tilrc', JSON.stringify(tilrc), (err) => {
      if (err) { throw new Error('there was an error writing the .tilrc file'); }
      console.log(colors.green('.tilrc initialized!'));
    });
  });
};
