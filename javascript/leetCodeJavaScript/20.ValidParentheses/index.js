class StackNode{
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
        const newNode = new StackNode(val);

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

    getSize(){
        return this.size;
    }

    isEmpty(){
        return this.size === 0;
    }
}

var isValid = function(s) {
    if(s.length % 2 !=0) return false;

    let myStack = new MyStack();

    //console.log(s)

    for(item of s){
        //console.log(item);
        if(item === "{" || item === "(" || item ==="["){
            myStack.push(item);
        }else{
            if(myStack.isEmpty()) return false;

            if((item === "}" && myStack.getTop() === "{") || (item === ")" && myStack.getTop() === "(") || (item === "]" && myStack.getTop() === "[")){
                myStack.pop()
            }else{
                return false
            }
        }
    }

    return myStack.isEmpty();
};

console.log(isValid("()"))