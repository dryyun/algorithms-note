/**
 * 深度优先搜索
 */

"use strict";

const util = require('../../util.js');
const _ = require('lodash');

var boxes = [],
    result = [],
    book = util.fillArray(10),
    n = 0;

n = 4;

dfs(1);

function dfs(step) {
    if (step === n + 1) {
        result.push(_.slice(boxes));

        // TODO 直接赋值不行
        // result.push(boxes);

        // TODO IIFEs 形式赋值也不行，？？比较费解
        // (function (res) {
        //     result.push(res);
        // })(boxes);

        return;
    }

    for (let i = 1; i <= n; i++) {
        if (!book[i]) {
            boxes[step] = i;
            book[i] = 1;
            dfs(step + 1);//递归调用下一步
            book[i] = 0; // 这步重要
        }
    }
    return;
}


console.log(result);
console.log('total', result.length);

