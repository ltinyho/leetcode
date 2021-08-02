/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
	if (!head) {
		return null
	}
	let slow = head
	let fast = head
	while (fast && fast.next) {
		slow = slow.next
		fast = fast.next.next
		if (slow === fast) {
			let headNode = head
			let cycleNode = fast
			// 从相遇节点开始,一直遍历到 head与与cycleNode相等
			// 即得到环的入口
			while (headNode !== cycleNode) {
				headNode = headNode.next
				cycleNode = cycleNode.next
			}
			return headNode
		}
	}
	return null
};
// @lc code=end

