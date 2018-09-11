/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let len = nums.length;
    let can = false;
    let dfs = function (index) {
        if (can) {
            return;
        }
        if (index >= len) {
            return;
        }
        if (index === len - 1) {
            can = true;
            return;
        }
        for (let i = nums[index]; i > 0; i--) {
            dfs(index + i);
        }

    };
    dfs(0);
    return can;
};

console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));


