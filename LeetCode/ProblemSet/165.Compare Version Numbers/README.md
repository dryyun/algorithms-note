# 比较版本号

## 链接
https://leetcode-cn.com/problems/compare-version-numbers/description/

## 描述
比较两个版本号 version1 和 version2。
如果 version1 > version2 返回 1，如果 version1 < version2 返回 -1， 除此之外返回 0。

你可以假设版本字符串非空，并且只包含数字和 . 字符。

 . 字符不代表小数点，而是用于分隔数字序列。

例如，2.5 不是“两个半”，也不是“差一半到三”，而是第二版中的第五个小版本。

示例 1:
```text
输入: version1 = "0.1", version2 = "1.1"
输出: -1
```

示例 2:
```text
输入: version1 = "1.0.1", version2 = "1"
输出: 1
```

示例 3:
```text
输入: version1 = "7.5.2.4", version2 = "7.5.3"
输出: -1
``` 
