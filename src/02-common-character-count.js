/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const string1 = s1;
  let string2 = s2;
  let counter = 0;
  let index = -1;
  for (let i = 0; i < string1.length; i++) {
    index = string2.indexOf(string1.charAt(i));
    if (index > -1) {
      counter++;
      string2 = string2.substr(0, index) + string2.substr(index + 1);
    }
  }
  return counter;
}

module.exports = getCommonCharacterCount;
