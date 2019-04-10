package _006__ZigZag_Conversion

import (
	"strings"
)

func convert(s string, numRows int) string {
	if numRows == 1 {
		return s
	}

	slice := make([]string, numRows)

	num, d := 0, 1; //d = 1 =》 向下，d = -1 =》 斜上
	for _, v := range s {
		slice[num] = slice[num] + string(v)
		num += d
		if num == numRows-1 {
			d = -1
		} else if num == 0 {
			d = 1
		}
	}
	return strings.Join(slice, "")
}
