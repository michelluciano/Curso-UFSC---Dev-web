let con;
let mm = 25;
let ss = 01;
let tempo = 1000;

const ul = document.querySelector('ul') ;
const input = document.querySelector('input');

document.getElementById("btn").onclick = contador;
//document.getElementById("btn").disabled =true;
function contador(){
    con = setInterval(timer, tempo);
    document.getElementById("btn").disabled =true;
}

function timer(){
    ss-- ;  
    console.log("olá "+mm+":"+ss);
    if(ss == 0){
        ss = 59;
        mm --;
        if(mm < 0){
            clearInterval(con);
            let campAtividade = input.value;
            ul.innerHTML +=`<li class="ativit">${campAtividade}</li>`;
            con ='';
            mm = 25;
            ss = 1;
            document.getElementById('contador').innerHTML="25:00";
            console.log("olá "+mm+":"+ss);
            document.getElementById("btn").disabled =false;
        }
    }
    let formato = (mm < 10 ? '0'+mm:mm)+':'+(ss < 10 ? '0'+ss:ss);
    document.getElementById('contador').innerHTML=formato;
}
