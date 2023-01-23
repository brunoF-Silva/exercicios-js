// 01)
const operacoes = function (op1, op2) {
    console.log(op1, '+', op2, '=', op1 + op2, '.')
    console.log(op1 + ' - ' + op2 + '=', op1 - op2)
    console.log(`${op1} * ${op2} = ${op1 * op2}`)
    console.log(`${op1} / ${op2} = ${op1 / op2}`)
}
// console.log(operacoes(5, 5))

// 02)
function tipoTriangulo(l1, l2, l3) {
    if (l1 == l2 && l1 == l3) {
        console.log('Equilátero.')
    } else if (l1 != l2 && l1 != l3 && l2 != l3) {
        console.log('Escaleno.')
    } else {
        console.log('Isósceles.')
    }
}
//console.log(tipoTriangulo(3, 7, 5))

// 03)
const potenciacao = (a, b) => console.log(a ** b)
//potenciacao(2, 4)

// 04)
const divisao = (dividendo, divisor) => {
    const resto = dividendo % divisor
    console.log(`${dividendo} / ${divisor} = ${(dividendo / divisor).toFixed(2)} com resto ${resto}`)
}

// divisao(15, 5)

// 05)
function formataDinheiro(decimal) {
    decimal = decimal.toFixed(2)
    decimal = decimal.toString().replace(".", ",")

    console.log(`R$${decimal}`)
}

// formataDinheiro(0.30000000000000004);

//06)
const jurosSimples = (capital, taxa, tempo) => (capital * taxa / 100 * tempo).toFixed(2)
const jurosCompostos = (capital, taxa, tempo) => (capital * (1 + taxa / 100) * tempo).toFixed(2)

const jS = jurosSimples(100, 10, 2)
const jC = jurosCompostos(100, 10, 2)
// console.log("O montante de juros simples equivale a R$" + jS + " e o montante de juros compostos equivale a R$" + jC )

//07)
const delta = (a, b, c) => Math.sqrt(Math.pow(b, 2) - 4 * a * c)

function bhaskara (a, b  = 0, c = 0) {
    if (delta(a, b, c) > -1) {
        let raiz = [2]

        raiz[0] = ((-b + delta(a, b, c)) /  (2 * a)).toFixed(2)

        raiz[1] = ((-b - delta(a, b, c)) / (2 * a)).toFixed(2)

        return raiz
    } else {
        return 'Delta é negativo'
    }
}
// let resp = bhaskara(3, -2, -8)
// let resp1 = bhaskara(1, -3, 5)
// let resp2 = bhaskara(1, 0, -1)
// console.log(resp, resp1, resp2)

//08)
const transformaInteiro = temporada => {
    const pontuacao = temporada.split(" ")

    let pontuacaoInt = []

    for (let i in pontuacao) {
        pontuacaoInt.push(Number(pontuacao[i]))
    }
    console.log(pontuacaoInt.lenght)
    return pontuacaoInt
}

const score = function (temporada) {
    temporada = transformaInteiro(temporada)

    let pontuacao = temporada[0]
    let cont = 0
    let pior = 0

    for (let i in temporada) {
        if (temporada[i] > pontuacao) {
            pontuacao = temporada[i]
            cont++
        }
    }
    pontuacao = temporada[0]

    for (let j = 0; j < temporada.length; j++) {
        if (temporada[j] < pontuacao ) {
            pontuacao =  temporada[j]
            pior = j
        }
    }
    console.log(pontuacao)
    return [cont, pior]
}

// const desempenho = score("10 20 20 8 25 3 0 30 1")
// console.log(`Pedro superou sua melhor pontuação ${desempenho[0]} vezes e seu pior desempenho aconteceu durante o jogo de número ${desempenho[1] + 1}`)

//09
// Função factory -- retorna a instância de um objeto:
const pessoa = (nome, nota) => {
    return {
        nome,
        nota,
        colegio: 'CEFF'
    }
}
const pessoa1 = pessoa('Renata', 36)
// pessoa1.colegio = 'FF'
// console.log(pessoa1)

// Função construtora -- Retorna a instância de uma função equivalente a um obj.
function aluno(nome, nota) {
    this.nome = nome
    this.nota = nota
    this.colegio = 'CEFC'
}
const aluno1 = new aluno('Luiz', 37)
// aluno1.colegio = 'FC'
// console.log(aluno1)

function situacaoFinal(estudante) {
    if (estudante.nota == 0)
        estudante.nota = Math.random * (100 - 0) + 0

    if (estudante.nota >= 37) {
        for(let i = 0; i < 4; i++) {
            if ((estudante.nota + i )% 5 == 0) {
                estudante.nota += i
                break
            }
        }
    }

    if (estudante.nota >= 40)
        console.log(`O aluno ${estudante.nome} foi aprovado com ${estudante.nota}`)
    else
        console.log(`O aluno ${estudante.nome} foi reprovado com nota ${estudante.nota}`)
}

// situacaoFinal(pessoa1)

//10)
const verificaInt = num => Number.isInteger(num)

const multiploTres = num => {
    if (verificaInt(num)) {
        if (num % 3 == 0)
            return true
        else
            return false
    } else {
        console.log('Não era inteiro!')
    }
}

// console.log(multiploTres(2))


//11)
function anoBissexto(ano) {
    let cont = 0
    if (ano % 4 == 0) {
        while (cont * 4 * 25 <= ano || cont * 4 * 50 <= ano || cont * 4 * 75 <= ano  || cont * 4 * 100 <= ano) {
            if (cont * 4 * 25 == ano || cont * 4 * 50 == ano || cont * 4 * 75 == ano ) {
                console.log('O ano '+ ano + ' não é Bissexto.')
                return false
            } else if (cont * 4 * 100 == ano) {
                console.log('O ano ' + ano + ' é bissexto.')
                return true
            }
            cont++
        }

        console.log("É um ano bissexto!!!")
        return true
    } else {
        console.log(ano + ' não bissexto.')
        return false
    }
}

// anoBissexto(804)


//12)
const fatorial = num => {
    if (num == 0) {
        console.log(1)
    } else {
        let cont = 1, num2 = num, final = 1
        while (num2 >= 1) {
            num2 = num
            num2 -= cont
            final *= num2 + 1
            cont++
        }
        return final
    }
}
// console.log(fatorial(0))

//13)
function diaUtil (dia) {
    switch (dia) {
        case 1:
            console.log('Domingo é fim de semana.')
            break
        case 2:
            console.log('Segunda é dia útil.')
            break
        case 3:
            console.log('Terça é dia útil.')
            break
        case 4:
        case 5:
        case 6:
            console.log('É dia útil.')
            break
        case 7:
            console.log('Sábado é fim de semana.')
            break
        default:
            console.log(`${dia} não é um número válido!`)
    }
}

// console.log(diaUtil(5))

// 14)
function feira (fruta) {
    fruta = fruta.toLowerCase()
    switch (fruta) {
        case "maça":
            console.log('Não vendemos essa fruta aqui.')
            break
        case "kiwi":
            console.log("Estamos com escasses de kiwis.")
            break
        case "melancia":
            console.log("Aqui está, são 3 reais o quilo.")
            break
        default:
            console.log("Erro! Fruta não encontrada.")
    }
}

// feira('MELANCIA')

// 15) 
function whichCar (wish) {
    wish = wish.toLowerCase()
    switch (wish) {
        case 'hash':
            console.log("Compra efetuada com sucesso.")
            break
        case 'sedan':
        case 'motocicletas':
        case 'caminhonetes':
            console.log("Tem certeza que não prefere outro modelo?")
        break
        default:
            console.log("Não trabalhamos com este tipo de automóvel aqui.")
    }
}

// console.log(whichCar('skate'))

// 16)
function calculadora (op1, sinal, op2) {
    switch (sinal) {
        default:
            console.log('Símbolo não reconhecido!')
            break
        case '+':
            return op1 + op2
        case '-':
            return op1 - op2
        case '*':
            return op1 * op2
        case '/':
            return (op1 / op2).toFixed(2)
    }
}

// console.log(calculadora(5, "=", 6));

// 17)

function aumento (plano, salario) {
    plano = plano.toLowerCase()
    switch (plano) {
        case 'a':
            console.log(`Seu novo salário é = R$${salario *=  1.1}`)
            break
        case 'b':
            console.log("Seu novo salário é = R$", salario *= 1.15, ".")
            break
        case 'c':
            console.log("Plano Premiun reconhecido! Novo salário = R$"+ (salario *= 1.2)+'.')
            break
        default:
            console.log("Plano inválido!")
    }
}

// aumento('d', 1000)


// 18)

function extenso (numero) {
    switch (numero) {
        case 1:
            console.log('Um')
            break
        case 0:
            console.log('Zero')
            break
            case 2:
            console.log('Dois')
            break
        case 3:
            console.log('Três')
            break
        case 4:
            console.log('Quatro')
            break
        case 5:
            console.log('Cinco')
            break
        case 6:
            console.log('Seis')
            break
        case 7:
            console.log('Sete')
            break
        case 8:
            console.log('Oito')
            break
        case 9:
            console.log('Nove')
            break
        case 10:
            console.log('Dez')
            break
        default:
            console.log('Número fora do intervalo.')
    }
}
// extenso(1)


// 19)

const transformaReal = num => num = num.toFixed(2).toString().replace('.',',' )
const traduzCardapio = (codigo, qtd) => {
    switch (codigo) {
        case 100:
            console.log(`Pedido: ${qtd}x Cachorro Quente. Valor: R$${transformaReal(qtd * 3)}`)
            break
        case 200:
            console.log(`Pedido: ${qtd}x Hambúrger Simples. Valor: R$${transformaReal(qtd * 4)}`)
            break
        case 300:
            console.log(`Pedido: ${qtd}x Cheeseburger. Valor: R$${transformaReal(qtd * 5.50)}`)
            break
        case 400:
            console.log(`Pedido: ${qtd}x Bauru. Valor: R$${transformaReal(qtd * 7.50)}`)
            break
        case 500:
            console.log(`Pedido: ${qtd}x Refrigerante. Valor: R$${transformaReal(qtd*3.50)}`)
            break
        case 600:
            console.log(`Pedido: ${qtd}x Suco. Valor: R$${transformaReal(qtd * 2.50)}`)
            break
        default:
            console.log("Produto inexistente.")
    }

}

// traduzCardapio(900, 2)

// 20)

function saque (valor) {
    const cedulas = [1, 5, 10, 50, 100]
    let novoValor = 0
    let qtd = []

    if (Number.isInteger(valor)) {
        for (let i = cedulas.length-1; i >= 0; i--) {
            if (cedulas[i] + novoValor <= valor) {
                qtd.push(i)
                novoValor += cedulas[i]
                i = cedulas.length
            }
        }
        console.log(qtd)
    }
    qtd.sort()
    console.log(qtd)
    let cont = 1
    for (let i in qtd) {
        if (qtd[i] == qtd[++i] && ++i <= qtd.length) {
            cont++
        } else {
            console.log(`${cont} nota(s) de ${cedulas[qtd[--i]]}`)
            cont = 1
        }
    }
}

// saque(1)