# 单词拆分

## 链接
https://leetcode-cn.com/problems/word-break/description/

## 描述
给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。

说明：
- 拆分时可以重复使用字典中的单词。
- 你可以假设字典中没有重复的单词。
示例 1：
```text
输入: s = "leetcode", wordDict = ["leet", "code"]
输出: true
解释: 返回 true 因为 "leetcode" 可以被拆分成 "leet code"。
```

示例 2：
```text
输入: s = "applepenapple", wordDict = ["apple", "pen"]
输出: true
解释: 返回 true 因为 "applepenapple" 可以被拆分成 "apple pen apple"。
     注意你可以重复使用字典中的单词。
```

示例 3：
```text
输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
输出: false
```

## 思路

### 思路 1 

深度优先搜索，DFS 实现，方法可行，但是面对超长数据，会超时

### 思路 2 

动态规划 DP 

let dp = [];
dp[i] 表示 字符串 [0-i) (不包括 i) ，是否可以被分词

dp[i] = dp[j] && ( s[j,i] in dirt ) 

初始条件 dp[0] = true 
