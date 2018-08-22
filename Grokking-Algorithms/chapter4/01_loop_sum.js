/**
 * 循环求数组和
 */
"use strict";

function sum(arr) {
    let sum = 0;
    arr.forEach((v) => {
        sum += v;
    });
    return sum;
}

console.log(sum([1, 2, 3, 4, 5]));

