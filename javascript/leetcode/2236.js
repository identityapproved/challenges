class TreeNode {
  constructor(val,left,right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? 0 : left);
    this.right = (right===undefined ? 0 : right);
  };
};

/**
 * @param {TreeNode} root
 * @return {boolean}
*/

const checkTree = (root) => root.left+root.right === root.val ? true : false;

const trueNode = new TreeNode(66,33,33);

console.log(checkTree(trueNode));

// leetcode accepted
// const checkTree = (root) => root.left.val + root.right.val === root.val ? true : false;
