/** Class representing a game mode */
class Mode {
  /**
   * @param {Object} data All of the type data resolved from the API
   */
  constructor(data) {
    this.score = data.score.valueInt;
    this.kd = data.kd.valueDec;
    this.matches = data.matches.valueInt;
    this.kills = data.kills.valueInt;
    this.kills_per_match = data.kpg.valueDec;
    this.score_per_match = data.scorePerMatch.valueDec;
    this.wins = data.top1.valueInt;
    this.top_3 = data.top3.valueInt + this.wins;
    this.top_5 = data.top5.valueInt + this.top_3 + this.wins;
    this.top_6 = data.top6.valueInt + this.top_5 + this.top_3 + this.wins;
    this.top_12 = data.top12.valueInt + this.top_6 + this.top_5 + this.top_3 + this.wins;
    this.top_25 = data.top25.valueInt + this.top_12 + this.top_6 + this.top_5 + this.top_3 + this.wins;
  }
}

module.exports = Mode;
