/**
 * 宝岛探险 bfs 实现某岛面积多大
 * 0 表示海洋，1~9 表示陆地，从起点开始，使用广度搜索把陆地的数字相加
 */
"use strict";

const Queue = require('../chapter2/Queue.js');
const Coord = require('./Coord.js');

var map = [
    [1, 2, 1, 0, 0, 0, 0, 0, 2, 3],
    [3, 0, 2, 0, 1, 2, 1, 0, 1, 2],
    [4, 0, 1, 0, 1, 2, 3, 2, 0, 1],
    [3, 2, 0, 0, 0, 1, 2, 4, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 5, 3, 0],
    [0, 1, 2, 1, 0, 1, 5, 4, 3, 0],
    [0, 1, 2, 3, 1, 3, 6, 2, 1, 0],
    [0, 0, 3, 4, 8, 9, 7, 5, 0, 0],
    [0, 0, 0, 3, 7, 8, 6, 0, 1, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
];

var next = [
    [0, 1], //右
    [1, 0], //下
    [0, -1],//左
    [-1, 0] //上
];
var book = new Map();
var start = new Coord(6, 8);
var queue = new Queue();
var sum = 1;

queue.enqueue(start);
book.set(start.toString(), 1);

while (!queue.isEmpty()) {
    let first = queue.dequeue();
    for (let i = 0; i < next.length; i++) {
        let current = Coord.newCoord(first);
        current.next(next[i]);
        let cstr = current.toString();
        if (current.isValid(map.length, map[0].length) && current.entity(map) !== 0) {
            if (!book.has(cstr) || book.get(cstr) === 0) {
                book.set(cstr, 1);
                queue.enqueue(current);
                sum++;
            }
        }
    }
}
console.log(sum);
