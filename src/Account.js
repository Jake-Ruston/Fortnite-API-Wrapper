const Stat = require('./Stat');

class Account {
  constructor(content) {
    this.accountId = content.accountId;
    this.username = content.epicUserHandle;
    this.platformId = content.platformId;
    this.platform = content.platformName;
    this.platformNameLong = content.platformNameLong;
    this.url = `https://api.fortnitetracker.com/v1/profile/${this.platform}/${this.username}`;
    this.lifetimeStats = this.getLifetimeStats(content.lifeTimeStats);
    this.stats = content.stats;
    this.recentMatches = content.recentMatches;
  }

  getLifetimeStats(info){
    const stats = [];
    for(const stat of info){
      stats.push(new Stat(stat))
    }
    return stats;
  }
}


module.exports = Account;
