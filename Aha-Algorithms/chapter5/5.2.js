/**
 * 城市地图 - 图的深度优先遍历
 */
"use strict";

const util = require('../../util.js');
const _ = require('lodash');

var map = [
    [0, 2, NaN, NaN, 10],
    [NaN, 0, 3, NaN, 7],
    [4, NaN, 0, 4, NaN],
    [NaN, NaN, NaN, 0, 5],
    [NaN, NaN, 3, NaN, 0],
];

var result = [],
    path = [],
    n = map.length,
    book = util.fillArray(n),
    min = 9999, // 最短路径
    sum = 0, // 已经走过路径
    start = 0, // 起始点 1
    end = 4; // 结束点 5 

function dfs(cur) {
    if (sum > min) { //当前路径长度超过目前已经最短路径，那么直接 return
        return;
    }
    if (cur === end) {
        if (min >= sum) {
            min = sum;
            result[min] = _.slice(path);
        }
        return;
    }
    for (let i = 0; i < n; i++) {
        if (map[cur][i] > 0 && book[i] === 0) {

            //递归前标记状态
            book[i] = 1;
            sum += map[cur][i];
            path.push(i)

            dfs(i);

            //递归后恢复状态
            book[i] = 0;
            sum -= map[cur][i];
            path.pop(i);
        }
    }
}

path.push(0);
book[0] = 1;
dfs(start);

console.log(min);
console.log(result[min]); // 其实就是 1->2->5
