const MOD = 1e9 + 7;

var countPermutations = function(complexity) {
    let result = 1;
    for (let i = 1; i < complexity.length; i++){ 
        if (complexity[0] >= complexity[i]){
            return 0;
        } 
    }

    result = (factorial(complexity.length-1));
    //console.log(result);
    return result
};

function factorial(x){
    if(x === 0) return 1;
    return ((x * factorial(x-1))%MOD);
}

console.log(countPermutations([38,223,100,123,406,234,256,93,222,259,233,69,139,245,45,98,214]));


