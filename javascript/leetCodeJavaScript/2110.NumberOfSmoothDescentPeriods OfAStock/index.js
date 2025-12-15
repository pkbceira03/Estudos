var getDescentPeriods = function(prices) {
    let result = 0;
    let aux = 0;
    let condicao = true;

    for (let i = 1; i < prices.length; i++){
        console.log(prices[i-1],prices[i],prices[i-1] - prices[i])
        if(prices[i-1] - prices[i] === 1){
            while(condicao){
                //console.log(result, aux)
                if(prices[i-1] - prices[i] === 1){
                    aux++;
                    result += aux;
                }else {
                    condicao = false;
                }
                i++;
            }
            condicao = true;
            aux = 0;
            i--;
        }
        //console.log(result)
    }


    return result + prices.length
};

console.log(getDescentPeriods([12,11,10,9,8,7,6,5,4,3,4,3,10,9,8,7]))