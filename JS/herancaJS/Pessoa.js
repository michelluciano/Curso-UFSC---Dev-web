class Pessoa{

    constructor(nome, cpf){
    this.nome = nome;
    this.cpf = cpf;
    }
    
    saudacao (){
    console.log("Olá!! Tudo bem? Meu nome é "+this.nome);
    }
    
    }
    
    //Com node
    module.exports = Pessoa
    //Com React
    //export default Pessoa