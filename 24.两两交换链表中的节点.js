/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
	let dummy = new ListNode(0)
	dummy.next = head
	let cur = dummy
	while (cur.next && cur.next.next) {
		let tmp = cur.next // 1
		let tmp1 = cur.next.next.next // 3
		cur.next = cur.next.next // 头=>2
		cur.next.next = tmp  // 2=>1
		cur.next.next.next = tmp1 // 1=>3
		cur = cur.next.next
	}
	return dummy.next
};
// @lc code=end

