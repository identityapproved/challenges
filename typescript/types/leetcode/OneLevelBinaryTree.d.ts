declare class OneLevelBinaryTree<T extends number> {
    root: T;
    left: T | null;
    right: T | null;
    constructor(root: T, left: T | null, right: T | null);
    checkTree(): boolean;
}
declare const rootNode: OneLevelBinaryTree<23 | 46>;
declare const isChildsEqual: boolean;
//# sourceMappingURL=OneLevelBinaryTree.d.ts.map