package palindrome

// 判断回文，外部可见函数
func IsPalindrome(s string) bool {
	return isPalindromeByIndex(s, 0, len(s)-1)
}

// 判断回文，外部不可见
func isPalindromeByIndex(s string, start int, end int) bool {
	for start < end && s[start] == s[end] {
		start++
		end--
	}
	return start >= end
}
