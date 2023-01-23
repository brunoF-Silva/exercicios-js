// Funções arrow sempre são anônimas, se você quer chamar arraw deve-se armazená-la em alguma var/const.
let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a =>  2 * a // Retirar as chaves me traz um retorno implícito.
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // _ ainda é um parâmetro válido que pode ser ignorado. O que não pode acontecer é não se ter ().
console.log(ola())