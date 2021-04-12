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
  const arrRes = [];
  for (let i = 0; i < domains.length; i++) {
    const domain = domains[i];
    const arr = domain.split('.').reverse();
    for (let k = 0; k < arr.length; k++) {
      const a = '.';
      a.concat(arr[0]);
      arrRes.push(a);
      a.concat('.', arr[k + 1]);
    }
  }
  const obj = {};
  for (let j = 0; j < arrRes.length; j++) {
    const b = arrRes[j];
    if (Object.prototype.hasOwnProperty.call(obj, b)) {
      obj.b += 1;
    }
    if (!Object.prototype.hasOwnProperty.call(obj, b)) {
      obj.b = 1;
    }
  }
  return obj;
}

module.exports = getDNSStats;
