/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
	if (!inorder.length) {
		return null;
	}

	return help(inorder, 0, inorder.length - 1, postorder, 0, postorder.length - 1)
};

// 1.函数参数和返回值
// 2.终止条件
// 3.单层递归的逻辑
function help(inorder, ista, iend, postorder, psta, pend) {
	if (ista > iend) {
		return null
	}

	let rootVal = postorder[pend]
	let root = new TreeNode(rootVal)
	let idx = 0;
	for (let i = ista; i <= iend; i++) {
		if (inorder[i] === rootVal) {
			idx = i
			break
		}
	}

	let leftSize = idx - ista
	let left = help(inorder, ista, idx - 1, postorder, psta, psta + leftSize - 1)
	let right = help(inorder, idx + 1, iend, postorder, psta + leftSize, pend - 1)
	root.left = left
	root.right = right
	return root
}
// @lc code=end

