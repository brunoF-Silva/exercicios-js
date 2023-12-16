// Estratégia 1 para gerar valor padrão -- muito comum e ainda muito utilizado. //var de user logado min:9:27 a-91
function soma1(a, b, c) {
  a = a || 1;
  b = b || 1;
  c = c || 1;
  return a + b + c;
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0)); //Ops! 0 é falso.

// Estratégias 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
  a = a !== undefined ? a : 1;
  b = 1 in arguments ? b : 1; // se o elemento de índice 1 existir na array padrão de todas as funções que contém todos os argumentos passados chamado arguments, existir...
  c = isNaN(c) ? 1 : c; // Melhor maneira old school.
  return a + b + c;
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0));

// Valor padrão do ES2015 - Melhor maneira, mas serve apenas nos parâmtros.
function soma3(a = 1, b = 1, c = 1) {
  return a + b + c;
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0));
