/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let index = binary_search(nums, target);
    if (-1 === index) {
        return [index, index];
    }

    let s = index;

    while (nums[s] === target) {
        s--;
    }
    s++;

    let e = index;
    while (nums[e] === target) {
        e++;
    }
    e--;
    return [s, e];

};

function binary_search(list, item) {
    let low = 0;
    let high = list.length - 1;

    let index = -1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = list[mid];

        if (guess === item) {
            index = mid;
            break;
        } else if (guess > item) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return index;
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 5));
console.log(searchRange([5, 7, 7, 8, 8, 10], 7));
console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 10));
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));



