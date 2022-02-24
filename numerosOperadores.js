var idade = 23
var idade2 = 2e5 // anda com a virgúla 
var idade3 = 2e-2 // anda com a virgúla

console.log(idade)
console.log(idade2)
console.log(idade3)

var mult = 10*129
var divis = 10/2
var soma = 10+72
var subtr = 20-9
var sobraDivis = 10%3
var strNum = "100" * 23 // multiplica normal 
var err = "string aqui" * 10 // NaN

console.log(mult, divis, soma, subtr, sobraDivis, strNum, err)

console.log(isNaN(mult))
console.log(isNaN(err))