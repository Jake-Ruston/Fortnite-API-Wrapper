const Client = require('../');

const fortnite = new Client('Key');

(async () => {
  const user = await fortnite.user('monsterdface', 'xbl');

  const store = await fortnite.store();

  const challenges = await fortnite.challenges();

  console.log(user, store, challenges);
})();

process.on('unhandledRejection', console.error);
