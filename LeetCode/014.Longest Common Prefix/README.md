# 最长公共前缀

## 链接

https://leetcode-cn.com/problems/longest-common-prefix/description/

## 描述

编写一个函数来查找字符串数组中的最长公共前缀。  

如果不存在公共前缀，返回空字符串 ""。  

示例 1:
```text
输入: ["flower","flow","flight"]
输出: "fl"
```
示例 2:
```text
输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
```
说明:  

所有输入只包含小写字母 a-z 。   

## 思路

### [思路1](./longest-common-prefix.js)  

从位置 0 开始，对每一个位置比较所有字符串，直到遇到一个不匹配。  
常规思路

### [思路2](./longest-common-prefix-2.js)   

分而治之，就跟快排一个思路  
