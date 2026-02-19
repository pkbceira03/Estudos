class DynamicArray{
    constructor(){
        this.size = 0;
        this.capacity = 10;
        this.array = new Array(this.capacity);
    }

    size(){
        return this.size;
    }

    append(x){
        if (this.size === this.capacity){
            this.resize(this.capacity*2);
        }

        this.array[this.size] = x;
        this.size++
    }

    resize(capacity){
        let newArray = new Array(capacity);
        for(let i = 0; i < this.size; i++){
            newArray[i] = this.array[i]
        }
        this.array = newArray;
        this.capacity = capacity;
    }

    get(i){
        if(i < 0 || i >= this.size) return null;
        return this.array[i];
    }

    set(i, x){
        if(i < 0 || i >= this.size) return null;
        this.array[i] = x;
    }

    pop_back(){
        if (this.size === 0) return null;
        this.size --;
        if(this.size / this.capacity < 0.25 && this.capacity > 10){
            this.resize(this.capacity/2);
        }
    }

    pop(i){
        if(i < 0 || i >= this.capacity) return null;
        let removedElement = this.array[i]
        for(let j = i; j< this.size;j++){
            this.array[j] = this.array[j+1];
        }
        this.pop_back()
        return removedElement;
    }

    contains(x){
        for(let i = 0; i<this.size;i++){
            if(this.array[i] === x) return i;
        }
        return -1;
    }

    insert(i,x){
        if(i<0 || i>=this.size) return null;
        if(this.size === this.capacity) this.resize(this.capacity*2)
        this.size++;
        let aux = x;
        for(let j = i; j<this.size;j++){
            let removed =  this.array[j]
            this.array[j] = aux;
            aux = removed;
        }
    }

    remove(x){
        let have = this.contains(x)
        if(have === -1) return null;
        this.pop(have)
    }
}

const lista = new DynamicArray();

console.log("--- Testando Append e Resize ---");
for (let i = 1; i <= 15; i++) {
    lista.append(i * 10);
}
console.log("Size esperado: 15, Obtido:", lista.size); 
console.log("Capacity esperada: 20, Obtida:", lista.capacity); // 10 -> 20

console.log("--- Testando Insert ---");
// Lista atual: [10, 20, 30, 40, 50, ...]
lista.insert(2, 999); 
console.log("Elemento no índice 2 deve ser 999:", lista.get(2));
console.log("Elemento que era o 2 agora deve ser o 3 (30):", lista.get(3));

console.log("--- Testando Pop e Shrink ---");
// Vamos remover quase tudo para ver se a capacidade cai (20 -> 10)
while (lista.size > 3) {
    lista.pop_back();
}
console.log("Size atual:", lista.size); // 3
console.log("Capacity deve ter voltado para 10:", lista.capacity);