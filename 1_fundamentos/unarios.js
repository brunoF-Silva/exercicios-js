let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1 // prefix possui maior precedência // é executado antes da operção.
console.log(num1)

console.log(++num1 === num2--)
console.log(num1 === num2)

let exp = Math.pow(2, 3)
console.log(exp)

// a partir do ES7
exp = 2 ** 4
console.log(exp)

let base = 2
base **= 3
console.log(base)

exp = 2 ** -3
console.log(exp)