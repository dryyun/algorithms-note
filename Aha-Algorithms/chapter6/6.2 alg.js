const util = require('../../util.js');
const M = Number.MAX_SAFE_INTEGER;
/**
 * 从 start 顶点开始到其余点的最短路径
 * @param map
 * @param start
 */
module.exports = function (map, start) {
    let n = map.length;
    let dis = map[start]; // 顶点 start 到其余顶点的距离的估计值，需要求出确定值
    let book = util.fillArray(n);
    book[start] = 1;

    for (let i = 1; i < n; i++) { // 循环 n-1 次
        let min = M;
        let u;

        // 找到离源点最近的点 u
        for (let j = 0; j < n; j++) {
            if (book[j] === 0 && dis[j] < min) {
                min = dis[j];
                u = j;
            }
        }

        if (u) {
            book[u] = 1;
            // 根据 u 点，更新所有 u 可到达的点的距离
            for (let v = 0; v <= n; v++) {
                if (map[u][v] < M) { // 表示 u->v 可直接到达
                    if (dis[v] > dis[u] + map[u][v]) {
                        dis[v] = dis[u] + map[u][v];
                    }
                }
            }
        }
    }

    return dis;
};