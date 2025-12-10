var peopleAwareOfSecret = function(n, delay, forget) {
    let x = new Array(n + 1).fill(0);;
    result = 0;
    const MOD = 1e9 + 7;

    x[1] = 1;
    let newPerson = 0;
    for (let i = 2; i <= n + 1; i++){
        
        if(i - delay >= 1){
            newPerson = (newPerson + x[i - delay])%MOD;
        }

        if(i - forget >= 1){
            newPerson = (newPerson - x[i - forget] + MOD)%MOD;
        }
        x[i] = newPerson;
    }

    console.log(x)

    for(let i = n-forget+1; i<=n; i++){
        if(i > 0){
            result = (result + x[i])%MOD;
        }
    }

    return result;
};

console.log(peopleAwareOfSecret(6,2,4))