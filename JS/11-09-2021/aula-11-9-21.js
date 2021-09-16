
lista = [6,5]

media = (lista[0] + lista[1])/2

if (media >= 6){
    console.log("ParabÃ©ns vocÃª passou com mÃ©dia " + media)

}

else if ( media >= 4 ){
    nota_da_recuperaÃ§Ã£o = 6 - media
    console.log("VocÃª ficou em recuperaÃ§Ã£o! Sua media Ã© " + media + " e vocÃª precisa tirar " + nota_da_recuperaÃ§Ã£o + " na prova de recuperaÃ§Ã£o!")
}

else {

    console.log("VocÃª repetiu de ano!")

}

for ( var i of lista){
    if (i < 6){
        pontos_faltantes = 6 - i
        console.log("Nota: " + i ,"\nFaltou: "+ pontos_faltantes +" pontos")}
}

soma_notas = 0
for ( var i in lista){
    soma_notas =  soma_notas + lista[i]
}
console.log(soma_notas) 

count = 0
while (lista[count] >= 6){
    console.log(lista[count])
    count++;
    
}
count = 0

while (true){

    
    if (lista[count] < 6){

        break
        
    };
    console.log(lista[count])   
    count++;
}


function aluno(nome,n1,n2){

    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;

    this.media = function(){

        return(this.nota1 +this.nota2)/2
    }

}

var aluno1 =  new aluno('Kalleo',8,9)

console.log(aluno1.media())