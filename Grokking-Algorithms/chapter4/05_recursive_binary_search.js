/**
 * 递归实现二分查找
 */
"use strict";

function recursiveBinarySearch(list, low, high, item) {
    let mid = Math.floor((low + high) / 2);
    if (list[mid] === item) {
        return mid;
    }
    if (low >= high) {
        return null;
    }

    let index;
    if (list[mid] > item) {
        index = recursiveBinarySearch(list, low, mid - 1, item);
    } else {
        index = recursiveBinarySearch(list, mid + 1, high, item);
    }
    return index;
}

let list = [1, 3, 5, 7, 9];
console.log(recursiveBinarySearch(list, 0, list.length, 9));
console.log(recursiveBinarySearch(list, 0, list.length, -1));
