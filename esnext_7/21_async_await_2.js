/*
Uma função async é só outra maneira de escrever uma assíncrona
ela também retorna promise
return funciona como resolve()
jogar uma exceção funciona como reject
*/

function gerarNumerosEntre(min, max, numerosProibidos) {
  if (min > max) [max, min] = [min, max];
  return new Promise((resolve, reject) => {
    const fator = max - min + 1;
    const aleatorio = parseInt(Math.random() * fator) + min;
    if(numerosProibidos.includes(aleatorio)){
      reject('Número repetido!')
    } else {
      resolve(aleatorio);
    }
  });
}

async function gerarMegaSena(qtdNumeros, tentativas = 1){
  try {
    const numeros = []
    for(let _ of Array(qtdNumeros).fill()) {
      numeros.push(await gerarNumerosEntre(1, 60, numeros)) // await sempre vem antes da função que retorna uma promise
    }
    return numeros
  } catch(e) {
    //throw "Que chato!!!" // o que cai dentro do cath não é mais o valor do reject, mas sim o do throw
    // A forma que você tem para rejeitar uma promise dentro de uma função async é gerando uma exceção
    // a forma que você tem pra resolver uma promeça dentro de uma função
    // async é simplesmente retornando o valor
    if(tentativas > 10) {
      throw "Não deu certo!"
    } else {
      return gerarMegaSena(qtdNumeros, tentativas + 1)
    }
  }
}

gerarMegaSena(15)
  .then(console.log)
  .catch(console.log)