/**
 * 图的遍历 bfs 实现
 */
"use strict";

const util = require('../../util.js');
const Queue = require('../chapter2/Queue.js');

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
    let cur = queue.first();

    for (let i = 0; i < n; i++) {
        if (map[cur][i] === 1 && book[i] === 0) {
            book[i] = 1;
            queue.enqueue(i);
            result.push(i + 1);
        }
    }
    queue.dequeue();
}

console.log('访问顺序', result);

