/*
Aula - 88
Funções em JS é First-Class Object (Citizens)
Higher-order function

Significado: podemos tratar a função como sendo um dado (passá-la como parâmetro, retorná-la como resposta, armazenar em variáveis, funções dentro de funções dentro delas). Isso é importante, também, no paradgma funcional (higher order function).
*/

// Criar de forma literal
function fun1() { } // Retorna, pelo menos, undefined

// Armazenar em uma variável
const fun2 = function () { } // Anônima, o nome com () (invocar) ou sem (o dado);

// Armazenar em um array
const array = {function (a, b) { return a + b }, fun1, fun2}

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function  () { return 'Opa' }
console.log(obj.falar())

// Passar função como parametro
function run(fun ) {
    fun()
}

run(function () { console.log('Executando...') })

// Um função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4) //Ou
const cincoMais = soma(2, 3)
cincoMais(4)