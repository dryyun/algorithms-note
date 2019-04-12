package _011_Container_With_Most_Water

func maxArea(height []int) int {
	area, left, right := 0, 0, len(height)-1
	for left < right {
		if height[left] < height[right] {
			area = max(area, height[left]*(right-left))
			left++
		} else {
			area = max(area, height[right]*(right-left))
			right--
		}
	}
	return area
}

func max(a int, b int) (r int) {
	r = a
	if a < b {
		r = b
	}
	return
}
