/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let index = 0;
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        if (index < i) {
            break;
        }
        index = Math.max(index, i + nums[i]);
    }
    return index >= len - 1;
};

console.log(canJump([2, 3, 1, 1, 4])); // true
console.log(canJump([3, 2, 1, 0, 4])); // false
console.log(canJump([2, 0])); // true
console.log(canJump([2, 5, 0, 0])); // true
console.log(canJump([0, 1])); // false

