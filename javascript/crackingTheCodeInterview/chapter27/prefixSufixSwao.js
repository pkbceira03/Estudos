function prefixSuffix(arr){
    console.log(arr)
    let tamanho = arr.length;
    let zero =0;
    let divisao = tamanho/3;

    console.log(tamanho,divisao)

    for(let i = 0, j=divisao; i<divisao;i++,j++){
        [arr[i], arr[j]] = [arr[j],arr[i]]
    }

    for(let i = divisao, j=(2*tamanho/3); i<(2*tamanho/3);i++,j++){
        [arr[i], arr[j]] = [arr[j],arr[i]]
    }


    return arr
}

console.log(prefixSuffix(['b','a','d','r','e','v','i','e','w']))//['a','d','b']