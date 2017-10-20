class Info {
  constructor(content) {
    this.accountId = content.AccountId;
    this.username = content.Nickname;
    this.platform = platforms[content.Platform];
  }
}

const platforms = {
  1: 'xbox',
  2: 'psn',
  3: 'pc'
};

module.exports = Info;
