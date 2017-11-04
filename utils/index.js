/**
 * converts user response into .tilrc object
 * @func parseInitPropt
 * @param {string} prompt string from user response to prompt
 * @return {object} .tilrc object
 */
exports.parseInitPrompt = (prompt) => {
  const tilrc = { categories: {} };
  const categories = prompt.split(',');
  categories.forEach(cat => { tilrc.categories[cat.trim()] = {}; });
  return tilrc;
};
