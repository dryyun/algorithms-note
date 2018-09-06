// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

class LeetCode {
    /**
     * 数组转换成 list
     * @param arr
     * @return {ListNode}
     */
    static arrToList(arr) {
        let list = null, node = null;

        let len = arr.length;
        if (0 === len) {
            return list;
        }
        list = node = new ListNode(arr[0]);
        if (1 === len) {
            return list;
        }
        for (let i = 1; i < len; i++) {
            node.next = new ListNode(arr[i]);
            node = node.next;
        }
        return list;
    }

    /**
     * 显示 list
     * @param {ListNode} list
     * @return {string}
     */
    static showList(list) {
        let str = '';
        while (list) {
            str += list.val + '->';
            list = list.next;
        }
        console.log(str);
        return str;
    }

    /**
     * 数组转二叉树
     * @param arr
     * @return {TreeNode}
     */
    static arrToBinaryTree(arr) {
        let nodes = [];

        let head = null, parent = null, left = null, right = null;
        for (let i = 0, len = arr.length; i < len; i++) {
            if (arr[i] === undefined || arr[i] === null) {
                continue;
            }

            if (0 === i) {
                parent = new TreeNode(arr[i]);
                head = parent;
            } else {
                parent = nodes[i];
            }

            left = 2 * (i + 1);
            left = left - 1;
            if (arr[left] !== undefined && arr[left] !== null) {
                let ln = new TreeNode(arr[left]);
                nodes[left] = ln;
                parent.left = ln;
            }

            right = left + 1;
            if (arr[right] !== undefined && arr[right] !== null) {
                let rn = new TreeNode(arr[right]);
                nodes[right] = rn;
                parent.right = rn;
            }
        }

        return head;
    }

    /**
     * 二叉树转数组
     * @param head
     * @return {Array}
     */
    static binaryTreeToArr(head) {
        if (!head) {
            return [];
        }

        let stack = [];
        stack.push([1, head]);

        let arr = Array(10).fill(null);
        let len = 10;
        let num;
        let node;
        while (stack.length) {
            [num, node] = stack.shift();

            if (node.left) {
                stack.push([num * 2, node.left]);
            }
            if (node.right) {
                stack.push([num * 2 + 1, node.right]);
            }
            if (num > len) {
                arr = arr.concat(Array(len).fill(null));
                len = len * 2;
            }
            arr[num] = node.val;
        }
        return arr.slice(1, num + 1);
    }

}

module.exports = {LeetCode, ListNode, TreeNode};
