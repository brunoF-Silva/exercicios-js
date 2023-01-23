// IIFE -> Immediately Invoked Function Expression
/*
Na hora da declaração as funções já são invocadas. Evitam tocar o escopo global pois tudo que é criado dentro daquela função será de escopo local daquela função. Se algo é compartilhado com toda a sua aplicação, principalmente algo que é variável, muitas pessoas/códigos podem manipular aquele valor variável e isso pode gerar bugs.
O escopo global (window) é compartilhado com todos os seus scripts que rodam no browser, devemos ter muito cuidado ao manipularmos coisas diretamente dentro do windows
*/
(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()