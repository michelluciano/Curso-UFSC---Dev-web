function resultadoCurso(notas,frequencia){
    let media = (notas[0] + notas[1] + notas[2] + notas[3])/4
    if(( media >= 7 ) && (frequencia * 100 >= 75)){
        console.log('Aluno Aprovado');
    } else {
        console.log('Aluno Reprovado');
    };
};


//Aluno1
resultadoCurso([4, 7, 4, 6],0.70)
//Aluno2
resultadoCurso([0, 7, 4, 6], 0.75)
//Aluno3
resultadoCurso([10,7,9,5], 0.78)
//Aluno4
resultadoCurso([10,10,5,7], 0.40)