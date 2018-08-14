/**
 * 纸牌游戏
 * 赢牌规则，如果某人打出的牌与桌上的某张牌相同，即可将两张牌以及中间所夹的牌全部取走
 * 获胜规则，对手没牌了
 */
"use strict";

const util = require('../../util.js');
const Queue = require('./Queue.js');
const Stack = require('./Stack.js');

let q1 = new Queue(),
    q2 = new Queue(),
    stack = new Stack(),
    book = util.fillArray(10);

[2, 4, 1, 2, 5, 6].forEach((val) => {
    q1.enqueue(val);
});

[3, 1, 3, 5, 6, 4].forEach((val) => {
    q2.enqueue(val);
});

while (!q1.isEmpty() && !q2.isEmpty()) {
    let tmp = q1.dequeue();
    if (!book[tmp]) {
        stack.push(tmp);
        book[tmp] = 1;
    } else {
        q1.enqueue(tmp);

        let stackTop = stack.pop();
        while (stackTop !== tmp) {
            book[stackTop] = 0;
            q1.enqueue(stackTop);
            stackTop = stack.pop();
        }
        book[stackTop] = 0;
        q1.enqueue(stackTop);
    }

    if (q1.isEmpty()) {
        break;
    }

    tmp = q2.dequeue();
    if (!book[tmp]) {
        stack.push(tmp);
        book[tmp] = 1;
    } else {
        q2.enqueue(tmp);

        let stackTop = stack.pop();
        while (stackTop !== tmp) {
            book[stackTop] = 0;
            q2.enqueue(stackTop);
            stackTop = stack.pop();
        }
        book[stackTop] = 0;
        q2.enqueue(stackTop);
    }
}
if (q2.isEmpty()) {
    console.log('q1 win');
    // console.log('q1 is', q1);
    console.log(stack)
}

if (q1.isEmpty()) {
    console.log('q2 win');
    // console.log('q2 is', q2);
    console.log(stack)
}

