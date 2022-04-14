function areaQuadrado(lado) {
    return lado * lado
}

console.log(areaQuadrado(4))

function perimetroQuadrado(lados) {
    console.log(lados + lados + lados + lados)
}

console.log(perimetroQuadrado(3))

function pi() {
    return 3.14
}

var total = 5 * pi()
console.log(total)

function imc(peso, altura) {
    var imc = peso / (altura ** 2)
    return imc
}
console.log(imc(75, 1.8))

function corFav(cor) {
    if(cor === "verde"){
        console.log("vc gosta de mato")
    }else if(cor === "azul"){
        console.log("vc gosta do céu")
    }else if(cor === "rosa"){
        console.log("vc gosta de peixe")
    }else if(cor === "amarelo"){
        console.log("vc gosta do sol")
    }else if(cor === "preto"){
        console.log("vc gosta de tv")
    }else if(cor === "vermelho"){
        console.log("vc gosta de fogo")
    }else{
        console.log("vc n gosta de nada")
    }
}
console.log(corFav("verde"))

addEventListener('click', function(){ console.log("oi")}) // quando clicar em qlqr lugar ela é chamada

function terceiraIdade(idade){
    if(typeof idade === "string" || typeof idade === "boolean"){
        console.log("fale a sua idade em números")
    }else{
        if(idade >= 60){
            return true
        }else{
            return false
        }
    }
}

function faltaVisitar(paisesVisitados){
    var totalPaises = 193
    if(paisesVisitados < totalPaises){
      console.log("Falta visitar "+(totalPaises - paisesVisitados)+" países ainda")
    }else if(paisesVisitados === totalPaises){
        console.log("Você já visitou todos os "+totalPaises +" países")
    }else{
        console.log("Você já visitou mais países do que os que existem nesse planeta, tem algo errado kkkk")
    }
}