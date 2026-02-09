

var lista = []
function adicionar(){
    var num = document.getElementById('num');
    var text = document.getElementById('nums');
    var n = Number(num.value)
    if(n<=0 || n>100){
        alert("digite um número válido")
    }else if(!n){
        alert("digite um número")
    }else{
        var test=lista.indexOf(n)
        console.log(test)
        if(test === -1){
            lista.push(n);
            let item = document.createElement('option');
            item.innerHTML += `Número ${n} adicionado`
            text.appendChild(item)
        }else{
            //text.innerHTML = ''
            alert("digite um número que não esta na lista")
        }
    }
}

function finalizar(){
    var resultado = document.getElementById('resultado');
    var tamanho = document.createElement('p')
    tamanho.innerHTML = `O tamanho total é ${lista.length}`
    lista.sort()
    var maior = document.createElement('p')
    var menor = document.createElement('p')
    maior.innerHTML = `O maior elemento é ${lista[lista.length-1]}`
    menor.innerHTML = `O menor elemento é ${lista[0]}`
    var s = 0
    for(let i =0; i < lista.length; i++){
        s+=lista[i]
    }
    var soma = document.createElement('p')
    soma.innerHTML = `A soma é ${s}`
    var media = document.createElement('p')
    media.innerHTML = `A media é ${s/lista.length}`
    resultado.appendChild(tamanho)
    resultado.appendChild(maior)
    resultado.appendChild(menor)
    resultado.appendChild(soma)
    resultado.appendChild(media)
}