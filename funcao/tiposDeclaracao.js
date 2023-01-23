console.log(soma(3, 4))

// Function declaration
function soma(x, y) {
    return x + y
}

// Function expression
const sub = function () {
    return x - y
}
console.log(sub(3, 4))

// Named function expression // Bom para debug ou para logar a aplicação (aparece na stack), mas não é muito comum de se utilizar.
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))