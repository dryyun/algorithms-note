const ListNode = require('./ListNode.js');

class List {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    /**
     * list 增加 value
     */
    append(value) {
        let node = new ListNode(value);
        if (this.head) {
            this.tail.next = node;
            this.tail = node;
        } else {
            this.head = node;
            this.tail = node;
        }
        return node;
    }

    toString() {
        let str = '';
        let next = this.head;
        while (next != null) {
            str = `${str} ${next.value}`;
            next = next.next;
        }
        return str;
    }

}

module.exports = List;
