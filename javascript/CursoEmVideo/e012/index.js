function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    console.log(inicio.value, fim.value,passo.value)
    if(!inicio.value || !fim.value || !passo.value || !passo.value ){
        alert("Por favor coloque valores válidos!")
    }else{
        if(passo.value == 0){
        passo = 1;
    }

    var text = ''

    if(Number(inicio.value)<Number(fim.value)){
        for(let i = Number(inicio.value); i <= Number(fim.value); i = i + Number(passo.value)){
            if(i == Number(fim.value)){
                text += `${i}.`
            }else{
                text += `${i} -> `
            }
        }
    }else{
        for(let i = Number(inicio.value); i >= Number(fim.value); i = i - Number(passo.value)){
            if(i == Number(fim.value)){
                text += `${i}.`
            }else{
                text += `${i} -> `
            }
        }
    }

    var resultado = document.getElementById('resultado');
    resultado.innerHTML = text
    }

    
}