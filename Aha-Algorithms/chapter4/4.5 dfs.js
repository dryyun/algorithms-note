/**
 * 宝岛探险 dfs 实现有多少个独立岛屿，着色
 */
"use strict";

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
var number = -1; // 着色编号

function dfs(coord, color) {
    map[coord.x][coord.y] = color; // 着色

    for (let i = 0; i < next.length; i++) {
        let current = Coord.newCoord(coord);
        current.next(next[i]);
        let cstr = current.toString();
        if (current.isValid(map.length, map[0].length) && current.entity(map) !== 0) {
            if (!book.has(cstr) || book.get(cstr) === 0) {
                book.set(cstr, 1);
                dfs(current, color);
            }
        }
    }
    return;
}

for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
        if (map[i][j] > 0) {
            let coord = new Coord(i, j);
            book.set(coord.toString(), 1);
            dfs(coord, number--);
        }
    }
}

console.log(map);