/**
 * Floyd Warshall
 */
"use strict";

const M = 99999;

var map = [
    [0, 2, 6, 4],
    [M, 0, 3, M],
    [7, M, 0, 1],
    [5, M, 12, 0],
];

var result = new Map();
var n = map.length;

// 从 i 顶点到 j 顶点只经过前 k 个顶点的最短路径
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
