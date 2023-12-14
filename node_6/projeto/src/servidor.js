//Vamos configurar o u express que será o nosso servidor/framework web para criação dos nossos webservices

const porta = 3003;

const express = require("express");
// Instancia e atribui o resultado para app e encima de app começamos a colocar nossos serviços


const app = express();
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true }))

// app.get("/produtos", (req, res, next) => {
//   console.log("Middleware 1...");
//   next();
// });
// Get é uma forma de requisição. Passamos como resposta para uma requisição encima de produtos uma função middleware

app.get("/produtos", (req, res, next) => {
  res.send(bancoDeDados.getProdutos());
});

app.get('/produtos/:id', (req, res, next) => {
  res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(JSON.stringify(produto)) // JSON
})

app.put('/produtos/:id', (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    id: req.params.id,
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto) // JSON
})

app.delete('/produtos/:id', (req, res, next) => {
  const produto = bancoDeDados.excluirProduto(req.param.id)
  res.send(produto) //JSON
})

// A porta que minha aplicação vai ficar escutando
app.listen(porta, () => {
  console.log(`Servidor executando na porta ${porta}`); // Callback para mostra que conseguiu startar a aplicação
});
