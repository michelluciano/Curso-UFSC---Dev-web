class Pessoa{

    constructor(nome, dataNascimento, cpf, rg){
    this.nome = nome;
    this.dataNascimento = dataNascimento;
    this.cpf = cpf;
    this.rg = rg;
    }
    
    saudacao (){
    console.log("Olá!! Tudo bem? Meu nome é "+this.nome);
    }
    
    }
    
    
    let augusto = new Pessoa("Augusto","01/06/2017", '123456789-00', 12548);
    
    augusto.saudacao();