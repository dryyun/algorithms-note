/**
 * Floyd Warshall
 */
"use strict";

const func = require('./6.1 alg.js');

const M = Number.MAX_SAFE_INTEGER;

var map = [
    [0, 2, 6, 4],
    [M, 0, 3, M],
    [7, M, 0, 1],
    [5, M, 12, 0],
];
var [map, result] = func(map);

console.log('最终结果');
console.log(map);
console.log('路径图');
console.log(result);
