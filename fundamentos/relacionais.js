/*
true or false;
se são iguais ou se são extritamente iguais (tipo).
*/
console.log('01)', '1' == 1)
console.log('02)', '1' === 1)
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)

console.log('06)', 3 < 5 )
console.log('07)', 3 > 2)
console.log('08)', 3 <= 2)
console.log('09)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2) // tanto faz os operadores pois estamos trabalhando e comparando aqui endereços de memória.
console.log('11)', d1.getTime() === d2.getTime()) // ambos são do tipo number.
console.log('12)', undefined == null)
console.log('12)', undefined === null) // normalmente se escolhe ===


