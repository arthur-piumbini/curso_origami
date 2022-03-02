var idade = 23
var idade2 = 2e5 // anda com a virgúla 
var idade3 = 2e-2 // anda com a virgúla

console.log(idade)
console.log(idade2)
console.log(idade3)

// ---------------------------------------------

var mult = 10 * 129
var divis = 10 / 2
var soma = 10 + 72
var subtr = 20 - 9
var sobraDivis = 10 % 3
var strNum = "100" * 23 // multiplica normal 
var err = "string aqui" * 10 // NaN
var peso = 80 + "kg" // soma e forma string

console.log(mult, divis, soma, subtr, sobraDivis, 
strNum, err, peso)

console.log(isNaN(mult))
console.log(isNaN(err))

//----------------------------------------------

var total1 = 20 + 5 * 2
var total2 = (20 + 5) * 2 // (matematica normal)
console.log(total1, total2)

var total3 = 10 + 5 * 2 / 2 + 20 // (prioriza *, /; e depois prioriza ordem)
console.log(total3)

//----------------------------------------------

var x = 2
console.log(x++) // 2
console.log(x) // 3

var y = 2
console.log(++y) // 3

const z = 2
//console.log(z++) // erro
//console.log(++z) // erro

//---------------------------------------------

var num = "2"
console.log(num + 5) // 25 (string)
console.log(+num + 5) // 7 (number)
console.log(-num + 5) // 3 (number)

var numero = '80'
var unidade = 'kg'
var peso = +numero / 2 + unidade
console.log(peso)