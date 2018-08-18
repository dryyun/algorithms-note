/**
 * 6.1 的命令行输入版本
 */
"use strict";

const util = require('../../util.js');

const M = 99999;

var [n, m] = util.split(util.readline("input n & m ?\n"));// n 个顶点 m 条边
var map = util.fillTwoArray(n, n, M);
var result = new Map();

for (let i = 0; i < n; i++) {
    map[i][i] = 0;
}

console.log(`enter ${m} lines x y z`);
for (let i = 0; i < m; i++) {
    let [x, y, z] = util.split(util.readline());
    [x, y] = [x - 1, y - 1]; // 顶点 1 就是数组下标 0
    map[x][y] = z;
}


for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j) {
                continue;
            }

            // 记录路线图
            let key = `${i} - ${j}`;
            if (!result.has(key)) {
                result.set(key, [i, j]);
            }

            if (map[i][j] > map[i][k] + map[k][j]) {
                map[i][j] = map[i][k] + map[k][j];

                let path = result.get(key);
                path.pop();
                path.push(k);
                path.push(j);
            }
        }
    }
}

console.log('最终结果');
console.log(map);
console.log('路径图');
console.log(result);


