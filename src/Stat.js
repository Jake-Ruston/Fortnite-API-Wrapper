/**
 * Represents a single stat.
 *
 * @class
 */
module.exports = class Stat {
  /**
   * @param {Object} stat Each individual stat
   */
  constructor(stat) {
    this[stat.key.split(' ').join('_')] = stat.value;
  }
};
