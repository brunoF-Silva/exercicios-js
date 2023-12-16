const escola = "Cod3r";

console.log(escola.charAt(4));
console.log(escola.charAt(5));
console.log(escola.charCodeAt(3));
console.log(escola.indexOf("3"));

console.log(escola.substring(1));
console.log(escola.substring(0, 3)); // adicionei a palavra escola pois acredito que estava faltando.

console.log("Escola ".concat(escola).concat("!"));
console.log("Escola " + escola + "!");
console.log(escola.replace(3, "e"));

console.log("Ana,Maria,Pedro".split(","));

/*
A. 43 min. 8.58 -- Fala brevemente sobre expressões regulares. PESQUISAR -- REGEX;
.split() e .replace podem usar regex.
*/
console.log(escola.replace(/\d/, "e")); // todos os dígitos por 'e'.
console.log(escola.replace(/\w/g, "e")); // todos os dígitos e letras por 'e'.
