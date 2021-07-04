/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
	if (!root) {
		return root
	}
	let cur = root
	while (cur) {
		let dummy = new Node(0)
		let prev = dummy
		while (cur) {
			if (cur.left) {
				prev.next = cur.left
				prev = prev.next
			}
			if (cur.right) {
				prev.next = cur.right
				prev = prev.next
			}
			cur = cur.next
		}
		cur = dummy.next
	}
	return root
};
// @lc code=end

