/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N 叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
	if (!root) {
		return []
	}
	let res = []
	let stack = []
	stack.push(root)
	while (stack.length) {
		let node = stack.pop()
		res.push(node.val)
		let len = node.children.length
		for (let i = len - 1; i >= 0;i--) {
			const child = node.children[i];
			stack.push(child)
		}
	}

	return res;
};

// @lc code=end

