package _012_Integer_to_Roman

func intToRoman(num int) string {
	m := []struct {
		n int
		s string
	}{
		{1000, "M"},
		{900, "CM"},
		{500, "D"},
		{400, "CD"},
		{100, "C"},
		{90, "XC"},
		{50, "L"},
		{40, "XL"},
		{10, "X"},
		{9, "IX"},
		{5, "V"},
		{4, "IV"},
		{1, "I"},
	}

	l, i := len(m), 0
	r := ""
	for num > 0 {
		i = 0
		if num < 90 {
			i = 6
		}
		for ; i < l; i++ {
			if num >= m[i].n {
				num -= m[i].n
				r += m[i].s
				break;
			}
		}
	}
	return r
}
