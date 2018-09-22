/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    return binary_search(nums, target);
};

function binary_search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let index = -1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            index = mid;
            break;
        } else if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return index;
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 2));
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));

