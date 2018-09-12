/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    let result = [];
    let book = [];
    let dfs = function (index, step, arr) {
        if (step === k + 1) {
            result.push(arr.concat());
            return;
        }
        for (let i = index; i <= n; i++) {
            if (!book[i]) {
                book[i] = 1;
                arr.push(i);
                dfs(i, step + 1, arr);
                arr.pop();
                book[i] = 0;
            }
        }
    };
    dfs(1, 1, []);
    return result;
};

console.log(combine(4, 2));
