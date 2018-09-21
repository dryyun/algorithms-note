/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    if (0 === n || 2 === n || 3 === n) {
        return [];
    }
    if (1 === n) {
        return [['Q']];
    }

    let solution = new Array(n);
    for (let i = 0; i < n; i++) {
        solution[i] = new Array(n).fill('.');
    }
    let xmap = {};
    let ymap = {};

    let result = [];
    let dfs = function (step) {
        if (step === n) {
            result.push(JSON.parse(JSON.stringify(solution)));
            return;
        }

        for (let i = step; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (!xmap[i] && !ymap[j]) {
                    xmap[i] = 1;
                    ymap[j] = 1;
                    solution[i][j] = 'Q';
                    if (check(solution, n, i, j)) {
                        dfs(step + 1);
                    }
                    solution[i][j] = '.';
                    xmap[i] = 0;
                    ymap[j] = 0;
                }
            }
        }
    };

    dfs(0);

    return result;
};

/**
 * 检查斜线就行
 * @param solution
 * @param n
 * @param x
 * @param y
 */
function check(solution, n, x, y) {
    // 右斜 -
    let [tx, ty] = [x, y];
    while (tx !== 0 && ty !== 0) {
        tx--;
        ty--;
        if (solution[tx][ty] === 'Q') {
            return false;
        }
    }

    // 右斜 +
    [tx, ty] = [x, y];
    while (tx !== n - 1 && ty !== n - 1) {
        tx++;
        ty++;
        if (solution[tx][ty] === 'Q') {
            return false;
        }
    }

    // 左斜 x-> 0
    [tx, ty] = [x, y];
    while (tx !== 0 && ty !== n - 1) {
        tx--;
        ty++;
        if (solution[tx][ty] === 'Q') {
            return false;
        }
    }

    // 左斜 y-> 0
    [tx, ty] = [x, y];
    while (tx !== n - 1 && ty !== 0) {
        tx++;
        ty--;
        if (solution[tx][ty] === 'Q') {
            return false;
        }
    }
    return true;
}


// console.log(solveNQueens(1));
// console.log(solveNQueens(2));
// console.log(solveNQueens(3));

let solve4 = solveNQueens(4);
console.log(solve4);

let solve8 = solveNQueens(8);
console.log(solve8);

console.log(solve4.length, solve8.length);
