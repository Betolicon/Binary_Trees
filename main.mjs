import pkg from './binaryTree.js'
const { Tree } = pkg

const callback = (node) =>{
    console.log(node.data)
}

const maxNumber = () =>{
    return Math.floor(Math.random() * 100)
}

const randomArray = (saveNumbers) =>{
    const number = maxNumber()
    for(let i = 0; i < number; i++){
        saveNumbers(Math.floor(Math.random() * number))
    }
}

const saveNumbers = (array) =>{
    return (number)  => {
        array.push(number)
    } 
}

const array = []
const arrayNumbers = saveNumbers(array)

randomArray(arrayNumbers)


const tree = new Tree(array)
tree.levelOrder(callback)
console.log('---Pretty Pint---')
tree.prettyPrint()
console.log('---In Order---')
tree.inOrder(callback)
console.log('---Pre Order---')
tree.preOrder(callback)
console.log('---Post Order---')
tree.postOrder(callback)
console.log(tree.isBalanced())
tree.insert(8)
tree.insert(9)
tree.insert(10)
tree.insert(11)
tree.insert(12)
tree.insert(4)
console.log(tree.isBalanced())
tree.prettyPrint()
console.log('---In Order---')
tree.inOrder(callback)
tree.rebalance()
tree.prettyPrint()
console.log('---In Order---')
tree.inOrder(callback)
///node main.mjs