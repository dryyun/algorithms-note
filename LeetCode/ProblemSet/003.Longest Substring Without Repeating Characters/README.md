# 无重复字符的最长子串

## 链接
https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/description/

## 描述
给定一个字符串，找出不含有重复字符的最长子串的长度。   

示例 1:
```text
输入: "abcabcbb"
输出: 3 
解释: 无重复字符的最长子串是 "abc"，其长度为 3。
```

示例 2:
```text
输入: "bbbbb"
输出: 1
解释: 无重复字符的最长子串是 "b"，其长度为 1。
```
示例 3:
```text
输入: "pwwkew"
输出: 3
解释: 无重复字符的最长子串是 "wke"，其长度为 3。
     请注意，答案必须是一个子串，"pwke" 是一个子序列 而不是子串。
```

## 思路
使用一个变量 let map = {} ，记录字符是否出现过 
     