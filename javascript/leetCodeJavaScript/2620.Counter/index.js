var createCounter = function(n) {
    
    return function() {
        return n++;
    };
};

 
const counter = createCounter(10)
let primeiro = counter() 
let segundo = counter() 
let terceiro = counter() 

console.log(terceiro)
