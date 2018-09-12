/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    let cache = [];
    cache[0] = [];
    cache[0][0] = 1;

    let dfs = function (x, y) {
        if (x < 0 || y < 0) {
            return 0;
        }
        if (x === 0 && y === 0) {
            return cache[0][0];
        }
        if (!cache[x]) {
            cache[x] = [];
        }
        if (cache[x][y] && cache[x][y] > 0) {
            return cache[x][y];
        } else {
            return cache[x][y] = dfs(x - 1, y) + dfs(x, y - 1);
        }
    };

    return dfs(m - 1, n - 1);
};

console.log(uniquePaths(3, 2));
console.log(uniquePaths(7, 3));
console.log(uniquePaths(23, 12));