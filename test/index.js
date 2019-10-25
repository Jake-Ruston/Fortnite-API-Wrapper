const Client = require('../');

const fortnite = new Client(require('./config').Token);

(async () => {
  const user = await fortnite.user('monsterdface', 'pc');

  const store = await fortnite.store();

  const challenges = await fortnite.challenges();
  
  const cosmetics = await fortnite.cosmetics();
  
  const items = await fortnite.items();
  
  const skins = await fortnite.skins();
  
  const blings = await fortnite.bblings();
  
  const user = await fortnite.user('&c&c', %user, %platform)

  console.log(user, store, challenges);
})();

process.on('unhandledRejection', console.error);
