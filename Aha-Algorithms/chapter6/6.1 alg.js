module.exports = function (map) {
    let result = new Map();
    let n = map.length;

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

    return [map, result];

};
