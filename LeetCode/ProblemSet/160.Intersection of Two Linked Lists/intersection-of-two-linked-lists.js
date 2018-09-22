/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let set = new Set();
    while (headA) {
        set.add(headA);
        headA = headA.next;
    }

    let r = null;
    while (headB) {
        if (set.has(headB)) {
            r = headB;
            break;
        }
        headB = headB.next;
    }
    return r;
};

