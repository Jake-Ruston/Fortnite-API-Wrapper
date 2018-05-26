/** Class representing a game mode */
class Mode {

  /**
   * @param {Object} data All of the type data resolved from the API
   * @returns {Object}
   */
  static objectify(data) {
    const obj = {};
    obj.score = data.score.valueInt;
    obj.kd = data.kd.valueDec;
    obj.matches = data.matches.valueInt;
    obj.kills = data.kills.valueInt;
    obj.kills_per_match = data.kpg.valueDec;
    obj.score_per_match = data.scorePerMatch.valueDec;
    obj.wins = data.top1.valueInt;
    obj.top_3 = data.top3.valueInt + obj.wins;
    obj.top_5 = data.top5.valueInt + obj.top_3 + obj.wins;
    obj.top_6 = data.top6.valueInt + obj.top_5 + obj.top_3 + obj.wins;
    obj.top_12 = data.top12.valueInt + obj.top_6 + obj.top_5 + obj.top_3 + obj.wins;
    obj.top_25 = data.top25.valueInt + obj.top_12 + obj.top_6 + obj.top_5 + obj.top_3 + obj.wins;
    return obj;
  }

}

module.exports = Mode;
