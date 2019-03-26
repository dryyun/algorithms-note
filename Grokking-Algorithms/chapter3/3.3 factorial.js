"use strict";

/**
 * 递归实现阶乘函数
 * @param x
 * @returns {*}
 */
function fact(x) {
    if (1 === x) {
        return x;
    }
    return x * fact(x - 1);
}

console.log(fact(5));
