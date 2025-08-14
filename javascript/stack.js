// com array

// const myStack = [];
// myStack.push('a')
// myStack.pop();
// console.log(myStack)
 


// foprma mais eficiente

class StackNode {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}


class Stack {
    constructor(){
        this.top = null;
        this.size = 0
    }

    push(val){
        if(this.size === 0){
            this.top = new StackNode(val);
        }else{
            const pushedNode = new StackNode(val);
            pushedNode = this.top;
            this.top = pushedNode
        }

        this.size++;
    }

    pop(){
        if(this.size === 0) return null;
        const popedNode = this.top;
        this.top = this.top.next;
        this.size--;
        return popedNode.val;
    }

    getTop(){
        return this.top.val;
    }
}

const myStack = new Stack();

myStack.push('a');
console.log(myStack.size);
console.log(myStack.pop());
