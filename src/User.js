const Mode = require('./Mode');
const Stat = require('./Stat');
const Lifetime = require('./Lifetime');

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
      this.stats[modes[mode]] = new Mode(data.stats[mode]);
    }

    // Lifetime stats made into single objects from array
    this.stats.lifetime = new Lifetime(data.lifeTimeStats);
  }
}

const modes = {
  p2: 'solo',
  p10: 'duo',
  p9: 'squad',
  curr_p2: 'current_solo',
  curr_p10: 'current_duo',
  curr_p9: 'current_squad',
  prior_p2: 'prior_solo',
  prior_p10: 'prior_duo',
  prior_p9: 'prior_squad'
};

module.exports = User;
