import { BinaryNode } from "../../types/global.d";
import { TreeNode } from "./TreeNode";
export declare class BalancedTreeNode<T> {
    root: BinaryNode<T> | null;
    constructor(root: BinaryNode<T> | null);
    static createBalancedTree<T>(values: T[]): TreeNode<T>;
}
//# sourceMappingURL=balancedtree.d.ts.map