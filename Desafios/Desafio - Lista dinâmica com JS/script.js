// pegar elementos
const btn = document.querySelector('.btn-enviar');
const ul = document.querySelector('ul');
const input = document.getElementById('linsta-input');

//adicionar evento
btn.addEventListener('click', () =>{
    ul.innerHTML += `<li>input.value<button id="delete">DEL</button></li>`;
})
ul.addEventListener('click', (e) =>{
    if(e.target.id === 'delete'){
        e.target.parentElement.remove();
    };
})