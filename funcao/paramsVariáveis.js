// Consigo recuperar parâmetros de funções atravez de uma propriedade chamada arguments.
// Arguments é uma array
// Em JS é possível eu passar qualquer quantidade de parâmetros para qualque função.
function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(1.1, 2.2, 'Teste') //Soma e concatena.
console.log(soma('a', 'b', 'c')) //Concatena.

// Atualmente existe um operador específico para se passar parâmetros variáveis: rest/spread