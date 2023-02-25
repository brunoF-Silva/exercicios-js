// associado à map existe um laço
// serve para realizar uma transformação no array, gerando um novo e modificado
// mapear determinado array, para outro array de igual tamanho, com dados transformados
// MAP É UM FOR COM PROPÓSITO!!!
// map tem como parâmetro outra callback que recebe até 3 argumentos (o valor atual, o índice e o array comnpleto)
// dentro do map eu passo a função que irá transformar cada um dos elementos
const nums = [1, 2, 3, 4, 5]

let resultado = nums.map(function(e) {
    return e * 2
})

console.log(resultado)

// 3 funções criadas dentro de map sucessivo
// array.map == gera array, nesse novo array eu posso gerar um map novamente que vai gerar um outro array transformado etc. etc. etc.

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro) //aplica as 3 funções para cada elemento, só sai um resultado no novo array :)
console.log(resultado)