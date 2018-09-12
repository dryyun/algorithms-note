/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let xl = matrix.length;
    let yl = matrix[0].length;

    let zeros = [];
    for (let i = 0; i < xl; i++) {
        for (let j = 0; j < yl; j++) {
            if (matrix[i][j] === 0) {
                zeros.push([i, j]);
            }
        }
    }
    let zx = {};
    let zy = {};
    zeros.forEach(z => {
        if (!zx[z[0]]) {
            for (let i = 0; i < yl; i++) {
                matrix[z[0]][i] = 0;
            }
            zx[z[0]] = 1;
        }

        if (!zy[z[1]]) {
            for (let i = 0; i < xl; i++) {
                matrix[i][z[1]] = 0;
            }
            zy[z[1]] = 1;
        }
    });
};
//
let m = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
];
setZeroes(m);
console.log(m);

m = [
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5]
];
setZeroes(m);
console.log(m);
