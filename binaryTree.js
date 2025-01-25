class Node{
    constructor(data){
        this.data = data
        this.right = null
        this.left = null
    }
}

class Tree{
    constructor(array){
        this.root = this.buildTree(array)
    }

    buildTree(array){
        let arrayAux = []
        if(array.length === 0) return null
        arrayAux = array.sort().filter((item, index) => array.indexOf(item) === index)

        let middle = Math.floor(arrayAux.length/2)
        let root = new Node(arrayAux[middle])
        root.left = this.buildTree(arrayAux.slice(0,middle))
        root.right = this.buildTree(arrayAux.slice(middle+1))
        return root
    }

    prettyPrint(Node = this.root, prefix = "", isLeft = true){
        if (Node === null) {
          return;
        }
        if (Node.right !== null) {
          this.prettyPrint(Node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${Node.data}`);
        if (Node.left !== null) {
          this.prettyPrint(Node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
    };
     

    insert(value){

    }

    deleteItem(value){

    }

    find(value){

    }

    levelOrder(callback){

    }

    inOrder(callback){

    }

    preOrder(callback){
        
    }

    postOrder(callback){
        
    }

    height(node){

    }

    depth(node){

    }

    isBalanced(){

    }

    rebalance(){

    }
}

module.exports = {Tree}