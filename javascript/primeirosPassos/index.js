//=====================================//

//CRIAÇÃO DE UMA ELEMNTO HTML NA PAGINA

// let d =new Date();
// document.body.innerHTML = "<h1>HOje é "+ d +"</h1>";

//=====================================//

//DARK MODE

let tema = document.getElementById("change-tema");

tema.addEventListener('click', function(){
    //função toggle verifica se tem ou não a class, se tiver ele tira e não tiver ele coloca
    document.body.classList.toggle('dark-mode');
})

//=====================================//

//Pquena validação de email

const contactForm = document.getElementById('form');
const email = document.getElementById("email");
const erro = document.getElementById("error-mensagem");

contactForm.addEventListener('submit', function(event){
    if(!email.value.includes('@')){
        event.preventDefault();

        erro.textContent = 'Email não contem o @'
    }else{
        erro.textContent = ''
    }
})