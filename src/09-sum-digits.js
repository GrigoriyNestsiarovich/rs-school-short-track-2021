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
  let k = 0;
  const g = n.toString().split('');
  for (let i = 0; i < g.length; i++) {
    k += Number(g[i]);
  }
  if (k >= 10) {
    let sum = 0;
    const f = k.toString().split('');
    for (let i = 0; i < f.length; i++) {
      sum += Number(f[i]);
    }
    return sum;
  }
  return k;
}

module.exports = getSumOfDigits;
