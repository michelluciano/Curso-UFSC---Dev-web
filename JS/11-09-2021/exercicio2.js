// A média da escola é 6, 
// você deve percorrer as notas do kalleo 
// e identifique quais delas estão prejudicando ele a passar de ano.
// Imprimima essas notas e quantos pontos faltam para ela chegar em 6. 
// Dica utilize o of!

var aluno = {nome:"kalleo",
idade: 18,
notas: [9,8,7,4]}

for ( var i of aluno.notas){
    if (i < 6){
        pontos_faltantes = 6 - i;
        print("Nota: " + i +"\nFaltou: " + pontos_faltantes +" pontos")
    } 
}

// Some todas as notas dos alunos e imprima depois a soma, utilizando o in!