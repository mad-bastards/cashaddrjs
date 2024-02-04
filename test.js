/* eslint-disable */
// noinspection JSUnusedLocalSymbols
// noinspection JSUnusedLocalSymbols

const CHARSET = 'qpzry9x8gf2tvdw0s3jn54khce6mua7l';
const bigInt = require('big-integer');
const codes = [
  '7qqqqqqqqqqppqqppqqppppqqqq',
  'qqqqqqqqqqqqqqqqqum7aum7aum',
  '7a',
  '7au',
  '7aum',
  '7aum7aum',
  '7aum7aum7aum',
  '7aum7aum7aum7aum7aum7aum7aum7aum',
  '7aum7aum7aum7aum7aum7aum7aum7aum7aum7aum7aum7aum7aum7aum7aum7aum',
  'pqqqq',
  'ppm2qsznhks23z7629mms6s4cwef74vcwvn0h829pq',
  'pqq3728yw0y47sqn6l2na30mcw6zm78dzq5ucqzc37',
  'pr95sy3j9xwd2ap32xkykttr4cvcu7as4yc93ky28e',
  'qp63uahgrxged4z5jswyt5dn5v3lzsem6cy4spdc2h',
  'qpm2qsznhks23z7629mms6s4cwef74vcwvy22gdx6a',
  'qqq3728yw0y47sqn6l2na30mcw6zm78dzqre909m2r',
  'qr6l943ye76u8andqcfr6zpf68yua0mhpctmpg2s8m',
  'qr95sy3j9xwd2ap32xkykttr4cvcu7as4y0qverfuy',
];
const base32 = require('./src/base32.js');
const { Buffer } = require('node:buffer');
const { assert } = require('chai');
const {writeFileSync} = require('fs');
// console.log=console.trace;
const pairs= [];
for( const code of codes ) {
  const pair={};
  pairs.push(pair);
  pair.code=code;
  let bi2 = bigInt( pair.code, 32, CHARSET );
  pair.data=bi2.toString(16);
  pair.chck=bi2.toString( 32, CHARSET );
  pair.bitl=bi2.bitLength().toJSNumber();
}
writeFileSync('base32.json', JSON.stringify(pairs,null,2));

// bi2=bigInt(32).pow(code.length+1).times(31).add(bi2);
// console.log(bi2);
