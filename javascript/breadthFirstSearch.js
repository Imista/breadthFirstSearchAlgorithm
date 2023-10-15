const breadthFirstSearch = (root, objetive) => {
    const queue = [root];
    while (queue.length > 0) {
        const node = queue.shift();

        if (objetive(node)) return node;

        if (node?.left) queue.push(node.left);
        if (node?.right) queue.push(node.right);
    }

    return null;
};

module.exports = breadthFirstSearch;
