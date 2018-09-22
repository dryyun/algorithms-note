/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let len = nums.length;
    if (len <= 2) {
        return len;
    }
    let first = nums[0], second = nums[1];
    let index = 2;
    while (index < len) {
        if (nums[index] === first && nums[index] === second) {
            nums.splice(index, 1);
            len--;
        } else {
            [first, second] = [second, nums[index]];
            index++;
        }
    }
    return len;
};

let nums = [1, 1, 1, 2, 2, 3];
console.log(removeDuplicates(nums));
console.log(nums);
//
nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
console.log(removeDuplicates(nums));
console.log(nums);

nums = [1, 1, 1, 1];
console.log(removeDuplicates(nums));
console.log(nums);
