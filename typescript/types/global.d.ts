export type BinaryNode<T> = {
  val: T;
  left: BinaryNode<T> | null;
  right: BinaryNode<T> | null;
};
