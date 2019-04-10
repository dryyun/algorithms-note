# 使用 Go 刷 LeetCode

> 很是别扭，强类型  
> 使用 Go 实现，对比 JavaScript 实现，同样的代码快了 5倍+，10倍+ 也很常见。当然其实，我对 Go，JS 都不是很熟练。。  
> Go 没有三元表达式，真的要写代码    


组成
- helper，辅助代码
- ProblemSet，题目集合
    -  0001.Two Sum，单题目录
        - README.md 必要的说明，进入单目录运行 `cp ../../helper/README.example.md README.md` 
        - two-sum.go 代码实现
        - two-sum_test.go 测试用例，进入目录运行 `go test -v` 即可 
        
运行全部测试，进入 ProblemSet 目录，运行 `go test -v ./...` 
        
引用第三方库使用了 go modules 


