/*
Passamos uma função para outra função e quando
determinado evento acontecer, essa função passada é
chamada de volta. A função passada se chama callback.
*/
const fabricantes = ["Mercedes", "Audi", "BMW"];

function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir);
/* Para cada elemento que forEach encontrar dentro do array, ele vai chamar de volta a função e imprimir para cada elemento que ele encontrar no array. O índice e o valor já são passados automaticamente como argumentos.
 */
fabricantes.forEach((fabricante) => console.log(fabricante)); // Ocorre um callback toda vez que for each encontra um elemento pois ela chama imprimir já passando os parâmetros.
