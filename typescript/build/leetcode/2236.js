"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const balancedtree_1 = require("./balancedtree");
function checkTree(root) {
    if (root === null) {
        return true;
    }
    ;
    const sumSubtree = (node) => {
        if (node === null) {
            return 0;
        }
        ;
        const leftSum = sumSubtree(node.left);
        const rightSum = sumSubtree(node.right);
        return node.val + leftSum + rightSum;
    };
    return sumSubtree(root.left) + sumSubtree(root.right) === root.val;
}
;
const values = [46, 23, 23];
const balancedTree = balancedtree_1.BalancedTreeNode.createBalancedTree(values);
console.log("balancedTree:", balancedTree);
const isChildsEqual = checkTree(balancedTree.root);
console.log("isChildsEqual:", isChildsEqual);
//# sourceMappingURL=2236.js.map