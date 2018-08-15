# 啊哈!算法 - 第四章

## 深度优先搜索 DFS  

Depth First Search 

关键解决 【当下该如何做】

```js

function dfs(step){
    //判断边界条件 return
    //尝试每一种可能
    for (let i = 0 ;i < n; i++){
        dfs(step+1);//继续下一步
    } 
    return 
}

```
## 最短路径

使用 dfs 实现  



## 广度优先搜索 BFS  

Breadth First Search

使用 Queue 实现

4.3 节讲解内容，只考虑了一种路径实现，也不是最短路径，只不过恰好第一种实现就是最短实现。  
稍微改改，就可以改成获取全部路径情况 + 最短路径  




## 关于 4.1 代码 JS 实现  
我要把所有的可能性都 push 到数组 result 里面 ，但是确都引用了最后一个 boxes 的值，导致所有的结果输出都一样。  
直接赋值不行，我可以理解，为什么 IIFEs 赋值也不行

```js
    result.push(_.slice(boxes));
    
    // TODO 直接赋值不行
    // result.push(boxes);
    
    // TODO IIFEs 形式赋值也不行
    // (function (res) {
    //     result.push(res);
    // })(boxes);
```