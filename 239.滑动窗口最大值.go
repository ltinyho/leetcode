/*
 * @lc app=leetcode.cn id=239 lang=golang
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start

type MyQueue struct {
	q []int
}

func (m *MyQueue) Front() int {
	return m.q[0]
}
func (m *MyQueue) Empty() bool {
	return len(m.q) == 0
}

func (m *MyQueue) Back() int {
	return m.q[len(m.q)-1]
}

func (m *MyQueue) Push(val int) {
	for !m.Empty() && val > m.Back() {
		m.q = m.q[:len(m.q)-1]
	}
	m.q = append(m.q, val)
}

func (m *MyQueue) Pop(val int) {
	if !m.Empty() && val == m.Front() {
		m.q = m.q[1:]
	}
}

func NewMyQueue() *MyQueue {
	return &MyQueue{
		q: make([]int, 0),
	}
}

func maxSlidingWindow(nums []int, k int) []int {
	if len(nums) < k {
		return nil
	}
	var res []int
	q := NewMyQueue()
	for i := 0; i < k; i++ {
		q.Push(nums[i])
	}

	res = append(res, q.Front())
	for i := k; i < len(nums); i++ {
		q.Pop(nums[i-k])
		q.Push(nums[i])
		res = append(res, q.Front())
	}
	return res
}

// @lc code=end

