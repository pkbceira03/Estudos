function calcular(){
    var num = document.getElementById('num');
    var resultado = document.getElementById('resultado')
    if(!num.value){
        alert("digite um numero")
    }else{
        var mult = 0
        resultado.innerHTML = '';
        for(let i = 1; i<=10; i++){
            mult = i * Number(num.value)
            let item = document.createElement('option')
            item.innerHTML = `${num.value}X${i}=${mult}\n`
            resultado.appendChild(item)
        }
    }
    
}