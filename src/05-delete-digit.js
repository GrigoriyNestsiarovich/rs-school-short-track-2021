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
  const string = n.toString();
  let number = 0;
  for (let i = 0; i < string.length; i++) {
    const newNumber = parseInt((string.slice(0, i) + string.slice(i + 1)), 10);
    number = Math.max(number, newNumber);
  }
  return number;
}

module.exports = deleteDigit;
