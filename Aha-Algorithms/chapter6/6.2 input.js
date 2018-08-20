"use strict";

const util = require('../../util.js');
const alg = require('./6.2 alg.js');

const M = Number.MAX_SAFE_INTEGER;

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

var start = 0; // 起始顶点

console.log(`计算前顶点 ${start} 到其余顶点路径`, map[start]);

let dis = alg(map, start);

console.log(`计算前顶点 ${start} 到其余顶点路径`, dis);
