/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} cur
 * @return {number[]}
 */
var postorderTraversal = function (root) {
	let stack = []
	let res = []
	let prev = null
	let cur = root
	while (cur || stack.length) {
		while (cur) {
			stack.push(cur)
			cur = cur.left;
		}
		if (stack.length) {
			cur = stack.pop()
			// 当前节点右节点为空时,或者当前节点的右节点为上次访问的节点(表示是根节点)
			if (cur.right === null || cur.right === prev) {
				res.push(cur.val)
				prev = cur
				cur = null
			} else {
				stack.push(cur) // 将根节点再次入栈,等待下次访问
				cur = cur.right // 经过右节点
			}
		}
	}
	return res;
};







// @lc code=end

