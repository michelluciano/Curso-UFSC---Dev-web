let cidade = 'florianopolis';
const input = document.querySelector('input');
const btn = document.querySelector('button');
let html_dados = document.querySelector('.dados');

btn.addEventListener('click', ()=>{
fetch(`http://api.weatherapi.com/v1/current.json?key=892f24feee1a4e548df05321212409&q=${input.value}&aqi=no`)
.then(response =>{
return response.json()
})
.then(dados =>{
let temp = dados.current.temp_c;
let localizacao = dados.location.name;
console.log(temp, localizacao)
html_dados.innerHTML = `<p> Cidade: ${localizacao}, temperatura: ${temp}</p>`
})
})
//