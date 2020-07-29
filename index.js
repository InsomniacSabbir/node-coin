
const CryptoBlockchain = require('./CryptoBlockChain');
const CryptoBlock = require('./CryptoBlock');

let nodeCoin = new CryptoBlockchain();
nodeCoin.addNewBlock(new CryptoBlock(1, "29/07/2020", {sender: "Iris Ljesnjanin", recipient: "Cosima Mielke", quantity: 50}));
nodeCoin.addNewBlock(new CryptoBlock(2, "30/07/2020", {sender: "Vitaly Friedman", recipient: "Ricardo Gimenes", quantity: 100}) );
console.log(JSON.stringify(nodeCoin, null, 2));
