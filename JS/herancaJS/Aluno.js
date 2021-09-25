//usamos require, porque estamos no Node e não no React
const Pessoa = require('./Pessoa');

class Aluno extends Pessoa{

constructor(nome, cpf, curso, turma){
super(nome, cpf);
this.curso = curso;
this.turma = turma;
}
saudacao(){
console.log("Olá!! Tudo bem? Meu nome é "+this.nome+" sou um programador");
}
}
//Com Node
module.exports = Aluno
//Com React
//export default Pessoa