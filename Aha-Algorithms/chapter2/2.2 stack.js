/**
 * 栈
 */
"use strict";

const Stack = require('./Stack.js');

/**
 * 判断是否回文
 * @param str
 */
function isPalindromic(str) {
    let length = str.length;
    let mid = Math.floor(length / 2) - 1;

    let stack = new Stack();
    for (let i = 0; i <= mid; i++) {
        stack.push(str[i])
    }

    let next = length % 2 === 0 ? mid + 1 : mid + 2;

    for (let i = next; i < length; i++) {
        if (stack.pop() !== str[i]) {
            return false;
        }
    }
    return stack.isEmpty();
}

let str = 'xyzzyx';
console.log(str + ' 是否回文？', isPalindromic(str) ? '是' : '否');

let str2 = 'xyz12zyx';
console.log(str2 + ' 是否回文？', isPalindromic(str2) ? '是' : '否');
