const fetch = require('node-fetch');

const User = require('./User');

/**
 * The main hub for interacting with the FortniteTracker API
 *
 * @author Jake Ruston
 */
class Client {
  /**
   * @param {string} key The API Key from FortniteTracker
   */
  constructor(key) {
    this.url = 'https://api.fortnitetracker.com/v1';
    this.headers = { headers: { 'TRN-Api-Key': key } };

    /**
     * The available platforms
     * @type {Object}
     */
    this.platforms = {
      xbl: ['xbox', 'xb1', 'xbox1', 'xbox one'],
      psn: ['playstation', 'ps4', 'ps', 'playstation 4'],
      pc: ['computer']
    };
  }

  /**
   * Gets the stats of a certain user
   *
   * @param {string} username The username to search for
   * @param {string} platform The platform that the user plays on
   * @returns {Promise<Object>}
   */
  user(username, platform) {
    return new Promise((resolve, reject) => {
      // No values given
      if (!username) return reject(new Error('You must supply a username'));
      if (!platform) return reject(new Error('You must supply a platform'));

      // Invalid value type
      if (typeof username !== 'string') return reject(new TypeError('Username must be a string'));
      if (typeof platform !== 'string') return reject(new TypeError('Platform must be a string'));

      let result;
      let data;

      (async () => {
        try {
          username = encodeURI(username);
          platform = this.getPlatform(platform);

          result = await fetch(`${this.url}/profile/${platform}/${username}`, this.headers);
          data = await result.json();
        } catch (err) {
          return reject(err);
        }

        if (data.error === 'Player Not Found') return reject(new Error('User not found'));
        return resolve(new User(data));
      })();

      return undefined;
    });
  }

  /**
   * Gets the correct platform from a hash map
   *
   * @param {string} platform The platform to get
   * @returns {void}
   */
  getPlatform(platform) {
    if (platform in this.platforms) {
      return platform;
    } else {
      for (const plat in this.platforms) {
        if (this.platforms[plat].includes(platform)) {
          return Object.keys(this.platforms).find(key => this.platforms[key] === this.platforms[plat]);
        }
      }
    }

    return undefined;
  }
}

module.exports = Client;
