/**
 * 递归求数组 count
 */
"use strict";

function count(list) {
    // 示例代码是使用 .length 判断空数组长度 === 0，但是我觉得都能用 length 了，写这个递归 count 也没啥意义
    // 所以换了个方法判断空数组
    if (list[0] === undefined) {
        return 0;
    }
    list.pop();
    return 1 + count(list);
}

console.log(count([0, 1, 3, 4, 5, 8]));
