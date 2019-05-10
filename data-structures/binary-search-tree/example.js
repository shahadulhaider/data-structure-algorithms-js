const BinarySearchTree = require('./BinarySearchTree');

const tree = new BinarySearchTree();

tree.insert(11);
tree.insert(7);
tree.insert(18);
tree.insert(13);
tree.insert(6);
tree.insert(8);
tree.insert(15);
tree.insert(10);
tree.insert(20);
tree.insert(5);
tree.insert(2);
tree.insert(17);
tree.insert(20);
tree.insert(25);


// console.log(tree);
console.log(tree.min());
console.log(tree.max());
console.log(tree.search(23));
console.log(tree.search(17));
console.log(tree.search(8));

// const printNode = (value) => console.log(value);
// tree.inOrderTraverse(printNode);
// console.log('-------------------------');
// tree.preOrderTraverse(printNode);
// console.log('-------------------------');
// tree.postOrderTraverse(printNode);