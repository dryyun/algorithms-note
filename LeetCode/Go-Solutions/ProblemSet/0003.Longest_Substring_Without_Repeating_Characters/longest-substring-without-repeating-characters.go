package _003_Longest_Substring_Without_Repeating_Characters

func lengthOfLongestSubstring(s string) int {
	var max, tmpLen, ignore int
	m := make(map[uint8]int)

	for i, length := 0, len(s); i < length; i++ {
		key := s[i]
		val, ok := m[key]
		if !ok || val < ignore {
			tmpLen++
			if tmpLen > max {
				max = tmpLen
			}
		} else {
			tmpLen = i - val
			ignore = val
		}
		m[key] = i
	}
	return max
}
