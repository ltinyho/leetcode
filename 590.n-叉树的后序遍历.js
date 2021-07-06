/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N 叉树的后序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
	if (!root) {
		return []
	}
	let res = []
	let stack = []
	stack.push(root)
	let final = []
	// 中右左
	while (stack.length) {
		let node = stack.pop()
		res.push(node)
		let len = node.children.length
		for (let i = 0; i < len; i++) {
			const child = node.children[i];
			stack.push(child)
		}
	}
	while (res.length) {
		let node = res.pop()
		final.push(node.val)
	}
	return final;
};
// @lc code=end

