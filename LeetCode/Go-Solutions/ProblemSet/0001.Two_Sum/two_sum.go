package two_sum

func twoSum(nums []int, target int) []int {
	visited := make(map[int]int)
	for k, v := range nums {
		if i, ok := visited[target-v]; ok {
			return []int{i, k}
		} else {
			visited[v] = k
		}
	}
	return nil
}
