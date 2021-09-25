const timer = document.querySelector('.timer');
const btn = document.querySelector('.start-btn');
const ul = document.querySelector('ul') ;
const input = document.querySelector('input');

let min =25;
let segundos =0;

btn.addEventListener('click', ()=>{
    let tarefa = input.value;
    setInterval(() =>{
        min -=1 ;

        },1000);
    }
})

/*
/* Pegar os elementos 
const timer = document.querySelector('.timer');
const btn = document.querySelector('.start-btn');
const ul = document.querySelector('ul');
const input = document.querySelector('input');

let interval;
let min = 3;
let seg = 0;
btn.addEventListener('click', () =>{
let tarefa = input.value;
interval = setInterval(() =>{
if(seg === 0 ){
min -=1;
seg = 11;
if(min === 0 ){
clearInterval(interval);
//
min = 25;
seg = 0;
ul.innerHTML += tarefa;
}
}else{
seg -=1;
}
timer.innerHTML = `${min < 10? '0'+min: min} : ${seg < 10? '0'+seg: seg}`
}, 1000);
});
*/