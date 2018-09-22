/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    nums.sort((a, b) => a - b);
    let len = nums.length;
    let result = [];
    let dfs = function (index, step, arr) {
        result.push(arr.concat());

        for (let i = index; i < len; i++) {
            if (i && i !== index && nums[i - 1] === nums[i]) {
                continue;
            }
            arr.push(nums[i]);
            dfs(i + 1, step + 1, arr);
            arr.pop();
        }
    };
    dfs(0, 1, []);
    return result;
};
console.log(subsetsWithDup([0]));
console.log(subsetsWithDup([1, 2, 2]));
