# 使用 Go 刷 LeetCode

> 很是别扭，强类型

组成
- helper，辅助代码
- ProblemSet，题目集合
    -  0001.Two Sum，单题目录
        - README.md 必要的说明，进入单目录运行 `cp ../../helper/README.example.md README.md` 
        - two-sum.go 代码实现
        - two-sum_test.go 测试用例，进入目录运行 `go test -v` 即可 
        
运行全部测试，进入 ProblemSet 目录，运行 `go test -v ./...` 
        
引用第三方库使用了 go modules 
