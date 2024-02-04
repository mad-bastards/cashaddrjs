const cashaddr = require('cashaddrjs');
const address = 'bitcoincash:qpm2qsznhks23z7629mms6s4cwef74vcwvy22gdx6a';
const { prefix, type, hash } = cashaddr.decode(address);
console.log(prefix); // 'bitcoincash'
console.log(type); // 'P2PKH'
console.log(hash);
console.log(cashaddr.encode(prefix, type, hash)); // 'bitcoincash:qpm2qsznhks23z7629mms6s4cwef74vcwvy22gdx6a'
