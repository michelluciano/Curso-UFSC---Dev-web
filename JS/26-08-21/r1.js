
function ola(nome){
    console.log('olá, '+nome)
}
ola('Tiago')

/* Outro jeito de resolver */

function ola(nome){
    console.log(`olá, ${nome}`)
}
ola('Kalleo')

/* Função anônima */
let func = function(nome){
    console.log('olá, '+ nome)
}
func('João')
