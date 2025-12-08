class NodeStack{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class MyStack{
    constructor(){
        this.top = null;
        this.size = 0;
    }

    push(val){
        const newNode = new NodeStack(val);
        
        if(this.size === 0){
            this.top = newNode;
        }else{
            newNode.next = this.top;
            this.top = newNode;
        }

        this.size++;
    }

    pop(){
        if(this.size === 0) return null;

        const removedNode = this.top;
        this.top = removedNode.next;
        this.size--;
        return removedNode.val;
    }

    getTop(){
        if(this.size === 0) return null;
        return this.top.val;
    }

    isEmpty(){
        if(this.size > 0) return false;
        return true;
    }

    getSize(){
        return this.size;
    }
}


var MyQueue = function() {
    this.principalStack = new MyStack();
    this.secundaryStack = new MyStack();
    this.aux;
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    if(this.principalStack.getSize() === 1){
        this.secundaryStack.push(x);
        this.secundaryStack.push(this.principalStack.pop());
        this.aux = this.principalStack;
        this.principalStack = this.secundaryStack;
        this.secundaryStack = this.aux;
    }else if(this.principalStack.getSize()>1){
        while(!this.principalStack.isEmpty()){
            this.secundaryStack.push(this.principalStack.pop());
        }
        this.principalStack.push(x);
        while(!this.secundaryStack.isEmpty()){
            this.principalStack.push(this.secundaryStack.pop());
        }
    }else{
        this.principalStack.push(x);
    }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.principalStack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.principalStack.getTop();
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.principalStack.isEmpty();
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */