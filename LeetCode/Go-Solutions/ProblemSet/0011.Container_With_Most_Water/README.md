# 11. 盛最多水的容器

## 链接
https://leetcode-cn.com/problems/container-with-most-water/

## 难度
中等

## 描述
给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

说明：你不能倾斜容器，且 n 的值至少为 2。

![](https://aliyun-lc-upload.oss-cn-hangzhou.aliyuncs.com/aliyun-lc-upload/uploads/2018/07/25/question_11.jpg)  

图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。

示例
```text
输入: [1,8,6,2,5,4,8,3,7]
输出: 49
```

## 思路
从数组两边往里推进，找出最大的面积  
为了使面积最大化，长度短的往里进一，长度长的不变

## 疑惑

两段代码
```go
// 代码 A
func max(a int, b int) (r int) {
	r = a
	if a < b {
		r = b
	}
	return
}
```

```go
// 代码 B
func max(a int, b int) int {
	if a >= b {
		return a
	}
	return b
}
```

在这个程序里，不同的 max 实现，代码 A 就是比代码 B 快 10ms + ，虽然 10ms 很小，但是对于只需要执行 20-30 ms 的程序而言，差异就是 50%    

