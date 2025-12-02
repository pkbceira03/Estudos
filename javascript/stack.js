// com array

// const myStack = [];
// myStack.push('a')
// myStack.pop();
// console.log(myStack)
 


// foprma mais eficiente

class StackNode{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.size = 0;
    }

    push(val){
        const newNode = new StackNode(val);

        if(this.size === 0){
            this.top = newNode;
        }else{
            newNode.next = this.top;
            this.top = newNode;
        }

        this.size ++;
    }

    pop(){
        if(this.size === 0) return null;

        const removedNode = this.top;
        this.top = this.top.next
        this.size --;
        
        return removedNode.val;
    }

    getTop(){
        if(this.size === 0) return null;

        return this.top.val;
    }

    getSize(){
        return this.size;
    }
}


const myStack = new Stack();

myStack.push(3)
myStack.push(4)
myStack.push(6)
myStack.pop()

console.log(myStack.getSize());