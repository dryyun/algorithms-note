/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let len = nums.length;
    let result = [];
    let dfs = function (index, step, arr) {
        result.push(arr.concat());

        for (let i = index; i < len; i++) {
            arr.push(nums[i]);
            dfs(i + 1, step + 1, arr);
            arr.pop();
        }
    };
    dfs(0, 1, []);
    return result;
};
console.log(subsets([0]));
console.log(subsets([1, 2, 3]));

