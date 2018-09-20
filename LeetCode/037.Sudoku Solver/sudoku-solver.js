/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === '.') {
                for (let k = 0; k < 9; k++) {
                    board[i][j] = k + 1;
                    

                }
            }
        }
    }
};


let check = function () {

};