class NodeQueue{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
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
            newNode.next = newNode;
            newNode.prev = newNode;
        }else{
            this.back.next = newNode;
            newNode.prev = this.back;
            this.back = newNode;
            this.front.prev = newNode;
            this.back.next = this.front;
        }

        this.size++;
    }

    getFront(){
        return this.front ? this.front.val : null;
    }

    getSize(){
        return this.size;
    }

    remove(jump){
        if (this.size === 0) return null;

        let current = this.front;

        while(jump > 0){
            current = current.next;
            jump --;
        }

        const valorRemovido = current.val; 
        const proximoDaFila = current.next; 

        if (this.size === 1) {
            this.front = null;
            this.back = null;
            this.size--;
            return valorRemovido;
        }

        current.prev.next = current.next;
        current.next.prev = current.prev;

        this.front = proximoDaFila;
        
        this.back = this.front.prev;

        this.size--;
        
        current.next = null;
        current.prev = null;

        return valorRemovido; 
    }
}

var findTheWinner = function(n, k) {
    let myQueue = new MyQueue()
    let winner;
    for (let i = 1; i <= n; i++){
        myQueue.enqueue(i)
    }

    while(myQueue.getSize() >= 1){
        winner  = myQueue.remove(k-1);
    }

    return winner;
};

console.log(findTheWinner(1,1));
