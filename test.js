const fortnite = require('.');

fortnite('monsterdface').then(data => {
  console.log(data.group);
});

process.on('unhandledRejection', console.log);
