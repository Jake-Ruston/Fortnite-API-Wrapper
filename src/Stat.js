/** Class representing a single stat */
class Stat {
  /**
   * @param {Object} data All of the stat data resolved from the API
   */
  constructor(data) {
    this[data.key] = data.value;
  }
}

module.exports = Stat;
