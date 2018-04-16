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
      this.stats[modes[mode]] = new Mode(data.stats[mode]);
    }

    // TODO: Make lifetime single objects and not an array
    // Will be updated in a newer version
    this.stats.lifetime = data.lifeTimeStats.map(stat => new Stat(stat));
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
