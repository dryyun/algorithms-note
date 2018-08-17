/**
 * 邻接矩阵解法
 */
"use strict";

const util = require('../../util.js');

const M = 99999;

var map = [
    [0, 1, 12, M, M, M],
    [M, 0, 9, 3, M, M],
    [M, M, 0, M, 5, M],
    [M, M, 4, 0, 13, 15],
    [M, M, M, M, 0, 4],
    [M, M, M, M, M, 0],
];

var n = map.length;
var start = 0;
var dis = map[start]; // 顶点 0 到其余顶点的距离
var book = util.fillArray(n);
book[start] = 1;

var u;


console.log('计算前顶点 0 到其余顶点路径', dis);

for (let i = 0; i < n; i++) {
    let min = M;
    for (let j = 0; j < n; j++) {
        if (book[j] === 0 && dis[j] < min) {
            min = dis[j];
            u = j;
        }
    }

    book[u] = 1;
    for (let v = 0; v <= n; v++) {
        if (map[u][v] < M) { // 表示 u->v 可直接到达
            if (dis[v] > dis[u] + map[u][v]) {
                dis[v] = dis[u] + map[u][v];
            }
        }
    }
}

console.log('计算后顶点 0 到其余顶点路径', dis);

