//middleware pattern (chain of responsability)
const passo1 = (ctx, next) => {
  //essa é uma função middleware
  ctx.valor1 = "mid1";
  next();
};

const passo2 = (ctx, next) => {
  //ctx == contexto
  ctx.valor2 = "mid2";
  next();
};

const passo3 = (ctx) => (ctx.valor3 = "mid3");

const exec = (ctx, ...middlewares) => {
  //operador rest cria uma array de funções middleware
  const execPasso = (indice) => {
    middlewares &&
      indice < middlewares.length && //se middlewares está setado e... e: chama a função execPasso, mas se o indice for maior, pare!
      middlewares[indice](ctx, () => execPasso(indice + 1));
  };
  execPasso(0);
};

const ctx = {};
exec(ctx, passo1, passo2, passo3); // Posso suprimir e trocar passos
console.log(ctx);
