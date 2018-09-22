# 电话号码的字母组合

## 链接
https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/description/

## 描述


给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。  

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。  

![image](https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Telephone-keypad2.svg/200px-Telephone-keypad2.svg.png)

示例:  
```text
输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
```

说明:  
尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。  

## 思路

深度优先搜索，dfs  

