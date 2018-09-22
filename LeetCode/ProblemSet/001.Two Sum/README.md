# 两数之和

## 链接
https://leetcode-cn.com/problems/two-sum/description/  

## 描述
给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。  

你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。  

示例:  

```text
给定 nums = [2, 7, 11, 15], target = 9  

因为 nums[0] + nums[1] = 2 + 7 = 9  
所以返回 [0, 1]  
```

## 思路
a + b = target 看成 a = target - b ，设置变量数组 numMap，找是否存在 numMap[a]，存在就是满足条件，不存在就设置 numMap[b]，这样只需要一次循环。

numMap 的数据结构可以是 array，object {} 和 ES6 - Map ，但是使用 Map 就会慢几十 ms

弱类型语言的问题就是最后 return [] 和 return null; 都可以。 

