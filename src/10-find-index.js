/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let k = 0;
  let f = array.length - 1;

  while (k <= f) {
    const i = Math.floor((k + f) / 2);
    if (array[i] === value) {
      return i;
    }
    if (array[i] < value) {
      k = i + 1;
    } else {
      f = i - 1;
    }
  }
  return false;
}

module.exports = findIndex;
