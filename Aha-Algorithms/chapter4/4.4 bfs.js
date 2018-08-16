/**
 * 3.3 的 bfs 实现
 */
"use strict";

const Queue = require('../chapter2/Queue.js');
const Coord = require('./Coord.js');
const _ = require('lodash');

var map = [
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', 'G', 'G', '.', 'G', 'G', 'G', '#', 'G', 'G', 'G', '.', '#'],
    ['#', '#', '#', '.', '#', 'G', '#', 'G', '#', 'G', '#', 'G', '#'],
    ['#', '.', '.', '.', '.', '.', '.', '.', '#', '.', '.', 'G', '#'],
    ['#', 'G', '#', '.', '#', '#', '#', '.', '#', 'G', '#', 'G', '#'],
    ['#', 'G', 'G', '.', 'G', 'G', 'G', '.', '#', '.', 'G', 'G', '#'],
    ['#', 'G', '#', '.', '#', 'G', '#', '.', '#', '.', '#', '.', '#'],
    ['#', '#', 'G', '.', '.', '.', 'G', '.', '.', '.', '.', '.', '#'],
    ['#', 'G', '#', '.', '#', 'G', '#', '#', '#', '.', '#', 'G', '#'],
    ['#', '.', '.', '.', 'G', '#', 'G', 'G', 'G', '.', 'G', 'G', '#'],
    ['#', 'G', '#', '.', '#', 'G', '#', 'G', '#', '.', '#', 'G', '#'],
    ['#', 'G', 'G', '.', 'G', 'G', 'G', '#', 'G', '.', 'G', 'G', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
];
var next = [
    [0, 1], //右
    [1, 0], //下
    [0, -1],//左
    [-1, 0] //上
];


var getnum = function (i, j) {
    let sum = 0;
    if (map[i][j] === '.') {

        // 向上统计
        let [x, y] = [i, j];
        while (map[x][y] !== '#') {
            if (map[x][y] === 'G') {
                sum++;
            }
            x--;
        }

        // 向下统计
        [x, y] = [i, j];
        while (map[x][y] !== '#') {
            if (map[x][y] === 'G') {
                sum++;
            }
            x++;
        }

        // 向左统计
        [x, y] = [i, j];
        while (map[x][y] !== '#') {
            if (map[x][y] === 'G') {
                sum++;
            }
            y--;
        }

        // 向右统计
        [x, y] = [i, j];
        while (map[x][y] !== '#') {
            if (map[x][y] === 'G') {
                sum++;
            }
            y++;
        }
    }
    return sum;
}

var book = new Map();
var start = new Coord(3, 3);
var queue = new Queue();
var max = 0;
var result = [];

queue.enqueue(start);
book.set(start.toString(), 1);

while (!queue.isEmpty()) {
    let first = queue.first();
    for (let i = 0; i < next.length; i++) {
        let current = Coord.newCoord(first);
        current.next(next[i]);
        let cstr = current.toString();
        if (current.isValid(map.length, map[0].length) && current.entity(map) === '.') {
            if (!book.has(cstr) || book.get(cstr) === 0) {
                book.set(cstr, 1);
                queue.enqueue(current);

                let sum = getnum(current.x, current.y);
                if (sum >= max) {
                    max = sum;
                    if (!result[max]) {
                        result[max] = [];
                    }
                    result[max].push(current);
                }
            }
        }
    }

    queue.dequeue();
}

console.log('消灭最多', max);
console.log('相应坐标', result[max]);

