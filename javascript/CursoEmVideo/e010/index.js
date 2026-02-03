function carregar(){
    var texto = document.getElementById('texto')
    var imagem = document.getElementById('imagem')
    var fundo = document.body

    var data = new Date()
    var horas = data.getHours();

    if(horas < 12){
        imagem.src = '../images/manha.jpg'
        texto.innerHTML = `Bom dia são ${horas} horas`
        fundo.style.background = 'rgba(238, 182, 156, 1)'
    }else if(horas < 19){
        imagem.src = '../images/tarde.jpg'
        texto.innerHTML = `Bom tarde são ${horas} horas`
        fundo.style.background = 'rgba(175, 87, 46, 1)'
    }else{
        imagem.src = '../images/noite.jpg'
        texto.innerHTML = `Bom noite são ${horas} horas`
        fundo.style.background = 'rgba(82, 28, 3, 1)'
    }
}