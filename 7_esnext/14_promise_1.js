/*
p é um objeto que representa que uma função assíncrona foi executada,
cumprirPromessa é executada quando o a operação assíncrona é toda executada (quando cumprimos a promessa), seu parametro é o valor padrão do valor da função then do objeto p
A nível de código, o valor de p é definido somente após a execução da função anônima assíncrona, bem como a função passada para seu método then que também é executado depois.

Associado a uma Promise, temos sempre um valor disponível como o argumento passado ao método then.

A função passada em Promise é quem cria esse valor

Quando o retorno da função em then existe, o valor de retorno é passado para o próximo then.
*/
let p = new Promise(function(cumprirPromessa) {
  cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

function primeiroElemento(array) {
  return array[0]
}

p
  .then(primeiroElemento)
  .then(primeiro => primeiro[0])
  .then(letra => letra.toLowerCase())
  .then(console.log) // Then sempre recebe um único parâmetro e o joga direto como argumento na função que tem

  // cumprirPromessa é chamada de resolve
  // Os thens podem ser executados logo após a criação de Promise (p não se faz necessário nesse caso)
