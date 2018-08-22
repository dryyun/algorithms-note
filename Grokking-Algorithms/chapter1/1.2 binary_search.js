/**
 * 二分查找
 */
"use strict";

function binary_search(list, item) {
    let low = 0;
    let high = list.length - 1;

    let index = null;
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

let list = [1, 3, 5, 7, 9];

console.log(binary_search(list, 3));
console.log(binary_search(list, -1));
