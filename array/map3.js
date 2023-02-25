// callback aqui é o nome generico de qualquer função que, um vez que estamos simulando map, tera seus valores automaticamente setados e, dado um array, gerará uma nova array com os valores modificados. Isso para cada elemento de tal array
Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) { // adiciona dentro do novo array o elemento transformado a partir da chamada dessa callback
        newArray.push(callback(this[i], i, this))

    }
    return newArray
}

const carrinho = [
    '{ "nome": "borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }',
];

// Retornar uma array apenas com os preços

const paraObjeto = (json) => JSON.parse(json);
const apenasPreco = (produto) => produto.preco;

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco);
console.log(resultado);
