class QueuNode{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class Queue{
    constructor(){
        this.front = null;
        this.back = null;
        this.size = 0;
    }

    enqueue(val){
        const newNode = new QueuNode(val);

        if(this.size === 0){
            this.front = newNode;
            this.back = newNode;
        }else{
            const lastNode = this.back;
            this.back.next = newNode;
            newNode.prev = this.back
            this.back = newNode;
        }

        this.size++;
    }

    dequeue(){
        if(this.size === 0) return null;

        const removedNode = this.front;

        if(this.size === 1){
            this.back = null;
        }

        this.front = removedNode.next;

        if(this.front){
            this.front.prev = null;
        }

        this.size--;
        return removedNode;
    }
}

const filaBasica = new Queue();

console.log("--- TESTE 1: Básico ---");
filaBasica.enqueue("Primeiro");
filaBasica.enqueue("Segundo");
filaBasica.enqueue("Terceiro");

console.log(`Tamanho esperado 3: ${filaBasica.size}`); 

const removido1 = filaBasica.dequeue();
console.log(`Removeu: ${removido1.val}`);
console.log(`Novo tamanho (esperado 2): ${filaBasica.size}`);

console.log(`Quem é o front agora? ${filaBasica.front.val}`);