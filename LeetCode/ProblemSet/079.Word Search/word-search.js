/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let xl = board.length;
    let yl = board[0].length;
    let book = createTwoArray(xl);


    let isExist = false;
    let wl = word.length;
    let directions = [
        [0, 1],// 右
        [1, 0],//下
        [0, -1],//左
        [-1, 0],//上
    ];
    let dfs = function (wi, x, y) {
        if (board[x][y] !== word[wi]) {
            return;
        }

        if (isExist || wi === wl - 1) {
            isExist = true;
            return;
        }

        for (let i = 0; i < 4; i++) {
            let [dx, dy] = [x + directions[i][0], y + directions[i][1]];
            if (dx >= 0 && dy >= 0 && dx < xl && dy < yl && !book[dx][dy]) {
                book[dx][dy] = 1;
                dfs(wi + 1, dx, dy);
                book[dx][dy] = 0;
                if (isExist) {
                    break;
                }
            }
        }
    };

    for (let i = 0; i < xl; i++) {
        for (let j = 0; j < yl; j++) {
            if (board[i][j] === word[0]) {
                book[i][j] = 1;
                dfs(0, i, j);
                book[i][j] = 0;

                if (isExist) {
                    break;
                }
            }
        }
    }
    return isExist;
};

function createTwoArray(xl) {
    let book = [];
    for (let i = 0; i < xl; i++) {
        book[i] = [];
    }
    return book;
}


let board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
];

console.log(exist(board, 'ABCCED'));
console.log(exist(board, 'SEE'));
console.log(exist(board, 'ABCB'));
console.log(exist([
    ['a', 'a']
], 'aaa'));


console.log(exist([["C", "A", "A"], ["A", "A", "A"], ["B", "C", "D"]], "AAB"));