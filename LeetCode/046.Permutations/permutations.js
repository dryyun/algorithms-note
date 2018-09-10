/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let result = [];
    let book = [];
    let tmp = [];
    let len = nums.length;
    let dfs = function (step) {
        if (step > len) {
            result.push(tmp.concat());
            return;
        }
        for (let i = 0; i < len; i++) {
            if (book[i] === 1) {

            } else {
                book[i] = 1;
                tmp.push(nums[i]);
                dfs(step + 1);
                book[i] = 0;
                tmp.pop();
            }
        }
    };
    dfs(1);
    return result;
};
console.log(permute([1, 2, 3]));
console.log(permute([2, 3, 4, 5]));