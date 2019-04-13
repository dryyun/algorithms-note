package _012_Integer_to_Roman

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestOne(t *testing.T) {
	tests := []struct {
		n int
		s string
	}{
		{1, "I"},
		{3, "III"},
		{4, "IV"},
		{49, "XLIX"},
		{58, "LVIII"},
		{1994, "MCMXCIV"},
	}

	for _, v := range tests {
		assert.Equal(t, intToRoman(v.n), v.s, "should be equal")
	}
}
