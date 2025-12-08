class NodeQueue{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class MyQueue{
    constructor(){
        this.front = null;
        this.back = null;
        this.size = 0;
    }

    enqueue(val){
        const newNode = new NodeQueue(val);

        if(this.size === 0){
            this.front = newNode;
            this.back = newNode;
        }else{
            this.back.next = newNode;
            this.back = newNode;
        }

        this.size++;
    }

    dequeue(){
        if(this.size === 0) return null;
        const removedNode = this.front.val;

        if(this.size === 1){
            this.back = null;
        }

        this.front = this.front.next;
        this.size--;
        return removedNode
    }

    isEmpty(){
        if(this.size > 0){
            return false;
        }else{
            return true
        }
    }

    getFront(){
        if(this.size === 0) return null;
        return this.front.val;
    }
}

var MyStack = function() {
    this.principalQueue = new MyQueue();
    this.segundaryQueue = new MyQueue();
    this.aux;
};

MyStack.prototype.push = function(x) {
    if(!this.principalQueue.isEmpty()){
        this.segundaryQueue.enqueue(x);
        while(!this.principalQueue.isEmpty()){
            this.segundaryQueue.enqueue(this.principalQueue.dequeue());
        }
        this.aux = this.principalQueue;
        this.principalQueue = this.segundaryQueue;
        this.segundaryQueue = this.aux;

    }else{
        this.principalQueue.enqueue(x);
    }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.principalQueue.dequeue();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.principalQueue.getFront();
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.principalQueue.isEmpty();
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */