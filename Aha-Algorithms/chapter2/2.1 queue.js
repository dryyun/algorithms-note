/**
 * 队列
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


