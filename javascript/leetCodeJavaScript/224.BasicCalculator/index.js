class StackNode{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class MyStack{
    constructor(){
        this.size = 0;
        this.top = null;
    }

    push(val){
        const newNode = new StackNode(val);

        if(this.size === 0){
            this.top = newNode;
        }else{
            newNode.next = this.top;
            this.top = newNode;
        }
        this.size ++;
    }

    pop(){
        if(this.size === 0) return null;

        const removedNode = this.top;
        this.top = removedNode.next;
        this.size--;

        return removedNode.val;
    }

    getSize(){
        return this.size;
    }

    getTop(){
        return this.top.val;
    }
}

var calculate = function(s) {
    let myStack = new MyStack();
    let calc = new MyStack();
    let result = 0;
    let aux = "";
    let stringS = s.replaceAll(" ", "");
    let sizeClac;
    for (let i = 0; i < stringS.length; i++){
        if(!isNaN(stringS[i])){
            aux += stringS[i]
            if(i===stringS.length-1){
                myStack.push(aux);
            }
        }else if(stringS[i] === ')'){
            if(aux.length > 0){
                myStack.push(aux);
                aux = "";
            }
            
            let removedNode;
            while(removedNode !== '('){
                removedNode = myStack.pop()
                
                if(removedNode !== "(") {
                    calc.push(removedNode);
                    //console.log("tira e coloca",removedNode)
                }
            }

            sizeClac = calc.getSize();
            while(calc.getSize() > 0){
                removedNode = calc.pop();
                //console.log("calculo",removedNode)

                if(isNaN(removedNode)){
                    if(removedNode === "+"){
                        result += parseInt(calc.pop());
                        //sizeClac--;
                    }else if(removedNode === "-"){
                        result -= parseInt(calc.pop())
                        //sizeClac--;
                    }
                }else{
                    result = parseInt(removedNode);
                }
                
                //console.log("resultado",result)
                //sizeClac--;
            }

            myStack.push(result)
            result=0;
            //console.log("topo ->>>", myStack.getTop(),"<<<-Topo", "size->>>", myStack.getSize())
        }else{
            if(aux.length > 0){
                myStack.push(aux);
                aux = "";
                //console.log("topo ->>>", myStack.getTop(),"<<<-Topo")
            }
            myStack.push(stringS[i])
            //console.log("topo ->>>", myStack.getTop(),"<<<-Topo")
        }
    }
    while(myStack.getSize()>0){
        removedNode = myStack.pop()
        //console.log("remove", removedNode)
        calc.push(removedNode);
    }

    sizeClac = calc.getSize();
    while(calc.getSize() > 0){
        removedNode = calc.pop();
        //console.log("calculo",removedNode)

        if(isNaN(removedNode)){
            if(removedNode === "+"){
                result += parseInt(calc.pop());
                //sizeClac--;
            }else if(removedNode === "-"){
                let teste = parseInt(calc.pop());
                //console.log("resultado antes",result)
                //console.log(teste)
                result -= teste
                //console.log("resultado depois",result)
                //sizeClac--;
            }
        }else{
            result = parseInt(removedNode);
        }
        
        //sizeClac--;
    }

    //console.log("resultado",result)
    return result
};

console.log(calculate("-(3 + (4 + 5))"));

//console.log("topo ->>>", myStack.getTop(),"<<<-Topo")