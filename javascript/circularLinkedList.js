class QueueNode{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class CircularQueue{
    constructor(){
        this.front = null;
        this.back = null;
        this.size = 0;
    }

    enqueue(val){
        const newNode = new QueueNode(val);

        if(this.size === 0){
            this.front = newNode;
            this.back = newNode;
            newNode.next = newNode;
        }else{
            this.back.next = newNode;
            this.back = newNode
            newNode.next = this.front;
        }

        this.size++;
    }

    dequeue(){
        if(this.size === 0) return null;

        const removedNode = this.front;

        if(this.size === 1){
            this.back = null;
            this.front = null
        }else{
            this.front = removedNode.next;
            this.back.next = this.front;
        }
        
        this.size--;
        removedNode.next = null;
        return removedNode.val;
    }
}

const filaCircular = new CircularQueue();

console.log("--- TESTE 1: Verificando o Círculo ---");
filaCircular.enqueue("A");
filaCircular.enqueue("B");
filaCircular.enqueue("C");

console.log(`Tamanho: ${filaCircular.size}`); // 3

// A mágica acontece aqui:
// O próximo do ÚLTIMO (C) deve ser o PRIMEIRO (A)
const oCicloEstaFechado = filaCircular.back.next === filaCircular.front;
console.log(`O círculo está fechado? ${oCicloEstaFechado}`); // Tem que ser TRUE

// Vamos provar acessando os valores
console.log(`Valor do back: ${filaCircular.back.val}`); // C
console.log(`Valor do back.next: ${filaCircular.back.next.val}`); // A

console.log("\n--- TESTE 2: Rodando o Carrossel ---");

// Vamos começar do front e dar 10 passos, mesmo só tendo 3 itens
let atual = filaCircular.front;
let passos = "";

for(let i = 0; i < 10; i++) {
    passos += atual.val + " -> ";
    atual = atual.next;
}

console.log(passos + "...");
// Resultado esperado: A -> B -> C -> A -> B -> C -> A -> B -> C -> A -> ...

console.log("\n--- TESTE 3: Removendo e checando ponteiros ---");

// Removemos o 'A'
const removido = filaCircular.dequeue();
console.log(`Saiu: ${removido}`); // A

// Agora a fila é: B -> C
// O Front agora é B.
// O Back (C) deve apontar para B.

console.log(`Novo Front: ${filaCircular.front.val}`); // B
console.log(`O Back (C) aponta para o Front (B)? ${filaCircular.back.next === filaCircular.front}`); // TRUE