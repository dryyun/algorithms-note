"use strict";

const List = require('./List.js');
const ListNode = require('./ListNode.js');

class SortList extends List {

    /**
     * 按数字顺序插入 value
     * @param value
     */
    insert(value) {
        let newNode = new ListNode(value);
        if (this.head == null) {
            this.head = newNode;
            return;
        }

        if (this.head.value > value) {
            let tmp = this.head;
            this.head = newNode;
            newNode.next = tmp;
            return;
        }

        let current = this.head;
        while (current.next != null && current.next.value < value) {
            current = current.next;
        }
        let tmp = current.next;
        current.next = newNode;
        newNode.next = tmp;

        return;
    }

}

let list = new SortList();

[2, 3, 5, 8, 9, 10, 18, 26, 32].forEach((val) => {
    list.append(val)
});


// 输出 list 中所有的数字
console.log(list.toString());

list.insert(6);
console.log('insert 6:', list.toString());

list.insert(34);
console.log('insert 34:', list.toString());

list.insert(1);
console.log('inert 1:', list.toString());

