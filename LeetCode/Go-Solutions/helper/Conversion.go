package helper

func SliceToList(slice []int) *ListNode {
	if len(slice) == 0 {
		return nil
	}
	head := &ListNode{slice[0], nil}
	prev := head

	for _, v := range slice[1:] {
		node := &ListNode{v, nil}
		prev.Next = node
		prev = node
	}
	return head
}

func ListToSlice(node *ListNode) (r []int) {
	if node == nil {
		return
	}

	r = append(r, (*node).Val)
	for (*node).Next != nil {
		node = (*node).Next
		r = append(r, (*node).Val)
	}
	return
}
