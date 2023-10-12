import { BinaryNode } from "global";

export class TreeNode<T> {
  root: BinaryNode<T> | null;

  constructor(val: T, left: BinaryNode<T> | null = null, right: BinaryNode<T> | null = null) {
    this.root = {
      val,
      left,
      right
    };
  };
};

