"use strict";

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = new Map();
    for (let i = 0, len = nums.length; i < len; i++) {
        let a = target - nums[i];
        if (map.has(a)) {
            return [map.get(a), i];
        }
        map.set(nums[i], i);
    }
    return null;
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 3], 6));
