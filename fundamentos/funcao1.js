function imprimirSoms(a, b) {
    console.log(a + b)
}

imprimeSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 3, 10, 11, 8)
imprimirSoma()

function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma()) //NaN