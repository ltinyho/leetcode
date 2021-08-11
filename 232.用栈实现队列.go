/*
 * @lc app=leetcode.cn id=232 lang=golang
 *
 * [232] 用栈实现队列
 */

// @lc code=start
type MyQueue struct {
	q     []int
	stack []int
}

/** Initialize your data structure here. */
func Constructor() MyQueue {
	return MyQueue{
		q:     make([]int, 0),
		stack: make([]int, 0),
	}
}

/** Push element x to the back of queue. */
func (this *MyQueue) Push(x int) {
	this.stack = append(this.stack, x)
}

/** Removes the element from in front of queue and returns that element. */
func (this *MyQueue) Pop() int {
	if len(this.q) == 0 {
		this.q = append(this.q, this.stack...)
		this.stack = make([]int, 0)
	}
	if len(this.q) == 0 {
		return -1
	}
	res := this.q[0]
	this.q = this.q[1:]
	return res
}

/** Get the front element. */
func (this *MyQueue) Peek() int {
	if len(this.q) == 0 {
		this.q = append(this.q, this.stack...)
		this.stack = make([]int, 0)
	}
	if len(this.q) == 0 {
		return -1
	}
	return this.q[0]
}

/** Returns whether the queue is empty. */
func (this *MyQueue) Empty() bool {
	if len(this.q) == 0 && len(this.stack) == 0 {
		return true
	} else {
		return false
	}
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Push(x);
 * param_2 := obj.Pop();
 * param_3 := obj.Peek();
 * param_4 := obj.Empty();
 */
// @lc code=end

