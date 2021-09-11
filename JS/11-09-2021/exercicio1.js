/*
Calcule a média do Kalleo:
Se a media for maior igual a 6:
imprimir("Parabéns você passou com média" + media)

outro Se a media estiver entre 6(não incluso) e 4(incluso):
Nota necessária na recuperação igual aos pontos que faltam para chegar em 6.

imprimir("Você ficou em recuperação! Sua media é" + media + "evocê precisa tirar" +
nota_da_recuperação + "na prova de recuperação!")

outro
imprimir("Você reprovou de ano")

var aluno = {nome:"kalleo",
idade: 18,
notas: {n1: 4, n2: 9}}
*/

var aluno = {nome:"kalleo",
idade: 18,
notas: {n1: 4, n2: 9}}

media = (aluno.notas.n1 + aluno.notas.n2) / 2;

if (media >= 6) {
    console.log("Parabéns você passou com média " + media)
} else if (media >= 4 && media < 6) {
    let nota_da_recuperação = 6 - media;
    console.log("Você ficou em recuperação! Sua media é" + media + "e você precisa tirar" +
    nota_da_recuperação + "na prova de recuperação!")
}else{
    console.log("Você reprovou de ano")
}