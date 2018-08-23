# 第 7 章　狄克斯特拉算法

## Dijkstra's algorithm
1、找出‘最便宜’的节点，即可在最短时间内到达的节点
2、更新该节点的令居的开销
3、重复这个过程，直到对图中的每个节点都这样做
4、计算最终路径

## 术语

权重 weight
加权图 weighted graph
非加权图 unweighted graph

计算非加权图中的最短路径，可使用广度优先搜索。要计算加权图中的最短路径，可使用狄克斯特拉算法。

`环`
`有向无环图`

## 实现

狄克斯特拉算法只适用于有向无环图（directed acyclic graph，DAG）  
不能将狄克斯特拉算法用于包含负权边的图  

解决负权边可以使用 - 贝尔曼-福德算法（Bellman-Ford algorithm）  



