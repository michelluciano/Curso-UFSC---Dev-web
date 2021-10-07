document.querySelector('.busca').addEventListener('submit', async(event)=>{
    event.preventDefault();

    let input =document.querySelector('#searchInput').value;
    console.log(input);

    if(input !==''){
        showMensagem('Pesquisando ...')

        let url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`;
        
        let results = await fetch(url);
        let json = await results.json();

        // console.log(results);
        console.log(json);

        // if (results.status === 200)
        if (json.meals !== null) {
            clearInfo();

            document.querySelector('.resultado').style.display = 'block';
            
            //showMensagem('Achou ...')
            const qtd = json.meals.length;
            //console.log('qtd '+qtd);
             for (let i = 0; i < json.meals.length; i++) {
                document.querySelector('.resultado').innerHTML +=
                `<div class="cartao-receita">
                <div class="foto">
                    <img src=${json.meals[i].strMealThumb}>
                </div>
                <div class="titulo">${json.meals[i].strMeal}</div>
                <div class="origem">${json.meals[i].strArea}</div>
                <div class="tags">${json.meals[i].strTags}</div>
                </div>`;

                // showInfo({
                //     nome: json.meals[i].strMeal,
                //     origem: json.meals[i].strArea,
                //     tag: json.meals[i].strTags,
                //     imagem:json.meals[i].strMealThumb
                // }); 
                 
             }
        } else {
            clearInfo();
            showMensagem('Não encontramos esta solicitação')
        }
   }else{
       clearInfo();
       showMensagem('Não encontramos esta solicitação');
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
    document.querySelector('.resultado').innerHTML='';
}
