/**
 * 递归求数组和
 */
"use strict";

function sum(arr) {

    if (0 === arr.length) {
        return 0;
    }

    return arr.pop() + sum(arr);
}

console.log(sum([1, 2, 3, 4, 5, 12]));
