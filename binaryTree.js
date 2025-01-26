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
        if (this.root === null) {
            this.root = new Node(value);
            return this.root;
        }

        const insertValue = (node, value) =>{
            if (value < node.data) {
                if(node.left === null)
                    node.left = new Node(value);
                else
                    insertValue(node.left, value);
            }
            else if (value > node.data){
                if(node.right === null)
                    node.right = new Node(value);
                else
                    insertValue(node.right, value);
            }
            return node;
        }
        return insertValue(this.root, value)
    }

    deleteItem(value){
        const deleteRecursively = (node, value) =>{
            if (node === null) {
                return null
            }
    
            if (value < node.data){
                node.left = deleteRecursively(node.left, value)
            }  
            else if (value > node.data){
                node.right = deleteRecursively(node.right, value)
            }
            else{
                if (node.right === null)
                    return node.right
                else if (node.left === null)
                    return node.left
                let deleteNode = this.findSmallest(node.right)
                node.data = deleteNode.data;
                node.right = deleteRecursively(node.right, deleteNode.data)
                }
            return node
        }
        this.root = deleteRecursively(this.root, value)

    }

    findSmallest(value){
            while(value.left !== null)
                value = value.left
            return value
    }

    find(value){
        const findRec = (root, value) =>{
            if (root === null)
                return false
            if (root.data === value)
                return true
            if (value < root.data)
                return findRec(root.left, value)
            else (value > root.data)
                return findRec(root.right, value)
        }
        return findRec(this.root,value)
    }

    levelOrder(callback){

    }

    inOrder(callback){

    }

    preOrder(callback){
        
    }

    postOrder(callback){
        
    }

    height(node = this.root){
        if(node === null)
            return -1
        let left = 0
        let right = 0

        if(node.left) 
            left += 1
        if(node.right)
            right += 1

        left += this.height(node.left)
        right += this.height(node.right)

        return (left > right) ? left : right
    }

    depth(node){
        let nodeAux = this.root
        let cont = 0

        while(nodeAux !== null){
            if(node === nodeAux.data)
                return cont
            cont++
            nodeAux = node < nodeAux ? nodeAux.left : nodeAux.right
        }
        return -1
    }

    isBalanced(node = this.root){
        if (node === null)
            return 0

        let left = this.height(node.left)
        let right = this.height(node.right)

        let treeHeight = left - right

        return (treeHeight >= -1 && treeHeight <= 1) ? true : false
    }

    rebalance(){
        if(this.isBalanced() >= -1 && this.isBalanced <= 1)
            return('Already balanced')
        return('Working on it!!!')
    }
}

module.exports = {Tree}