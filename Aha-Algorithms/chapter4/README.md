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

## 广度优先搜索 BFS  

Breadth First Search  

使用 Queue 实现  

4.3 节讲解内容，稍微改改，就可以改成获取全部路径情况 + 最短路径  

## 最短路径

使用 dfs 实现，需要遍历所有的可能性，然后比较得出结果  
使用 bfs 实现，得到的第一个结果就是最短路径，可以在这里跳出  

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

## 4.6  TODO  

书上说这节有点难度，可以跳过，我也干脆的直接去下一章咯，TODO 