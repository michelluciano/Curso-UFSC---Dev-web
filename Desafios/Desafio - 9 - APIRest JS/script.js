document.querySelector('.busca').addEventListener('submit', async(event)=>{
    event.preventDefault();

    let input =document.querySelector('#searchInput').value;
    console.log(input);

    if(input !==''){
        showMensagem('Pesquisando ...')

        let url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`;
        
        let results = await fetch(url);
        let json = await results.json();

        console.log(json);

        if (results.status === 200) {
            showMensagem('Achou ...')
            const qtd = json.meals.length;
            console.log('qtd '+qtd);
             for (const i = 0; i < json.meals.length; i++) {
                showInfo({
                    nome: json.meals[i].strMeal,
                    origem: json.meals[i].strArea,
                    tag: json.meals[i].strTags,
                    imagem:json.meals[i].strMealThumb
                }); 
                 
             }
        } else {
            clearInfo();
            showWarning('Não encontramos esta solicitação')
        }
   }else{
       clearInfo();
   }
});

function showInfo(json){
    showMensagem('');
    document.querySelector('.foto img').setAttribute('src' , `${json.imagem}`);
    document.querySelector('.titulo').innerHTML = `${json.nome}`;

    document.querySelector('.origem').innerHTML = `${json.origem}`;
    document.querySelector('.tags').innerHTML = `${json.tag}`;
    document.querySelector('.resultado').style.display = 'block';
}

function showMensagem(msg){
    document.querySelector('.aviso').innerHTML = msg;
}

function clearInfo(){
    showMensagem('');
    document.querySelector('.resultado').style.display = 'none';
}
