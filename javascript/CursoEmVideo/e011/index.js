function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var dataNascimento = document.getElementById('idade')

    console.log(ano, dataNascimento.value)

    if(dataNascimento.value > ano || dataNascimento.value.length < 4){
        alert('[erro] verifique os valores')
    }else{
        var sexo = document.getElementsByName('sexo');
        var idadePessoa = ano - Number(dataNascimento.value);
        var texto = document.getElementById('texto')
        var image = document.createElement('img')
        image.setAttribute('id', 'foto')
        console.log(idadePessoa)
        if(sexo[0].checked){
            if(idadePessoa >= 0 && idadePessoa < 10){
                image.setAttribute('src', '../images/crianca-m.jpg')
            }else if(idadePessoa < 21){
                image.setAttribute('src', '../images/jovem-m.jpg')
            }else if(idadePessoa<50){
                image.setAttribute('src', '../images/adulto-m.jpg')
            }else{
                image.setAttribute('src', '../images/idoso-m.jpg')
            }
            texto.innerHTML = `Você é Homen e tem ${idadePessoa} anos.`
        }else if (sexo[1].checked){
            if(idadePessoa >=0 && idadePessoa <10){
                image.setAttribute('src', '../images/crianca-f.jpg')
            }else if(idadePessoa <21){
                image.setAttribute('src', '../images/jovem-f.jpg')
            }else if(idadePessoa<50){
                image.setAttribute('src', '../images/adulto-f.jpg')
            }else{
                image.setAttribute('src', '../images/idoso-f.jpg')
            }
            texto.innerHTML = `Você é Mulher e tem ${idadePessoa} anos.`
        }

        texto.appendChild(image)
    }
}