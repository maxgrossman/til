// HELPERS //

/**
 * converts user response into .tilrc object
 * @func parseInitPropt
 * @param {string} prompt string from user response to prompt
 * @return {object} .tilrc object
 */
exports.parseInitPrompt = (prompt) => {
  const tilrc = {};
  const categories = prompt.split(',');
  categories.forEach(cat => { tilrc[cat.trim()] = {}; });
  return tilrc;
};

// ERRORS //

/**
 * throws error for when a user does not provide a category
 */
exports.noCategory = () => {
  throw new Error('New knowledge nuggets must be apart of at least 1 category!');
};

/**
 * throw error for when user does not provide a title
 */
exports.noTitle = () => {
  throw new Error('New knowledge nuggest must have a title!');
};
