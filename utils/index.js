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
