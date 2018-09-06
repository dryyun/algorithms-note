# 二叉树遍历

## 介绍

对于二叉树，有深度遍历和广度遍历，深度遍历有前序、中序以及后序三种遍历方法，广度遍历即我们寻常所说的层次遍历。  

四种基本的遍历思想为：
- 前序遍历：根结点 ---> 左子树 ---> 右子树
- 中序遍历：左子树---> 根结点 ---> 右子树
- 后序遍历：左子树 ---> 右子树 ---> 根结点
- 层次遍历：按层次遍历

前三种遍历使用递归实现比较方便，层次遍历借助栈结构实现方便  

## 举例 1 
```text
         a
        /  \
       b    c
     /   \  
    d     f 
     \   /
      e  g

 
- 前序遍历：a b d e f g c 

- 中序遍历：d e b g f a c

- 后序遍历：e d g f b c a 

- 层次遍历：a b c d f e g 

``` 

## 举例 2 
```text
         A
       /   \
      B     E
       \     \
        C      F
       /     /
      D     G
           / \       
          H   K
      
- 前序，根左右：A B C D E F G H K
- 中序，左根右：B D C A E H G K F
- 后序，左右根，D C B H K G F E A
- 层次遍历：   A B E C F D G H K
``` 