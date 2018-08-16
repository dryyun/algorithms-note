/**
 * 最少转机 - 广度搜索
 */
"use strict";

const Queue = require('../chapter2/Queue.js');
const util = require('../../util.js');

var map = [
    [0, 1, 1, NaN, NaN],
    [1, 0, 1, 1, NaN],
    [1, 1, 0, 1, 1],
    [NaN, 1, 1, 0, 1],
    [NaN, NaN, 1, 1, 0],
];

var queue = new Queue();
var n = map.length;
var book = util.fillArray(n);
var start = 0;
var end = 4;
var flag = 0;

queue.enqueue({
    cur: start,
    step: 1,
    parent: null
})
;
book[start] = 1;

while (!queue.isEmpty()) {
    let first = queue.first();
    for (let i = 0; i < n; i++) {
        if (map[first.cur][i] > 0 && book[i] === 0) {
            book[i] = 1;
            queue.enqueue({
                cur: i,
                step: first.step + 1,
                parent: first
            });
            if (i === end) {
                flag = 1;
                break;
            }
        }
    }
    if (1 === flag) {
        break;
    }
    queue.dequeue();
}


if (1 === flag) {
    let last = queue.last();
    console.log('需要经过', last.step);
    console.log('倒序展示');
    console.log(last.cur + 1);
    while (last.parent) {
        console.log(last.parent.cur + 1);
        last = last.parent;
    }
} else {
    console.log('不能到达');
}


