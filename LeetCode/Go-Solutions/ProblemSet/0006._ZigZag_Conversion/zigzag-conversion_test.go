package _006__ZigZag_Conversion

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestOne(t *testing.T) {
	tests := []struct {
		s string
		n int
		r string
	}{
		{
			s: "LEETCODEISHIRING",
			n: 3,
			r: "LCIRETOESIIGEDHN",
		},
		{
			s: "LEETCODEISHIRING",
			n: 4,
			r: "LDREOEIIECIHNTSG",
		},
	}

	for _, v := range tests {
		assert.Equal(t, convert(v.s, v.n), v.r, "should be equal")
	}
}
