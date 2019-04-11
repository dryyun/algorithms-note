package _008_String_to_Integer_atoi

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestOne(t *testing.T) {
	tests := []struct {
		s string
		r int
	}{
		{
			s: "42",
			r: 42,
		},
		{
			s: "    -42",
			r: -42,
		},
		{
			s: "4193 with words",
			r: 4193,
		},
		{
			s: "words and 987",
			r: 0,
		},
		{
			s: "-91283472332",
			r: -2147483648,
		},
		{
			s: "9223372036854775808",
			r: 2147483647,
		},
		{
			s: "-91283472332",
			r: -2147483648,
		},
	}

	for _, v := range tests {
		assert.Equal(t, myAtoi(v.s, ), v.r, "should be equal")
	}
}
