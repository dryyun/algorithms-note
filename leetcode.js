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
     * 针对一下结构，可以输入数组全数组[1,null,2,null,null,3]
     * 可以输入省略数组 [1,null,2,3]
        1
          \
          2
         /
        3
     * @param arr
     * @return {TreeNode}
     */
    static arrToBinaryTree(arr) {
        let nodes = [];

        let head = null, parent = null, left = null, right = null;
        for (let i = 0; i < arr.length; i++) {
            left = 2 * (i + 1);
            left = left - 1;
            right = left + 1;
            if (arr[i] === undefined || arr[i] === null) {

                if (arr[left] || arr[right]) {
                    let prefix = arr.slice(0, left);
                    let last = arr.slice(left);
                    let tArr = prefix.concat([null, null], last);
                    arr = tArr;
                }
                continue;
            }

            if (0 === i) {
                parent = new TreeNode(arr[i]);
                head = parent;
            } else {
                parent = nodes[i];
            }

            // left
            if (arr[left] !== undefined && arr[left] !== null) {
                let ln = new TreeNode(arr[left]);
                nodes[left] = ln;
                parent.left = ln;
            }
            // right
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
     * @param {Boolean} full ，是否返回全数组，参考 arrToBinaryTree 注释 
     * @return {Array}
     */
    static binaryTreeToArr(head, full = true) {
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
        arr.shift();
        arr.length = num;
        if (!full) {
            let left = null, right = null;
            for (let i = 0; i < arr.length; i++) {
                if (!arr[i]) {
                    left = 2 * (i + 1);
                    left = left - 1;
                    right = left + 1;

                    let prefix = arr.slice(0, left);
                    let last = arr.slice(right + 1);
                    let tArr = prefix.concat(last);
                    arr = tArr;
                }
            }
        }
        return arr;
    }

}

module.exports = {LeetCode, ListNode, TreeNode};
