# x 的平方根  

## 链接

https://leetcode-cn.com/problems/sqrtx/description/

## 描述

实现 int sqrt(int x) 函数。

计算并返回 x 的平方根，其中 x 是非负整数。  

由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。  

示例 1:
```text

输入: 4
输出: 2
```

示例 2:
```text
输入: 8
输出: 2
说明: 8 的平方根是 2.82842..., 
     由于返回类型是整数，小数部分将被舍去。
```

## 思路

### 思路 1 
就是无脑 i++ ，直到找到刚好 i * i <=n 的值 ，O(N)  

### 思路 2 

二分查找思想

比如，先选基数 10 ，如果大了就选 5 ，如果小了就选 20 ，O(logN) ，
所以这里基数的选择很重要，最好是随机。。。


