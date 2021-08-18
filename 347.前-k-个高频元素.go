/*
 * @lc app=leetcode.cn id=347 lang=golang
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
func topKFrequent(nums []int, k int) []int {
	var res []int
	var slice []int
	m := make(map[int]int, 0)
	for _, num := range nums {
		_, ok := m[num]
		if ok {
			m[num] += 1
		} else {
			m[num] = 1
		}
	}
	for _, val := range m {
		slice = append(slice, val)
	}
	h := newHeap(slice)
	// 因为题目保证答案唯一,通过 count 来判断 val
	for i := 0; i < k; i++ {
		times := h.Pop()
		for key, val := range m {
			if val == times {
				res = append(res, key)
				m[key] = 0
				break
			}
		}
	}
	return res
}

type heap struct {
	d []int
}

func newHeap(nums []int) *heap {
	h := &heap{
		d: nums,
	}
	h.heapify()
	return h
}

// 堆化,从最后一个非叶子节点开始,依次下沉
func (h *heap) heapify() {
	last := len(h.d)/2 - 1
	for i := last; i >= 0; i-- {
		h.Down(i)
	}
}

// Down 元素下沉,大顶堆,小于左右子节点就下沉,跟左右子节点中较大的值互换
func (h *heap) Down(i int) {
	for leftChild(i) < len(h.d) {
		l := leftChild(i)
		maxIdx := l
		r := l + 1
		if r < len(h.d) && h.d[l] < h.d[r] {
			maxIdx = r
		}
		if h.d[i] >= h.d[maxIdx] { // 当前节点大于左右子节点,无需交换
			break
		}
		h.d[i], h.d[maxIdx] = h.d[maxIdx], h.d[i]
		i = maxIdx
	}
}

// Up 元素上浮 和父元素比较,大于父元素就互换,小于就停止
func (h *heap) Up(i int) {
	for i > 0 {
		parentIdx := parent(i)
		if h.d[i] > h.d[parentIdx] {
			h.d[i], h.d[parentIdx] = h.d[parentIdx], h.d[i]
		} else {
			break
		}
	}
}

// Pop 弹出堆顶元素 将堆顶元素和最后一个元素替换,然后从堆顶下沉,数组缩容
func (h *heap) Pop() int {
	res := h.d[0]
	h.d[0], h.d[len(h.d)-1] = h.d[len(h.d)-1], h.d[0]
	h.d = h.d[:len(h.d)-1]
	h.Down(0)
	return res
}

func (h *heap) Empty() bool {
	return len(h.d) == 0
}

// 根据当前节点找到左孩子下标
func leftChild(i int) int {
	return i*2 + 1
}

// 根据当前节点找到右孩子下标
func rightChild(i int) int {
	return i*2 + 2
}

// 根据当前节点找到父节点下标
func parent(i int) int {
	return (i - 1) / 2
}

// @lc code=end