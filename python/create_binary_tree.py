from TreeNode import TreeNode
import random


def create_binary_tree(depth):
    if depth == 0:
        return None

    root = TreeNode()
    root.depth = depth

    if depth == 1:
        root.isPirate = random.random() < 0.5
    else:
        root.left = create_binary_tree(depth - 1)
        root.right = create_binary_tree(depth - 1)

    return root
