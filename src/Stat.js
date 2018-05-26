/** Class representing a single stat */
class Stat {
  /**
   * @param {Object} data All of the stat data resolved from the API
   * @returns {Object}
   */
  static objectify(data) {
    const obj = {};
    data.forEach(stat => obj[stat.key] = stat.value);
    return obj;
  }
}

module.exports = Stat;
