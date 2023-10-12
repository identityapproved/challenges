"use strict";
class OneLevelBinaryTree {
    constructor(root, left, right) {
        this.root = root;
        this.left = left;
        this.right = right;
    }
    checkTree() {
        if (this.left === null || this.right === null) {
            return false;
        }
        ;
        return this.root === this.left + this.right;
    }
    ;
}
;
const rootNode = new OneLevelBinaryTree(46, 23, 23);
const isChildsEqual = rootNode.checkTree();
console.log("isChildsEqual:", isChildsEqual);
//# sourceMappingURL=OneLevelBinaryTree.js.map