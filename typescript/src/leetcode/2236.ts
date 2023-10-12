import { BinaryNode } from "../../types/global.d";
import { BalancedTreeNode } from "./balancedtree";
/*
 *
 *class TreeNode {
 *  val: number;
 *  left: TreeNode | null;
 *  right: TreeNode | null;
 *  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *    this.val = (val===undefined ? 0 : val)
 *    this.left = (left===undefined ? null : left)
 *    this.right = (right===undefined ? null : right)
 *  };
 *};
 *
 */
function checkTree<T extends number>(root: BinaryNode<T> | null): boolean {
  if (root === null) {
    return true;
  };

  const sumSubtree = (node: BinaryNode<T> | null): number => {
      if (node === null) {
      return 0;
    };

    const leftSum = sumSubtree(node.left);
    const rightSum = sumSubtree(node.right);

    return node.val + leftSum + rightSum;
  };

/*
 *  if (root.left?.val !== undefined && root.right?.val !== undefined){
 *    const leftVal = root.left.val;
 *    const rightVal = root.right.val;
 *
 *    return root.val === leftVal + rightVal;
 *  };
 */
  return sumSubtree(root.left) + sumSubtree(root.right) === root.val;
  // return false;
};


// const trueNodes = new TreeNode(92,new TreeNode(46),new TreeNode(46));
/*
 *const trueNodes: BinaryNode<number> = {
 *  val: 92,
 *  left: {
 *    val: 46,
 *    left: null,
 *    right: null,
 *  },
 *  right: {
 *    val: 46,
 *    left: null,
 *    right: null,
 *  },
 *};
 */

// Usage:
const values = [46, 23, 23];
const balancedTree = BalancedTreeNode.createBalancedTree(values);
console.log("balancedTree:", balancedTree)

const isChildsEqual = checkTree(balancedTree.root);
console.log("isChildsEqual:", isChildsEqual)


