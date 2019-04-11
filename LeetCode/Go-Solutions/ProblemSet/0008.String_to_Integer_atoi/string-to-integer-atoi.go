package _008_String_to_Integer_atoi

import (
	"math"
	"strings"
)

func myAtoi(str string) int {
	str = strings.TrimSpace(str)
	if str == "" {
		return 0
	}
	if str[0] != 43 && str[0] != 45 && (str[0] < 48 || str[0] > 57) {
		return 0
	}

	// +，43
	// -，45
	// 0-9，48-57
	symbol := 1
	r := 0
	if str[0] == 45 { // -
		symbol = -1
	} else if str[0] >= 48 { // 0-9
		r = int(str[0] - '0')
	}
	for _, v := range str[1:] {
		if v >= 48 && v <= 57 {
			r = r*10 + int(v-'0')
			if r >= math.MaxInt32+1 {
				r = math.MaxInt32 + 1
				break;
			}
		} else {
			break;
		}
	}
	r = symbol * r
	if r > math.MaxInt32 {
		r = math.MaxInt32
	} else if r < math.MinInt32 {
		r = math.MinInt32
	}
	return r
}
