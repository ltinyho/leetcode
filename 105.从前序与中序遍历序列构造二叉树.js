/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
	if (!preorder.length) {
		return null
	}
	return help(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1)
};

function help(preorder, psta, pend, inorder, ista, iend) {
	if (psta > pend) {
		return null
	}
	let rootVal = preorder[psta]// 使用psta取根元素
	let root = new TreeNode(rootVal)
	let idx = 0;
	for (let i = ista; i <= iend; i++) {
		if (inorder[i] === rootVal) {
			idx = i;
			break
		}
	}
	let leftSize = idx - ista;
	let left = help(preorder, psta + 1, psta + leftSize, inorder, ista, idx - 1)
	let right = help(preorder, psta + leftSize + 1, pend, inorder, idx + 1, iend)
	root.left = left
	root.right = right
	return root
}

// @lc code=end

