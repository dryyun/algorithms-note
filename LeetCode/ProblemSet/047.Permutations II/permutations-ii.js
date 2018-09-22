/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    nums.sort((a, b) => a - b);

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
            if (book[i] !== 1) {
                if (i && nums[i - 1] === nums[i] && !book[i - 1]) {
                    continue;
                }
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
console.log(permuteUnique([1, 1, 1, 2]));
