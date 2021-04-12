/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const a = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      a.push(i);
      arr.splice(i, 1);
    }
  }
  arr.sort();
  for (let k = 0; k < a.length; k++) {
    arr.splice(a[k], 0, -1);
  }
  return arr;
}

module.exports = sortByHeight;
