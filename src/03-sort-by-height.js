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
  const k = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) k.push(arr[i]);
  }
  k.sort((value1, value2) => value1 - value2);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      k.splice(i, 0, arr[i]);
    }
  }
  return k;
}

module.exports = sortByHeight;
