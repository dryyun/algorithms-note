/**
 * 图的遍历 bfs 广度优先搜索 实现
 */
"use strict";

const util = require('../../util.js');
const Queue = require('../chapter2/Queue.js');

/**
 * 图的邻接矩阵表示
 * 第 i 行，第 j 列表示的就是顶点 i 到顶点 j 是否有边，1 表示有边，NAN 表示没边，0 表示自己到自己
 * @type {number[][]}
 */
var map = [
    [0, 1, 1, NaN, 1],
    [1, 0, NaN, 1, NaN],
    [1, NaN, 0, NaN, 1],
    [NaN, 1, NaN, 0, NaN],
    [1, NaN, 1, NaN, 0],
];

var n = map.length;
var book = util.fillArray(n);
var result = [];
var queue = new Queue();


var start = 0;
queue.enqueue(start);
result.push(start + 1);
book[start] = 1;

while (!queue.isEmpty()) {
    let cur = queue.dequeue();

    for (let i = 0; i < n; i++) {
        if (map[cur][i] === 1 && book[i] === 0) {
            book[i] = 1;
            queue.enqueue(i);
            result.push(i + 1);
        }
    }
}

console.log('访问顺序', result);

