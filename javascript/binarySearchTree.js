class BinarySearchTree{
    constructor(val){
        this.val = val;
        this.leftChild = null;
        this.rightChild = null;
    }

    insertNode(val) {
        if(val <= this.val && this.leftChild){
            this.leftChild.insertNode(val)
        }else if(val <= this.val){
            this.leftChild = new BinarySearchTree(val);
        }else if(val > this.val && this.rightChild){
            this.rightChild.insertNode(val);
        }else{
            this.rightChild = new BinarySearchTree(val);
        }
    }

    findNode(val) {
        if(val < this.val && this.leftChild){
            return this.leftChild.findNode(val);
        }

        if(val > this.val && this.rightChild){
            return this.rightChild.findNode(val);
        }

        return val === this.val;
    }

    removeNode(val, parent){
        if(val < this.val && this.leftChild){
            return this.leftChild.removeNode(val, this);
        }else if(val < this.val){
            return false;
        }else if(val > this.val && this.rightChild){
            return this.rightChild.removeNode(val, this);
        }else if(val > this.val){
            return false;
        }else{
            if (!this.leftChild && !this.rightChild && this === parent.leftChild) {
                parent.leftChild = null;
                this.clearNode();
            }else if(!this.leftChild && !this.rightChild && this === parent.rightChild){
                parent.rightChild = null;
                this.clearNode();
            }else if(this.leftChild && !this.rightChild && this === parent.leftChild) {
                parent.leftChild = this.leftChild;
                this.clearNode();
            }else if(this.leftChild && !this.rightChild && this === parent.rightChild) {
                parent.rightChild = this.rightChild;
                this.clearNode();
            }else if(!this.leftChild && this.rightChild && this === parent.leftChild) {
                parent.leftChild = this.leftChild;
                this.clearNode();
            }else if(!this.leftChild && this.rightChild && this === parent.rightChild) {
                parent.rightChild = this.rightChild;
                this.clearNode();
            }else{
                this.val = this.rightChild.findMiniumValue();
                this.rightChild.removeNode(this.val, this);
            }

            return true;
        }
    }

    findMiniumValue() {
        if(this.leftChild) {
            return this.leftChild.findMiniumValue()
        }else{
            return this.val;
        }
    }

    clearNode() {
        this.value = null;
        this.leftChild = null;
        this.rightChild = null;
    }
}

bst = new BinarySearchTree(15);
bst.insertNode(10)
bst.insertNode(8)
bst.insertNode(12)
bst.insertNode(20)
bst.insertNode(17)
bst.insertNode(25)
bst.insertNode(19)

console.log(bst.findNode(15))
console.log(bst.findNode(10))
console.log(bst.findNode(8)) 
console.log(bst.findNode(12))
console.log(bst.findNode(345))
console.log(bst.findNode(17))
console.log(bst.findNode(25))
console.log(bst.findNode(19))