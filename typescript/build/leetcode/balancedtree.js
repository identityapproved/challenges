"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalancedTreeNode = void 0;
const TreeNode_1 = require("./TreeNode");
class BalancedTreeNode {
    constructor(root) {
        this.root = root;
    }
    static createBalancedTree(values) {
        const createNode = (start, end) => {
            if (start > end) {
                return null;
            }
            const mid = Math.floor((start + end) / 2);
            const node = {
                val: values[mid],
                left: createNode(start, mid - 1),
                right: createNode(mid + 1, end),
            };
            return node;
        };
        const root = createNode(0, values.length - 1);
        return new TreeNode_1.TreeNode(root.val, root.left, root.right);
    }
}
exports.BalancedTreeNode = BalancedTreeNode;
//# sourceMappingURL=balancedtree.js.map