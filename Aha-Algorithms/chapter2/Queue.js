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
        if (!this.isEmpty()) {
            let val = this.data[this.head];
            this.data[this.head] = undefined;
            this.head++;
            return val;
            // return this.data[this.head++];
        }
        throw new Error('queue is empty');
    }

    /**
     * 队列是否为空
     */
    isEmpty() {
        return this.head === this.tail;
    }

    /**
     * 获取队列第一个元素
     */
    first() {
        if (!this.isEmpty()) {
            return this.data[this.head];
        }
        throw new Error('queue is empty');
    }

    /**
     * 获取队列最后一个元素
     */
    last() {
        if (!this.isEmpty()) {
            return this.data[this.tail - 1];
        }
        throw new Error('queue is empty');
    }
}

module.exports = Queue;
