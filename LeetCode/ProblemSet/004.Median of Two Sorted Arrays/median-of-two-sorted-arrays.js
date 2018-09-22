/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let nums = nums1.concat(nums2);
    nums.sort((a, b) => a - b);

    let len = nums.length;
    if (len % 2 === 0) {
        let a = nums[len / 2];
        let b = nums[(len - 2) / 2];
        return (a + b) / 2;
    } else {
        return nums[(len - 1) / 2];
    }
};
//
console.log(findMedianSortedArrays([], [6]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
