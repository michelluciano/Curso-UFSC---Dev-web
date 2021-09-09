var $lista = document.querySelector('ul');
var $produto = document.querySelector('#produto');
var $botao = document.querySelector('#btn');


$botao.addEventListener('click', function(){
    var item = '<li>'+$produto.value+'</li>';
    $lista.innerHTML += item;
})