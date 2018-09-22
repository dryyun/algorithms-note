/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    let result = [];
    let dfs = function (index, step, arr) {
        if (step === k + 1) {
            result.push(arr.concat());
            return;
        }
        for (let i = index; i <= n; i++) {
            arr.push(i);
            dfs(i + 1, step + 1, arr);
            arr.pop();
        }
    };
    dfs(1, 1, []);
    return result;
};

console.log(combine(4, 2));
