/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let n = matrix.length;
    let arr = JSON.parse(JSON.stringify(matrix));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let x = j;
            let y = n - 1 - i;
            matrix[x][y] = arr[i][j]
        }
    }
};

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
rotate(matrix);
console.log(matrix);

matrix = [
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16]
];
rotate(matrix);
console.log(matrix);

