/**
 * Bellman-Ford 解决负权边
 */
"use strict";

const util = require('../../util.js');
const M = 99999;

var n = 5; // n 个顶点
var m = 5; // m 条边
var dis = util.fillArray(n + 1, M);
dis[1] = 0;
//  u,v,w 三个数组，记录 u->v=w，u 点到 v 点的距离是 w
var u = [0, 2, 1, 1, 4, 3],
    v = [0, 3, 2, 5, 5, 4],
    w = [0, 2, -3, 5, 2, 3];
var flag = 0;

for (let k = 1; k <= n - 1; k++) {
    for (let i = 1; i <= m; i++) {
        if (dis[v[i]] > dis[u[i]] + w[i]) {
            dis[v[i]] = dis[u[i]] + w[i]
        }
    }
}

for (let i = 1; i <= m; i++) {
    if (dis[v[i]] > dis[u[i]] + w[i]) {
        flag = 1;
    }
}
if (1 === flag) {
    console.log('包含负权回路');
}

dis.shift();
console.log(dis);
