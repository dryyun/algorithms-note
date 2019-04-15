package _014_Longest_Common_Prefix

import "sort"

func longestCommonPrefix(strs []string) string {
	sl := len(strs)
	if sl == 0 {
		return ""
	}
	if sl == 1 {
		return strs[0]
	}

	sort.Strings(strs)

	lcp := ""

	for i, l := 0, len(strs[0]); i < l; i++ {
		for si := 1; si < sl; si++ {
			if strs[0][i] != strs[si][i] {
				return lcp
			}
		}
		lcp += string(strs[0][i])
	}
	return lcp
}
