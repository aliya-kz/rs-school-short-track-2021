/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    const arr = matrix[i];
    const arrNext;
    const arrPrev;
    if (i < matrix.length - 1) {
      arrNext = matrix[i + 1];
    }

    if (i > 0) {
    arrPrev = matrix[i - 1];
    }

    for (let k = 0; k < arr.length; k++) {
      if (arr[k] === false) {
        arr[k] = 0;
        if (k > 0 && arr[k - 1] === true) {
          arr[k]++;
        }
        if (k < arr.length && arr[k + 1] === true) {
          arr[k]++;
        }
        if (k > 0 && i < matrix.length - 1 && arrNext[k - 1] === true) {
          arr[k]++;
        }
        if (k < arr.length && i < matrix.length - 1 && arrNext[k + 1] === true) {
          arr[k]++;
        }
        if (arrNext[k] === true) {
          arr[k]++;
        }
        if (k > 0 && i > 0 && arrPrev[k - 1] === true) {
          arr[k]++;
        }
        if (k < arr.length && i > 0 && arrPrev[k + 1] === true) {
          arr[k]++;
        }
        if (i > 0 && arrPrev[k] === true) {
          arr[k]++;
        }
      }
    }
  }

  for (let m = 0; m < matrix.length; m++) {
    const arra = matrix[m];
    for (let n = 0; n < arra.length; n++) {
      if (arra[n] === true) {
        arra[n] = 1;
      }
    }
  }
  return matrix;
}

module.exports = minesweeper;
