//como array

// const Queue = [];
// Queue.push('a');
// Queue.push('b');

// console.log(Queue)

// Queue.shift();

// console.log(Queue)


///mais eficiente

class QueueNode {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.front = null;
        this.back = null;
        this.size = 0;
    }

    // adicionar na lista
    enqueue(val){
        const node = new QueueNode(val);

        if(this.size === 0){
            this.front = node;
            this.back = node;
        }else{
            //ligamos o atual back ao novo
            this.back.next = node;
            this.back = node;
        }

        this.size ++;
    }

    //remove da lista
    dequeue(){
        if(this.size === 0)return null;

        const removedFront = this.front;
        if(this.size === 1){
            this.back = null;
        }

        //atuyalizamos o front com o novo
        this.front = this.front.next;

        this.size--;

        return removedFront.val;
    }

    getFirst(){
        if(!this.front) return null;
        return this.front.val;
    }

    getLast(){
        if(!this.back) return null;
        return this.back.val;
    }

    getSize(){
        return this.size;
    }
}

const myQueue = new Queue;

myQueue.enqueue(3);
myQueue.enqueue(2);
myQueue.enqueue(2);
myQueue.enqueue(4);
myQueue.enqueue(4);
myQueue.enqueue(7);
myQueue.dequeue();

console.log(myQueue.getFirst(),myQueue.getLast(),myQueue.getSize())

