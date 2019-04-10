package _007_Reverse_Integer

import "math"

func reverse(x int) int {
	symbol := 1
	if x < 0 {
		symbol = -1
		x = 0 - x
	}

	r := 0
	for x > 0 {
		tmp := x % 10
		r = r*10 + tmp
		x = x / 10
	}

	r = symbol * r

	if r > math.MaxInt32 || r < math.MinInt32 {
		r = 0
	}
	return r
}
