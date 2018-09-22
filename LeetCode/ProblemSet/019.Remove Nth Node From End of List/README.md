# 删除链表的倒数第N个节点

## 链接
https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/description/

## 描述
给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。  

示例：
```text
给定一个链表: 1->2->3->4->5, 和 n = 2.

当删除了倒数第二个节点后，链表变为 1->2->3->5.
```

说明：  
给定的 n 保证是有效的。  

进阶：  
你能尝试使用一趟扫描实现吗？  

## 思考

first，second 都指向 head
first 先行 n 步，然后 first、second 都每次 1 步往前走，直到 first 到头 

