/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
    let r = binary_search(nums, target);
    return r !== -1;
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
        } else if (nums[left] < nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else if (nums[left] > nums[mid]) {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        } else {
            left++;
        }
    }
    return index;
}

// console.log(search([2, 5, 6, 0, 0, 1, 2], 0));
// console.log(search([2, 5, 6, 0, 0, 1, 2], 3));
console.log(search([1, 3, 1, 1, 1], 3));
