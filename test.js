const c = new (require('.'))('');

c.getInfo('zerotwothreezero').then(console.log);

process.on('unhandledRejection', console.log);
