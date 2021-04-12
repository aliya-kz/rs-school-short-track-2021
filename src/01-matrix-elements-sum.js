/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let res = 0;
  for (let i = 0; i < matrix.length; i++) {
    const a = matrix[i];
    let b;
    if (a < matrix.length - 1) {
      b = matrix[i + 1];
    }

    for (let k = 0; k < a.length - 1; k++) {
      if (a[k] === 0) {
        b[k] = 0;
      }
      res += a[k];
    }
  }
  return res;
}

module.exports = getMatrixElementsSum;
