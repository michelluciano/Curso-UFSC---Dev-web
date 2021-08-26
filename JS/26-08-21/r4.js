function calculadora(valor1,valor2,operacao){

    if(operacao === 'divisão'){
        console.log(valor1/ valor2)
    }else if(operacao === 'subtração'){
        console.log(valor1 - valor2)
    }else if(operacao === 'multiplicação'){
        console.log(valor1 * valor2)
    }else if(operacao === 'exponenciação'){
        console.log(valor1 ** valor2)
    }else{
        console.log(valor1 + valor2)
    }
}
calculadora(5,10,'adição')
calculadora(10,2,'divisão')
calculadora(2,4,'exponenciação')
calculadora(3,3,'subtração')