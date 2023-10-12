import { BinaryNode } from "../../types/global.d";
import { TreeNode } from "./TreeNode";

export class BalancedTreeNode<T> {
  root: BinaryNode<T> | null;

  constructor(root: BinaryNode<T> | null) {
    this.root = root;
  }

  static createBalancedTree<T>(values: T[]): TreeNode<T> {
    const createNode = (start: number, end: number): BinaryNode<T> | null => {
      if (start > end) {
        return null;
      }

      const mid = Math.floor((start + end) / 2);
      const node: BinaryNode<T> = {
        val: values[mid],
        left: createNode(start, mid - 1),
        right: createNode(mid + 1, end),
      };

      return node;
    };

    const root = createNode(0, values.length - 1);
    return new TreeNode(root!.val, root!.left, root!.right);
  }
}

