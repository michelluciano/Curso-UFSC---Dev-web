

//pegar o body
const body = document.querySelector('body');
//pegar os botões
const btns = document.querySelectorAll('button');
//adicionar o evento
btns[0].addEventListener('click', function(e){
   body.style="background-color:red;";
})
btns[1].addEventListener('click', function(e){
    body.style="background-color:yellow;";
})
btns[2].addEventListener('click', function(e){
    body.style="background-color:blue;";
 })
 btns[3].addEventListener('click', function(e){
    body.style="background-color:green;";
 })