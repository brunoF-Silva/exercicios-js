const path = require('path')
const fs = require('fs')


function lerArquivo(caminho){
  return new Promise(function (resolve){
    
    fs.readFile(caminho, (_, conteudo) => {
      resolve(conteudo.toString())
    })
    console.log('Depois de ler')
  })
}

const caminho = path.join(__dirname, 'dados.txt')

lerArquivo(caminho)
  .then(texto => texto.replace(/\r/g, '')) // Retirar o retorno de Carro
  .then(conteudo => conteudo.split('\n')) // Retorna uma array
  .then(linhas => linhas.join(',')) // Retorna uma string separada por ,
  .then(conteudo => `O valor final é: ${conteudo}`)
  .then(console.log)
