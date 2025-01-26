import pkg from './binaryTree.js'
const { Tree } = pkg

const array = [1, 3, 2, 1, 6, 5, 7]    

const tree = new Tree(array)
tree.prettyPrint()
console.log(tree.find(8))
tree.insert(8)
console.log(tree.find(8))
///node main.mjs