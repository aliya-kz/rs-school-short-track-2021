/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let res = true;
  const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  if (n.length !== 17) {
    res = false;
  } else {
    for (let i = 0; i < n.length; i++) {
      if (i === 2 || i === 5 || i === 8 || i === 11 || i === 14) {
        if (n.charAt(i) !== '-') {
          res = false;
        }
        if (n.charAt(i) === '-') {
          if (i === 0 || i === 1 || i === 3 || i === 4 || i === 6 || i === 7 || i === 9 || i === 10
          || i === 12 || i === 13 || i === 15 || i === 16) {
            if (!hex.contains(n.charAt(i))) {
              res = false;
            }
            if (hex.contains(n.charAt(i))) {
              res = true;
            }
          }
        }
      }
    }
  }
  return res;
}

module.exports = isMAC48Address;
