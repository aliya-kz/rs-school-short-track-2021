/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  n.toString().split('');
  const mi = Math.min(n);
  n.splice(n.indexOf(mi, 0), 1);
  n.sort().revert().join('');
  return parseInt(n, 10);
}

module.exports = deleteDigit;
