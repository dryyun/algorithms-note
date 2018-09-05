/**
 * @param {character[][]} board
 * @return {boolean}
 */

var isValidSudoku = function (board) {

    for (let i = 0; i < 9; i++) {
        if (!check(board[i])) {
            return false;
        }
    }
    for (let i = 0; i < 9; i++) {
        let arr = [board[0][i], board[1][i], board[2][i], board[3][i], board[4][i], board[5][i], board[6][i], board[7][i], board[8][i],];
        if (!check(arr)) {
            return false;
        }
    }

    let points = [[0, 0], [0, 3], [0, 6], [3, 0], [3, 3], [3, 6], [6, 0], [6, 3], [6, 6]];
    for (let i = 0; i < 9; i++) {
        let [x, y] = points[i];
        let arr = [
            board[x][y],
            board[x + 1][y],
            board[x + 2][y],
            board[x][y + 1],
            board[x][y + 2],
            board[x + 1][y + 1],
            board[x + 2][y + 2],
            board[x + 1][y + 2],
            board[x + 2][y + 1]
        ];
        if (!check(arr)) {
            return false;
        }
    }
    return true;

};

function check(arr) {
    let map = {};
    for (let i = 0; i < 9; i++) {
        let v = arr[i];
        if ('.' === v) {
            continue;
        }
        if (map[arr[i]]) {
            return false;
        }
        map[arr[i]] = 1;
    }
    return true;
}

console.log(isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]));

console.log(isValidSudoku([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]));
