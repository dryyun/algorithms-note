package _009_Palindrome_Number

import (
	"strconv"
)

func isPalindrome(x int) bool {
	s := strconv.Itoa(x)
	return isPalindromeByIndex(s, 0, len(s)-1)
}

func isPalindromeByIndex(s string, start int, end int) bool {
	for start < end && s[start] == s[end] {
		start++
		end--
	}
	return start >= end
}
