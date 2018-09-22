/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let len = nums.length;
    if (1 === len) {
        return nums[0];
    }

    let start = 0, end = len - 1, mid;
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (1 === end - start) {
            return Math.min(nums[end], nums[start]);
        }
        if (nums[start] < nums[mid] && nums[mid] < nums[end]) {
            return nums[0];
        }
        if (nums[start] < nums[mid]) {
            start = mid;
        } else {
            end = mid
        }
    }
};

console.log(findMin([3, 4, 5, 6, 7, 0, 1, 2]));
console.log(findMin([7, 0, 1, 2, 3, 4, 5]));  //
console.log(findMin([3, 4, 5, 1, 2]));
console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
console.log(findMin([1, 2, 3]));
