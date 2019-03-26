/**
 * 递归求数组中最大的数
 */
"use strict";

function max(list) {
    if (1 === list.length) {
        return list[0];
    }
    return Math.max(list.pop(), max(list));
}

console.log(max([1, 5, 10, 25, 16, 1]));

