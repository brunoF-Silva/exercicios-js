// Break funciona apenas em for, while e switch.
// Continue funciona para for e while.

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums){ // x == índices
    if (x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
} 

for (y in nums) {
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: for (a in nums) { // JavaScript suporta rótulos. Eles ficam associados a um laço for.
    for(b in nums) {
        if(a == 2 && b == 3) break // Sai do for mais interno.
        console.log(`Par = ${a}, ${b}`)
    }
}

externo: for (a in nums) { // JavaScript suporta rótulos. Eles ficam associados a um laço for.
    for(b in nums) {
        if(a == 2 && b == 3) break externo // Sai do for mais externo de uma vez!
        console.log(`Par = ${a}, ${b}`)
    }
}

/*
Não é boa pratica utilizar rótulos pois lembra a sombria era do go to na programação. De preferência aos métodos.
*/