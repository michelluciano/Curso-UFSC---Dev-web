const btn = document.querySelector('.input-container button');
const text = document.querySelector('.input-container input');
const ul = document.querySelector('.tarefas-ul');


ul.addEventListener('click', (e) =>{
if(e.target.className === 'del-btn'){
ul.removeChild(e.target.parentNode)
}
});

btn.addEventListener('click', function(e){
console.log(text.value)
ul.innerHTML += `<li class= "li-tarefa"><p> ${ text.value }</p><button class="del-btn" > DEL </button> </li>`
});