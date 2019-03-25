/**
 * 队列
 * 解密 QQ 号，规则：首先将第 1 个数删除，再将第 2 个数放到这串数的末尾，再将第 3 个数删除并将第 4 个数放到这串数的末尾，再将第 5 个数删除…… 直到剩下最后一个数，将最后一个数也删除。
 */
"use strict";

const Queue = require('./Queue.js');

// 解密 QQ 号
let nums = [6, 3, 1, 7, 5, 8, 9, 2, 4];
let queue = new Queue();

nums.forEach((value) => {
    queue.enqueue(value);
});


let qq = '';
while (!queue.isEmpty()) {
    // 第一个数删除
    qq += queue.dequeue();

    if (!queue.isEmpty()) {
        // 第二个数放到末尾
        queue.enqueue(queue.dequeue());
    }
}

console.log('QQ 号是：' + qq);


