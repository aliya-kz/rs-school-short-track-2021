/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  n.toString().split('');
  let sum = 0;
  while (sum.length >= 0) {
    for (let i = 0; i < n.length; i++) {
      sum += parseInt(n[i], 10);
    }
    sum.toString().split('');
    if (sum.length === 1) {
      break;
    }
  }
  return parseInt(sum[0], 10);
}

module.exports = getSumOfDigits;
