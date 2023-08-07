//Vamos configurar o u express que será o nosso servidor/framework web para criação dos nossos webservices

const porta = 3003;

const express = require("express");
// Instancia e atribui o resultado para app e encima de app começamos a colocar nossos serviços
const app = express();

app.get("/produtos", (req, res, next) => {
  console.log("Middleware 1...");
  next();
});
// Get é uma forma de requisição. Passamos como resposta para uma requisição encima de produtos uma função middleware
app.get("/produtos", (req, res, next) => {
  console.log("Middleware 0...");
  res.send({ nome: "Notebook", preco: 123.45 }); // Converte automaticamente para JSON
});

// A porta que minha aplicação vai ficar escutando
app.listen(porta, () => {
  console.log(`Servidor executando na porta ${porta}`); // Callback para mostra que conseguiu startar a aplicação
});
