/**
 * 快速排序
 */
"use strict";

function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let pivot = arr[0];//基准值

    let less = arr.filter((v, k) => {
        return k !== 0 && v <= pivot;
    });

    let greater = arr.filter((v, k) => {
        return k !== 0 && v > pivot;
    });

    return quickSort(less).concat([pivot], quickSort(greater));
}

console.log(quickSort([10, 5, 2, 3, 12, 10, 3]));
