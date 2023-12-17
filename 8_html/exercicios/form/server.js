const express = require('express')
const app = express()
const bodyParser = require('body-parser') // Ao submeter os dados de um formulário, o bodyParser faz um parser no corpo da requisição, vai pegar esses dados e jogar dentro do request.body

app.use(bodyParser.urlencoded({ extended: true })) // urlencoded é o padrão em que os dados vem, a partir da submissão.

app.post('/usuarios', (req, resp) => { // Os dados vão na url, prefira o post
  console.log(req.body)
  // console.log(req.query) // Requisições do tipo get os dados vêm no querystring
  resp.send('<h1>Parabéns. Usuário Incluido!!!<h1>')
})

app.post('/usuarios/:id', (req, resp) => { //: cria um parâmetro
  console.log(req.params.id)
  console.log(req.body)
  resp.send('<h1>Parabéns. Usuário Alterado!!!<h1>')
})

app.listen(5500)