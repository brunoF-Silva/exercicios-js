/*
utilizando Destructuring como parâmetro objeto de uma função:
Vamos passar como argumentos para rand dois argumentos dentro do operador destructuring assim, ele trata os elementos dos objetos como simples variáveis passadas à função.
A passagem dos argumentos dentro do operador destructuring não significa que temos um objeto sendo passado, mas sim que para todos os objetos que eu passar para rand, eu quero que ele extraia os atributos de dentro do objto, sem utilizar a sintaxe obg.min ou obg.max
*/

function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min //setando um intervalo
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
console.log(rand(obj))
console.log(rand({ min: 955 }))
console.log(rand({}))
// console.log(rand()) - sem passar objeto causa erro, pois ele é undefined.