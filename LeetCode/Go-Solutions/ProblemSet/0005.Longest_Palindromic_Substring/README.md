# 5. 最长回文子串

## 链接
https://leetcode-cn.com/problems/longest-palindromic-substring/

## 难度
中等

## 描述
给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：
```text
输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
```

示例 2：
```text
输入: "cbbd"
输出: "bb"
```
## 思路
https://www.jianshu.com/p/a7741619dd58   
动态规划  
dp[i][j]，表示子串 i->j 是否是回文，基于判断 s[i]==[sj] && dp[i+1][j-1]    
存在情况  
- aa，i = 0，j = 1，dp[i+1][j-1] = dp[1][0] ，其实肯定符合条件  
- aba，i = 0，j = 2， dp[i+1][j-1] = dp[1][1]，其实也肯定符合条件  

所以推出判断 s[i] == s[j] && (j-i < 3 || dp[i+1][j-1])   

