function ListNode(val) {
    this.val = val;
    this.next = null;
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

}

module.exports = {LeetCode, ListNode};