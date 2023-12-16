// minha função callback é chamada para cada um dos elementos passando o valor atual, o índice atual e o array completo
Array.prototype.forEach2 = function(callback) { // pegue o que quer que esteja no lugar de callback e apenas sete seus parâmetros como os seguintes:
    for (let i = 0; i < this.length; i++) { // eu acesso o array, dentro de uma função que pertence ao prototype (ou seja, eu acesso a instância de uma array) a partir da variável this
        callback(this[i], i, this)
    }
}
const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"];

aprovados.forEach2(function (nome, indice) {
    console.log(`${indice + 1}) ${nome}`);
});
/*
O que é forEach?
for each é uma função que recebe como argumento outra função (uma denominada callback), pois ele já vai setar, para cada elemento de uma array, essa função callback com os seus parâmetros também já setados em sequência de 'elemento', 'índice' e 'array'.
Seu parâmetro se chama callback pois essa função é sempre "chamada de volta" com tudo já devidamente setado por forEach para cada elemento de determinada array.
*/