/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let numMap = [];
    for (let i = 0, len = nums.length; i < len; i++) {
        let num = target - nums[i];
        if (numMap[num] !== undefined) {
            return [numMap[num], i];
        } else {
            numMap[nums[i]] = i;
        }
    }
    return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 3], 6));
