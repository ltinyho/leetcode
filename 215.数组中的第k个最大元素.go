/*
 * @lc app=leetcode.cn id=215 lang=golang
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
func findKthLargest(nums []int, k int) int {
	heapSize := len(nums)
	buildMaxHeap(nums, heapSize)
	for i := len(nums) - 1; i >= len(nums)-k+1; i-- {
		nums[0], nums[i] = nums[i], nums[0]
		heapSize--
		maxHeapify(nums, 0, heapSize)
	}
	return nums[0]
}

func buildMaxHeap(a []int, heapSize int) {
	for i := heapSize / 2; i >= 0; i-- {
		maxHeapify(a, i, heapSize)
	}
}

func maxHeapify(a []int, i, heapSize int) {
	l := i*2 + 1
	r := i*2 + 2
	largest := i

	// 求左右子节点哪个比当前节点更大
	if l < heapSize && a[l] > a[largest] {
		largest = l
	}
	if r < heapSize && a[r] > a[largest] {
		largest = r
	}


	if largest != i {// 当前节点小于左或者右的节点,将
		a[i], a[largest] = a[largest], a[i]
		maxHeapify(a, largest, heapSize)
	}
}

// @lc code=end
