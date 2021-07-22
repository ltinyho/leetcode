/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
	if (!root) {
		return null
	}
	if (root.val === key) {
		if (!root.left) {		// 左子树为空或者左右都为空
			return root.right
		} else if (!root.right) { 			// 右子树为空
			return root.left
		} else {// 左右都不为空,将root.left挂到root.right最左节点(即最小值)
			let cur = root.right
			while (cur.left) {
				cur = cur.left
			}
			cur.left = root.left
			root = root.right
			return root
		}
	}
	if (root.val > key) {
		root.left = deleteNode(root.left, key)
	}
	if (root.val < key) {
		root.right = deleteNode(root.right, key)
	}
	return root
};



// @lc code=end

