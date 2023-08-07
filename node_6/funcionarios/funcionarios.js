// Vamos acessar o seguinte endereço: https://files.cod3r.com.br/curso-js/funcionarios.json

const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
// Axios é um client http, ele faz requisições para obter informações de algo que está remoto.
// Para obter o arquivo funcionarios.json que está remoto no servidor da Cod3r utilizaremos o axios
const axios = require("axios");

axios.get(url).then((response) => {
  const funcionarios = response.data; // Dentro do atributo data dessa resposta temos a lista de funcionários
  const pais = (funcionario) => funcionario.pais == "China";

  const genero = (funcionario) => funcionario.genero == "F";

  const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual;
  };

  console.log(funcionarios.filter(pais).filter(genero).reduce(menorSalario));
});
// get obtem uma informação do servidor
// Quando essa requisição retornar chamamos o método then
