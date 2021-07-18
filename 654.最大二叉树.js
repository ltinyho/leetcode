/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
	if (!nums.length) {
		return null
	}
	return help(nums, 0, nums.length - 1)
};

function help(nums, sta, end) {
	if (sta > end) {
		return null
	}
	let idx = sta
	for (let i = sta+1; i <= end; i++) {
		if (nums[i] > nums[idx]) {
			idx = i
		}
	}
	let root = new TreeNode(nums[idx])
	root.left = help(nums, sta, idx-1)
	root.right = help(nums, idx + 1, end)
	return root
}
// @lc code=end

