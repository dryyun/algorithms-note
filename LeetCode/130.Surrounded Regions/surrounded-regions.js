/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    if (!board.length) {
        return;
    }
    let xl = board.length;
    let yl = board[0].length;
    let side = []; // 第几块 ‘O’ 是靠近岛的
    let set = [];
    let num = 0;
    let book = createTwoArray(xl); // 0 || undefined 没访问过，1 表示内容为 ‘O’ ，2 表示内容为 ‘X’

    let dfs = function (x, y, num) {
        let directions = [
            [0, 1],// 右
            [1, 0],//下
            [0, -1],//左
            [-1, 0],//上
        ];
        if (0 === x || 0 === y || x === xl - 1 || y === yl - 1) {
            side[num] = true;
        }

        if (!set[num]) {
            set[num] = [];
        }
        set[num].push([x, y]);

        for (let k = 0; k < 4; k++) {
            let [tx, ty] = [x + directions[k][0], y + directions[k][1]];
            if (tx < 0 || ty < 0 || tx >= xl || ty >= yl) {
                continue;
            }
            if (board[tx][ty] === 'O' && !book[tx][ty]) {
                book[tx][ty] = 1;
                dfs(tx, ty, num);
            }
        }
    };

    for (let i = 0; i < xl; i++) {
        for (let j = 0; j < yl; j++) {
            if (board[i][j] === 'O' && !book[i][j]) {
                num++;
                book[i][j] = 1;
                dfs(i, j, num);
            }
        }
    }

    set.forEach((v, k) => {
        if (!side[k]) {
            v.forEach(vv => {
                board[vv[0]][vv[1]] = 'X';
            })
        }
    });

};

function createTwoArray(xl) {
    let book = [];
    for (let i = 0; i < xl; i++) {
        book[i] = [];
    }
    return book;
}

let board = [
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'X', 'O', 'X'],
    ['X', 'O', 'X', 'X']
];
solve(board);
console.log(board);