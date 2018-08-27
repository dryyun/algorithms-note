# 第 3 章 递归

> 如果使用循环，程序的性能可能更高；如果使用递归，程序可能更容易理解。如何选择要看什么对你来说更重要。  

## 基线条件和递归条件

每个递归函数都有两部分：基线条件（base case）和递归条件（recursive case）。
递归条件指的是函数调用自己，而基线条件则指的是函数不再调用自己，从而避免形成无限循环。

## 栈

栈是数据结构  

### 调用栈

所有的函数调用都进入调用栈  
调用另一个函数时，当前函数暂停并处于未完成状态，该函数的所有变量的值都还在内存中  


### 递归调用栈

调用栈很长的话，会占用大量内存  
`尾递归优化`

