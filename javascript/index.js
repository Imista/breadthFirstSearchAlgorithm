const breadthFirstSearch = require("./breadthFirstSearch");
const createBinaryTreeWithRandomPirate = require("./createBinaryTreeWithRandomPirate");

const treeWithRandomPirate = createBinaryTreeWithRandomPirate(8);
const pirateNode = breadthFirstSearch(
    treeWithRandomPirate,
    (node) => node.isPirate
);

console.log(pirateNode);
