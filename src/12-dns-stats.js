/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const app = {};
  for (let i = 0; i < domains.length; i++) {
    const array = domains[i].split('.').reverse();
    let title = '';
    for (let j = 0; j < array.length; j++) {
      title += `.${array[j]}`;
      if (title in app) {
        app[title]++;
      } else {
        app[title] = 1;
      }
    }
  }
  return app;
}

module.exports = getDNSStats;
