package _005_Longest_Palindromic_Substring

func longestPalindrome(s string) string {
	length := len(s)
	if length <= 1 {
		return s
	}

	// 基于题目描述，字符串长度不超过 1000，声明二维数组
	dp := [1000][1000]bool{}

	// 声明二维 slice
	//dp := make([][]bool, length)
	//for i := range dp {
	//	dp[i] = make([]bool, length)
	//}

	var st, sl int // string start，start len
	for i := length - 2; i >= 0; i-- {
		dp[i][i] = true
		for j := i + 1; j < length; j++ {
			if s[i] == s[j] && (j-i < 3 || dp[i+1][j-1]) {
				dp[i][j] = true
				if j-i > sl {
					st = i
					sl = j - i
				}
			}
		}
	}
	return s[st : st+sl+1]
}
