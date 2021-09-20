// pegar elementos
const ul = document.querySelector('.ul-posts');
const btn = document.querySelector('.add-post');
const inputs = document.querySelectorAll('input');
let listaPostagens =[]

//adicionar evento
btn.addEventListener('click', () =>{
    const objeto ={
        autor: inputs[0].value,
        titulo: inputs[1].value,
        texto: inputs[2].value
    };
    listaPostagens.push(objeto);
    renderizar();
})

function renderizar(){
    ul.innerHTML = '';
    listaPostagens.forEach(elemento => {
    ul.innerHTML += `<li>
                        Autor: ${elemento.autor}<BR>
                        Titulo: ${elemento.titulo}<BR>
                        Texto: ${elemento.texto}<BR>
                    
                    </li>`    
    })

    
}

