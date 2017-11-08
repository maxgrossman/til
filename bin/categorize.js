var readFile = require('fs').readFile;
var writeFile = require('fs').writeFile;

/**
 * adds knowledge nugget to tilrc, in correct category & title
 * @param cat {string} knowledge nugget category
 * @param title {string} knowledge nugget title
 * @param knowledgeNug {string} the knowledge nugget!
 * @param update {bool} bool to indicate user is trying to update existingn nugget
 */
module.exports = (cat, title, knowledgeNug, update) => {
  readFile('.tilrc', (err, tilrc) => {
    if (err) { throw new Error('Could not find .tilrc'); }
    tilrc = JSON.parse(tilrc.toString());
    // prevent user from inadvertent updates
    if (tilrc[cat][title] && !update) {
      throw new Error('You are attempting to update an existing knowledge nugget without a -u! Please use if you want to update this nugget.');
    }
    // update and overwrite tilrc
    tilrc[cat][title] = knowledgeNug;
    writeFile('.tilrc', JSON.stringify(tilrc), (err) => {
      if (err) { throw new Error('Issue updating tilrc'); }
    });
  });
};
