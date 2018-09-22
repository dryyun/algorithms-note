/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let lastIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[lastIndex] = nums[i];
            lastIndex++
        }
    }
    return lastIndex;
};

let nums = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 2;
console.log(removeElement(nums, val));
console.log(nums);
