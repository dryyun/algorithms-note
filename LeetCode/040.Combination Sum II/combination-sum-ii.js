/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum2 = function (candidates, target) {
    candidates.sort((a, b) => a - b);

    let len = candidates.length;

    let dfs = function (index, sum, candidates, target) {
        if (sum > target) {
            return;
        }
        if (sum === target) {
            result.push(tmp.concat());
            return;
        }

        for (let i = index; i < len; i++) {
            if (i > index && candidates[i] === candidates[i - 1]) {
                continue;
            }
            tmp.push(candidates[i]);
            dfs(i + 1, sum + candidates[i], candidates, target);
            tmp.pop();

        }
    };
    let result = [];
    let tmp = [];
    dfs(0, 0, candidates, target);
    return result;
};


// console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
// console.log(combinationSum2([2, 5, 2, 1, 2], 5));

console.log(combinationSum2([14, 6, 25, 9, 30, 20, 33, 34, 28, 30, 16, 12, 31, 9, 9, 12, 34, 16, 25, 32, 8, 7, 30, 12, 33, 20, 21, 29, 24, 17, 27, 34, 11, 17, 30, 6, 32, 21, 27, 17, 16, 8, 24, 12, 12, 28, 11, 33, 10, 32, 22, 13, 34, 18, 12], 27));
