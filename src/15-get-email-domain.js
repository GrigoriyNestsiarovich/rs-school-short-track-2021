/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const string = email.split('');
  for (let i = 0; i < string.length; i++) {
    while (string[i] !== '@') {
      string.shift();
    }
    if (string[i + 1] === '.') {
      for (let j = 0; j < string.length - i + 2; j++) {
        string.shift();
      }
      string.shift();
      return string.join('');
    }
    string.shift();
    return string.join('');
  }
  string.shift();
  return string.join('');
}

module.exports = getEmailDomain;
