const breadthFirstSearch = (root, objetive) => {
    const queque = [root];
    while (queque.length > 0) {
        const node = queque.shift();

        if (objetive(node)) return node;

        if (node?.left) queque.push(node.left);
        if (node?.right) queque.push(node.right);
    }

    return null;
};

module.exports = breadthFirstSearch;
