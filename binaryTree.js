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
        if(array.length === 0) return null
    }
}

module.exports = {Tree}