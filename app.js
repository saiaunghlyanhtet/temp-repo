// const names = require('./4.names');
// const sayHello = require('./5-utils');
//console.log(names);
// const data = require('./6-alternative')
// console.log(data);
// require('./7-mind-grenade');

// sayHello('susan');
// sayHello(names.peter);
// sayHello(names.john);

const _ = require('lodash')
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);