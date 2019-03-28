package main

import "fmt"

func main() {
	nums := []int{2, 7, 11, 15}
	target := 9
	fmt.Print(twoSum(nums, target)) // [0,1]

	nums = []int{3, 3}
	target = 6
	fmt.Print(twoSum(nums, target)) // [0,1]
}

func twoSum(nums []int, target int) []int {
	visited := make(map[int]int)
	for k, v := range nums {
		if i, ok := visited[target-v]; ok {
			return []int{i, k}
		} else {
			visited[v] = k
		}
	}
	return []int{}
}
