# 第 1 章 算法简介

## 二分查找  

输入一个`有序`的元素列表，使用二分法查找某个元素的位置 

### 对数概念

10<sup>3</sup> = 1000  <=>  log<sub>10</sub>1000 = 3  
2<sup>4</sup> = 16  <=>  log<sub>2</sub>16 = 4  

### 时间复杂度

> 线性查找 O(N)   
> 二分查找 O(log<sub>2</sub>N)  


## 大 O 表示法

log 指的是 log<sub>2</sub>  

- 算法的运行时间以不同的速度增加
- 大 O 表示法指出了最糟糕情况下的运行时间  

还需要考虑平均运行时间

### 常见的大 O 运行时间

- O(logn)，对数时间
- O(n)，线性时间
- O(n * logn)
- O(n<sup>2</sup>)
- O(n!)，n 的阶乘

### 1.3.5 旅行商问题 

使用`图的最小生成树`就能好好的解决了吧 