/**
 * 最短路径
 * 迷宫，深度搜索方向是 右、下、左、上
 */
"use strict";

const Coord = require('./Coord.js');
const _ = require('lodash');


var result = [], path = [];
var book = new Map();
var start = new Coord(0, 0); // 起点
var destination = new Coord(3, 2); // 目标位置
var min = 9999;
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

dfs(start, 0);

function dfs(current, step) {

    path[step] = current;

    if (Coord.isEqual(current, destination)) {
        if (min >= step) {
            min = step;
            if (!result[min]) {
                result[min] = [];
            }
            result[min].push(_.slice(path, 0, min + 1));
        }
        return;
    }

    for (let i = 0; i < next.length; i++) {
        let tmp = Coord.newCoord(current);
        tmp.next(next[i]);
        let cstr = tmp.toString();
        if (tmp.isValid(n, m) && tmp.entity(map) !== '#') {
            if (!book.has(cstr) || book.get(cstr) === 0) {
                book.set(cstr, 1);
                dfs(tmp, step + 1);
                book.set(cstr, 0);
            }
        }
    }
    return;
}

console.log('最短路径', min, '步');
console.log(result[min].length, '种走法');
console.log(result[min]);

