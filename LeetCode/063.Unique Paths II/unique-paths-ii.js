/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    let dfs = function (x, y) {
        if (x < 0 || y < 0 || obstacleGrid[x][y]) {
            return 0;
        }
        if (x === 0 && y === 0) {
            return cache[0][0];
        }
        if (cache[x][y] && cache[x][y] > 0) {
            return cache[x][y];
        } else {
            return cache[x][y] = dfs(x - 1, y) + dfs(x, y - 1);
        }
    };

    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    let cache = new Array(m);
    for (let i = 0; i < m; i++) {
        cache[i] = [];
    }
    cache[0][0] = 1;

    return dfs(m - 1, n - 1);
};

console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]]));
