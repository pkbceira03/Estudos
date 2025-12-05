class StackNode{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class MyStack{
    constructor(){
        this.front = null;
        this.size = 0;
    }

    push(val){
        const newNode = new StackNode(val);

        if(this.size === 0){
            this.front = newNode;
        }else{
            newNode.next = this.front;
            this.front = newNode;
        }

        this.size++;
    }

    pop(){
        if(this.size === 0) return null;

        const removedNode = this.front;
        this.front = removedNode.next;
        this.size--;
        return removedNode;
    }

    getTop(){
        if(this.size === 0) return null;
        return this.front.val;
    }

    getSize(){
        return this.size;
    }
}

var simplifyPath = function(path) {
    let pathResult = new MyStack;
    let parts = path.split("/")
    let result = []
    //console.log(parts.length)
    //pathResult.push("/");
    for (let i = 1; i < parts.length; i++){
        if(parts[i] === ".."){
            pathResult.pop();
        }else if(parts[i] !== '.' && parts[i] !== ''){
            pathResult.push(parts[i])
        }
    }

    let size = pathResult.getSize();


    for(var i = 0; i< size; i++){
        let test = pathResult.pop().val
        result.unshift("/" + test);
    }

    if(result.length === 0){
        result.unshift("/")
    }

    return result.join("");
};

console.log(simplifyPath("/../"))

//  /.../b/d