package _002_Add_Two_Numbers

import (
	"github.com/stretchr/testify/assert"
	. "github.com/dryyun/algorithms-note/LeetCode/Go-Solutions/helper"
	"testing"
)

func TestOne(t *testing.T) {
	tests := []struct {
		s1     []int
		s2     []int
		result []int
	}{
		{
			s1:     []int{2, 4, 3},
			s2:     []int{5, 6, 4},
			result: []int{7, 0, 8},
		},
		{
			s1:     []int{5},
			s2:     []int{5},
			result: []int{0, 1},
		},
		{
			s1:     []int{2, 4, 6},
			s2:     []int{5, 6, 4},
			result: []int{7, 0, 1, 1},
		},
		{
			s1:     []int{9},
			s2:     []int{2, 3, 4, 5},
			result: []int{1, 4, 4, 5},
		},
	}

	for _, v := range tests {
		l1 := SliceToList(v.s1)
		l2 := SliceToList(v.s2)
		assert.Equal(t, ListToSlice(addTwoNumbers(l1, l2)), v.result, "should be equal")
	}

}
