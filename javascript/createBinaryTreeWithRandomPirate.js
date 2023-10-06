const TreeNode = require("./TreeNode");

function createBinaryTreeWithRandomPirate(depth) {
    if (depth === 0) {
        return null;
    }

    const root = new TreeNode();
    root.depth = depth;

    if (depth == 1) {
        root.isPirate = Math.random() < 0.5;
    } else {
        root.left = createBinaryTreeWithRandomPirate(depth - 1);
        root.right = createBinaryTreeWithRandomPirate(depth - 1);
    }

    return root;
}

module.exports = createBinaryTreeWithRandomPirate;
