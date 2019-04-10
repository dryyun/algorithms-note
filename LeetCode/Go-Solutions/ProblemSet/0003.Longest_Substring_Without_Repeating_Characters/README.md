# 3. 无重复字符的最长子串

## 链接
https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/

## 难度
中等

## 描述
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:
```text
输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```

示例 2:
```text
输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```

示例 3:
```text
输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
```

## 思路

使用一个 map 类型保存字符上次出现的位置，判断是否出现过 
字符没出现过，tmplen ++
字符出现了，赋值 ignore = index ，从这个位置重新计算，ignore 之前的字符认为是没出现过的

