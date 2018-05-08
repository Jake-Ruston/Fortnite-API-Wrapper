/** Class representing lifetime stats */
class Lifetime {
  /**
   * @param {Object} data All of the data resolved from the API
   */
  constructor(data) {
    this.top_3 = data[0].value;
    this.top_5 = data[1].value;
    this.top_10 = data[2].value;
    this.top_6 = data[3].value;
    this.top_12 = data[4].value;
    this.top_25 = data[5].value;
    this.score = data[6].value;
    this.matches = data[7].value;
    this.wins = data[8].value;
    this.win_percent = data[9].value;
    this.kills = data[10].value;
    this.kd = data[11].value;
  }
}

module.exports = Lifetime;