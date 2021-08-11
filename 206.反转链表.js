/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
var reverseList = function (head) {
	return reverse(null, head)
};

function reverse(prev, cur) {
	while (cur) {
		let tmp = cur.next
		cur.next = prev
		prev = cur
		cur = tmp
	}
	return prev
}
// @lc code=end

