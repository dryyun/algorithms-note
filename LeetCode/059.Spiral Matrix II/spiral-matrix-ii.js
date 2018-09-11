/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let directions = [
        [0, 1],// 右
        [1, 0],//下
        [0, -1],//左
        [-1, 0],//上
    ];

    let dirIndex = 0;
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = [];
    }

    let [x, y] = [0, 0];
    for (let i = 0, len = n * n; i < len; i++) {
        arr[x][y] = i + 1;
        let [ox, oy] = [x + directions[dirIndex][0], y + directions[dirIndex][1]];
        if (ox < 0 || oy < 0 || ox >= n || oy >= n || arr[ox][oy] !== undefined) {
            dirIndex = (dirIndex === 3 ? 0 : dirIndex + 1);

            [ox, oy] = [x + directions[dirIndex][0], y + directions[dirIndex][1]];
        }
        [x, y] = [ox, oy];
    }
    return arr;
};

console.log(generateMatrix(1));
console.log(generateMatrix(2));
console.log(generateMatrix(3));
console.log(generateMatrix(4));