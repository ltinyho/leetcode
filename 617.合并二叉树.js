/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
	if (!root1) {
		return root2
	}
	if (!root2) {
		return root1
	}
	let q = []
	q.push(root1)
	q.push(root2)
	while (q.length) {
		let node1 = q.shift()
		let node2 = q.shift()
		node1.val += node2.val
		if (node1.left && node2.left) {
			q.push(node1.left)
			q.push(node2.left)
		}
		if (node1.right && node2.right) {
			q.push(node1.right)
			q.push(node2.right)
		}
		if (!node1.left && node2.left) {
			node1.left = node2.left
		}
		if (!node1.right && node2.right) {
			node1.right = node2.right
		}
	}
	return root1
};
// @lc code=end

