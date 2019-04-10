package _002_Add_Two_Numbers

import (
	. "github.com/dryyun/algorithms-note/LeetCode/Go-Solutions/helper"
)

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	var v1, v2, v, carry int
	var head, current, node *ListNode
	head = &ListNode{}
	current = head
	for l1 != nil || l2 != nil {
		v1, v2 = 0, 0
		if l1 != nil {
			v1 = l1.Val
			l1 = l1.Next
		}

		if l2 != nil {
			v2 = l2.Val
			l2 = l2.Next
		}

		v = v1 + v2 + carry
		carry = v / 10

		node = &ListNode{v % 10, nil}
		current.Next = node

		current = node
	}

	if carry == 1 {
		node = &ListNode{1, nil}
		current.Next = node
	}

	return head.Next
}
