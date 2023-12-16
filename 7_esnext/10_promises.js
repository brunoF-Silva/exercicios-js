function falarDepoisDe(segundos, frase) {
  // resolve e reject são funções que serão chamadas depois que um evento assíncrono ocorrer
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(frase); // se resolve for executada o fluxo é redirecionado para o then passando seu argumento para a funão dentro de then, que é executada.
    }, segundos * 1000);
  });
}

falarDepoisDe(3, "Que legal!")
  .then((frase) => frase.concat("?!?")) // podemos concatenar quantos thens quisermos
  .then((outraFrase) => console.log(outraFrase))
  .catch((e) => console.log(e));
