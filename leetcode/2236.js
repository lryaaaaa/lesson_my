var checkTree = function(root) {
  return root.val===root.left.val+root.right.val
};
//二叉树   左右之和等于总子树