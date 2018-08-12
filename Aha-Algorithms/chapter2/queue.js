/**
 * 队列
 */
"use strict";

class Queue {
    constructor() {
        this.data = []; // 数组实现的队列，应该来说是以 list 链表实现
        this.head = 0;
        this.tail = 0;
    }

    /**
     * 入队
     * @param value
     */
    enqueue(value) {
        this.data.push(value);
        this.tail++;
    }

    /**
     * 出队
     */
    dequeue() {
        let val = this.data[this.head];
        this.data[this.head] = undefined;
        this.head++;
        return val;
        // return this.data[this.head++];
    }

    /**
     * 队列是否为空
     */
    isEmpty() {
        return this.head === this.tail;
    }
}

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

    // 第二个数放到末尾
    queue.enqueue(queue.dequeue())
}

console.log('QQ 号是：' + qq);


