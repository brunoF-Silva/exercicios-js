/*
Passamos uma função para outra função e quando
determinado evento acontecer, essa função passada é
chamada de volta.
*/
const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
/* Para cada elemento que forEach encontrar dentro do array, ele vai chamar de volta a função imprimir para cada elemento que ele encontrar no array.
*/
fabricantes.forEach(fabricante => console.log(fabricante)) // Ocorre um callback toda vez que for each encontra um elemento pois ela chama imprimir já passando os parâmetros.