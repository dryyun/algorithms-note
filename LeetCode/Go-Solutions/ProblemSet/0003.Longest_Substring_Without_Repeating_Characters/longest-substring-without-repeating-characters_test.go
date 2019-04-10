package _003_Longest_Substring_Without_Repeating_Characters

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestOne(t *testing.T) {
	tests := []struct {
		s string
		l int
	}{
		{
			s: "bacabcbb",
			l: 3,
		},
		{
			s: "bbbbb",
			l: 1,
		},
		{
			s: "pwwkew",
			l: 3,
		},
	}

	for _, v := range tests {
		assert.Equal(t, lengthOfLongestSubstring(v.s), v.l, "should be equal")
	}
}
