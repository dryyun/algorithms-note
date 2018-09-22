/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    if (!grid.length) {
        return 0;
    }
    let xl = grid.length;
    let yl = grid[0].length;
    let num = 0;
    let book = createTwoArray(xl);

    let dfs = function (x, y) {
        let directions = [
            [0, 1],// 右
            [1, 0],//下
            [0, -1],//左
            [-1, 0],//上
        ];
        for (let k = 0; k < 4; k++) {
            let [tx, ty] = [x + directions[k][0], y + directions[k][1]];
            if (tx < 0 || ty < 0 || tx >= xl || ty >= yl) {
                continue;
            }
            if (grid[tx][ty] > 0 && !book[tx][ty]) {
                book[tx][ty] = 1;
                dfs(tx, ty);
            }
        }
    };

    for (let i = 0; i < xl; i++) {
        for (let j = 0; j < yl; j++) {
            if (grid[i][j] > 0 && !book[i][j]) {
                num++;
                book[i][j] = 1;
                dfs(i, j);
            }
        }
    }
    return num;
};

function createTwoArray(xl) {
    let book = [];
    for (let i = 0; i < xl; i++) {
        book[i] = [];
    }
    return book;
}

let grid = [
    [1, 1, 1, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0],
];
console.log(numIslands(grid));

grid = [
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1],
];
console.log(numIslands(grid));