# 6. Z 字形变换

## 链接
https://leetcode-cn.com/problems/zigzag-conversion/

## 难度
中等

## 描述
比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：
```text
L   C   I   R
E T O E S I I G
E   D   H   N
```

之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。

请你实现这个将字符串进行指定行数变换的函数：  

`string convert(string s, int numRows);`  

示例 1:
```text
输入: s = "LEETCODEISHIRING", numRows = 3
输出: "LCIRETOESIIGEDHN"
```

示例 2:
```text
输入: s = "LEETCODEISHIRING", numRows = 4
输出: "LDREOEIIECIHNTSG"
解释:

L     D     R
E   O E   I I
E C   I H   N
T     S     G
```

## 思路
一开始看题，会认为是一个二维的数组或者二维 slice  
其实就是一维的字符串数组 slice := make([]string, numRows)
以示例 2 为例，压缩成一维字符串就是
```text
LDR
EOEII
ECIHN
TSG
```
循环字符串，先往下每个字符串添加字符，然后往上每个字符串添加字符，依次循环。。

