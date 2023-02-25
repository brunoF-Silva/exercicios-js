// percorrer array com forEach = vou receber/trabalhar com os elementos
// com map = transforma um array em outro sem necessidade de fors etc.
// com filter = filtra uma array baseado em x critério para obter subarrays com os valores desejados
// "p" abaixo representa cada um dos elementos do array
// posso passar um 4 argumento: quem vai ser o this
// filter retorn true or false e dita se o elemento fica ou sai do novo array, respectivamente
const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: "Copo de Vidro", preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function(p) {
    return false
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil // já retorna true or false por padrão

console.log(produtos.filter(caro).filter(fragil))
