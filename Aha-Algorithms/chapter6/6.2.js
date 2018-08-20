/**
 * Dijkstra 算法 - 通过边实现松弛，邻接矩阵解法
 */
"use strict";

const alg = require('./6.2 alg.js');

const M = Number.MAX_SAFE_INTEGER;

var map = [
    [0, 1, 12, M, M, M],
    [M, 0, 9, 3, M, M],
    [M, M, 0, M, 5, M],
    [M, M, 4, 0, 13, 15],
    [M, M, M, M, 0, 4],
    [M, M, M, M, M, 0],
];

var start = 0; // 起始顶点

console.log(`计算前顶点 ${start} 到其余顶点路径`, map[start]);

let dis = alg(map, start);

console.log(`计算前顶点 ${start} 到其余顶点路径`, dis);

