const Mode = require('./Mode');
const Stat = require('./Stat');

/** Class representing a full user */
class User {

  /**
   * @param {Object} data All of the data resolved from the API
   */
  constructor(data) {
    this.id = data.accountId;
    this.username = data.epicUserHandle;
    this.platform = data.platformNameLong;
    this.url = `https://fortnitetracker.com/profile/${data.platformName.toLowerCase()}/${this.username}`;
    this.stats = {};

    for (const mode in data.stats) {
      // Replace the playlist id with its name for the keys
      const key = modes[mode];
      if (!key) continue;
      this.stats[key] = Mode.objectify(data.stats[mode]);
    }

    this.stats.lifetime = Stat.objectify(data.lifeTimeStats);
  }
}

const modes = {
  p2: 'solo',
  p10: 'duo',
  p9: 'squad',
  curr_p2: 'current_solo',
  curr_p10: 'current_duo',
  curr_p9: 'current_squad'
};

module.exports = User;
