// ignorarm erro no js
"use strict"

var hh =0;
var mm =0;
var ss =0;
var tempo = 1000; //quantos milésimos valem 1 segundo
var cron;
//ajustando os botões iniciais
document.getElementById("btn-iniciar").disabled =false;
    document.getElementById("btn-pausar").disabled =true;
    document.getElementById("btn-parar").disabled =true;
    

//ações
function iniciar(){
    cron = setInterval(()=> {timer();},tempo);
    document.getElementById("btn-iniciar").disabled =true;
    document.getElementById("btn-pausar").disabled =false;
    document.getElementById("btn-parar").disabled =false;
}

function pausar(){
    clearInterval(cron);
    document.getElementById("btn-iniciar").disabled =false;
    document.getElementById("btn-pausar").disabled =true;
}

function parar(){
    clearInterval(cron);
    hh = 0;
    mm =0;
    ss =0;
    document.getElementById('contador').innerText='00:00:00';
    document.getElementById("btn-iniciar").disabled =false;
    document.getElementById("btn-pausar").disabled =true;
    document.getElementById("btn-parar").disabled =true;
}


function timer(){
    ss++;

    if(ss == 60){
        ss=0;
        mm++
        if(mm ==60){
            mm=0;
            hh++;
        }
    }

    var formato = (hh < 10 ? '0'+hh:hh)+':'+(mm < 10 ? '0'+mm:mm)+':'+(ss < 10 ? '0'+ss:ss);
    document.getElementById('contador').innerText=formato;
}