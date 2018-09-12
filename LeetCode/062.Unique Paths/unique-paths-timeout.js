/**
 *
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    let sum = 0;
    let dfs = function (x, y) {
        if (x === n - 1 && y === m - 1) {
            sum++;
            return;
        }
        let dirs = [
            [1, 0],// 向下
            [0, 1],// 向右
        ];
        for (let i = 0; i < 2; i++) {
            let [dx, dy] = [x + dirs[i][0], y + dirs[i][1]];
            if (dx >= 0 && dy >= 0 && dx < n && dy < m) {
                dfs(dx, dy);
            }
        }
    };
    dfs(0, 0);
    return sum;
};

console.log(uniquePaths(3, 2));
console.log(uniquePaths(7, 3));
// console.log(uniquePaths(23, 12));