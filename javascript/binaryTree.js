class BinaryTree{
    constructor(val){
        this.val = val;
        this.leftChild = null;
        this.rightChild = null;
    }

    insertLeft(val) {
        if (this.leftChild === null){
            this.leftChild = new BinaryTree(val);
        }else{
            newNode = new BinaryTree(val);
            newNode.leftChild = this.leftChild;
            this.leftChild = newNode;
        }
    }

    insertRight(val) {
        if (this.rightChild === null){
            this.rightChild = new BinaryTree(val);
        }else{
            newNode = new BinaryTree(val);
            newNode.rightChild = this.rightChild;
            this.rightChild = newNode;
        }
    }

    //busca em profundidade (DFS -  Depth fisrt serarch)

    preOrder() {
        console.log(this.val);
        if(this.leftChild){
            this.leftChild.preOrder();
        }

        if(this.rightChild){
            this.rightChild.preOrder();
        }
    }

    inOrder() {
        if(this.leftChild){
            this.leftChild.preOrder();
        }

        console.log(this.val)

        if(this.rightChild){
            this.rightChild.preOrder();
        }
    }

    posOrder() {
        if(this.leftChild){
            this.leftChild.preOrder();
        }

        if(this.rightChild){
            this.rightChild.preOrder();
        }

        console.log(this.val)
    }

    //busca em largura (BFS - Breadth first serach)

    bfs() {
        let queue = [];
        queue.push(this);

        while(queue.length > 0){
            let currentNode = queue.shift();
            console.log(currentNode.val);

            if(currentNode.leftChild){
                //console.log(currentNode.leftChild);
                queue.push(currentNode.leftChild)
            }

            if(currentNode.rightChild){
                //console.log(currentNode.rightChild);
                queue.push(currentNode.rightChild);
            }
        }
    }

}

a_node = new BinaryTree('a')
a_node.insertLeft('b')
a_node.insertRight('c')

b_node = a_node.leftChild
b_node.insertRight('d')

c_node = a_node.rightChild
c_node.insertLeft('e')
c_node.insertRight('f')

d_node = b_node.rightChild
e_node = c_node.leftChild
f_node = c_node.rightChild

a_node.bfs();
