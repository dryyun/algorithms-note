"use strict";

/**
 * 倒计时递归函数，输出类似 3..2..1..
 * @param i
 * @returns {*}
 */
function countdown(i) {
    console.log(i);
    if (i <= 1) {
        return;
    }
    return countdown(i - 1);
}

countdown(5);