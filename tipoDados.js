var nome = "arthur"
var sobrenome = "almeida"
var idade = 74
var time = null
var simbolo = Symbol()
var formado = true

console.log(typeof nome)
console.log(typeof idade)
console.log(typeof time)
console.log(typeof simbolo)
console.log(typeof formado)
console.log(typeof naoexiste)

var nomeCompleto = nome + " " + sobrenome

var descricao = "O " + nome + " tem " + idade + " anos."
console.log(typeof descricao) // string

console.log(nomeCompleto)
console.log(descricao)

var ano = 2005
var dia = 02
console.log(ano + dia)

var gols = 1000
console.log(`romario fez ${gols} gols, e é "ruim".`)
console.log("romario fez " + gols + " gols, e é \"ruim\".")