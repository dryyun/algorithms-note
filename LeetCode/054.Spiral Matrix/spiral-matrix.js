/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (!matrix.length) {
        return [];
    }
    let arr = [];
    let book = [];


    let next = function (x, y) {
        let directions = [
            [0, 1],// 右
            [1, 0],//下
            [0, -1],//左
            [-1, 0],//上
        ];
        if (lastDirection) {
            let [nx, ny] = [x + lastDirection[0], y + lastDirection[1]];
            if (!book[nx]) {
                book[nx] = [];
            }
            if (nx < m && ny < n && !book[nx][ny] && matrix[nx][ny] !== undefined) {
                book[nx][ny] = 1;
                return [nx, ny];
            }
        }

        for (let i = 0; i < 4; i++) {
            let [nx, ny] = [x + directions[i][0], y + directions[i][1]];
            if (!book[nx]) {
                book[nx] = [];
            }
            if (nx < m && ny < n && !book[nx][ny] && matrix[nx][ny] !== undefined) {
                lastDirection = directions[i];
                book[nx][ny] = 1;
                return [nx, ny];
            }
        }
    };

    let m = matrix.length;
    let n = matrix[0].length;
    let t = m * n;

    let lastDirection = [0, 1];
    book[0] = [];
    let [x, y] = [0, 0];
    book[x][y] = 1;
    arr.push(matrix[x][y]);
    t--;
    while (t) {
        [x, y] = next(x, y, m, n);
        arr.push(matrix[x][y]);
        t--;
    }
    return arr;
};


console.log(spiralOrder([]));

console.log(spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]));

console.log(spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]));

console.log(spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]));
