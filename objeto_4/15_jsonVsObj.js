// Json é um formato de dados e não suporta funções
// Atua na interoperabilidade entre sistemas com tecnologias completamente diferentes. 
// É um formato textual que pode ser lido/gerado em Java, C#, Ruby, Python, JavaScript etc com certa facilidade.
// Util em web service (Soap, XML).
// Para armazenar configurações internas de um sistema
const obj = { a: 1, b: 2, c: 3, soma() {return a + b + c } }
console.log(JSON.stringify(obj)) // Gera um texto sem a função pois Json é um formato de dados que trafegam de uma aplicação para outra sem serem executados. São dados que estão armazenados em um arquivo para um arquivo de configuração etc.

// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 "))
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}'))
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }')) // Stings devem usar "", nem mesmo scape (\'string\') funcionará!