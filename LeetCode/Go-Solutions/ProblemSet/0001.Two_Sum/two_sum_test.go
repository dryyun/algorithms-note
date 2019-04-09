package two_sum

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestTwoSumA(t *testing.T) {
	nums := []int{2, 7, 11, 15}
	target := 9
	result := []int{0, 1}
	assert.Equal(t, twoSum(nums, target), result, "should be equal")
}

func TestTwoSumB(t *testing.T) {
	nums := []int{3, 3}
	target := 6
	result := []int{0, 1}
	assert.Equal(t, twoSum(nums, target), result, "should be equal")
}
