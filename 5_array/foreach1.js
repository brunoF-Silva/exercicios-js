// callback: vai passar, para cada elemento, passando o próprio elemento e o indice para aquele elemento
// dentro do foreach tem um laço for que percorrerá aprovados, ao executar o primeiro elemento Agatha, ele chamará a função passando "Agatha" e seu índice
// a função callback passada para um parâmetro pode conter até 3 parâmetros, sendo o 4 undefinded
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})

aprovados.forEach(nome => console.log(nome))
const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)  

/*
O que é forEach?
for each é uma função que recebe como argumento outra função (uma denominada callback), pois ele já vai setar, para cada elemento de uma array, essa função callback com os seus parâmetros também já setados em sequência de 'elemento', 'índice' e 'array'.
Seu parâmetro se chama callback pois essa função é sempre "chamada de volta" com tudo já devidamente setado por forEach para cada elemento de determinada array.
*/