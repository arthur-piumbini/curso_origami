var graduado = false

if(graduado){ // se for true vai dar a primeira condição 
    console.log('é graduado')
    var x = 10
} else{
    console.log('não é graduado')
}

console.log(x)

var graduado2 = true

if(graduado2){ // se for true vai dar a primeira condição 
    console.log('é graduado')
    var y = 10
} else{
    console.log('não é graduado')
}

console.log(y) 

if(graduado && graduado2){
    console.log("dois graduados")
} else if(graduado){
    console.log("só o primeiro é graduado")
} else if(graduado2){
    console.log("só o segundo é graduado")
} else{
    console.log("nenhum deles é graduado")
}

//----------------------------------------------------

var nome = "arthur"

if(nome){ 
    console.log(nome)
} else{
    console.log("nome não existe")
}

var nome2 = "" 

if(nome2){              // outras possibilidades de se dar false
    console.log(nome2)
} else{
    console.log("nome não existe")
}

var nome3 = !"" // true

if(nome3){              
    console.log(nome3)
} else{
    console.log("nome não existe")
}

var nome4 = !!"" // true

if(nome4){              
    console.log(nome4)
} else{
    console.log("nome não existe")
}

console.log(!!null) // mostra se é true ou false

//---------------------------------------------------------------------

if(10 > 9){
    console.log("10 é maior")
} else{
    console.log("10 é menor")
}

if(10 > 11){
    console.log("10 é maior")
} else{
    console.log("10 é menor")
}

if(10 >= 10){
    console.log("10 é maior ou igual")
} else{
    console.log("10 é menor")
}

//----------------------------------------------------------------------

var x = 10

console.log(x == 10)
console.log(x == "10")
console.log(x === 10)
console.log(x === "10")
console.log(x !== 10)

//======================================================================

var art = false
var hur = true
console.log(art && hur)
console.log(hur && hur) // retorna o primeiro falso
console.log(art && art)

console.log((5>4)&&(4>5))
console.log((5>4)&&(6>5))

console.log(art || hur)
console.log(art || art) // retorna o primeiro true
console.log(hur || hur)

console.log((5-2)&&(5-" ")&&(5-2)) // retorna o ultimo true
// " " conta como zero

//======================================================================
 
var corFavorita = "azul"

switch(corFavorita){
  case "azul" : 
    console.log("azul é bonito")    
    break
  case "amarelo" :
    console.log("amarelo é bonito")
    break
  case "verde" :
    console.log("verde é bonito")  
}