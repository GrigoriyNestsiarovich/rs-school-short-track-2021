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
  let k = 1;
  let string = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i + 1] && str[i] === str[i + 1]) {
      k++;
    } else {
      if (k > 1) {
        string += k + str[i];
      } else {
        string += str[i];
      }
      k = 1;
    }
  }
  return string;
}

module.exports = encodeLine;
