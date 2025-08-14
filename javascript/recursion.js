//


function factorial(val){
    if(val === 1){
        return val;
    }else{
        return val * factorial(val-1);
    }
}

console.log(factorial(4))