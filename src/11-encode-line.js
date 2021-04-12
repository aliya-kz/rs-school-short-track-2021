/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  str.split('');
  for (let i = 0; i < str.length; i++) {
    if (str[i].length === str[i + 1].length + 1 && str[i].contains(str[i + 1])) {
      const n = parseInt(str[i].charAt(0), 10);
      str.splice(i, 2, (n + 1).toString() + str[i + 1]);
    }
    if (str[i] === str[i + 1]) {
      str.splice(i, 1, (2 + str[i]).toString());
    }
  }
  return str.join('');
}

module.exports = encodeLine;
