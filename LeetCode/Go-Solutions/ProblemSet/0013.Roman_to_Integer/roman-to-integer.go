package _013_Roman_to_Integer

func romanToInt(s string) int {
	m := map[string]int{
		"I":  1,
		"IV": 4,
		"V":  5,
		"IX": 9,
		"X":  10,
		"XL": 40,
		"L":  50,
		"XC": 90,
		"C":  100,
		"CD": 400,
		"D":  500,
		"CM": 900,
		"M":  1000,
	}

	r, a := 0, 0 // r 是结果，a 是每次循环增量
	for i, l := 0, len(s); i < l; i++ {
		a = m[s[i:i+1]]
		if i+1 < l {
			if v, ok := m[s[i:i+2]]; ok {
				a = v
				i++;
			}
		}
		r += a
	}
	return r
}
