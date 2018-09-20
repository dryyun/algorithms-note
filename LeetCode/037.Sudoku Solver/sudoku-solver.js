/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    let ss = function (board) {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (board[i][j] === '.') {
                    for (let k = 1; k <= 9; k++) {
                        board[i][j] = k.toString();
                        if (check(board, i, j) && ss(board)) {
                            return true;
                        }
                        board[i][j] = '.';
                    }
                    return false;
                }
            }
        }
        return true;
    };
    ss(board);
};


let check = function (board, x, y) {
    for (let i = 0; i < 9; i++) { // 检查 y 列
        if (i !== x && board[i][y] === board[x][y]) {
            return false;
        }
    }
    for (let j = 0; j < 9; j++) { // 检查 x 行
        if (j !== y && board[x][j] === board[x][y]) {
            return false;
        }
    }
    for (let i = 3 * parseInt(x / 3); i < 3 * (parseInt(x / 3) + 1); i++) {
        for (let j = 3 * parseInt(y / 3); j < 3 * (parseInt(y / 3) + 1); j++) {
            if ((i !== x || j !== y) && board[i][j] === board[x][y]) {
                return false;
            }
        }
    }
    return true;
};

let board = [["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
solveSudoku(board);
console.log(board);
