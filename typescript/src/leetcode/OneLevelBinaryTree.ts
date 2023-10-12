class OneLevelBinaryTree<T extends number> {
  root: T;
  left: T | null;
  right: T | null;

  constructor(root: T, left: T | null, right: T | null) {
    this.root = root;
    this.left = left;
    this.right = right;
  }
  
  checkTree(): boolean {
    if (this.left === null || this.right === null) {
      return false;
    };

    return this.root === this.left + this.right;
  };
};

// Example usage:
const rootNode = new OneLevelBinaryTree(46,23,23);
const isChildsEqual = rootNode.checkTree();
console.log("isChildsEqual:", isChildsEqual)
