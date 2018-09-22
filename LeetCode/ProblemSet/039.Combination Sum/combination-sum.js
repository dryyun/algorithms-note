/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var result = [];
var tmp = [];

var combinationSum = function (candidates, target) {
    candidates.sort((a, b) => a - b);
    result = [];
    tmp = [];

    for (let i = 0, len = candidates.length; i < len; i++) {
        tmp = [candidates[i]];
        dfs(i, candidates[i], candidates, target);
    }

    return result;
};

function dfs(index, sum, candidates, target) {
    if (sum > target) {
        return;
    }
    if (sum === target) {
        result.push(tmp.slice(0));
        return;
    }

    for (let i = index, len = candidates.length; i < len; i++) {
        tmp.push(candidates[i]);
        sum += candidates[i];
        dfs(i, sum, candidates, target);
        tmp.pop();
        sum -= candidates[i];
    }

}

console.log(combinationSum([2, 3, 6, 7], 7));
console.log(combinationSum([2, 3, 5], 8));
