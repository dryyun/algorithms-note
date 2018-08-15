/**
 * 广度优先搜索
 */
"use strict";

const Queue = require('../chapter2/Queue.js');
const Coord = require('./Coord.js');
const _ = require('lodash');

var next = [
    [0, 1], //右
    [1, 0], //下
    [0, -1],//左
    [-1, 0] //上
];
var n = 5, m = 4; // 5 行 5 列
var map = [
    ['.', '.', '#', '.'], // . 表示空地，# 表示障碍
    ['.', '.', '.', '.'],
    ['.', '.', '#', '.'],
    ['.', '#', '.', '.'],
    ['.', '.', '.', '#'],
];

var book = new Map();
var queue = new Queue();
var start = new Coord(0, 0);
var destination = new Coord(3, 2); // 目标位置

queue.enqueue({
    coord: start,
    step: 0,
    parent: null,
});
book.set(start.toString(), 1);

var flag = 0;

while (!queue.isEmpty()) {
    let first = queue.first();
    for (let i = 0; i < next.length; i++) {
        let current = Coord.newCoord(first.coord);
        current.next(next[i]);
        let cstr = current.toString();
        if (current.isValid(n, m) && current.entity(map) !== '#') {
            if (!book.has(cstr) || book.get(cstr) === 0) {
                book.set(cstr, 1);
                queue.enqueue({
                    coord: current,
                    step: first.step + 1,
                    parent: first,
                });
            }
        }

        if (Coord.isEqual(destination, current)) {
            flag = 1;
            break;
        }
    }
    if (1 === flag) {
        break;
    }
    queue.dequeue();
}

if (1 === flag) {
    console.log('倒序展示顺序');
    let node = queue.last();
    while (node.parent) {
        console.log(node.coord);
        node = node.parent;
    }
} else {
    console.log('不能到达');
}
