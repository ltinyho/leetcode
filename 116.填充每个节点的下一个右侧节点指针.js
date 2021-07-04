/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
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
		return root;
	}
	help(root.left, root.right)
	return root
};
// 递归
// 定义递归函数: 给定两个节点,将left.next 指向right
function help(left, right) {
	if (!left || !right) {
		return;
	}

	left.next = right
	help(left.left, left.right)
	help(right.left, right.right)
	help(left.right, right.left)
	return
}


// 迭代
/**
 * @param {Node} root
 * @return {Node}
 */
var connect1 = function (root) {
	if (!root) {
		return root
	}
	let q = []
	q.push(root)
	while (q.length) {
		let len = q.length
		let level = []
		for (let i = 0; i < len; i++) {
			const node = q.shift();
			level.push(node)
			if (node.left) {
				q.push(node.left)
			}
			if (node.right) {
				q.push(node.right)
			}
		}
		for (let i = 1; i <= level.length - 1; i++) {
			const node = level[i - 1];
			node.next = level[i]
		}
	}
	return root
};
// @lc code=end

