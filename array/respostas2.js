//1)
const cumprimentar = (nome) => console.log(`Olá, ${nome}!`);
// cumprimentar('Bruno')

//2)
const converterIdadeEmAnosParaDias = (anos) => anos * 365;
// console.log(converterIdadeEmAnosParaDias(70))

//3)
const calcularSalario = (horasTrabalhadas, salarioHora) =>
  `Salário igual a R$ ${(horasTrabalhadas * salarioHora)
    .toFixed(2)
    .replace(".", ",")}`;
// console.log(calcularSalario(150, 40.5))

//4)
function nomeDoMes(numero) {
  switch (numero) {
    case 1:
      return "janeiro";
      break;
    case 2:
      return "fevereiro";
      break;
    case 3:
      return "março";
    case 4:
      return "abril";
    case 5:
      return "maio";
    case 6:
      return "junho";
    case 7:
      return "julho";
    case 8:
      return "agosto";
    case 9:
      return "setembro";
    case 10:
      return "outubro";
    case 11:
      return "novembro";
    case 12:
      return "dezembro";
    default:
      return "valor fora do intervalo.";
  }
}
// console.log(nomeDoMes(5))

//5)
const maiorOuIgual = function (num1, num2) {
  if (num1 >= num2 && num1 === num2) return true;
  else return false;
};

// console.log(maiorOuIgual(5, 1))

//6)
function inversao(valor) {
  if (typeof valor == "number" && !Number.isNaN(valor) && valor !== 0) {
    return valor * -1;
  } else if (valor === true) {
    return false;
  } else if (valor === false) {
    return true;
  } else if (valor === 0) {
    return 0;
  } else {
    return (
      "booleano ou valor número esperados, mas o parâmetro é do tipo " +
      typeof valor
    );
  }
}

// console.log(inversao(7.5))

//7)
function estaEntre(numero, minimo, maximo, inclusivo = false) {
  if (typeof inclusivo == "boolean") {
    if (inclusivo != false) {
      if (numero >= minimo && numero <= maximo) return true;
      else return false;
    } else {
      if (numero > minimo && numero < maximo) return true;
      else return false;
    }
  }
}

// console.log(estaEntre(0, 0, 4, false))

// const oito = palavra => {
//     palavra = palavra || 'pessoa'
//     console.log(`Olá ${palavra}`)
// }

// oito()

//8)
function multiplicar(num1, num2) {
  if (
    Number.isInteger(num1) &&
    Number.isInteger(num2) &&
    num1 > -1 &&
    num2 > -1
  ) {
    if (num1 != 0) {
      const produto = Array.apply(null, { length: num1 })
        .map((_) => num2)
        .reduce(function (acumulador, atual) {
          return acumulador + atual;
        });

      return produto;
    } else {
      const produto = Array.apply(null, { length: num2 })
        .map((_) => num1)
        .reduce((acumulador, atual) => acumulador + atual);

      return produto;
    }
  } else {
    return -1;
  }
}

// console.log(multiplicar(8, 8))

//9
const repetir = (elemento, tamanho) =>
  Array.apply(null, { length: tamanho }).map((_) => elemento);

// console.log(repetir("elemento", 3))

//10 -- REFAZER COM REDUCE
function simboloMais(vezes) {
  let resultado = "";
  for (let i = 0; i < vezes; i++) {
    resultado = resultado.concat("+");
  }
  return resultado;
}

// console.log(simboloMais(5))

//11)
function receberPrimeiroEUltimoElemento(array) {
  let resultado = array.filter(function (_, indice) {
    return indice == 0;
  });
  resultado = resultado.concat(
    array.filter((_, indice) => indice == array.length - 1)
  );

  return resultado;
}
let vetorQuatroElementos = [0, 1, 2, 3];

// console.log(receberPrimeiroEUltimoElemento(vetorQuatroElementos))

Array.prototype.flatFilter = function (callback) {
  return Array.prototype.concat.apply([], this.map(callback));
};
const pegaPrimeiro = (array) => array.reduce((_, indice) => indice == 0);
const pegaUltimo = (array) =>
  array.reduce((_, (indice) => indice == array.length - 1));
// Tentar desenvolvê-la manipulando o objeto global

//12)
const pessoa = {
  nome: "Rebeca",
  idade: 2,
  peso: 13,
};

// const matriz = Object.entries(pessoa)

// for (let i = 0; i < matriz.length; i++) { // mostra chave-valor - length == altura
//     for( let j = 0; j < 2; j++){
//         console.log(matriz[i][j])
//     }
// }

// matriz.forEach((elemento, indice) => {
//     console.log('altura = ', indice, ' ', elemento[0], ' = ', elemento[1])
// })

function removePropriedade(obj, indesejado) {
  let atributos = Object.entries(obj).filter(
    (elemento) => elemento[0] != indesejado
  );
  const novoObj = {};
  atributos.forEach((elemento) => {
    novoObj[elemento[0]] = elemento[1];
  });

  return novoObj;
}

// console.log(pessoa)
// console.log(Object.is(removePropriedade(pessoa, 'peso'), pessoa))

//13)
const filtrarNumero = (array) => {
  const arrayFiltrada = array.filter((elemento) => !isNaN(elemento));
  return arrayFiltrada;
};

// console.log(filtrarNumero([0, 1, 2, 'três', 4, 5]))

//14)
const objetoParaArray = (objeto) => Object.entries(objeto);
// console.log(objetoParaArray(pessoa))

//15)
const indicePar = (elemento, indice) => indice % 2 === 0;
const numeroPar = (elemento) => elemento % 2 === 0;
const recebeSomenteOsParesDeIndicePares = (array) =>
  array.filter(indicePar).filter(numeroPar);

// console.log(recebeSomenteOsParesDeIndicePares([10, 70, 22, 43]))

//16)
function checarAnoBissexto(ano) {
  if (ano % 400 === 0) {
    return true;
  } else if (ano % 100 === 0) {
    return false;
  } else if (ano % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

// console.log(checarAnoBissexto(2400))

//17)
const somarNumeros = (array) =>
  array.reduce((acumulador, atual) => acumulador + atual);
// console.log(somarNumeros([10, 10, 10]))

//18)
const despesasTotais = (array) =>
  array.reduce((acumulador, atual) => acumulador.preco + atual.preco);

// console.log(despesasTotais([
//     {nome: "Jornal online", categoria: "Informação", preco: 89.99},
//     {nome: "Cinema", categoria: "Entretenimento", preco: 150}
// ]))

//19)
const calcularMedia = (array) =>
  (
    array.reduce(function (acumulador, atual) {
      return acumulador + atual;
    }) / array.length
  ).toFixed(2);

// console.log(calcularMedia([0, 10]))

//20)
const areaDoTriangulo = (base, altura) =>
  Math.round(((base * altura) / 2).toFixed(2));
// console.log(areaDoTriangulo(9.25, 13.1))

//21)
const menorNumero = (array) => {
  let swap = array[0];
  array.forEach((elemento) => {
    if (elemento < swap) {
      swap = elemento;
    }
  });
  return swap;
};
// console.log('resposta', menorNumero([10, 5, -64, -65]))

//22)
function funcaoDaSorte(chute) {
  const sorteado = Math.floor(Math.random() * 10 + 1);
  if (chute === sorteado)
    return "Parabéns! O número sorteado foi o " + sorteado;
  else return "Que pena! O número sorteado foi o " + sorteado;
}

// console.log(funcaoDaSorte(5))

//23)
function contarPalavra(str) {
  return str.split(" ").length;
  //return str.replace(/-/, ' ').trim().split(/\s+/g).length //Usando regex para diferenciar o hífen
}

let phrase = "It's a beautiful - night"; //Não posso usar forEach em strings
// console.log(contarPalavra(phrase))

//24)
const contaCaractere = (letra, array) => {
  let cont = 0;
  for (let i in array) {
    if (letra === array[i]) cont++;
  }
  return cont;
};

// console.log(contaCaractere('d', 'Padding and Diamounds'))

//25) // Tentar refazer usando filter
function buscarPalavrasSemelhantes(base, palavras) {
  const resultado = [];
  let cont = 0;
  for (let i in palavras) {
    for (let j = 0; j < palavras[i].length; j++) {
      if (palavras[i][j] == base[0]) {
        for (let k = 0; k < base.length; k++) {
          if (palavras[i][j + k] == base[k]) {
            cont++;
          }
          if (cont == --base.length) {
            resultado.push(palavras[i]);
          }
        }
        cont = 0;
      }
    }
  }

  return resultado;
}

const dicionario = ["contar", "contabeis", "contador", "Mathias"];
// let procurar = buscarPalavrasSemelhantes('cont', dicionario)
// console.log(procurar)

//26)
function removeVogais(frase) {
  const vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  let resultado = "";
  let cont = 0;

  Array.from(frase).forEach((letra) => {
    vogais.forEach((vogal) => {
      if (letra != vogal) {
        cont++;
      }
    });
    if (cont == 10) {
      resultado = resultado.concat(letra);
    }
    cont = 0;
  });

  return resultado;
}
// console.log(removeVogais("Cod3r"))
// console.log([..."Hello, World!"].forEach((e, i) => console.log(e)));
// console.log(Array.from("Hello, World!").forEach((e, i) => console.log(e)));

//27)
let joia = {
  tipo: "colar",
  pedra: "safira",
  preco: "8900,00",
};

const inverter = (obj) => {
  const objArray = Object.entries(obj);
  const novoObjeto = {};
  console.log(objArray);

  objArray.forEach((elemento) => {
    novoObjeto[elemento[1]] = elemento[0];
  });

  return novoObjeto;
};
// console.log(inverter(joia))

//28)
//map com filter e toString

function filtrarPorQuantidadeDeDigitos(array, nDigitos) {
  let solucao = array.filter((elemento) => {
    return elemento.toString().length === nDigitos;
  });
  return solucao;
}

// console.log(filtrarPorQuantidadeDeDigitos([123, 11, 158, 0], 3))

//29)
// Tentar com reduce
let maior = 0;
const maiorValor = (array) =>
  array.forEach((elemento) => {
    if (elemento >= maior) maior = elemento;
  });

const excluiValor = (array) => array.filter((elemento) => elemento != maior);

const segundoMaior = (array) => {
  maiorValor(array);
  const newVetor = excluiValor(array);
  maior = 0;
  maiorValor(newVetor);
  return maior;
};

// console.log(segundoMaior([155, 210, 158, 209]))

//30)
// Função factory, objeto, forEach e reduce
estudantes = {
  Joao: [8, 7.6, 8.9, 6],
  Mariana: [9, 6.6, 7.9, 8],
  Carla: [7, 7, 8, 9],
};
function recebeMelhoresEstudantes(estudantes) {
  let arrayDeMedias = Object.entries(estudantes).map((elemento) => {
    let mediasIndividuais = elemento.reduce((pessoa, arrayDeNotas) => {
      let soma = arrayDeNotas.reduce((notaAcumulada, notaAtual) => {
        return notaAcumulada + notaAtual;
      });

      return [pessoa, soma / arrayDeNotas.length];
    });
    return mediasIndividuais;
  });
  maiorNota = 0;
  meuIndice = 0;
  arrayDeMedias.forEach((estudante, indice) => {
    if (estudante[1] > maiorNota) {
      maiorNota = estudante[1];
      meuIndice = indice;
    }
  });

  return {
    nome: arrayDeMedias[meuIndice][0],
    media: arrayDeMedias[meuIndice][1],
  };
}

console.log(recebeMelhoresEstudantes(estudantes));