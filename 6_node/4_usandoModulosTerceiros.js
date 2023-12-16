/*
Se eu importar o módulo para uma pasta, as subpastas dessa pasta poderão utilizá-lo
Para instalar módulos de terceiros no local desejado: npm i loadash
Para instalar de forma global: sudo (linux) npm i -g nodemon

nodemon é utilizado no prompt e permite disparar o node a partir da linha de comando,rodando um script em tempo real, restartando os valores no prompt de maneira automática assim que se salva o arquivo. Para utilizá-lo pelo terminal entre na pasta e utilize o comando nodemon nome_do_modulo.js e ele o rodará.
O comando 'rs' restarta o código.
*/

const _ = require("lodash"); // Não usamos caminho relativo pois por padrão o node já procura dentro de node_modules por um arquivo index.js que chama lodash
setInterval(() => console.log(_.random(20, 30)), 2000);
