package palindrome

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestOne(t *testing.T) {
	tests := []struct {
		s string
		r bool
	}{
		{
			s: "a",
			r: true,
		},
		{
			s: "ab",
			r: false,
		},
		{
			s: "aba",
			r: true,
		},
	}
	for _, v := range tests {
		assert.Equal(t, IsPalindrome(v.s), v.r, "should be equal")
	}
}
