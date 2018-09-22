# 不同路径

## 链接
https://leetcode-cn.com/problems/unique-paths/description/

## 描述
一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

问总共有多少条不同的路径？
![](https://leetcode-cn.com/static/images/problemset/robot_maze.png)

例如，上图是一个7 x 3 的网格。有多少可能的路径？

说明：m 和 n 的值均不超过 100。

示例 1:
```text
输入: m = 3, n = 2
输出: 3
解释:
从左上角开始，总共有 3 条路径可以到达右下角。
1. 向右 -> 向右 -> 向下
2. 向右 -> 向下 -> 向右
3. 向下 -> 向右 -> 向右
```
示例 2:
```text
输入: m = 7, n = 3
输出: 28
``` 

## 思路

简单的 dfs 算法在 m * n 较小的情况下才适用，一旦变大，就会超时 ，比如 23 * 12

使用优化方案，加上 cache  
