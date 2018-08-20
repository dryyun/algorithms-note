/**
 * 6.1 的命令行输入版本
 */
"use strict";

const util = require('../../util.js');
const alg = require('./6.1 alg.js');

const M = 99999;

var [n, m] = util.split(util.readline("input n & m ?\n"));// n 个顶点 m 条边
var map = util.fillTwoArray(n, n, M);

for (let i = 0; i < n; i++) {
    map[i][i] = 0;
}

console.log(`enter ${m} lines x y z`);
for (let i = 0; i < m; i++) {
    let [x, y, z] = util.split(util.readline());
    [x, y] = [x - 1, y - 1]; // 顶点 1 就是数组下标 0
    map[x][y] = z;
}

var [map, result] = alg(map);

console.log('最终结果');
console.log(map);
console.log('路径图');
console.log(result);


