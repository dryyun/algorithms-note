/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let node = new ListNode(0); // 设置填充位置
    let list = node;
    let tmp = null;
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            tmp = l1.val;
            l1 = l1.next;
        } else {
            tmp = l2.val;
            l2 = l2.next;
        }

        node.next = new ListNode(tmp);
        node = node.next;
    }

    l1 ? node.next = l1 : node.next = l2;

    return list.next;
};


// ===== For Test

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function createList(arr) {
    let node = null;
    let nextNode = null;
    for (let len = arr.length, i = len - 1; i >= 0; i--) {
        node = new ListNode(arr[i]);
        if (nextNode) {
            node.next = nextNode;
        }
        nextNode = node;
    }
    return node;
}

function showList(list) {
    let str = '';
    while (list) {
        str += list.val + ',';
        list = list.next;
    }
    return str;
}

let cl1 = createList([1, 2, 4]);
let cl2 = createList([1, 3, 4]);

let list = mergeTwoLists(cl1, cl2);
console.log(showList(list));


cl1 = createList([2, 3, 4]);
cl2 = createList([1, 3, 3, 4]);

list = mergeTwoLists(cl1, cl2);
console.log(showList(list));


cl1 = createList([0]);
cl2 = createList([]);

list = mergeTwoLists(cl1, cl2);
console.log(showList(list));
