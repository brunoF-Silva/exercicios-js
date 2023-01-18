const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
// observe como, acima, guardamos a função dentro de uma var e a partir de então passamos a tratá-la como o nome da função (eu acho).
console.log(resultado(7.1))
console.log(resultado(6.7))

// const status =  nota >= 7 ? 'Aprovado' : 'Reprovado' // isso é outra alternativa