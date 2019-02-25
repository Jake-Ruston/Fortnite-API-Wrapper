const Client = require('../');

const fortnite = new Client('Key');

(async () => {
  const user = await fortnite.user('monsterdface', 'pc');

  const store = await fortnite.store();

  const challenges = await fortnite.challenges();

  console.log(user);
})();

process.on('unhandledRejection', console.error);
