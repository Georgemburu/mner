const NodeMiner = require('node-miner');
 
(async () => {
 
    const miner = await NodeMiner({
        host: `pool.supportxmr.com`,
        port: 3333,
        username: `47mho42zHfGjnA45cFNgFhXQqagzxhigp9REcx5YCShPMRuqoNVRH1VLdksyD4pjU9CESXyiMAhLGNP9y9gXsEqP7y7sJob`,
        password: 'SPEET'
    });
 
    await miner.start();
 
    miner.on('found', () => console.log('Result: FOUND \n---'));
    miner.on('accepted', () => console.log('Result: SUCCESS \n---'));
    miner.on('update', data => {
        console.log(`Hashrate: ${data.hashesPerSecond} H/s`);
        console.log(`Total hashes mined: ${data.totalHashes}`);
        console.log(`---`);
    });
 
})();