package two_sum

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestOne(t *testing.T) {
	tests := []struct {
		nums   []int
		target int
		result []int
	}{
		{
			nums:   []int{2, 7, 11, 15},
			target: 9,
			result: []int{0, 1},
		},
		{
			nums:   []int{3, 3},
			target: 6,
			result: []int{0, 1},
		},
	}

	for _, v := range tests {
		assert.Equal(t, twoSum(v.nums, v.target), v.result, "should be equal")
	}
}
