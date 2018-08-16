/**
 * 图的遍历 dfs 实现
 */
"use strict";

const util = require('../../util.js');

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

function dfs(cur) {
    result.push(cur + 1); //下标是从 0 开始，但是希望输出结果从 1 开始
    for (let i = 0; i < n; i++) {
        if (map[cur][i] === 1 && book[i] === 0) {
            book[i] = 1;
            dfs(i);
        }
    }
}

book[0] = 1;
dfs(0);


console.log('访问顺序', result);