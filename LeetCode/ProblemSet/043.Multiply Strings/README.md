# 字符串相乘

## 链接
https://leetcode-cn.com/problems/multiply-strings/description/

## 描述

给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

示例 1:
```text
输入: num1 = "2", num2 = "3"
输出: "6"
``` 
示例 2:
```text
输入: num1 = "123", num2 = "456"
输出: "56088"
```

说明：
- num1 和 num2 的长度小于110。
- num1 和 num2 只包含数字 0-9。
- num1 和 num2 均不以零开头，除非是数字 0 本身。
- **不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。**

## 思路
以 123 * 65 为例子，演变过程如下 
// a[0] = 0
// a[1] = 6;
// a[2] = 5;
// a[2] = 12 + a[2] = 17;
// a[3] = 10;
// a[3] = 18 + a[3] = 28;
// a[4] = 15;
// a = [0,6,17,28,15];
// a = [0,7,9,9,5];
// 7995