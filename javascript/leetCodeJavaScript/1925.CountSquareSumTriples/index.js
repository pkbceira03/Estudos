var countTriples = function(n) {
    let result = 0;
    for(i = 1; i < n; i++){
        for (j = 1; j < n; j++){
            for (x = n; x > 0; x--){
                if(i*i + j*j === x*x){
                    result++;
                }
            }

        }
    }
    return result;
};

console.log(countTriples(10));

console.log(0.623*10^-6 === 6.23*10^-5)