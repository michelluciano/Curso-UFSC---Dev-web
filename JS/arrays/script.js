let listaCompras = ['banana', 'maça','carro','avião','barco']
let listaObjs = [{nome: 'tiago', titulo: 'titulo texto', texto: 'lorem ipsum lorem isp'},{nome: 'matheus', titulo: 'titulo texto', texto: 'lorem ipsum lorem isp'},{nome: 'pedro', titulo: 'titulo texto', texto: 'lorem ipsum lorem isp'},{nome: 'rafael', titulo: 'titulo texto', texto: 'lorem ipsum lorem isp'}]
let valorInput = 'feijão'

// adicionar valor na lista
listaCompras.push(valorInput)
listaCompras.unshift('laranja')
// remover
console.log(listaCompras.pop())
listaCompras.shift()
console.log(listaCompras)

// valor está incluido lá dentro?
console.log(listaCompras.includes('carro'))

// indexOf
console.log(listaCompras.indexOf('carro'))

// forEach
listaObjs.forEach(elemento => {
console.log(elemento.nome)
})
//laço dentro do array
listaCompras.forEach(elemento =>{
    console.log(elemento)
})

