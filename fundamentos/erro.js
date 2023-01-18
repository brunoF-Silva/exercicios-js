// Try é um bloco que eu julgo poder gerar algum tipo de erro. E.g: fiz uma chamada Ajax e o seviço tá fora, deu erro 500
// Podemos tratar um erro em catch, relançar um objeto, "lançar" (throw) valores, objetos com mensagens tratadas
// Finally é um bloco de código que será executado tanto se houver erro, quanto se não ouver erro!
/*
Evitar mostrar mensagens de infraestrutura, grandes stacks, etc. Optar por mensagens simples/genéricas que respeite o idioma nativo. Mostrar um hash, criado no próprio log do sistema que identifique tal erro e a partir dele o usuário será capaz de descobrir a fundo as causas da falha é uma boa prática.
*/
function tratarErroELancar(erro) {
  // throw new Erro('...')
  // throw 10
  // throw true
  // throw 'mensagem'
  throw {
    nome: erro.name,
    msg: erro.message,
    date: new Date(),
  };
}

function imprimirNomeGritando(obg) {
  try {
    console.log(obj.name.toUpperCase) + "!!!";
  } catch (e) {
    tratarErroELancar(e);
  } finally {
    console.log("final");
  }
}

const obj = { nome: "Roberto" };

imprimirNomeGritando(obj);

// Ou tratamos o erro ou o programa para antes de terminar seu algoritmo.
