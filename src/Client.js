const Account = require('./Account');
const { get } = require('snekfetch');
const platforms = ['pc', 'xbl', 'psn'];

/**
 * @param {string} username The username of the player
 * @param {string} platform Either `pc` `psn` or `xbl`
 * @returns {Promise<Object>} Object containing info for this player
 */

class Client{

  constructor(apiKey){
    this.apiKey = apiKey;
  }

  async getInfo(username, platform = 'pc'){
    return new Promise(async (resolve, reject) => {
      if (typeof username !== 'string' || typeof username === 'undefined') reject('You must supply a username to search for.');
      platform = platform.toLowerCase();
      if(!platforms.includes(platform)) reject('Invalid platform.');

      let res;
      try{
        res = await get(`https://api.fortnitetracker.com/v1/profile/${platform}/${username}`).set({ 'TRN-Api-Key': this.apiKey });
      }catch(err){
        return reject(err.message);
      }
      const json = JSON.parse(res.text);
      if(json.error) return reject(json.error);

      resolve(new Account(json));
    });
  }

}

module.exports = Client;