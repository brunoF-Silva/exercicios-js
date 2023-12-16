// Ideia: extrair todas as notas dos alunos independente das turmas
// Ideia do flatMap é "ter uma matriz e transformá-la em uma array"
const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
    }]
    }, {
        nome: 'Turma M2',
        alunos: [{
            nome: 'Rebeca',
            nota: 8.9
        }, {
            nome: 'Roberto',
            nota: 7.3
        }]
    }]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno) // map, aqui, gera uma única array com a nota dos alunos correspondentes para cada vez que map a chama para cada elemento "turma" contido em escola.

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

// flatMap:
console.log([].concat([ 8.1, 9.3], [ 8.9, 7.3 ]))

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)